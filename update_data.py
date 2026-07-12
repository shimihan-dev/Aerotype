import re
import os

images = {
    "a220-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Airbus_A220-300.jpg/500px-Airbus_A220-300.jpg",
    "a300-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Iran_Air_Airbus_A300-605R%3B_EP-IBD%40FRA%3B06.07.2011_603ks_%285915220574%29.jpg/500px-Iran_Air_Airbus_A300-605R%3B_EP-IBD%40FRA%3B06.07.2011_603ks_%285915220574%29.jpg",
    "a310-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Air_Transat_A310_%28C-GTSF%29_%40_LHR%2C_Aug_2009.jpg/500px-Air_Transat_A310_%28C-GTSF%29_%40_LHR%2C_Aug_2009.jpg",
    "a318": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/F-GUGI_CDG_%2849806325246%29.jpg/500px-F-GUGI_CDG_%2849806325246%29.jpg",
    "a319": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/United_Airbus_A319_%2813942617705%29.jpg/500px-United_Airbus_A319_%2813942617705%29.jpg",
    "a320": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Air_New_Zealand_Airbus_A320-232_ZK-OAB_in_Christchurch.jpg/500px-Air_New_Zealand_Airbus_A320-232_ZK-OAB_in_Christchurch.jpg",
    "a321": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Airbus_A321-231%28w%29_%E2%80%98N915US%E2%80%99_American_Airlines_%2828442733186%29.jpg/500px-Airbus_A321-231%28w%29_%E2%80%98N915US%E2%80%99_American_Airlines_%2828442733186%29.jpg",
    "a319neo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/China_Southern_A319neo.jpg/500px-China_Southern_A319neo.jpg",
    "a320neo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Lufthansa_A320neo_D-AINA_in_Munich_%28cropped%29.jpg/500px-Lufthansa_A320neo_D-AINA_in_Munich_%28cropped%29.jpg",
    "a321neo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/HA-LVA%40PEK_%2820200403093313%29.jpg/500px-HA-LVA%40PEK_%2820200403093313%29.jpg",
    "a330-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lufthansa_Airbus_A330-300_D-AIKB_FRA_2012-07-20_%28cropped%29.png/500px-Lufthansa_Airbus_A330-300_D-AIKB_FRA_2012-07-20_%28cropped%29.png",
    "a330neo-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/TAP_Air_Portugal%2C_CS-TUD%2C_Airbus_A330-941_%2849563229656%29.jpg/500px-TAP_Air_Portugal%2C_CS-TUD%2C_Airbus_A330-941_%2849563229656%29.jpg",
    "a340-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Lufthansa_Airbus_A340-642_D-AIHF_at_Frankfurt_Airport.jpg/500px-Lufthansa_Airbus_A340-642_D-AIHF_at_Frankfurt_Airport.jpg",
    "a350-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/A350_of_Lufthansa.jpg/500px-A350_of_Lufthansa.jpg",
    "a380": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Emirates_A380_A6-EDS_at_SFO.jpg/500px-Emirates_A380_A6-EDS_at_SFO.jpg",
    "atr-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Air_New_Zealand_Link_ATR-72-600_ZK-MVA.jpg/500px-Air_New_Zealand_Link_ATR-72-600_ZK-MVA.jpg",
    "b707-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Boeing_707_Pan_Am_at_ZRH_%281%29.jpg/500px-Boeing_707_Pan_Am_at_ZRH_%281%29.jpg",
    "b717": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hawaiian_Airlines_Boeing_717-200_HNL.jpg/500px-Hawaiian_Airlines_Boeing_717-200_HNL.jpg",
    "b727-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/American_Airlines_Boeing_727-200_Silagi.jpg/500px-American_Airlines_Boeing_727-200_Silagi.jpg",
    "b737-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Southwest_Airlines_Boeing_737-800_N8645A.jpg/500px-Southwest_Airlines_Boeing_737-800_N8645A.jpg",
    "b747-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Lufthansa_Boeing_747-830_D-ABYA_FRA.jpg/500px-Lufthansa_Boeing_747-830_D-ABYA_FRA.jpg",
    "b757-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Delta_Air_Lines_Boeing_757-200_%28N6704Z%29_%282498263725%29.jpg/500px-Delta_Air_Lines_Boeing_757-200_%28N6704Z%29_%282498263725%29.jpg",
    "b767-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Delta_Air_Lines_Boeing_767-300ER_%28N197DN%29.jpg/500px-Delta_Air_Lines_Boeing_767-300ER_%28N197DN%29.jpg",
    "b777-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/American_Airlines_Boeing_777-300_N718AN.jpg/500px-American_Airlines_Boeing_777-300_N718AN.jpg",
    "b787-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/500px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg",
    "crj-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Delta_Connection_CRJ-900.jpg/500px-Delta_Connection_CRJ-900.jpg",
    "dash-8-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Horizon_Air_Bombardier_Dash_8_Q400_N443QX.jpg/500px-Horizon_Air_Bombardier_Dash_8_Q400_N443QX.jpg",
    "erj-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/ExpressJet_ERJ-145XR.jpg/500px-ExpressJet_ERJ-145XR.jpg",
    "e-jet-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/JetBlue_Embraer_190.jpg/500px-JetBlue_Embraer_190.jpg",
    "e-jet-e2-family": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Helvetic_Airways_Embraer_E190-E2_%28HB-AZC%29.jpg/500px-Helvetic_Airways_Embraer_E190-E2_%28HB-AZC%29.jpg"
}

filepath = "/Users/ihanshim/Downloads/Aerotype/data/aircrafts.js"
with open(filepath, "r") as f:
    content = f.read()

# For each block, add imageUrl
for ac_id, url in images.items():
    # Find the object with this id
    pattern = r'(id:\s*"' + ac_id + r'",\s*\n\s*manufacturer)'
    replacement = f'id: "{ac_id}",\n        imageUrl: "{url}",\n        manufacturer'
    content = re.sub(pattern, replacement, content)

with open(filepath, "w") as f:
    f.write(content)
print("Updated aircrafts.js")
