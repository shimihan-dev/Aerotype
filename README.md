# AeroType

AeroType is a simple aircraft type dictionary web app built as the first project in my aviation IT portfolio.

## Project Overview

AeroType is a dictionary-style web service that organizes aircraft type information such as manufacturer, model, aircraft family, category, engine count, seating capacity, range, first flight year, and production status.

This project is designed as the foundation for a future Flight Log service, where users will be able to click an aircraft type from their flight record and view detailed aircraft information.

## Features

- View aircraft type cards
- Search aircraft by model name
- Filter aircraft by manufacturer
- View detailed aircraft information
- Static data structure designed for future database migration

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub
- GitHub Pages 예정

## Data Structure

Aircraft data is stored in `data/aircrafts.js` as a JavaScript array of objects. Each entry represents either an individual aircraft type or a grouped family of aircraft with variants.

```javascript
{
  id: "b777-family",          // Unique ID (Primary Key for future DB migration)
  manufacturer: "Boeing",     // Manufacturer name
  familyName: "777 Family",   // Aircraft family name
  isGroup: true,              // Whether this entry contains sub-variants
  modelName: "777",           // Display name on card
  series: "777 Family",       // Series identifier
  classification: "Wide-body",// Aircraft category
  engines: 2,                 // Number of engines
  seatsTypical: 368,          // Typical seating capacity
  range: 14685,               // Maximum range in km
  firstFlight: 1994,          // First flight year
  productionStatus: "Active", // Production status (Active / Retired / Development)
  variants: [                 // Sub-variants (shown in detail modal)
    { id: "B777-200", typeName: "777-200", seatsTypical: 305, range: 9700, firstFlight: 1994, productionStatus: "Retired" },
    // ...
  ]
}
```

> **Note:** A320 Family and A320neo Family are treated as exceptions — each variant (A318, A319, A320, A321, etc.) is displayed as an individual card on the main page instead of being grouped.

## Future Plans

- Add more aircraft types
- Convert static data to Supabase database
- Add aircraft detail pages
- Connect with Flight Log service
- Add aircraft registration database
- Add airport and airline data

## Disclaimer

Aircraft data is used for educational and portfolio purposes. For production use, data should be verified with official sources.
