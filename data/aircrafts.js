const aircraftData = [
    {
        id: "a318",
        manufacturer: "Airbus",
        familyName: "A320 Family",
        isGroup: false,
        modelName: "A318",
        series: "A318-100",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 107,
        range: 5850,
        firstFlight: 2002,
        productionStatus: "Active",
        variants: []
    },
    {
        id: "a319",
        manufacturer: "Airbus",
        familyName: "A320 Family",
        isGroup: false,
        modelName: "A319",
        series: "A319-100",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 156,
        range: 6850,
        firstFlight: 1995,
        productionStatus: "Active",
        variants: []
    },
    {
        id: "a320",
        manufacturer: "Airbus",
        familyName: "A320 Family",
        isGroup: false,
        modelName: "A320",
        series: "A320-200",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 194,
        range: 6300,
        firstFlight: 1987,
        productionStatus: "Active",
        variants: []
    },
    {
        id: "a321",
        manufacturer: "Airbus",
        familyName: "A320 Family",
        isGroup: false,
        modelName: "A321",
        series: "A321-200",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 236,
        range: 5600,
        firstFlight: 1993,
        productionStatus: "Active",
        variants: []
    },
    {
        id: "a319neo",
        manufacturer: "Airbus",
        familyName: "A320neo Family",
        isGroup: false,
        modelName: "A319neo",
        series: "A319neo",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 160,
        range: 7400,
        firstFlight: 2014,
        productionStatus: "Active",
        variants: []
    },
    {
        id: "a320neo",
        manufacturer: "Airbus",
        familyName: "A320neo Family",
        isGroup: false,
        modelName: "A320neo",
        series: "A320neo",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 194,
        range: 6850,
        firstFlight: 2014,
        productionStatus: "Active",
        variants: []
    },
    {
        id: "a321neo",
        manufacturer: "Airbus",
        familyName: "A320neo Family",
        isGroup: false,
        modelName: "A321neo",
        series: "A321neo",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 236,
        range: 7400,
        firstFlight: 2017,
        productionStatus: "Active",
        variants: []
    },
    {
        id: "a330-family",
        manufacturer: "Airbus",
        familyName: "A330 Family",
        isGroup: true,
        modelName: "A330",
        series: "A330 Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 295,
        range: 15000,
        firstFlight: 1992,
        productionStatus: "Active",
        variants: [
            { id: "A330-200", typeName: "A330-200", seatsTypical: 293, range: 15000, firstFlight: 1997, productionStatus: "Active" },
            { id: "A330-300", typeName: "A330-300", seatsTypical: 295, range: 14600, firstFlight: 1992, productionStatus: "Active" },
            { id: "A330-800neo", typeName: "A330-800neo", seatsTypical: 280, range: 15000, firstFlight: 2018, productionStatus: "Active" },
            { id: "A330-900neo", typeName: "A330-900neo", seatsTypical: 300, range: 14600, firstFlight: 2017, productionStatus: "Active" }
        ]
    },
    {
        id: "a350-family",
        manufacturer: "Airbus",
        familyName: "A350 Family",
        isGroup: true,
        modelName: "A350",
        series: "A350 XWB",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 325,
        range: 15000,
        firstFlight: 2013,
        productionStatus: "Active",
        variants: [
            { id: "A350-800", typeName: "A350-800", seatsTypical: 315, range: 15000, firstFlight: 2018, productionStatus: "Active" },
            { id: "A350-900", typeName: "A350-900", seatsTypical: 325, range: 15000, firstFlight: 2013, productionStatus: "Active" },
            { id: "A350-1000", typeName: "A350-1000", seatsTypical: 369, range: 15000, firstFlight: 2018, productionStatus: "Active" }
        ]
    },
    {
        id: "b737-family",
        manufacturer: "Boeing",
        familyName: "737 Family",
        isGroup: true,
        modelName: "737",
        series: "737 Family",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 189,
        range: 6570,
        firstFlight: 1967,
        productionStatus: "Active",
        variants: [
            { id: "B737-600", typeName: "737-600", seatsTypical: 149, range: 5765, firstFlight: 1998, productionStatus: "Active" },
            { id: "B737-700", typeName: "737-700", seatsTypical: 189, range: 6091, firstFlight: 1997, productionStatus: "Active" },
            { id: "B737-800", typeName: "737-800", seatsTypical: 189, range: 5235, firstFlight: 1997, productionStatus: "Active" },
            { id: "B737-900", typeName: "737-900", seatsTypical: 189, range: 5437, firstFlight: 2000, productionStatus: "Active" },
            { id: "B737-MAX8", typeName: "737 MAX 8", seatsTypical: 189, range: 6570, firstFlight: 2017, productionStatus: "Active" }
        ]
    },
    {
        id: "b777-family",
        manufacturer: "Boeing",
        familyName: "777 Family",
        isGroup: true,
        modelName: "777",
        series: "777 Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 350,
        range: 14685,
        firstFlight: 1994,
        productionStatus: "Active",
        variants: [
            { id: "B777-200", typeName: "777-200", seatsTypical: 305, range: 13649, firstFlight: 1994, productionStatus: "Active" },
            { id: "B777-200ER", typeName: "777-200ER", seatsTypical: 330, range: 14685, firstFlight: 1996, productionStatus: "Active" },
            { id: "B777-300", typeName: "777-300", seatsTypical: 350, range: 11068, firstFlight: 1997, productionStatus: "Active" },
            { id: "B777-300ER", typeName: "777-300ER", seatsTypical: 396, range: 14685, firstFlight: 2003, productionStatus: "Active" }
        ]
    },
    {
        id: "b787-family",
        manufacturer: "Boeing",
        familyName: "787 Dreamliner",
        isGroup: true,
        modelName: "787",
        series: "787 Dreamliner",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 296,
        range: 14010,
        firstFlight: 2009,
        productionStatus: "Active",
        variants: [
            { id: "B787-8", typeName: "787-8", seatsTypical: 242, range: 14100, firstFlight: 2013, productionStatus: "Active" },
            { id: "B787-9", typeName: "787-9", seatsTypical: 296, range: 14010, firstFlight: 2013, productionStatus: "Active" },
            { id: "B787-10", typeName: "787-10", seatsTypical: 330, range: 12130, firstFlight: 2018, productionStatus: "Active" }
        ]
    },
    {
        id: "crj-family",
        manufacturer: "Bombardier",
        familyName: "CRJ Series",
        isGroup: true,
        modelName: "CRJ",
        series: "CRJ Series",
        classification: "Regional Jet",
        engines: 2,
        seatsTypical: 70,
        range: 5926,
        firstFlight: 1991,
        productionStatus: "Active",
        variants: [
            { id: "CRJ200", typeName: "CRJ200", seatsTypical: 50, range: 3965, firstFlight: 1991, productionStatus: "Retired" },
            { id: "CRJ700", typeName: "CRJ700", seatsTypical: 70, range: 5926, firstFlight: 1999, productionStatus: "Active" },
            { id: "CRJ900", typeName: "CRJ900", seatsTypical: 90, range: 5926, firstFlight: 2003, productionStatus: "Active" }
        ]
    },
    {
        id: "e-jet-family",
        manufacturer: "Embraer",
        familyName: "E-Jet Family",
        isGroup: true,
        modelName: "E-Jet",
        series: "E-Jet Family",
        classification: "Regional Jet",
        engines: 2,
        seatsTypical: 100,
        range: 4260,
        firstFlight: 2002,
        productionStatus: "Active",
        variants: [
            { id: "E170", typeName: "E170", seatsTypical: 70, range: 3704, firstFlight: 2002, productionStatus: "Active" },
            { id: "E175", typeName: "E175", seatsTypical: 88, range: 4260, firstFlight: 2004, productionStatus: "Active" },
            { id: "E190", typeName: "E190", seatsTypical: 114, range: 4537, firstFlight: 2004, productionStatus: "Active" },
            { id: "E195", typeName: "E195", seatsTypical: 124, range: 4260, firstFlight: 2004, productionStatus: "Active" }
        ]
    }
];

// 전역 스코프에 노출하여 script.js에서 사용할 수 있게 함
if (typeof window !== 'undefined') {
    window.aircraftData = aircraftData;
}
