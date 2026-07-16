const aircraftData = [
    // ===== Airbus =====

    // A220 Family (그룹 카드)
    {
        id: "a220-family",
        engineOptions: ["Pratt & Whitney PW1500G"],
        photoVariant: "A220-300",
        description: "캐나다 봄바디어 C시리즈를 에어버스가 인수하여 재탄생시킨 차세대 고효율 단거리 여객기입니다. 좌석을 절반만 채워도 수익을 낼 수 있을 정도로 압도적인 경제성을 자랑하며, 넓은 좌석 폭과 더불어 이륙 및 하강 시 엔진에서 발생하는 특유의 고래 울음소리 같은 독특한 공명음이 대표적인 특징입니다.",
        imageUrl: "images/A220-300.jpg",
        manufacturer: "Airbus",
        familyName: "A220 Family",
        isGroup: true,
        modelName: "A220",
        series: "A220 Family",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 160,
        range: 6297,
        firstFlight: 2013,
        productionStatus: "Active",
        variants: [
            { id: "A220-100", engineOptions: ["PW1500G"], typeName: "A220-100", seatsTypical: 135, range: 5460, firstFlight: 2013, productionStatus: "Active", isCargo: false },
            { id: "A220-300", engineOptions: ["PW1500G"], typeName: "A220-300", seatsTypical: 160, range: 6297, firstFlight: 2015, productionStatus: "Active", isCargo: false }
        ]
    },

    // A300 Family (그룹 카드)
    {
        id: "a300-family",
        engineOptions: ["GE, PW (형식별 상이)"],
        photoVariant: "A300-600R",
        description: "에어버스가 개발한 역사상 최초의 쌍발 광동체 여객기이자 에어버스의 기틀을 다진 역사적인 기종입니다. 중단거리 고수요 노선에서 큰 성공을 거두었으며 화물기로도 널리 쓰였습니다.",
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
            { id: "A300B2", engineOptions: ["CF6-50", "JT9D-59A"], typeName: "A300B2", seatsTypical: 251, range: 3430, firstFlight: 1972, productionStatus: "Retired" },
            { id: "A300B4", engineOptions: ["CF6-50", "JT9D-59A"], typeName: "A300B4", seatsTypical: 251, range: 5375, firstFlight: 1974, productionStatus: "Retired" },
            { id: "A300-600", typeName: "A300-600", seatsTypical: 266, range: 7500, firstFlight: 1983, productionStatus: "Retired" },
            { id: "A300-600R", engineOptions: ["CF6-80C2", "PW4158"], typeName: "A300-600R", seatsTypical: 266, range: 7700, firstFlight: 1988, productionStatus: "Retired" },
            { id: "A300-600F", typeName: "A300-600F (화물기)", seatsTypical: 54, range: 4850, firstFlight: 1993, productionStatus: "Retired", isCargo: true }
        ]
    },

    // A310 Family (그룹 카드)
    {
        id: "a310-family",
        engineOptions: ["GE, PW (형식별 상이)"],
        photoVariant: "A310",
        description: "A300을 기반으로 동체를 단축하고 항속거리를 늘린 쌍발 광동체기입니다. 에어버스의 중형 광동체 라인업을 보강하며 대서양 횡단 노선 등에서 주로 활약했습니다.",
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
            { id: "A310-200", engineOptions: ["CF6-80A3", "JT9D-7R4D1"], typeName: "A310-200", seatsTypical: 220, range: 6800, firstFlight: 1982, productionStatus: "Retired" },
            { id: "A310-300", engineOptions: ["CF6-80C2", "PW4156A"], typeName: "A310-300", seatsTypical: 240, range: 8050, firstFlight: 1985, productionStatus: "Retired" }
        ]
    },

    // A320 Family (개별 카드 — 예외 처리)
    {
        id: "a318",
        engineOptions: ["CFM56", "PW6000"],
        photoVariant: "A318",
        description: "A320 패밀리 중 가장 동체가 짧아 '베이비 버스(Baby Bus)'라는 별명을 가지고 있습니다. 런던 시티 공항 같이 활주로가 짧고 진입각이 가파른 공항에 이착륙할 수 있도록 특화 설계되었습니다.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/F-GUGI_CDG_%2849806325246%29.jpg/500px-F-GUGI_CDG_%2849806325246%29.jpg",
        manufacturer: "Airbus",
        familyName: "A320 Family",
        isGroup: false,
        modelName: "A318",
        series: "A318-100",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 136,
        range: 5850,
        firstFlight: 2002,
        productionStatus: "Retired",
        variants: []
    },
    {
        id: "a319",
        engineOptions: ["CFM56", "V2500"],
        photoVariant: "A319",
        description: "A320을 약간 단축하여 항속거리를 늘린 모델입니다. 단거리 고수요 노선부터 중거리 노선까지 저비용 항공사(LCC)와 대형 항공사 모두에게 고루 인기를 끌었습니다.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/United_Airbus_A319_%2813942617705%29.jpg/500px-United_Airbus_A319_%2813942617705%29.jpg",
        manufacturer: "Airbus",
        familyName: "A320 Family",
        isGroup: false,
        modelName: "A319",
        series: "A319-100",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 160,
        range: 6850,
        firstFlight: 1995,
        productionStatus: "Retired",
        variants: []
    },
    {
        id: "a320",
        engineOptions: ["CFM56", "V2500"],
        photoVariant: "A320-200",
        description: "에어버스의 초베스트셀러 협동체 기종으로, 여객기 최초로 디지털 플라이 바이 와이어(Fly-by-Wire) 조종 계통을 탑재하여 민항기 조종 역사의 새로운 패러다임을 연 항공기입니다. 보잉 737의 가장 강력한 라이벌로서 저비용 항공사(LCC)들의 폭발적인 성장과 전 세계 항공 대중화를 이끈 핵심 기종이며, 기종 간 조종 호환성(Commonality)을 극대화한 설계를 도입했습니다.",
        imageUrl: "images/a320-200.jpg",
        manufacturer: "Airbus",
        familyName: "A320 Family",
        isGroup: false,
        modelName: "A320",
        series: "A320-200",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 180,
        range: 6100,
        firstFlight: 1987,
        productionStatus: "Retired",
        variants: []
    },
    {
        id: "a321",
        engineOptions: ["CFM56", "V2500"],
        photoVariant: "A321-200",
        description: "A320의 동체를 확장하여 좌석 공급량을 대폭 늘린 모델입니다. 협동체이면서도 높은 좌석당 경제성을 제공하여 전 세계 주요 고수요 단거리 노선의 핵심 기종으로 활약하고 있습니다.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Airbus_A321-231%28w%29_%E2%80%98N915US%E2%80%99_American_Airlines_%2828442733186%29.jpg/500px-Airbus_A321-231%28w%29_%E2%80%98N915US%E2%80%99_American_Airlines_%2828442733186%29.jpg",
        manufacturer: "Airbus",
        familyName: "A320 Family",
        isGroup: false,
        modelName: "A321",
        series: "A321-200",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 220,
        range: 5600,
        firstFlight: 1993,
        productionStatus: "Retired",
        variants: []
    },

    // A320neo Family (개별 카드 — 예외 처리)
    {
        id: "a319neo",
        engineOptions: ["CFM LEAP-1A", "PW1100G"],
        photoVariant: "A319neo",
        description: "A320neo 패밀리의 가장 작은 모델로, 최신 엔진과 샤클렛(Sharklet)을 장착하여 연료 효율을 극대화했습니다. 뛰어난 항속거리 성능으로 특수 중장거리 노선에 적합합니다.",
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
        engineOptions: ["CFM LEAP-1A", "PW1100G"],
        photoVariant: "A320neo",
        description: "베스트셀러 A320에 차세대 엔진(New Engine Option)을 탑재하고 익단 날개인 샤클렛을 장착해 연료 소모와 탄소 배출을 20% 가까이 감축시킨 친환경 중단거리 항공기입니다.",
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
        engineOptions: ["CFM LEAP-1A", "PW1100G"],
        photoVariant: "A321neo",
        description: "A321에 신형 엔진을 적용하여 효율성을 극대화한 기종입니다. 항속거리를 대폭 늘린 A321LR 및 A321XLR 등의 파생형을 통해 협동체로 장거리 대서양 횡단 및 대륙 간 노선을 개척하고 있습니다.",
        imageUrl: "images/a321neo.jpg",
        manufacturer: "Airbus",
        familyName: "A320neo Family",
        isGroup: true,
        modelName: "A321neo",
        series: "A321neo Family",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 244,
        range: 8700,
        firstFlight: 2016,
        productionStatus: "Active",
        variants: [
            { id: "A321neo", engineOptions: ["CFM LEAP-1A", "PW1100G"], typeName: "A321neo (기본형)", seatsTypical: 244, range: 6500, firstFlight: 2016, productionStatus: "Active", isCargo: false },
            { id: "A321LR", engineOptions: ["CFM LEAP-1A", "PW1100G"], typeName: "A321LR", seatsTypical: 244, range: 7400, firstFlight: 2018, productionStatus: "Active", isCargo: false },
            { id: "A321XLR", engineOptions: ["CFM LEAP-1A", "PW1100G"], typeName: "A321XLR", seatsTypical: 244, range: 8700, firstFlight: 2024, productionStatus: "Active", isCargo: false }
        ]
    },

    // A330 Family (그룹 카드)
    {
        id: "a330-family",
        engineOptions: ["GE, PW, RR (형식별 상이)"],
        photoVariant: "A330-300",
        description: "에어버스의 중장거리 대표 쌍발 광동체 여객기입니다. 높은 신뢰성과 뛰어난 경제성 덕분에 전 세계 대형 항공사들의 장거리 노선 주력 항공기로 오랫동안 사랑받고 있습니다. 탁월한 다목적성 덕분에 군용 수송기 및 공중급유기(MRTT)로도 널리 개조되어 활약하고 있습니다. 중장거리 노선의 교과서 같은 기종으로 에어버스의 안정적인 재정을 책임진 효자 모델입니다.",
        imageUrl: "images/a330-family.jpg",
        manufacturer: "Airbus",
        familyName: "A330 Family",
        isGroup: true,
        modelName: "A330",
        series: "A330 Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 295,
        range: 11750,
        firstFlight: 1992,
        productionStatus: "Retired",
        variants: [
            { id: "A330-200", engineOptions: ["CF6-80E1", "PW4000", "Trent 700"], typeName: "A330-200 (ceo)", seatsTypical: 247, range: 13450, firstFlight: 1997, productionStatus: "Retired" },
            { id: "A330-300", engineOptions: ["CF6-80E1", "PW4000", "Trent 700"], typeName: "A330-300 (ceo)", seatsTypical: 295, range: 11750, firstFlight: 1992, productionStatus: "Retired" }
        ]
    },

    // A330neo Family (그룹 카드)
    {
        id: "a330neo-family",
        engineOptions: ["Rolls-Royce Trent 7000"],
        photoVariant: "A330-900neo",
        description: "베스트셀러 A330에 최신 엔진과 A350 스타일의 날개 기술을 접목한 최신 개량형 모델입니다. 운영 비용을 대폭 줄이면서도 승객 편의성(Airspace 객실)을 혁신적으로 개선했습니다.",
        imageUrl: "images/a330neo-family.webp",
        manufacturer: "Airbus",
        familyName: "A330neo Family",
        isGroup: true,
        modelName: "A330neo",
        series: "A330neo Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 287,
        range: 13334,
        firstFlight: 2017,
        productionStatus: "Active",
        variants: [
            { id: "A330-800neo", engineOptions: ["Trent 7000"], typeName: "A330-800neo", seatsTypical: 257, range: 15094, firstFlight: 2018, productionStatus: "Active" },
            { id: "A330-900neo", engineOptions: ["Trent 7000"], typeName: "A330-900neo", seatsTypical: 287, range: 13334, firstFlight: 2017, productionStatus: "Active" }
        ]
    },

    // A340 Family (그룹 카드) — 신규 추가
    {
        id: "a340-family",
        engineOptions: ["CFM, Rolls-Royce (형식별 상이)"],
        photoVariant: "A340-600",
        description: "안정성을 극대화하기 위해 4발 엔진을 채택한 중장거리 여객기입니다. 쌍발기의 ETOPS 규제가 완화되기 전까지 초장거리 노선과 해양 비행의 최강자로 군림했던 기종입니다. A330과 동체 및 날개 설계를 공유하여 개발 비용을 낮추었습니다.",
        imageUrl: "images/a340-family.webp",
        manufacturer: "Airbus",
        familyName: "A340 Family",
        isGroup: true,
        modelName: "A340",
        series: "A340 Family",
        classification: "Wide-body",
        engines: 4,
        seatsTypical: 380,
        range: 14600,
        firstFlight: 1991,
        productionStatus: "Retired",
        variants: [
            { id: "A340-200", engineOptions: ["CFM56-5C"], typeName: "A340-200", seatsTypical: 261, range: 14800, firstFlight: 1992, productionStatus: "Retired" },
            { id: "A340-300", engineOptions: ["CFM56-5C"], typeName: "A340-300", seatsTypical: 295, range: 13700, firstFlight: 1991, productionStatus: "Retired" },
            { id: "A340-500", engineOptions: ["Trent 500"], typeName: "A340-500", seatsTypical: 313, range: 16670, firstFlight: 2002, productionStatus: "Retired" },
            { id: "A340-600", engineOptions: ["Trent 500"], typeName: "A340-600", seatsTypical: 380, range: 14600, firstFlight: 2001, productionStatus: "Retired" }
        ]
    },

    // A350 Family (그룹 카드)
    {
        id: "a350-family",
        engineOptions: ["Rolls-Royce Trent XWB"],
        photoVariant: "A350-900",
        description: "탄소 섬유 강화 플라스틱 등 첨단 신소재를 대거 사용하여 무게를 줄이고 연료 효율을 혁신적으로 높인 에어버스의 최첨단 광동체 플래그십 여객기입니다. 넓고 쾌적한 객실 환경을 제공합니다.",
        imageUrl: "images/a350-family.webp",
        manufacturer: "Airbus",
        familyName: "A350 Family",
        isGroup: true,
        modelName: "A350",
        series: "A350 XWB",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 369,
        range: 16100,
        firstFlight: 2013,
        productionStatus: "Active",
        variants: [
            { id: "A350-900", engineOptions: ["Trent XWB"], typeName: "A350-900", seatsTypical: 325, range: 15000, firstFlight: 2013, productionStatus: "Active" },
            { id: "A350-900ULR", engineOptions: ["Trent XWB"], typeName: "A350-900ULR", seatsTypical: 253, range: 18000, firstFlight: 2018, productionStatus: "Active" },
            { id: "A350-1000", engineOptions: ["Trent XWB"], typeName: "A350-1000", seatsTypical: 369, range: 16100, firstFlight: 2016, productionStatus: "Active" }
        ]
    },

    // A380 (단일 기종)
    {
        id: "a380",
        engineOptions: ["GP7200", "Trent 900"],
        photoVariant: "A380-800",
        description: "하늘 위의 5성급 호텔이라 불리는 세계 최대의 2층 복층형 광동체 여객기입니다. 압도적인 수송량과 조용하고 쾌적한 객실 공간으로 장거리 허브 공항 간 수송의 정점을 찍은 초대형 점보 기종입니다.",
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
        engineOptions: ["Pratt & Whitney Canada PW120"],
        photoVariant: "ATR 72",
        description: "프랑스와 이탈리아 합작사인 ATR에서 제작한 전 세계 대표 단거리 친환경 터보프롭(터빈 엔진 프롭기) 항공기입니다. 탁월한 연료 효율성과 거친 활주로에서도 운항 가능한 성능을 지녔습니다.",
        imageUrl: "images/tarom_skyteam.jpg",
        manufacturer: "Airbus",
        familyName: "ATR Series",
        isGroup: true,
        modelName: "ATR 42/72",
        series: "ATR Series",
        classification: "Turboprop",
        engines: 2,
        seatsTypical: 78,
        range: 1528,
        firstFlight: 1984,
        productionStatus: "Active",
        variants: [
            { id: "ATR42", engineOptions: ["PW120", "PW127"], typeName: "ATR 42", seatsTypical: 50, range: 1326, firstFlight: 1984, productionStatus: "Active", isCargo: false },
            { id: "ATR72", engineOptions: ["PW124B", "PW127"], typeName: "ATR 72", seatsTypical: 78, range: 1528, firstFlight: 1988, productionStatus: "Active", isCargo: false }
        ]
    },

    // ===== Boeing =====

    // 707 Family (그룹 카드)
    {
        id: "b707-family",
        engineOptions: ["Pratt & Whitney JT3D/JT4A"],
        photoVariant: "B707-320B",
        description: "상업용 제트 여객기 시대를 본격적으로 개척한 보잉의 역사적인 4발 제트기입니다. 전 세계 민항기 여행의 대중화를 이끌었으며 현대 여객기의 기본 설계를 완성한 기념비적 모델입니다.",
        imageUrl: "images/northwest_707.jpg",
        manufacturer: "Boeing",
        familyName: "707 Family",
        isGroup: true,
        modelName: "707",
        series: "707 Family",
        classification: "Narrow-body",
        engines: 4,
        seatsTypical: 219,
        range: 9265,
        firstFlight: 1957,
        productionStatus: "Retired",
        variants: [
            { id: "B707-120", engineOptions: ["JT3C"], typeName: "707-120", seatsTypical: 189, range: 4240, firstFlight: 1957, productionStatus: "Retired" },
            { id: "B707-320", typeName: "707-320", seatsTypical: 219, range: 6920, firstFlight: 1959, productionStatus: "Retired" },
            { id: "B707-320B", engineOptions: ["JT3D"], typeName: "707-320B", seatsTypical: 219, range: 9265, firstFlight: 1962, productionStatus: "Retired" },
            { id: "B707-320C", engineOptions: ["JT3D"], typeName: "707-320C", seatsTypical: 219, range: 9265, firstFlight: 1963, productionStatus: "Retired" }
        ]
    },

    // 717 (단일 기종)
    {
        id: "b717",
        engineOptions: ["Rolls-Royce BR715"],
        photoVariant: "B717-200",
        description: "보잉이 맥도넬 더글라스를 인수한 후 MD-95 설계를 이어받아 출시한 중단거리용 소형 쌍발 여객기입니다. 신뢰성이 높고 빠른 이착륙이 가능해 단거리 고빈도 노선에서 뛰어난 효율을 보여줍니다.",
        imageUrl: "images/b717.jpg",
        manufacturer: "Boeing",
        familyName: "717",
        isGroup: false,
        modelName: "717",
        series: "717-200",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 134,
        range: 2645,
        firstFlight: 1998,
        productionStatus: "Retired",
        variants: []
    },

    // 727 Family (그룹 카드)
    {
        id: "b727-family",
        engineOptions: ["Pratt & Whitney JT8D"],
        photoVariant: "B727-200",
        description: "동체 후방에 3개의 엔진을 배치하고 T자형 꼬리날개를 탑재한 보잉의 대표적인 3발 제트 여객기입니다. 우수한 활주로 이착륙 성능을 바탕으로 전 세계 중단거리 시장을 휩쓸었던 인기 모델입니다.",
        imageUrl: "images/b727-family.webp",
        manufacturer: "Boeing",
        familyName: "727 Family",
        isGroup: true,
        modelName: "727",
        series: "727 Family",
        classification: "Narrow-body",
        engines: 3,
        seatsTypical: 189,
        range: 4020,
        firstFlight: 1963,
        productionStatus: "Retired",
        variants: [
            { id: "B727-100", engineOptions: ["JT8D"], typeName: "727-100", seatsTypical: 131, range: 4170, firstFlight: 1963, productionStatus: "Retired" },
            { id: "B727-200", engineOptions: ["JT8D"], typeName: "727-200", seatsTypical: 189, range: 4020, firstFlight: 1967, productionStatus: "Retired" }
        ]
    },

    // 1. 737 Original (그룹 카드)
    {
        id: "b737-original",
        engineOptions: ["Pratt & Whitney JT8D"],
        photoVariant: "B737-200",
        description: "현재 전 세계 협동체 시장의 양대 산맥인 보잉 737 시리즈의 시초가 된 기종입니다. 엔진이 날개 밑에 매우 가깝게 장착된 특유의 낮은 지상고 디자인이 특징입니다. 기존 707 및 727의 동체 폭을 그대로 재활용하여 개발 비용을 절감하는 동시에 승객들에게 넓은 기내 공간을 제공해 큰 성공을 거두었습니다.",
        imageUrl: "images/b737-original.webp",
        manufacturer: "Boeing",
        familyName: "737 Original",
        isGroup: true,
        modelName: "737 Original",
        series: "737-100 / -200",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 136,
        range: 4260,
        firstFlight: 1967,
        productionStatus: "Retired",
        variants: [
            { id: "B737-100", engineOptions: ["JT8D"], typeName: "737-100", seatsTypical: 115, range: 3440, firstFlight: 1967, productionStatus: "Retired" },
            { id: "B737-200", engineOptions: ["JT8D"], typeName: "737-200", seatsTypical: 136, range: 4260, firstFlight: 1968, productionStatus: "Retired" }
        ]
    },

    // 2. 737 Classic (그룹 카드)
    {
        id: "b737-classic",
        engineOptions: ["CFM56-3"],
        photoVariant: "B737-300",
        description: "1세대 737에 이어 고효율 터보팬 엔진을 탑재하고 조종실 전자 장비를 개선한 2세대 737 시리즈입니다. 중단거리 수송량 증대에 큰 역할을 수행했습니다.",
        imageUrl: "images/b737-classic.jpg",
        manufacturer: "Boeing",
        familyName: "737 Classic",
        isGroup: true,
        modelName: "737 Classic",
        series: "737 Classic (-300/-400/-500)",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 188,
        range: 5000,
        firstFlight: 1984,
        productionStatus: "Retired",
        variants: [
            { id: "B737-300", engineOptions: ["CFM56-3"], typeName: "737-300", seatsTypical: 149, range: 4400, firstFlight: 1984, productionStatus: "Retired" },
            { id: "B737-400", engineOptions: ["CFM56-3"], typeName: "737-400", seatsTypical: 188, range: 5000, firstFlight: 1988, productionStatus: "Retired" },
            { id: "B737-500", engineOptions: ["CFM56-3"], typeName: "737-500", seatsTypical: 132, range: 5200, firstFlight: 1989, productionStatus: "Retired" }
        ]
    },

    // 3. 737 NG (그룹 카드)
    {
        id: "b737-ng",
        engineOptions: ["CFM56-7B"],
        photoVariant: "B737-800",
        description: "Next Generation의 약자로, 날개 설계와 디지털 콕핏을 완전히 새롭게 하여 현대 단거리 여객기 시장의 베스트셀러가 된 3세대 737입니다. 뛰어난 안정성과 경제성을 자랑합니다.",
        imageUrl: "images/b737-ng.jpg",
        manufacturer: "Boeing",
        familyName: "737 NG",
        isGroup: true,
        modelName: "737 NG",
        series: "737 Next Generation (-600~-900)",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 220,
        range: 5925,
        firstFlight: 1997,
        productionStatus: "Retired",
        variants: [
            { id: "B737-600", engineOptions: ["CFM56-7B"], typeName: "737-600", seatsTypical: 145, range: 5648, firstFlight: 1998, productionStatus: "Retired" },
            { id: "B737-700", engineOptions: ["CFM56-7B"], typeName: "737-700", seatsTypical: 149, range: 6370, firstFlight: 1997, productionStatus: "Retired" },
            { id: "B737-800", engineOptions: ["CFM56-7B"], typeName: "737-800", seatsTypical: 189, range: 5765, firstFlight: 1997, productionStatus: "Retired" },
            { id: "B737-900", engineOptions: ["CFM56-7B"], typeName: "737-900", seatsTypical: 189, range: 5080, firstFlight: 2000, productionStatus: "Retired" },
            { id: "B737-900ER", engineOptions: ["CFM56-7B"], typeName: "737-900ER", seatsTypical: 220, range: 5925, firstFlight: 2006, productionStatus: "Retired" }
        ]
    },

    // 4. 737 MAX (그룹 카드)
    {
        id: "b737-max",
        engineOptions: ["CFM LEAP-1B"],
        photoVariant: "B737 MAX 8",
        description: "최신 CFMI LEAP-1B 엔진과 독특한 분할형 윙렛(Split-Scimitar Winglet)을 장착하여 연비 효율을 극대화한 4세대 737 시리즈입니다. 뛰어난 항속거리로 장거리 단거리 노선을 동시 커버합니다.",
        imageUrl: "images/737max.jpg",
        manufacturer: "Boeing",
        familyName: "737 MAX",
        isGroup: true,
        modelName: "737 MAX",
        series: "737 MAX 7/8/9/10",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 230,
        range: 6110,
        firstFlight: 2016,
        productionStatus: "Active",
        variants: [
            { id: "B737-MAX7", engineOptions: ["LEAP-1B"], typeName: "737 MAX 7", seatsTypical: 172, range: 7130, firstFlight: 2018, productionStatus: "Active" },
            { id: "B737-MAX8", engineOptions: ["LEAP-1B"], typeName: "737 MAX 8", seatsTypical: 189, range: 6570, firstFlight: 2016, productionStatus: "Active" },
            { id: "B737-MAX9", engineOptions: ["LEAP-1B"], typeName: "737 MAX 9", seatsTypical: 220, range: 6570, firstFlight: 2020, productionStatus: "Active" },
            { id: "B737-MAX10", engineOptions: ["LEAP-1B"], typeName: "737 MAX 10", seatsTypical: 230, range: 6110, firstFlight: 2021, productionStatus: "Active" }
        ]
    },

    // 747 Family (그룹 카드)
    {
        id: "b747-family",
        engineOptions: ["GE, PW, RR (형식별 상이)"],
        photoVariant: "B747-8I",
        description: "'하늘의 여왕(Queen of the Skies)'으로 불리는 세계 최초의 복층 초대형 여객기입니다. 앞부분이 튀어나온 트레이드마크로 많은 사람들에게 알려져 있으며, 반세기 넘게 장거리 항공기의 상징으로 군림하며 전 세계 대규모 장거리 해외 여행 대중화를 이끌었습니다.",
        imageUrl: "images/b747-family.jpg",
        manufacturer: "Boeing",
        familyName: "747 Family",
        isGroup: true,
        modelName: "747",
        series: "747 Family",
        classification: "Wide-body",
        engines: 4,
        seatsTypical: 467,
        range: 14815,
        firstFlight: 1969,
        productionStatus: "Retired",
        variants: [
            { id: "B747-100", engineOptions: ["JT9D", "CF6-50", "RB211"], typeName: "747-100", seatsTypical: 366, range: 9800, firstFlight: 1969, productionStatus: "Retired" },
            { id: "B747-200", engineOptions: ["JT9D", "CF6-50", "RB211"], typeName: "747-200", seatsTypical: 366, range: 12700, firstFlight: 1971, productionStatus: "Retired" },
            { id: "B747-300", engineOptions: ["JT9D", "CF6-50", "RB211"], typeName: "747-300", seatsTypical: 400, range: 12400, firstFlight: 1983, productionStatus: "Retired" },
            { id: "B747-400", engineOptions: ["PW4056", "CF6-80C2", "RB211-524G"], typeName: "747-400", seatsTypical: 416, range: 13450, firstFlight: 1988, productionStatus: "Retired" },
            { id: "B747-400F", engineOptions: ["PW4056", "CF6-80C2", "RB211-524G"], typeName: "747-400F (화물기)", seatsTypical: 113, range: 8240, firstFlight: 1993, productionStatus: "Retired", isCargo: true },
            { id: "B747-8I", engineOptions: ["GEnx-2B67"], typeName: "747-8 Intercontinental", seatsTypical: 467, range: 14815, firstFlight: 2011, productionStatus: "Retired" },
            { id: "B747-8F", engineOptions: ["GEnx-2B67"], typeName: "747-8F (화물기)", seatsTypical: 134, range: 8130, firstFlight: 2010, productionStatus: "Retired", isCargo: true }
        ]
    },

    // 757 Family (그룹 카드)
    {
        id: "b757-family",
        engineOptions: ["Rolls-Royce, PW (형식별 상이)"],
        photoVariant: "B757-200",
        description: "단거리 고수요 노선과 중거리 대서양 횡단 노선을 동시에 커버하도록 설계된 단일 통로(협동체) 기종입니다. 뛰어난 추력 대비 중량 성능 덕분에 높은 고도의 공항이나 짧은 활주로에서도 이륙 성능이 매우 탁월합니다.",
        imageUrl: "images/b757-family.webp",
        manufacturer: "Boeing",
        familyName: "757 Family",
        isGroup: true,
        modelName: "757",
        series: "757 Family",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 295,
        range: 6421,
        firstFlight: 1982,
        productionStatus: "Retired",
        variants: [
            { id: "B757-200", engineOptions: ["RB211-535", "PW2000"], typeName: "757-200", seatsTypical: 239, range: 7222, firstFlight: 1982, productionStatus: "Retired" },
            { id: "B757-300", engineOptions: ["RB211-535", "PW2000"], typeName: "757-300", seatsTypical: 295, range: 6421, firstFlight: 1999, productionStatus: "Retired" }
        ]
    },

    // 767 Family (그룹 카드)
    {
        id: "b767-family",
        engineOptions: ["GE, PW, RR (형식별 상이)"],
        photoVariant: "B767-300(non-ER)",
        imageUrl: "images/b767-family.jpg",
        manufacturer: "Boeing",
        familyName: "767 Family",
        isGroup: true,
        modelName: "767",
        series: "767 Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 304,
        range: 10415,
        firstFlight: 1981,
        productionStatus: "Active",
        description: "보잉 최초의 광동체 쌍발 여객기이자 중장거리 시장을 개척한 베스트셀러 모델입니다. 광동체 최초로 조종실 디지털화(글래스 콕핏)를 달성하여 항공기관사 승무가 필요 없는 '2인 조종사 체제'를 확립했습니다. 여객형 모델들은 점차 퇴역하고 있으나, 높은 신뢰성과 화물 적재 효율성 덕분에 767-300F 화물기는 전 세계 주요 특송 물류망의 주력 기종으로 여전히 활발히 생산 및 운항되고 있습니다.",
        variants: [
            { id: "B767-200", engineOptions: ["CF6-80C2", "PW4000", "RB211-524"], typeName: "767-200", seatsTypical: 216, range: 7200, firstFlight: 1981, productionStatus: "Retired" },
            { id: "B767-200ER", engineOptions: ["CF6-80C2", "PW4000", "RB211-524"], typeName: "767-200ER", seatsTypical: 224, range: 12200, firstFlight: 1984, productionStatus: "Retired" },
            { id: "B767-300", engineOptions: ["CF6-80C2", "PW4000", "RB211-524"], typeName: "767-300", seatsTypical: 269, range: 7200, firstFlight: 1986, productionStatus: "Retired" },
            { id: "B767-300ER", engineOptions: ["CF6-80C2", "PW4000", "RB211-524"], typeName: "767-300ER", seatsTypical: 269, range: 11070, firstFlight: 1988, productionStatus: "Retired" },
            { id: "B767-300F", engineOptions: ["CF6-80C2", "PW4000", "RB211-524"], typeName: "767-300F (화물기)", seatsTypical: 52, range: 6025, firstFlight: 1995, productionStatus: "Active", isCargo: true },
            { id: "B767-400ER", engineOptions: ["CF6-80C2"], typeName: "767-400ER", seatsTypical: 304, range: 10415, firstFlight: 2000, productionStatus: "Retired" }
        ]
    },

    // 777 Family (클래식 기종 및 화물기)
    {
        id: "b777-family",
        engineOptions: ["GE, PW, RR (형식별 상이)"],
        photoVariant: "B777-300ER",
        description: "'트리플 세븐'이라는 애칭으로 불리는 세계 최대의 쌍발 광동체 여객기입니다. 압도적인 크기의 엔진 추력과 광활한 기내 공간을 기반으로 3발 및 4발 광동체 여객기 시대를 종식시키고 장거리 표준 기종으로 자리매김했습니다.",
        imageUrl: "images/b777-family.jpg",
        manufacturer: "Boeing",
        familyName: "777 Family",
        isGroup: true,
        modelName: "777",
        series: "777 Family",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 396,
        range: 13650,
        firstFlight: 1994,
        productionStatus: "Active",
        variants: [
            { id: "B777-200", engineOptions: ["GE90", "PW4000", "Trent 800"], typeName: "777-200", seatsTypical: 305, range: 9700, firstFlight: 1994, productionStatus: "Retired", isCargo: false },
            { id: "B777-200ER", engineOptions: ["GE90", "PW4000", "Trent 800"], typeName: "777-200ER", seatsTypical: 314, range: 13080, firstFlight: 1997, productionStatus: "Retired", isCargo: false },
            { id: "B777-200LR", engineOptions: ["GE90-110B"], typeName: "777-200LR", seatsTypical: 317, range: 15843, firstFlight: 2005, productionStatus: "Retired", isCargo: false },
            { id: "B777-300", engineOptions: ["GE90", "PW4000", "Trent 800"], typeName: "777-300", seatsTypical: 368, range: 11121, firstFlight: 1998, productionStatus: "Retired", isCargo: false },
            { id: "B777-300ER", engineOptions: ["GE90-115B"], typeName: "777-300ER", seatsTypical: 396, range: 13650, firstFlight: 2003, productionStatus: "Retired", isCargo: false },
            { id: "B777F", engineOptions: ["GE90-110B"], typeName: "777F (화물기)", seatsTypical: 102, range: 9200, firstFlight: 2008, productionStatus: "Active", isCargo: true }
        ]
    },

    // 777X Family (차세대 접이식 wingtip 기종)
    {
        id: "b777x-family",
        engineOptions: ["General Electric GE9X"],
        photoVariant: "B777-9",
        description: "베스트셀러 777을 개량한 차세대 초대형 쌍발 여객기입니다. 공항 게이트 진입 시 날개 끝을 접을 수 있는 접이식 윙팁(Folding Wingtip)과 초경량 탄소섬유 날개를 적용해 혁신적인 연비 개선을 이뤄냈습니다.",
        imageUrl: "images/b777x-family.jpg",
        manufacturer: "Boeing",
        familyName: "777X Family",
        isGroup: true,
        modelName: "777X",
        series: "777X (777-8 / -9)",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 426,
        range: 13500,
        firstFlight: 2020,
        productionStatus: "Development",
        variants: [
            { id: "B777-8", engineOptions: ["GE9X"], typeName: "777-8", seatsTypical: 384, range: 16170, firstFlight: 2024, productionStatus: "Development", isCargo: false },
            { id: "B777-9", engineOptions: ["GE9X"], typeName: "777-9", seatsTypical: 426, range: 13500, firstFlight: 2020, productionStatus: "Development", isCargo: false }
        ]
    },

    // 787 Dreamliner (그룹 카드)
    {
        id: "b787-family",
        engineOptions: ["GEnx-1B", "Trent 1000"],
        photoVariant: "B787-9",
        description: "'드림라이너'라는 이름으로 친숙한 보잉의 혁신적인 친환경 중장거리 광동체 여객기입니다. 동체의 50% 이상에 탄소 복합 신소재를 적용하여 기압과 습도가 쾌적하게 유지되는 혁신적인 객실을 탑재했습니다.",
        imageUrl: "images/b787-family.jpg",
        manufacturer: "Boeing",
        familyName: "787 Dreamliner",
        isGroup: true,
        modelName: "787",
        series: "787 Dreamliner",
        classification: "Wide-body",
        engines: 2,
        seatsTypical: 330,
        range: 11910,
        firstFlight: 2009,
        productionStatus: "Active",
        variants: [
            { id: "B787-8", engineOptions: ["GEnx-1B", "Trent 1000"], typeName: "787-8", seatsTypical: 242, range: 13621, firstFlight: 2009, productionStatus: "Active" },
            { id: "B787-9", engineOptions: ["GEnx-1B", "Trent 1000"], typeName: "787-9", seatsTypical: 296, range: 14010, firstFlight: 2013, productionStatus: "Active" },
            { id: "B787-10", engineOptions: ["GEnx-1B", "Trent 1000"], typeName: "787-10", seatsTypical: 330, range: 11910, firstFlight: 2017, productionStatus: "Active" }
        ]
    },

    // ===== Bombardier =====

    // CRJ Series (그룹 카드)
    {
        id: "crj-family",
        engineOptions: ["General Electric CF34"],
        photoVariant: "CRJ-700",
        description: "캐나다 봄바디어(현재는 미쓰비시 항공)에서 개발한 전 세계 대표 중소형 지역 여객기(Regional Jet) 시리즈입니다. 소도시 간 빠른 연결 편을 제공하는 리저널 노선에서 핵심 역할을 담당해 왔습니다.",
        imageUrl: "images/crj-family.jpg",
        manufacturer: "Bombardier",
        familyName: "CRJ Series",
        isGroup: true,
        modelName: "CRJ",
        series: "CRJ Series",
        classification: "Regional Jet",
        engines: 2,
        seatsTypical: 104,
        range: 2761,
        firstFlight: 1991,
        productionStatus: "Retired",
        variants: [
            { id: "CRJ100", engineOptions: ["CF34-3"], typeName: "CRJ100", seatsTypical: 50, range: 2491, firstFlight: 1991, productionStatus: "Retired" },
            { id: "CRJ200", engineOptions: ["CF34-3"], typeName: "CRJ200", seatsTypical: 50, range: 3148, firstFlight: 1995, productionStatus: "Retired" },
            { id: "CRJ700", engineOptions: ["CF34-8C"], typeName: "CRJ700", seatsTypical: 78, range: 3620, firstFlight: 1999, productionStatus: "Retired" },
            { id: "CRJ900", engineOptions: ["CF34-8C"], typeName: "CRJ900", seatsTypical: 90, range: 2876, firstFlight: 2001, productionStatus: "Retired" },
            { id: "CRJ1000", engineOptions: ["CF34-8C"], typeName: "CRJ1000", seatsTypical: 104, range: 2761, firstFlight: 2008, productionStatus: "Retired" }
        ]
    },

    // Dash 8 Family (그룹 카드)
    {
        id: "dash-8-family",
        engineOptions: ["Pratt & Whitney Canada PW100"],
        photoVariant: "Dash 8-400",
        description: "봄바디어사(현재는 De Havilland Canada)의 중단거리용 터보프롭 항공기입니다. 소음 및 진동 억제 기술(Q-Series)을 탑재하여 프롭기이면서도 매우 정숙하며, 우수한 이착륙 성능으로 섬이나 내륙 오지 노선에서 활약합니다.",
        imageUrl: "images/dash-8-family.jpg",
        manufacturer: "Bombardier",
        familyName: "Dash 8 Series",
        isGroup: true,
        modelName: "Dash 8",
        series: "Dash 8 Series",
        classification: "Turboprop",
        engines: 2,
        seatsTypical: 90,
        range: 2040,
        firstFlight: 1983,
        productionStatus: "Retired",
        variants: [
            { id: "Dash8-100", engineOptions: ["PW120/PW121"], typeName: "Dash 8-100", seatsTypical: 39, range: 1889, firstFlight: 1983, productionStatus: "Retired" },
            { id: "Dash8-200", engineOptions: ["PW123"], typeName: "Dash 8-200", seatsTypical: 39, range: 1713, firstFlight: 1995, productionStatus: "Retired" },
            { id: "Dash8-300", engineOptions: ["PW123"], typeName: "Dash 8-300", seatsTypical: 56, range: 1558, firstFlight: 1987, productionStatus: "Retired" },
            { id: "Dash8-400", engineOptions: ["PW150A"], typeName: "Dash 8-400 (Q400)", seatsTypical: 90, range: 2040, firstFlight: 1998, productionStatus: "Retired" }
        ]
    },

    // ===== Embraer =====

    // ERJ Family (그룹 카드) — 신규 추가
    {
        id: "erj-family",
        engineOptions: ["Rolls-Royce AE 3007"],
        photoVariant: "ERJ-145XR",
        description: "브라질의 엠브라에르사에서 제작한 소형 리저널 제트 여객기 제품군입니다. 37~50인승 소규모 수송에 최적화되어 항공 여객 수요가 적은 중소도시 간 연결망 구축에 크게 기여했습니다.",
        imageUrl: "images/erj-family.jpg",
        manufacturer: "Embraer",
        familyName: "ERJ Family",
        isGroup: true,
        modelName: "ERJ",
        series: "ERJ Family",
        classification: "Regional Jet",
        engines: 2,
        seatsTypical: 50,
        range: 3019,
        firstFlight: 1995,
        productionStatus: "Retired",
        variants: [
            { id: "ERJ-135", engineOptions: ["AE 3007"], typeName: "ERJ-135", seatsTypical: 37, range: 3241, firstFlight: 1998, productionStatus: "Retired" },
            { id: "ERJ-140", engineOptions: ["AE 3007"], typeName: "ERJ-140", seatsTypical: 44, range: 2816, firstFlight: 2000, productionStatus: "Retired" },
            { id: "ERJ-145", engineOptions: ["AE 3007"], typeName: "ERJ-145", seatsTypical: 50, range: 3019, firstFlight: 1995, productionStatus: "Retired" }
        ]
    },

    // E-Jet Family (그룹 카드)
    {
        id: "e-jet-family",
        engineOptions: ["General Electric CF34"],
        photoVariant: "E175",
        description: "엠브라에르의 대표적인 70~100인승급 대형 리저널 제트기 패밀리입니다. 협동체 여객기에 버금가는 2-2 좌석 배치로 가운데 낀 좌석이 없으며 쾌적하고 넓은 기내 환경을 선사합니다.",
        imageUrl: "images/e-jet-family.webp",
        manufacturer: "Embraer",
        familyName: "E-Jet Family",
        isGroup: true,
        modelName: "E-Jet",
        series: "E-Jet Family",
        classification: "Regional Jet",
        engines: 2,
        seatsTypical: 124,
        range: 4260,
        firstFlight: 2002,
        productionStatus: "Active",
        variants: [
            { id: "E170", engineOptions: ["CF34-8E"], typeName: "E170", seatsTypical: 78, range: 3982, firstFlight: 2002, productionStatus: "Active" },
            { id: "E175", engineOptions: ["CF34-8E"], typeName: "E175", seatsTypical: 88, range: 3704, firstFlight: 2004, productionStatus: "Active" },
            { id: "E190", engineOptions: ["CF34-10E"], typeName: "E190", seatsTypical: 114, range: 4537, firstFlight: 2004, productionStatus: "Active" },
            { id: "E195", engineOptions: ["CF34-10E"], typeName: "E195", seatsTypical: 124, range: 4260, firstFlight: 2004, productionStatus: "Active" }
        ]
    },

    // E-Jet E2 Family (그룹 카드)
    {
        id: "e-jet-e2-family",
        engineOptions: ["Pratt & Whitney PW1900G"],
        photoVariant: "E195-E2",
        description: "성공적인 E-Jet 제품군에 프랫앤휘트니사의 차세대 기어드 터보팬(GTF) 엔진과 초정밀 날개 설계를 적용한 고효율 리저널 제트기입니다. 동급 시장에서 가장 친환경적이고 조용한 운항 성능을 제공합니다.",
        imageUrl: "images/e-jet-e2-family.jpg",
        manufacturer: "Embraer",
        familyName: "E-Jet E2 Family",
        isGroup: true,
        modelName: "E-Jet E2",
        series: "E-Jet E2 Family",
        classification: "Regional Jet",
        engines: 2,
        seatsTypical: 146,
        range: 4815,
        firstFlight: 2016,
        productionStatus: "Active",
        variants: [
            { id: "E175-E2", engineOptions: ["PW1700G"], typeName: "E175-E2", seatsTypical: 90, range: 3735, firstFlight: 2019, productionStatus: "Active" },
            { id: "E190-E2", engineOptions: ["PW1900G"], typeName: "E190-E2", seatsTypical: 114, range: 5278, firstFlight: 2016, productionStatus: "Active" },
            { id: "E195-E2", engineOptions: ["PW1900G"], typeName: "E195-E2", seatsTypical: 146, range: 4815, firstFlight: 2017, productionStatus: "Active" }
        ]
    },

    // ===== Douglas / McDonnell Douglas =====

    // DC-8 Family (그룹 카드)
    {
        id: "dc-8-family",
        engineOptions: ["PW, Rolls-Royce, CFM (형식별 상이)"],
        photoVariant: "DC-8-61",
        description: "보잉 707과 경쟁하며 초기 민항 제트기 시대를 양분했던 더글라스의 4발 협동체 여객기입니다. 튼튼한 동체 설계 덕분에 수명이 매우 길어 여객 퇴역 후에도 화물기로 오랫동안 각광을 받았습니다.",
        imageUrl: "images/dc-8-family.jpg",
        manufacturer: "McDonnell Douglas",
        familyName: "DC-8 Family",
        isGroup: true,
        modelName: "DC-8",
        series: "DC-8",
        classification: "Narrow-body",
        engines: 4,
        seatsTypical: 259,
        range: 8500,
        firstFlight: 1958,
        productionStatus: "Retired",
        variants: [
            { id: "DC-8-11", engineOptions: ["JT3C"], typeName: "DC-8-11", seatsTypical: 177, range: 3900, firstFlight: 1958, productionStatus: "Retired" },
            { id: "DC-8-21", engineOptions: ["JT4A"], typeName: "DC-8-21", seatsTypical: 177, range: 5300, firstFlight: 1958, productionStatus: "Retired" },
            { id: "DC-8-31", engineOptions: ["JT4A"], typeName: "DC-8-31", seatsTypical: 177, range: 7410, firstFlight: 1959, productionStatus: "Retired" },
            { id: "DC-8-41", engineOptions: ["Conway"], typeName: "DC-8-41", seatsTypical: 177, range: 7500, firstFlight: 1960, productionStatus: "Retired" },
            { id: "DC-8-51", engineOptions: ["JT3D"], typeName: "DC-8-51", seatsTypical: 189, range: 8400, firstFlight: 1960, productionStatus: "Retired" },
            { id: "DC-8-61", engineOptions: ["JT3D"], typeName: "DC-8-61 (Super 61)", seatsTypical: 259, range: 6000, firstFlight: 1966, productionStatus: "Retired" },
            { id: "DC-8-62", engineOptions: ["JT3D"], typeName: "DC-8-62 (Super 62)", seatsTypical: 189, range: 9600, firstFlight: 1966, productionStatus: "Retired" },
            { id: "DC-8-63", engineOptions: ["JT3D"], typeName: "DC-8-63 (Super 63)", seatsTypical: 259, range: 8500, firstFlight: 1967, productionStatus: "Retired" },
            { id: "DC-8-71", engineOptions: ["CFM56-2"], typeName: "DC-8-71 (Super 71)", seatsTypical: 259, range: 6300, firstFlight: 1981, productionStatus: "Retired" },
            { id: "DC-8-72", engineOptions: ["CFM56-2"], typeName: "DC-8-72 (Super 72)", seatsTypical: 189, range: 10100, firstFlight: 1981, productionStatus: "Retired" },
            { id: "DC-8-73", engineOptions: ["CFM56-2"], typeName: "DC-8-73 (Super 73)", seatsTypical: 259, range: 8900, firstFlight: 1982, productionStatus: "Retired" }
        ]
    },

    // DC-9 Family (그룹 카드)
    {
        id: "dc-9-family",
        engineOptions: ["Pratt & Whitney JT8D"],
        photoVariant: "DC-9-30",
        description: "더글라스가 단거리 노선의 제트화를 위해 개발한 쌍발 협동체 여객기입니다. 동체 후방의 제트 엔진 2개와 T자 꼬리날개 디자인이 특징이며, 훗날 MD-80, MD-90 및 보잉 717로 계승되는 전설적인 라인업의 시초입니다.",
        imageUrl: "images/dc-9-family.jpg",
        manufacturer: "McDonnell Douglas",
        familyName: "DC-9 Family",
        isGroup: true,
        modelName: "DC-9",
        series: "DC-9 Family",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 135,
        range: 3300,
        firstFlight: 1965,
        productionStatus: "Retired",
        variants: [
            { id: "DC-9-11", engineOptions: ["JT8D-5"], typeName: "DC-9-11", seatsTypical: 90, range: 2340, firstFlight: 1965, productionStatus: "Retired" },
            { id: "DC-9-15", engineOptions: ["JT8D-7"], typeName: "DC-9-15", seatsTypical: 90, range: 2600, firstFlight: 1965, productionStatus: "Retired" },
            { id: "DC-9-21", engineOptions: ["JT8D-9"], typeName: "DC-9-21", seatsTypical: 90, range: 2900, firstFlight: 1968, productionStatus: "Retired" },
            { id: "DC-9-31", engineOptions: ["JT8D-9"], typeName: "DC-9-31", seatsTypical: 115, range: 3030, firstFlight: 1966, productionStatus: "Retired" },
            { id: "DC-9-32", engineOptions: ["JT8D-11"], typeName: "DC-9-32", seatsTypical: 115, range: 3000, firstFlight: 1967, productionStatus: "Retired" },
            { id: "DC-9-41", engineOptions: ["JT8D-15"], typeName: "DC-9-41", seatsTypical: 125, range: 2870, firstFlight: 1967, productionStatus: "Retired" },
            { id: "DC-9-51", engineOptions: ["JT8D-17"], typeName: "DC-9-51", seatsTypical: 135, range: 3300, firstFlight: 1974, productionStatus: "Retired" }
        ]
    },

    // DC-10 Family (그룹 카드)
    {
        id: "dc-10-family",
        engineOptions: ["GE, PW (형식별 상이)"],
        photoVariant: "DC-10-30",
        description: "맥도넬 더글라스의 대표적인 3발 대형 여객기입니다. 수직꼬리날개 중간을 관통하는 거대한 2번 엔진 설계가 특징이며, 수많은 장거리 노선에서 활약했고 이후 개량형인 MD-11 개발의 든든한 밑거름이 되었습니다.",
        imageUrl: "images/dc-10-family.jpg",
        manufacturer: "McDonnell Douglas",
        familyName: "DC-10 Family",
        isGroup: true,
        modelName: "DC-10",
        series: "DC-10",
        classification: "Wide-body",
        engines: 3,
        seatsTypical: 380,
        range: 9600,
        firstFlight: 1970,
        productionStatus: "Retired",
        variants: [
            { id: "DC-10-10", engineOptions: ["CF6-6D"], typeName: "DC-10-10", seatsTypical: 380, range: 6110, firstFlight: 1970, productionStatus: "Retired" },
            { id: "DC-10-30", engineOptions: ["CF6-50C", "JT9D-59A"], typeName: "DC-10-30", seatsTypical: 380, range: 9600, firstFlight: 1972, productionStatus: "Retired" }
        ]
    },

    // MD-11 Family (그룹 카드)
    {
        id: "md-11-family",
        engineOptions: ["GE, PW (형식별 상이)"],
        photoVariant: "MD-11F",
        description: "맥도넬 더글라스사의 상징적인 3발 광동체 여객기입니다. 꼬리날개 하단에 세 번째 엔진을 장착한 독특한 디자인이 특징이며, 여객기로서의 시대를 마감한 뒤 현재는 강력한 화물 수송력으로 화물기로 활약하고 있습니다.",
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
            { id: "MD-11P", engineOptions: ["CF6-80C2", "PW4460/4462"], typeName: "MD-11 (여객형)", seatsTypical: 298, range: 12670, firstFlight: 1990, productionStatus: "Retired", isCargo: false },
            { id: "MD-11F", engineOptions: ["CF6-80C2", "PW4460/4462"], typeName: "MD-11F (화물기)", seatsTypical: 93, range: 7240, firstFlight: 1991, productionStatus: "Retired", isCargo: true }
        ]
    },

    // MD-80 Series (그룹 카드)
    {
        id: "md-80-family",
        engineOptions: ["Pratt & Whitney JT8D-200"],
        photoVariant: "MD-83",
        description: "MD-80 시리즈는 동체 후방에 장착된 2개의 엔진과 날렵한 기체 형상이 특징인 협동체 여객기입니다. 높은 신뢰성과 기내 뒤쪽에 엔진이 달린 기체 구조 특유의 저소음(전방 기준)으로 한 시대를 풍미했습니다.",
        imageUrl: "images/md-80-family.jpg",
        manufacturer: "McDonnell Douglas",
        familyName: "MD-80 Series",
        isGroup: true,
        modelName: "MD-80",
        series: "MD-80 Series",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 172,
        range: 4850,
        firstFlight: 1979,
        productionStatus: "Retired",
        variants: [
            { id: "MD-81", engineOptions: ["JT8D-209"], typeName: "MD-81", seatsTypical: 172, range: 2900, firstFlight: 1979, productionStatus: "Retired" },
            { id: "MD-82", engineOptions: ["JT8D-217"], typeName: "MD-82", seatsTypical: 172, range: 3800, firstFlight: 1980, productionStatus: "Retired" },
            { id: "MD-83", engineOptions: ["JT8D-219"], typeName: "MD-83", seatsTypical: 172, range: 4600, firstFlight: 1984, productionStatus: "Retired" },
            { id: "MD-88", engineOptions: ["JT8D-219"], typeName: "MD-88", seatsTypical: 172, range: 4850, firstFlight: 1987, productionStatus: "Retired" }
        ]
    },

    // MD-90 (단일 기종)
    {
        id: "md-90",
        engineOptions: ["IAE V2500"],
        photoVariant: "MD-90",
        description: "기존 MD-80 시리즈의 후속 기종으로, 동체를 연장하고 소음 및 연료 효율이 우수한 IAE V2500 고바이패스 터보팬 엔진을 장착한 협동체 여객기입니다. 뛰어난 연비 성능과 쾌적한 기내 환경을 바탕으로 아시아와 미국 단거리 노선에서 활발히 운항되었습니다.",
        imageUrl: "images/md-90.jpg",
        manufacturer: "McDonnell Douglas",
        familyName: "MD-90",
        isGroup: false,
        modelName: "MD-90",
        series: "MD-90",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 172,
        range: 4445,
        firstFlight: 1993,
        productionStatus: "Retired",
        variants: []
    },

    // ===== Aerospatiale/BAC =====

    // Concorde (단일 기종)
    {
        id: "concorde",
        engineOptions: ["Rolls-Royce/Snecma Olympus 593"],
        photoVariant: "Concorde",
        description: "프랑스의 아에로스파시알과 영국의 BAC가 공동 개발한 최초이자 전설적인 초음속 여객기입니다. 마하 2.04의 속도로 대서양을 3시간 대에 횡단하며 럭셔리 비행의 극치를 보여주었으나, 높은 소음과 연비 문제로 2003년에 퇴역했습니다. 에어로스파시알은 현재 에어버스의 전신 회사입니다.",
        imageUrl: "images/concorde.jpg",
        manufacturer: "Aerospatiale/BAC",
        familyName: "Concorde",
        isGroup: false,
        modelName: "Concorde",
        series: "Concorde",
        classification: "Narrow-body, Supersonic",
        engines: 4,
        seatsTypical: 128,
        range: 7222,
        firstFlight: 1969,
        productionStatus: "Retired",
        variants: []
    },

    // ===== Lockheed Martin =====

    // L-1011 TriStar (그룹 카드)
    {
        id: "l1011-tristar",
        engineOptions: ["Rolls-Royce RB211"],
        photoVariant: "L-1011-300",
        description: "전투기 명가 록히드가 설계한 독창적인 3발 광동체 여객기입니다. 오토파일럿과 완전 자동 착륙 시스템 등 시대를 앞서간 혁신 기술을 아낌없이 도입했으나, 엔진 수급 지연 등으로 비운의 걸작으로 남았습니다.",
        imageUrl: "images/l1011-tristar.jpg",
        manufacturer: "Lockheed Martin",
        familyName: "L-1011 TriStar",
        isGroup: true,
        modelName: "L-1011",
        series: "L-1011 TriStar",
        classification: "Wide-body",
        engines: 3,
        seatsTypical: 330,
        range: 9630,
        firstFlight: 1970,
        productionStatus: "Retired",
        variants: [
            { id: "L1011-1", engineOptions: ["RB211-22B"], typeName: "L-1011-1", seatsTypical: 400, range: 4960, firstFlight: 1970, productionStatus: "Retired" },
            { id: "L1011-100", engineOptions: ["RB211-22B"], typeName: "L-1011-100", seatsTypical: 400, range: 6900, firstFlight: 1975, productionStatus: "Retired" },
            { id: "L1011-200", engineOptions: ["RB211-524"], typeName: "L-1011-200", seatsTypical: 400, range: 6900, firstFlight: 1976, productionStatus: "Retired" },
            { id: "L1011-300", engineOptions: ["RB211-524"], typeName: "L-1011-300", seatsTypical: 330, range: 9630, firstFlight: 1978, productionStatus: "Retired" },
            { id: "L1011-500", engineOptions: ["RB211-524"], typeName: "L-1011-500", seatsTypical: 330, range: 9630, firstFlight: 1978, productionStatus: "Retired" }
        ]
    },

    // ===== COMAC =====

    // C909 (그룹 카드)
    {
        id: "c909-family",
        engineOptions: ["General Electric CF34-10A"],
        photoVariant: "C909",
        description: "중국 상하이 비행기 제조사(COMAC)가 독자 개발한 쌍발 리저널 제트기(기존 ARJ21에서 C909로 리브랜딩)입니다. 고지대 및 고온 기후 공항의 이착륙 성능을 강화하여 아시아 지역 내 다양한 단거리 루트에서 활약하고 있습니다.",
        imageUrl: "images/c909-family.jpg",
        manufacturer: "COMAC",
        familyName: "C909 Series",
        isGroup: true,
        modelName: "C909",
        series: "C909 (ARJ21)",
        classification: "Regional Jet",
        engines: 2,
        seatsTypical: 97,
        range: 3700,
        firstFlight: 2008,
        productionStatus: "Active",
        variants: [
            { id: "C909-700", engineOptions: ["CF34-10A"], typeName: "C909-700 (기본형)", seatsTypical: 90, range: 2225, firstFlight: 2008, productionStatus: "Active" },
            { id: "C909-700ER", engineOptions: ["CF34-10A"], typeName: "C909-700ER (항속거리 연장형)", seatsTypical: 97, range: 3700, firstFlight: 2008, productionStatus: "Active" }
        ]
    },

    // C919 (단일 기종)
    {
        id: "c919",
        engineOptions: ["CFM LEAP-1C"],
        photoVariant: "C919",
        description: "에어버스 A320neo 및 보잉 737 MAX와 경쟁하기 위해 중국이 야심 차게 개발한 최신 차세대 협동체 여객기입니다. 높은 연료 효율성과 기내 쾌적성을 바탕으로 글로벌 민항 독점 구도에 새 바람을 불어넣고 있습니다.",
        imageUrl: "images/c919.jpg",
        manufacturer: "COMAC",
        familyName: "C919",
        isGroup: false,
        modelName: "C919",
        series: "C919",
        classification: "Narrow-body",
        engines: 2,
        seatsTypical: 192,
        range: 5555,
        firstFlight: 2017,
        productionStatus: "Active",
        variants: []
    },

    // ===== Fokker =====

    // Fokker 70 / 100 (그룹 카드)
    {
        id: "fokker-100",
        engineOptions: ["Rolls-Royce Tay"],
        photoVariant: "Fokker 100",
        description: "네덜란드의 항공기 제작사 포커(Fokker)가 개발한 대표적인 70~100석급 리저널 제트 여객기 제품군입니다. 동급 리저널 항공기 중 가장 낮은 운영 소음과 높은 연비 효율을 자랑하여 전 세계 중단거리 노선에서 활약했으며, 국내에서도 국내선 수송력 강화를 위해 운항된 기록이 있습니다.",
        imageUrl: "images/fokker-100.jpg",
        manufacturer: "Fokker",
        familyName: "Fokker 70 / 100",
        isGroup: true,
        modelName: "Fokker 70 / 100",
        series: "Fokker 70 / 100",
        classification: "Regional Jet",
        engines: 2,
        seatsTypical: 122,
        range: 4300,
        firstFlight: 1986,
        productionStatus: "Retired",
        variants: [
            { id: "Fokker-70", engineOptions: ["Tay 620"], typeName: "Fokker 70", seatsTypical: 85, range: 3410, firstFlight: 1993, productionStatus: "Retired" },
            { id: "Fokker-100", engineOptions: ["Tay 650"], typeName: "Fokker 100", seatsTypical: 122, range: 4300, firstFlight: 1986, productionStatus: "Retired" }
        ]
    }
];

// 전역 스코프에 노출하여 script.js에서 사용할 수 있게 함
if (typeof window !== 'undefined') {
    window.aircraftData = aircraftData;
}
