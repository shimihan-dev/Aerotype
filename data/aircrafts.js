const aircraftData = [
    // ===== Airbus =====

    // A220 Family (그룹 카드)
    {
        id: "a220-family",
        photoVariant: "A220-300",
        imageUrl: "images/A220-300.jpg",
        manufacturer: "Airbus",
        familyName: "A220 Family",
        isGroup: true,
        modelName: "A220",
        series: "A220 Family",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 135,
        range: 6297,
        firstFlight: 2013,
        productionStatus: "Active",
        variants: [
            { id: "A220-100", typeName: "A220-100", seatsTypical: 120, range: 5460, firstFlight: 2013, productionStatus: "Active", isCargo: false },
            { id: "A220-300", typeName: "A220-300", seatsTypical: 149, range: 6297, firstFlight: 2015, productionStatus: "Active", isCargo: false }
        ]
    },

    // A300 Family (그룹 카드)
    {
        id: "a300-family",
        photoVariant: "A300-600R",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Iran_Air_Airbus_A300-605R%3B_EP-IBD%40FRA%3B06.07.2011_603ks_%285915220574%29.jpg/500px-Iran_Air_Airbus_A300-605R%3B_EP-IBD%40FRA%3B06.07.2011_603ks_%285915220574%29.jpg",
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
        photoVariant: "A310",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Air_Transat_A310_%28C-GTSF%29_%40_LHR%2C_Aug_2009.jpg/500px-Air_Transat_A310_%28C-GTSF%29_%40_LHR%2C_Aug_2009.jpg",
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
        photoVariant: "A318",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/F-GUGI_CDG_%2849806325246%29.jpg/500px-F-GUGI_CDG_%2849806325246%29.jpg",
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
        photoVariant: "A319",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/United_Airbus_A319_%2813942617705%29.jpg/500px-United_Airbus_A319_%2813942617705%29.jpg",
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
        photoVariant: "A320-200",
        imageUrl: "images/a320-200.jpg",
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
        photoVariant: "A321-200",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Airbus_A321-231%28w%29_%E2%80%98N915US%E2%80%99_American_Airlines_%2828442733186%29.jpg/500px-Airbus_A321-231%28w%29_%E2%80%98N915US%E2%80%99_American_Airlines_%2828442733186%29.jpg",
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
        photoVariant: "A319neo",
        imageUrl: "images/a319neo.jpeg",
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
        photoVariant: "A320neo",
        imageUrl: "images/a320neo.jpg",
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
        photoVariant: "A321neo",
        imageUrl: "images/a321neo.jpg",
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
        photoVariant: "A330-300",
        imageUrl: "images/a330-family.jpg",
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
        productionStatus: "Retired",
        variants: [
            { id: "A330-200", typeName: "A330-200 (ceo)", seatsTypical: 247, range: 13450, firstFlight: 1997, productionStatus: "Retired" },
            { id: "A330-300", typeName: "A330-300 (ceo)", seatsTypical: 295, range: 11750, firstFlight: 1992, productionStatus: "Retired" }
        ]
    },

    // A330neo Family (그룹 카드)
    {
        id: "a330neo-family",
        photoVariant: "A330-900neo",
        imageUrl: "images/a330neo-family.webp",
        manufacturer: "Airbus",
        familyName: "A330neo Family",
        isGroup: true,
        modelName: "A330neo",
        series: "A330neo Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 287,
        range: 15094,
        firstFlight: 2017,
        productionStatus: "Active",
        variants: [
            { id: "A330-800neo", typeName: "A330-800neo", seatsTypical: 257, range: 15094, firstFlight: 2018, productionStatus: "Active" },
            { id: "A330-900neo", typeName: "A330-900neo", seatsTypical: 287, range: 13334, firstFlight: 2017, productionStatus: "Active" }
        ]
    },

    // A340 Family (그룹 카드) — 신규 추가
    {
        id: "a340-family",
        photoVariant: "A340-600",
        imageUrl: "images/a340-family.webp",
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
        photoVariant: "A350-900",
        imageUrl: "images/a350-family.webp",
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
        photoVariant: "A380-800",
        imageUrl: "images/a380.jpg",
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

    // ATR Family (그룹 카드)
    {
        id: "atr-family",
        photoVariant: "ATR 72",
        imageUrl: "images/tarom_skyteam.jpg",
        manufacturer: "Airbus",
        familyName: "ATR Series",
        isGroup: true,
        modelName: "ATR 42/72",
        series: "ATR Series",
        classification: "Turboprop",
        engines: 2,
        seatsTypical: 72,
        range: 1528,
        firstFlight: 1984,
        productionStatus: "Active",
        variants: [
            { id: "ATR42", typeName: "ATR 42", seatsTypical: 48, range: 1326, firstFlight: 1984, productionStatus: "Active", isCargo: false },
            { id: "ATR72", typeName: "ATR 72", seatsTypical: 72, range: 1528, firstFlight: 1988, productionStatus: "Active", isCargo: false }
        ]
    },

    // ===== Boeing =====

    // 707 Family (그룹 카드)
    {
        id: "b707-family",
        photoVariant: "B707-320B",
        imageUrl: "images/northwest_707.jpg",
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
        photoVariant: "B717-200",
        imageUrl: "images/b717.jpg",
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
        photoVariant: "B727-200",
        imageUrl: "images/b727-family.webp",
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

    // 1. 737 Original (그룹 카드)
    {
        id: "b737-original",
        photoVariant: "B737-200",
        imageUrl: "images/b737-original.webp",
        manufacturer: "Boeing",
        familyName: "737 Original",
        isGroup: true,
        modelName: "737 Original",
        series: "737-100 / -200",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 115,
        range: 4260,
        firstFlight: 1967,
        productionStatus: "Retired",
        variants: [
            { id: "B737-100", typeName: "737-100", seatsTypical: 103, range: 3440, firstFlight: 1967, productionStatus: "Retired" },
            { id: "B737-200", typeName: "737-200", seatsTypical: 136, range: 4260, firstFlight: 1968, productionStatus: "Retired" }
        ]
    },

    // 2. 737 Classic (그룹 카드)
    {
        id: "b737-classic",
        photoVariant: "B737-300",
        imageUrl: "images/b737-classic.jpg",
        manufacturer: "Boeing",
        familyName: "737 Classic",
        isGroup: true,
        modelName: "737 Classic",
        series: "737 Classic (-300/-400/-500)",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 149,
        range: 5200,
        firstFlight: 1984,
        productionStatus: "Retired",
        variants: [
            { id: "B737-300", typeName: "737-300", seatsTypical: 149, range: 4400, firstFlight: 1984, productionStatus: "Retired" },
            { id: "B737-400", typeName: "737-400", seatsTypical: 168, range: 5000, firstFlight: 1988, productionStatus: "Retired" },
            { id: "B737-500", typeName: "737-500", seatsTypical: 132, range: 5200, firstFlight: 1989, productionStatus: "Retired" }
        ]
    },

    // 3. 737 NG (그룹 카드)
    {
        id: "b737-ng",
        photoVariant: "B737-800",
        imageUrl: "images/b737-ng.jpg",
        manufacturer: "Boeing",
        familyName: "737 NG",
        isGroup: true,
        modelName: "737 NG",
        series: "737 Next Generation (-600~-900)",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 162,
        range: 6370,
        firstFlight: 1997,
        productionStatus: "Retired",
        variants: [
            { id: "B737-600", typeName: "737-600", seatsTypical: 130, range: 5648, firstFlight: 1998, productionStatus: "Retired" },
            { id: "B737-700", typeName: "737-700", seatsTypical: 149, range: 6370, firstFlight: 1997, productionStatus: "Retired" },
            { id: "B737-800", typeName: "737-800", seatsTypical: 189, range: 5765, firstFlight: 1997, productionStatus: "Retired" },
            { id: "B737-900ER", typeName: "737-900ER", seatsTypical: 220, range: 5925, firstFlight: 2006, productionStatus: "Retired" }
        ]
    },

    // 4. 737 MAX (그룹 카드)
    {
        id: "b737-max",
        photoVariant: "B737 MAX 8",
        imageUrl: "images/737max8.jpg",
        manufacturer: "Boeing",
        familyName: "737 MAX",
        isGroup: true,
        modelName: "737 MAX",
        series: "737 MAX 7/8/9/10",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 189,
        range: 6570,
        firstFlight: 2016,
        productionStatus: "Active",
        variants: [
            { id: "B737-MAX7", typeName: "737 MAX 7", seatsTypical: 172, range: 7130, firstFlight: 2018, productionStatus: "Active" },
            { id: "B737-MAX8", typeName: "737 MAX 8", seatsTypical: 189, range: 6570, firstFlight: 2016, productionStatus: "Active" },
            { id: "B737-MAX9", typeName: "737 MAX 9", seatsTypical: 220, range: 6570, firstFlight: 2020, productionStatus: "Active" },
            { id: "B737-MAX10", typeName: "737 MAX 10", seatsTypical: 230, range: 5740, firstFlight: 2021, productionStatus: "Active" }
        ]
    },

    // 747 Family (그룹 카드)
    {
        id: "b747-family",
        photoVariant: "B747-8I",
        imageUrl: "images/b747-family.jpg",
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
        photoVariant: "B757-200",
        imageUrl: "images/b757-family.webp",
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
        photoVariant: "B767-300(non-ER)",
        imageUrl: "images/b767-family.jpg",
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
        description: "보잉 최초의 광동체 쌍발 여객기이자 중장거리 시장을 개척한 베스트셀러 모델입니다. 특히 사진의 기종인 아시아나항공의 HL7528은 전 세계에서 마지막으로 운영되었던 여객용 767-300(non-ER) 항공기로, 국내선 김포-제주 노선을 중심으로 활약하다가 퇴역하여 많은 항공 팬들에게 특별한 기종으로 기억되고 있습니다.",
        variants: [
            { id: "B767-200", typeName: "767-200", seatsTypical: 216, range: 7200, firstFlight: 1981, productionStatus: "Retired" },
            { id: "B767-200ER", typeName: "767-200ER", seatsTypical: 224, range: 12200, firstFlight: 1984, productionStatus: "Retired" },
            { id: "B767-300", typeName: "767-300", seatsTypical: 269, range: 7200, firstFlight: 1986, productionStatus: "Retired" },
            { id: "B767-300ER", typeName: "767-300ER", seatsTypical: 269, range: 11070, firstFlight: 1988, productionStatus: "Retired" },
            { id: "B767-300F", typeName: "767-300F (화물기)", seatsTypical: 52, range: 6025, firstFlight: 1995, productionStatus: "Active", isCargo: true },
            { id: "B767-400ER", typeName: "767-400ER", seatsTypical: 304, range: 10415, firstFlight: 2000, productionStatus: "Retired" }
        ]
    },

    // 777 Family (클래식 기종 및 화물기)
    {
        id: "b777-family",
        photoVariant: "B777-300ER",
        imageUrl: "images/b777-family.jpg",
        manufacturer: "Boeing",
        familyName: "777 Family",
        isGroup: true,
        modelName: "777",
        series: "777 Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 368,
        range: 13650,
        firstFlight: 1994,
        productionStatus: "Active",
        variants: [
            { id: "B777-200", typeName: "777-200", seatsTypical: 305, range: 9700, firstFlight: 1994, productionStatus: "Retired", isCargo: false },
            { id: "B777-200ER", typeName: "777-200ER", seatsTypical: 314, range: 13080, firstFlight: 1997, productionStatus: "Retired", isCargo: false },
            { id: "B777-200LR", typeName: "777-200LR", seatsTypical: 317, range: 15843, firstFlight: 2005, productionStatus: "Retired", isCargo: false },
            { id: "B777-300", typeName: "777-300", seatsTypical: 368, range: 11121, firstFlight: 1998, productionStatus: "Retired", isCargo: false },
            { id: "B777-300ER", typeName: "777-300ER", seatsTypical: 396, range: 13650, firstFlight: 2003, productionStatus: "Retired", isCargo: false },
            { id: "B777F", typeName: "777F (화물기)", seatsTypical: 102, range: 9200, firstFlight: 2008, productionStatus: "Active", isCargo: true }
        ]
    },

    // 777X Family (차세대 접이식 wingtip 기종)
    {
        id: "b777x-family",
        photoVariant: "B777-9",
        imageUrl: "images/b777x-family.jpg",
        manufacturer: "Boeing",
        familyName: "777X Family",
        isGroup: true,
        modelName: "777X",
        series: "777X (777-8 / -9)",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 426,
        range: 16170,
        firstFlight: 2020,
        productionStatus: "Development",
        variants: [
            { id: "B777-8", typeName: "777-8", seatsTypical: 384, range: 16170, firstFlight: 2024, productionStatus: "Development", isCargo: false },
            { id: "B777-9", typeName: "777-9", seatsTypical: 426, range: 13500, firstFlight: 2020, productionStatus: "Development", isCargo: false }
        ]
    },

    // 787 Dreamliner (그룹 카드)
    {
        id: "b787-family",
        photoVariant: "B787-9",
        imageUrl: "images/b787-family.jpg",
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
        photoVariant: "CRJ-700",
        imageUrl: "images/crj-family.jpeg",
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
        photoVariant: "Dash 8-400",
        imageUrl: "images/dash-8-family.jpg",
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
        productionStatus: "Retired",
        variants: [
            { id: "Dash8-100", typeName: "Dash 8-100", seatsTypical: 37, range: 1889, firstFlight: 1983, productionStatus: "Retired" },
            { id: "Dash8-200", typeName: "Dash 8-200", seatsTypical: 37, range: 1713, firstFlight: 1995, productionStatus: "Retired" },
            { id: "Dash8-300", typeName: "Dash 8-300", seatsTypical: 50, range: 1558, firstFlight: 1987, productionStatus: "Retired" },
            { id: "Dash8-400", typeName: "Dash 8-400 (Q400)", seatsTypical: 78, range: 2040, firstFlight: 1998, productionStatus: "Retired" }
        ]
    },

    // ===== Embraer =====

    // ERJ Family (그룹 카드) — 신규 추가
    {
        id: "erj-family",
        photoVariant: "ERJ-145XR",
        imageUrl: "images/erj-family.jpg",
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
        photoVariant: "E175",
        imageUrl: "images/e-jet-family.webp",
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
        photoVariant: "E195-E2",
        imageUrl: "images/e-jet-e2-family.jpg",
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
    },

    // ===== McDonnell Douglas =====

    // MD-11 Family (그룹 카드)
    {
        id: "md-11-family",
        photoVariant: "MD-11F",
        imageUrl: "images/md-11-family.jpg",
        manufacturer: "McDonnell Douglas",
        familyName: "MD-11 Family",
        isGroup: true,
        modelName: "MD-11",
        series: "MD-11 Family",
        classification: "Wide-body",
        engines: 3,
        seatsTypical: 298,
        range: 12670,
        firstFlight: 1990,
        productionStatus: "Retired",
        variants: [
            { id: "MD-11P", typeName: "MD-11 (여객형)", seatsTypical: 298, range: 12670, firstFlight: 1990, productionStatus: "Retired", isCargo: false },
            { id: "MD-11F", typeName: "MD-11F (화물기)", seatsTypical: 93, range: 7240, firstFlight: 1991, productionStatus: "Retired", isCargo: true }
        ]
    },

    // MD-80 / MD-90 Series (그룹 카드)
    {
        id: "md-80-family",
        photoVariant: "MD-90",
        imageUrl: "images/md-80-family.jpg",
        manufacturer: "McDonnell Douglas",
        familyName: "MD-80 / MD-90 Series",
        isGroup: true,
        modelName: "MD-80 / MD-90",
        series: "MD-80/90 Series",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 155,
        range: 3800,
        firstFlight: 1979,
        productionStatus: "Retired",
        variants: [
            { id: "MD-81", typeName: "MD-81", seatsTypical: 155, range: 2900, firstFlight: 1979, productionStatus: "Retired" },
            { id: "MD-82", typeName: "MD-82", seatsTypical: 155, range: 3800, firstFlight: 1980, productionStatus: "Retired" },
            { id: "MD-83", typeName: "MD-83", seatsTypical: 155, range: 4600, firstFlight: 1984, productionStatus: "Retired" },
            { id: "MD-88", typeName: "MD-88", seatsTypical: 155, range: 4850, firstFlight: 1987, productionStatus: "Retired" },
            { id: "MD-90", typeName: "MD-90", seatsTypical: 172, range: 4445, firstFlight: 1993, productionStatus: "Retired" }
        ]
    }
];

// 전역 스코프에 노출하여 script.js에서 사용할 수 있게 함
if (typeof window !== 'undefined') {
    window.aircraftData = aircraftData;
}
