const aircraftData = [
    // ===== Airbus =====

    // A220 Family (개별 카드)
    {
        id: "a220-100",
        manufacturer: "Airbus",
        familyName: "A220 Family",
        isGroup: false,
        modelName: "A220-100",
        series: "A220-100",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 120,
        range: 5460,
        firstFlight: 2013,
        productionStatus: "Active",
        variants: []
    },
    {
        id: "a220-300",
        manufacturer: "Airbus",
        familyName: "A220 Family",
        isGroup: false,
        modelName: "A220-300",
        series: "A220-300",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 149,
        range: 6297,
        firstFlight: 2015,
        productionStatus: "Active",
        variants: []
    },

    // A300 Family (그룹 카드)
    {
        id: "a300-family",
        manufacturer: "Airbus",
        familyName: "A300 Family",
        isGroup: true,
        modelName: "A300",
        series: "A300 Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 266,
        range: 7700,
        firstFlight: 1972,
        productionStatus: "Retired",
        variants: [
            { id: "A300B2", typeName: "A300B2", seatsTypical: 251, range: 3430, firstFlight: 1972, productionStatus: "Retired" },
            { id: "A300B4", typeName: "A300B4", seatsTypical: 251, range: 5375, firstFlight: 1974, productionStatus: "Retired" },
            { id: "A300-600", typeName: "A300-600", seatsTypical: 266, range: 7500, firstFlight: 1983, productionStatus: "Retired" },
            { id: "A300-600R", typeName: "A300-600R", seatsTypical: 266, range: 7700, firstFlight: 1988, productionStatus: "Retired" },
            { id: "A300-600F", typeName: "A300-600F (화물기)", seatsTypical: 54, range: 4850, firstFlight: 1993, productionStatus: "Retired", isCargo: true }
        ]
    },

    // A310 Family (그룹 카드)
    {
        id: "a310-family",
        manufacturer: "Airbus",
        familyName: "A310 Family",
        isGroup: true,
        modelName: "A310",
        series: "A310 Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 240,
        range: 8050,
        firstFlight: 1982,
        productionStatus: "Retired",
        variants: [
            { id: "A310-200", typeName: "A310-200", seatsTypical: 220, range: 6800, firstFlight: 1982, productionStatus: "Retired" },
            { id: "A310-300", typeName: "A310-300", seatsTypical: 240, range: 8050, firstFlight: 1985, productionStatus: "Retired" }
        ]
    },

    // A320 Family (개별 카드 — 예외 처리)
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
        productionStatus: "Retired",
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
        productionStatus: "Retired",
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
        productionStatus: "Retired",
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
        productionStatus: "Retired",
        variants: []
    },

    // A320neo Family (개별 카드 — 예외 처리)
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
        range: 6850,
        firstFlight: 2017,
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
        range: 6300,
        firstFlight: 2016,
        productionStatus: "Active",
        variants: []
    },
    {
        id: "a321neo",
        manufacturer: "Airbus",
        familyName: "A320neo Family",
        isGroup: true,
        modelName: "A321neo",
        series: "A321neo Family",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 206,
        range: 7400,
        firstFlight: 2016,
        productionStatus: "Active",
        variants: [
            { id: "A321neo", typeName: "A321neo (기본형)", seatsTypical: 206, range: 6500, firstFlight: 2016, productionStatus: "Active", isCargo: false },
            { id: "A321LR", typeName: "A321LR", seatsTypical: 206, range: 7400, firstFlight: 2018, productionStatus: "Active", isCargo: false },
            { id: "A321XLR", typeName: "A321XLR", seatsTypical: 206, range: 8700, firstFlight: 2024, productionStatus: "Active", isCargo: false }
        ]
    },

    // A330 Family (그룹 카드)
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
        range: 13450,
        firstFlight: 1992,
        productionStatus: "Active",
        variants: [
            // 1세대 (A330ceo) — 단종
            { id: "A330-200", typeName: "A330-200 (1세대)", seatsTypical: 247, range: 13450, firstFlight: 1997, productionStatus: "Retired" },
            { id: "A330-300", typeName: "A330-300 (1세대)", seatsTypical: 295, range: 11750, firstFlight: 1992, productionStatus: "Retired" },
            // 2세대 (A330neo) — 현재 생산 중
            { id: "A330-800neo", typeName: "A330-800neo (2세대)", seatsTypical: 257, range: 15094, firstFlight: 2018, productionStatus: "Active" },
            { id: "A330-900neo", typeName: "A330-900neo (2세대)", seatsTypical: 287, range: 13334, firstFlight: 2017, productionStatus: "Active" }
        ]
    },

    // A340 Family (그룹 카드) — 신규 추가
    {
        id: "a340-family",
        manufacturer: "Airbus",
        familyName: "A340 Family",
        isGroup: true,
        modelName: "A340",
        series: "A340 Family",
        classification: "Wide-body",
        engines: 4,
        seatsTypical: 295,
        range: 14800,
        firstFlight: 1991,
        productionStatus: "Retired",
        variants: [
            { id: "A340-200", typeName: "A340-200", seatsTypical: 261, range: 14800, firstFlight: 1992, productionStatus: "Retired" },
            { id: "A340-300", typeName: "A340-300", seatsTypical: 295, range: 13700, firstFlight: 1991, productionStatus: "Retired" },
            { id: "A340-500", typeName: "A340-500", seatsTypical: 313, range: 16670, firstFlight: 2002, productionStatus: "Retired" },
            { id: "A340-600", typeName: "A340-600", seatsTypical: 380, range: 14600, firstFlight: 2001, productionStatus: "Retired" }
        ]
    },

    // A350 Family (그룹 카드)
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
            { id: "A350-900", typeName: "A350-900", seatsTypical: 325, range: 15000, firstFlight: 2013, productionStatus: "Active" },
            { id: "A350-900ULR", typeName: "A350-900ULR", seatsTypical: 253, range: 18000, firstFlight: 2018, productionStatus: "Active" },
            { id: "A350-1000", typeName: "A350-1000", seatsTypical: 369, range: 16100, firstFlight: 2016, productionStatus: "Active" }
        ]
    },

    // A380 (단일 기종)
    {
        id: "a380",
        manufacturer: "Airbus",
        familyName: "A380",
        isGroup: false,
        modelName: "A380",
        series: "A380-800",
        classification: "Wide-body",
        engines: 4,
        seatsTypical: 555,
        range: 15200,
        firstFlight: 2005,
        productionStatus: "Retired",
        variants: []
    },

    // ===== Boeing =====

    // 707 Family (그룹 카드)
    {
        id: "b707-family",
        manufacturer: "Boeing",
        familyName: "707 Family",
        isGroup: true,
        modelName: "707",
        series: "707 Family",
        classification: "Narrow-body",
        engines: 4,
        seatsTypical: 189,
        range: 9650,
        firstFlight: 1957,
        productionStatus: "Retired",
        variants: [
            { id: "B707-120", typeName: "707-120", seatsTypical: 137, range: 4240, firstFlight: 1957, productionStatus: "Retired" },
            { id: "B707-320", typeName: "707-320", seatsTypical: 189, range: 6920, firstFlight: 1959, productionStatus: "Retired" },
            { id: "B707-320B", typeName: "707-320B", seatsTypical: 189, range: 9265, firstFlight: 1962, productionStatus: "Retired" },
            { id: "B707-320C", typeName: "707-320C", seatsTypical: 189, range: 9265, firstFlight: 1963, productionStatus: "Retired" }
        ]
    },

    // 717 (단일 기종)
    {
        id: "b717",
        manufacturer: "Boeing",
        familyName: "717",
        isGroup: false,
        modelName: "717",
        series: "717-200",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 117,
        range: 2645,
        firstFlight: 1998,
        productionStatus: "Retired",
        variants: []
    },

    // 727 Family (그룹 카드)
    {
        id: "b727-family",
        manufacturer: "Boeing",
        familyName: "727 Family",
        isGroup: true,
        modelName: "727",
        series: "727 Family",
        classification: "Narrow-body",
        engines: 3,
        seatsTypical: 155,
        range: 4170,
        firstFlight: 1963,
        productionStatus: "Retired",
        variants: [
            { id: "B727-100", typeName: "727-100", seatsTypical: 131, range: 4170, firstFlight: 1963, productionStatus: "Retired" },
            { id: "B727-200", typeName: "727-200", seatsTypical: 189, range: 4020, firstFlight: 1967, productionStatus: "Retired" }
        ]
    },

    // 737 Family (그룹 카드 — 세부 기종 확장)
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
            // Original
            { id: "B737-100", typeName: "737-100", seatsTypical: 103, range: 3440, firstFlight: 1967, productionStatus: "Retired" },
            { id: "B737-200", typeName: "737-200", seatsTypical: 136, range: 4260, firstFlight: 1968, productionStatus: "Retired" },
            // Classic
            { id: "B737-300", typeName: "737-300 (Classic)", seatsTypical: 149, range: 4400, firstFlight: 1984, productionStatus: "Retired" },
            { id: "B737-400", typeName: "737-400 (Classic)", seatsTypical: 168, range: 5000, firstFlight: 1988, productionStatus: "Retired" },
            { id: "B737-500", typeName: "737-500 (Classic)", seatsTypical: 132, range: 5200, firstFlight: 1989, productionStatus: "Retired" },
            // NG
            { id: "B737-600", typeName: "737-600 (NG)", seatsTypical: 130, range: 5648, firstFlight: 1998, productionStatus: "Retired" },
            { id: "B737-700", typeName: "737-700 (NG)", seatsTypical: 149, range: 6370, firstFlight: 1997, productionStatus: "Retired" },
            { id: "B737-800", typeName: "737-800 (NG)", seatsTypical: 189, range: 5765, firstFlight: 1997, productionStatus: "Retired" },
            { id: "B737-900ER", typeName: "737-900ER (NG)", seatsTypical: 220, range: 5925, firstFlight: 2006, productionStatus: "Retired" },
            // MAX
            { id: "B737-MAX7", typeName: "737 MAX 7", seatsTypical: 172, range: 7130, firstFlight: 2018, productionStatus: "Active" },
            { id: "B737-MAX8", typeName: "737 MAX 8", seatsTypical: 189, range: 6570, firstFlight: 2016, productionStatus: "Active" },
            { id: "B737-MAX9", typeName: "737 MAX 9", seatsTypical: 220, range: 6570, firstFlight: 2020, productionStatus: "Active" },
            { id: "B737-MAX10", typeName: "737 MAX 10", seatsTypical: 230, range: 5740, firstFlight: 2021, productionStatus: "Active" }
        ]
    },

    // 747 Family (그룹 카드)
    {
        id: "b747-family",
        manufacturer: "Boeing",
        familyName: "747 Family",
        isGroup: true,
        modelName: "747",
        series: "747 Family",
        classification: "Wide-body",
        engines: 4,
        seatsTypical: 416,
        range: 14815,
        firstFlight: 1969,
        productionStatus: "Retired",
        variants: [
            { id: "B747-100", typeName: "747-100", seatsTypical: 366, range: 9800, firstFlight: 1969, productionStatus: "Retired" },
            { id: "B747-200", typeName: "747-200", seatsTypical: 366, range: 12700, firstFlight: 1971, productionStatus: "Retired" },
            { id: "B747-300", typeName: "747-300", seatsTypical: 400, range: 12400, firstFlight: 1983, productionStatus: "Retired" },
            { id: "B747-400", typeName: "747-400", seatsTypical: 416, range: 13450, firstFlight: 1988, productionStatus: "Retired" },
            { id: "B747-400ER", typeName: "747-400ER", seatsTypical: 416, range: 14200, firstFlight: 2002, productionStatus: "Retired" },
            { id: "B747-8I", typeName: "747-8 Intercontinental", seatsTypical: 467, range: 14815, firstFlight: 2011, productionStatus: "Retired" },
            { id: "B747-8F", typeName: "747-8F (화물기)", seatsTypical: 134, range: 8130, firstFlight: 2010, productionStatus: "Retired", isCargo: true }
        ]
    },

    // 757 Family (그룹 카드)
    {
        id: "b757-family",
        manufacturer: "Boeing",
        familyName: "757 Family",
        isGroup: true,
        modelName: "757",
        series: "757 Family",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 200,
        range: 7222,
        firstFlight: 1982,
        productionStatus: "Retired",
        variants: [
            { id: "B757-200", typeName: "757-200", seatsTypical: 200, range: 7222, firstFlight: 1982, productionStatus: "Retired" },
            { id: "B757-300", typeName: "757-300", seatsTypical: 243, range: 6421, firstFlight: 1999, productionStatus: "Retired" }
        ]
    },

    // 767 Family (그룹 카드)
    {
        id: "b767-family",
        manufacturer: "Boeing",
        familyName: "767 Family",
        isGroup: true,
        modelName: "767",
        series: "767 Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 290,
        range: 11825,
        firstFlight: 1981,
        productionStatus: "Active",
        variants: [
            { id: "B767-200", typeName: "767-200", seatsTypical: 216, range: 7200, firstFlight: 1981, productionStatus: "Retired" },
            { id: "B767-200ER", typeName: "767-200ER", seatsTypical: 224, range: 12200, firstFlight: 1984, productionStatus: "Retired" },
            { id: "B767-300", typeName: "767-300", seatsTypical: 269, range: 7200, firstFlight: 1986, productionStatus: "Retired" },
            { id: "B767-300ER", typeName: "767-300ER", seatsTypical: 269, range: 11070, firstFlight: 1988, productionStatus: "Retired" },
            { id: "B767-300F", typeName: "767-300F (화물기)", seatsTypical: 52, range: 6025, firstFlight: 1995, productionStatus: "Active", isCargo: true },
            { id: "B767-400ER", typeName: "767-400ER", seatsTypical: 304, range: 10415, firstFlight: 2000, productionStatus: "Retired" }
        ]
    },

    // 777 Family (그룹 카드 — 777X 포함 확장)
    {
        id: "b777-family",
        manufacturer: "Boeing",
        familyName: "777 Family",
        isGroup: true,
        modelName: "777",
        series: "777 Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 368,
        range: 14685,
        firstFlight: 1994,
        productionStatus: "Active",
        variants: [
            { id: "B777-200", typeName: "777-200", seatsTypical: 305, range: 9700, firstFlight: 1994, productionStatus: "Retired", isCargo: false },
            { id: "B777-200ER", typeName: "777-200ER", seatsTypical: 314, range: 13080, firstFlight: 1997, productionStatus: "Retired", isCargo: false },
            { id: "B777-200LR", typeName: "777-200LR", seatsTypical: 317, range: 15843, firstFlight: 2005, productionStatus: "Retired", isCargo: false },
            { id: "B777-300", typeName: "777-300", seatsTypical: 368, range: 11121, firstFlight: 1998, productionStatus: "Retired", isCargo: false },
            { id: "B777-300ER", typeName: "777-300ER", seatsTypical: 396, range: 13650, firstFlight: 2003, productionStatus: "Retired", isCargo: false },
            { id: "B777F", typeName: "777F (화물기)", seatsTypical: 102, range: 9200, firstFlight: 2008, productionStatus: "Active", isCargo: true },
            { id: "B777-8", typeName: "777-8 (777X)", seatsTypical: 384, range: 16170, firstFlight: 2024, productionStatus: "Development", isCargo: false },
            { id: "B777-9", typeName: "777-9 (777X)", seatsTypical: 426, range: 13500, firstFlight: 2020, productionStatus: "Development", isCargo: false }
        ]
    },

    // 787 Dreamliner (그룹 카드)
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
            { id: "B787-8", typeName: "787-8", seatsTypical: 242, range: 13621, firstFlight: 2009, productionStatus: "Active" },
            { id: "B787-9", typeName: "787-9", seatsTypical: 296, range: 14010, firstFlight: 2013, productionStatus: "Active" },
            { id: "B787-10", typeName: "787-10", seatsTypical: 330, range: 11910, firstFlight: 2017, productionStatus: "Active" }
        ]
    },

    // ===== Bombardier =====

    // CRJ Series (그룹 카드)
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
        range: 3620,
        firstFlight: 1991,
        productionStatus: "Retired",
        variants: [
            { id: "CRJ100", typeName: "CRJ100", seatsTypical: 50, range: 2491, firstFlight: 1991, productionStatus: "Retired" },
            { id: "CRJ200", typeName: "CRJ200", seatsTypical: 50, range: 3148, firstFlight: 1995, productionStatus: "Retired" },
            { id: "CRJ700", typeName: "CRJ700", seatsTypical: 70, range: 3620, firstFlight: 1999, productionStatus: "Retired" },
            { id: "CRJ900", typeName: "CRJ900", seatsTypical: 90, range: 2876, firstFlight: 2001, productionStatus: "Retired" },
            { id: "CRJ1000", typeName: "CRJ1000", seatsTypical: 104, range: 2761, firstFlight: 2008, productionStatus: "Retired" }
        ]
    },

    // Dash 8 Family (그룹 카드)
    {
        id: "dash-8-family",
        manufacturer: "Bombardier",
        familyName: "Dash 8 Series",
        isGroup: true,
        modelName: "Dash 8",
        series: "Dash 8 Series",
        classification: "Turboprop",
        engines: 2,
        seatsTypical: 78,
        range: 2040,
        firstFlight: 1983,
        productionStatus: "Active",
        variants: [
            { id: "Dash8-100", typeName: "Dash 8-100", seatsTypical: 37, range: 1889, firstFlight: 1983, productionStatus: "Retired" },
            { id: "Dash8-200", typeName: "Dash 8-200", seatsTypical: 37, range: 1713, firstFlight: 1995, productionStatus: "Retired" },
            { id: "Dash8-300", typeName: "Dash 8-300", seatsTypical: 50, range: 1558, firstFlight: 1987, productionStatus: "Retired" },
            { id: "Dash8-400", typeName: "Dash 8-400 (Q400)", seatsTypical: 78, range: 2040, firstFlight: 1998, productionStatus: "Active" }
        ]
    },

    // ===== Embraer =====

    // ERJ Family (그룹 카드) — 신규 추가
    {
        id: "erj-family",
        manufacturer: "Embraer",
        familyName: "ERJ Family",
        isGroup: true,
        modelName: "ERJ",
        series: "ERJ Family",
        classification: "Regional Jet",
        engines: 2,
        seatsTypical: 44,
        range: 3019,
        firstFlight: 1995,
        productionStatus: "Retired",
        variants: [
            { id: "ERJ-135", typeName: "ERJ-135", seatsTypical: 37, range: 3241, firstFlight: 1998, productionStatus: "Retired" },
            { id: "ERJ-140", typeName: "ERJ-140", seatsTypical: 44, range: 2816, firstFlight: 2000, productionStatus: "Retired" },
            { id: "ERJ-145", typeName: "ERJ-145", seatsTypical: 50, range: 3019, firstFlight: 1995, productionStatus: "Retired" }
        ]
    },

    // E-Jet Family (그룹 카드)
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
            { id: "E170", typeName: "E170", seatsTypical: 72, range: 3982, firstFlight: 2002, productionStatus: "Active" },
            { id: "E175", typeName: "E175", seatsTypical: 88, range: 3704, firstFlight: 2004, productionStatus: "Active" },
            { id: "E190", typeName: "E190", seatsTypical: 114, range: 4537, firstFlight: 2004, productionStatus: "Active" },
            { id: "E195", typeName: "E195", seatsTypical: 124, range: 4260, firstFlight: 2004, productionStatus: "Active" }
        ]
    },

    // E-Jet E2 Family (그룹 카드)
    {
        id: "e-jet-e2-family",
        manufacturer: "Embraer",
        familyName: "E-Jet E2 Family",
        isGroup: true,
        modelName: "E-Jet E2",
        series: "E-Jet E2 Family",
        classification: "Regional Jet",
        engines: 2,
        seatsTypical: 136,
        range: 5278,
        firstFlight: 2016,
        productionStatus: "Active",
        variants: [
            { id: "E175-E2", typeName: "E175-E2", seatsTypical: 90, range: 3735, firstFlight: 2019, productionStatus: "Active" },
            { id: "E190-E2", typeName: "E190-E2", seatsTypical: 114, range: 5278, firstFlight: 2016, productionStatus: "Active" },
            { id: "E195-E2", typeName: "E195-E2", seatsTypical: 146, range: 4815, firstFlight: 2017, productionStatus: "Active" }
        ]
    }
];

// 전역 스코프에 노출하여 script.js에서 사용할 수 있게 함
if (typeof window !== 'undefined') {
    window.aircraftData = aircraftData;
}
