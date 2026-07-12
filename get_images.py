import json
import urllib.request
import urllib.parse
import ssl
import time

ssl._create_default_https_context = ssl._create_unverified_context

aircrafts = {
    "a220-family": "Airbus A220",
    "a300-family": "Airbus A300",
    "a310-family": "Airbus A310",
    "a318": "Airbus A318",
    "a319": "Airbus A319",
    "a320": "Airbus A320 family",
    "a321": "Airbus A321",
    "a319neo": "Airbus A319neo",
    "a320neo": "Airbus A320neo family",
    "a321neo": "Airbus A321neo",
    "a330-family": "Airbus A330",
    "a330neo-family": "Airbus A330neo",
    "a340-family": "Airbus A340",
    "a350-family": "Airbus A350",
    "a380": "Airbus A380",
    "atr-family": "ATR 72",
    "b707-family": "Boeing 707",
    "b717": "Boeing 717",
    "b727-family": "Boeing 727",
    "b737-family": "Boeing 737",
    "b747-family": "Boeing 747",
    "b757-family": "Boeing 757",
    "b767-family": "Boeing 767",
    "b777-family": "Boeing 777",
    "b787-family": "Boeing 787 Dreamliner",
    "crj-family": "Bombardier CRJ",
    "dash-8-family": "De Havilland Canada Dash 8",
    "erj-family": "Embraer ERJ family",
    "e-jet-family": "Embraer E-Jet family",
    "e-jet-e2-family": "Embraer E-Jet E2 family"
}

urls = {}
for id, title in aircrafts.items():
    try:
        url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=pageimages&format=json&pithumbsize=400"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Aerotype Bot)'})
        response = urllib.request.urlopen(req).read().decode('utf-8')
        data = json.loads(response)
        pages = data['query']['pages']
        for page_id in pages:
            if 'thumbnail' in pages[page_id]:
                urls[id] = pages[page_id]['thumbnail']['source']
            else:
                urls[id] = ""
    except Exception as e:
        print(f"Error fetching {title}: {e}")
    time.sleep(0.5)

print(json.dumps(urls, indent=2))
