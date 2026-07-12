const fs = require('fs');
const path = require('path');

const wikiTitles = {
    "a300-family": "Airbus A300",
    "a310-family": "Airbus A310",
    "a318": "Airbus A318",
    "a319": "Airbus A319",
    "a321": "Airbus A321",
    "a321neo": "Airbus A321neo",
    "a330-family": "Airbus A330",
    "a330neo-family": "Airbus A330neo",
    "a340-family": "Airbus A340",
    "a350-family": "Airbus A350",
    "a380": "Airbus A380",
    "b717": "Boeing 717",
    "b727-family": "Boeing 727",
    "b737-original": "Boeing 737",
    "b737-classic": "Boeing 737 Classic",
    "b737-ng": "Boeing 737 Next Generation",
    "b747-family": "Boeing 747",
    "b757-family": "Boeing 757",
    "b767-family": "Boeing 767",
    "b777-family": "Boeing 777",
    "b777x-family": "Boeing 777X",
    "b787-family": "Boeing 787 Dreamliner",
    "crj-family": "Bombardier CRJ",
    "dash-8-family": "De Havilland Canada Dash 8",
    "erj-family": "Embraer ERJ family",
    "e-jet-family": "Embraer E-Jet family",
    "e-jet-e2-family": "Embraer E-Jet E2 family",
    "md-11-family": "McDonnell Douglas MD-11",
    "md-80-family": "McDonnell Douglas MD-80"
};

const userAdded = [
    "a220-family",
    "a320",
    "a319neo",
    "a320neo",
    "atr-family",
    "b707-family",
    "b737-max"
];

const { execSync } = require('child_process');

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function curlDownload(url, destPath) {
    try {
        const escapedUrl = url.replace(/"/g, '\\"');
        const escapedDest = destPath.replace(/"/g, '\\"');
        execSync(`curl -L -s -H "User-Agent: AerotypeProject/1.0 (contact: ihanshim@example.com)" -o "${escapedDest}" "${escapedUrl}"`);
        if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
            return true;
        }
    } catch (e) {
        console.error(`  Curl download failed: ${e.message}`);
    }
    return false;
}

async function getWikipediaImageUrl(title) {
    try {
        const queryUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=600`;
        const output = execSync(`curl -L -s -H "User-Agent: AerotypeProject/1.0 (contact: ihanshim@example.com)" "${queryUrl}"`).toString();
        const data = JSON.parse(output);
        const pages = data.query.pages;
        for (const pageId in pages) {
            if (pages[pageId].thumbnail && pages[pageId].thumbnail.source) {
                return pages[pageId].thumbnail.source;
            }
        }
    } catch (e) {
        console.error(`Error querying Wikipedia API for ${title}:`, e.message);
    }
    return null;
}

async function main() {
    const aircraftsFilePath = path.join(__dirname, 'data', 'aircrafts.js');
    let content = fs.readFileSync(aircraftsFilePath, 'utf8');

    // Create images folder if not exists
    const imagesDir = path.join(__dirname, 'images');
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir);
    }

    for (const [id, title] of Object.entries(wikiTitles)) {
        console.log(`Processing aircraft: ${id} (${title})...`);

        // Check current URL in content
        const regex = new RegExp(`id:\\s*"${id}",\\s*\\n\\s*imageUrl:\\s*"([^"]+)"`);
        const match = content.match(regex);
        if (!match) {
            console.log(`  Skipping: could not find aircraft ID ${id} in aircrafts.js`);
            continue;
        }

        const currentUrl = match[1];
        if (currentUrl.startsWith('images/')) {
            console.log(`  Skipping: already uses local image "${currentUrl}"`);
            continue;
        }

        let downloaded = false;
        let ext = '.jpg';
        let imageUrlToDownload = currentUrl;

        // Try downloading existing URL first
        try {
            const parsedUrl = new URL(currentUrl);
            const pathname = parsedUrl.pathname;
            const originalExt = path.extname(pathname);
            if (originalExt) {
                ext = originalExt.toLowerCase();
            }
        } catch (e) {
            // URL might be broken, let's query wikipedia api
            imageUrlToDownload = null;
        }

        const localFilename = `${id}${ext}`;
        const localDestPath = path.join(imagesDir, localFilename);

        if (imageUrlToDownload) {
            console.log(`  Downloading existing URL: ${imageUrlToDownload}`);
            if (curlDownload(imageUrlToDownload, localDestPath)) {
                downloaded = true;
                console.log(`  Successfully downloaded directly!`);
            } else {
                console.log(`  Direct download failed. Querying Wikipedia API...`);
            }
        }

        // If direct download failed, query Wikipedia API for a fresh URL
        if (!downloaded) {
            await delay(1000); // Respect rate limit
            const freshUrl = await getWikipediaImageUrl(title);
            if (freshUrl) {
                console.log(`  Found fresh URL: ${freshUrl}`);
                try {
                    const parsedUrl = new URL(freshUrl);
                    const originalExt = path.extname(parsedUrl.pathname);
                    if (originalExt) {
                        ext = originalExt.toLowerCase();
                    }
                    const newFilename = `${id}${ext}`;
                    const newDestPath = path.join(imagesDir, newFilename);

                    if (curlDownload(freshUrl, newDestPath)) {
                        downloaded = true;
                        console.log(`  Successfully downloaded from Wikipedia API!`);
                    } else {
                        console.log(`  Failed to download fresh URL.`);
                    }
                } catch (e) {
                    console.log(`  Error downloading fresh URL: ${e.message}`);
                }
            } else {
                console.log(`  Could not find image on Wikipedia for title "${title}"`);
            }
        }

        // Update the file content if downloaded successfully
        if (downloaded) {
            const relativePath = `images/${id}${ext}`;
            const targetRegex = new RegExp(`(id:\\s*"${id}",\\s*\\n\\s*imageUrl:\\s*")[^"]+(")`);
            content = content.replace(targetRegex, `$1${relativePath}$2`);
            console.log(`  Updated aircrafts.js imageUrl to: "${relativePath}"`);
        } else {
            console.warn(`  [WARNING] Failed to fetch any image for ${id}`);
        }

        // Wait a bit to avoid overwhelming Wikipedia servers
        await delay(1000);
    }

    // Write back updated file content
    fs.writeFileSync(aircraftsFilePath, content, 'utf8');
    console.log('\nProcessing complete! All images updated in data/aircrafts.js');
}

main().catch(err => {
    console.error('Fatal error in script:', err);
});
