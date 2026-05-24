# ✈️ AeroType - 항공기 기종 데이터 사전

항공기 기종 정보를 모아놓은 정적 웹 데이터 사전입니다. 나중에 Flight Log 서비스와 연동하여 탑승 기록과 함께 항공기 상세 정보를 조회할 수 있게 확장할 계획입니다.

**프로젝트 상태:** 🔨 MVP 개발 중 (v0.1.0)

## 📋 목차

- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [설치 및 실행](#설치-및-실행)
- [파일 구조](#파일-구조)
- [데이터 구조](#데이터-구조)
- [사용 방법](#사용-방법)
- [GitHub Pages 배포](#github-pages-배포)
- [향후 개발 계획](#향후-개발-계획)
- [Flight Log 서비스 연동 계획](#flight-log-서비스-연동-계획)

## 🎯 주요 기능

### MVP 버전 (현재)

✅ **항공기 기종 목록 조회**
- 전체 항공기 기종을 카드 형태로 표시
- 각 카드에 주요 제원 정보 표시

✅ **검색 기능**
- 기종명으로 검색 (예: A320, 787, CRJ700 등)
- 계열명으로도 검색 가능
- 제조사명으로도 검색 가능

✅ **제조사 필터**
- Airbus
- Boeing
- Bombardier
- Cessna
- Embraer

✅ **상세 정보 모달**
- 카드 클릭 시 모달 창에서 항공기 상세 정보 조회
- 모달 닫기 (버튼, 배경 클릭, ESC 키)

✅ **반응형 디자인**
- 데스크톱, 태블릿, 모바일 모두 지원
- 모바일 친화적 필터 버튼 스크롤

✅ **깔끔한 UI**
- 항공 데이터 사전 느낌의 미니멀한 디자인
- 밝은 배경과 직관적인 레이아웃

## 🛠️ 기술 스택

### MVP 버전 (선택지 A: 정적 웹사이트)

| 항목 | 기술 |
|------|------|
| **마크업** | HTML5 |
| **스타일** | CSS3 (Flexbox, Grid) |
| **스크립트** | Vanilla JavaScript (ES6+) |
| **데이터** | JSON 파일 |
| **배포** | GitHub Pages |

### 특징

- 서버 불필요 (정적 웹사이트)
- 빠른 로딩 속도
- GitHub Pages로 무료 배포 가능
- 나중에 React로 마이그레이션 가능한 구조

## 📥 설치 및 실행

### 로컬 환경에서 실행

#### 1. 저장소 클론

```bash
git clone https://github.com/[your-username]/Aerotype.git
cd Aerotype
```

#### 2. 로컬 서버 실행

**Python이 설치되어 있는 경우:**

```bash
# Python 3.x
python -m http.server 8000

# 또는 Python 2.x
python -m SimpleHTTPServer 8000
```

**Node.js가 설치되어 있는 경우:**

```bash
npx http-server
```

**VS Code Live Server 확장 사용:**
- VS Code에서 `Live Server` 확장 설치
- `index.html` 파일에서 우클릭 → "Open with Live Server"

#### 3. 브라우저에서 접속

```
http://localhost:8000
```

## 📁 파일 구조

```
Aerotype/
├── index.html              # 메인 HTML 파일
├── styles.css              # 스타일시트 (반응형 디자인)
├── script.js               # 메인 JavaScript (검색, 필터, 모달)
├── data/
│   └── aircraftTypes.json  # 항공기 기종 데이터 (JSON)
├── README.md               # 프로젝트 문서
├── LICENSE                 # MIT 라이센스
└── .gitignore              # Git 무시 파일
```

### 파일 설명

| 파일 | 설명 |
|------|------|
| `index.html` | HTML5 구조. 헤더, 검색/필터, 카드 그리드, 모달 포함 |
| `styles.css` | CSS3 스타일. 반응형 디자인, 다크모드 준비 |
| `script.js` | Vanilla JavaScript. 데이터 로드, 검색/필터, 이벤트 처리 |
| `aircraftTypes.json` | 항공기 기종 데이터. 103개 샘플 기종 포함 |

## 📊 데이터 구조

### aircraftTypes.json 구조

```json
{
  "aircraftTypes": [
    {
      "id": "A380",                    // 고유 ID (Flight Log에서 참조)
      "manufacturer": "Airbus",        // 제조사
      "modelName": "A380",             // 기종명
      "series": "A380-800",            // 계열
      "classification": "Large Widebody", // 항공기 분류
      "engines": 4,                    // 엔진 수
      "seatsTypical": 555,             // 대표 좌석 수
      "range": 15000,                  // 항속거리 (km)
      "firstFlight": 2007,             // 첫 비행 연도
      "productionStatus": "Active"     // 생산 상태
    },
    ...
  ]
}
```

### 필드 설명

| 필드 | 설명 | 유형 | 예시 |
|------|------|------|------|
| `id` | 고유 식별자 | String | "A380" |
| `manufacturer` | 제조사 | String | "Airbus", "Boeing" |
| `modelName` | 기종명 | String | "A380", "787" |
| `series` | 계열 | String | "A380-800", "787-9 Dreamliner" |
| `classification` | 항공기 분류 | String | "Wide-body", "Narrow-body" |
| `engines` | 엔진 수 | Number | 2, 4 |
| `seatsTypical` | 대표 좌석 수 | Number | 350, 555 |
| `range` | 항속거리 | Number | 14600 (km) |
| `firstFlight` | 첫 비행 연도 | Number | 2007, 1987 |
| `productionStatus` | 생산 상태 | String | "Active", "Retired", "Development" |

### 데이터 구조 설계 철학

✅ **Supabase 마이그레이션 준비**
- JSON 구조 = Supabase 테이블 스키마
- 정규화된 필드명으로 DB 변환 용이

✅ **Flight Log 서비스 연동 준비**
- `id` 필드로 항공기 기종 고유 식별
- 나중에 Flight Log의 외래키로 사용 가능

✅ **확장성**
- `imageUrl` 필드 추가 준비 (나중에)
- 추가 제원 정보 수용 가능

⚠️ **데이터 출처**
- 현재 샘플 데이터입니다.
- 실제 서비스에는 공식 출처 데이터 필요

## 💻 사용 방법

### 1. 항공기 검색하기

**검색창에 기종명 입력**
```
사용자: "A320" 입력
결과: Airbus A320 관련 항공기 모두 표시
```

**지원하는 검색 항목**
- 기종명 (예: A380, 787, CRJ700)
- 계열명 (예: A380-800, 787-9 Dreamliner)
- 제조사명 (예: Airbus, Boeing)

### 2. 제조사로 필터링하기

**필터 버튼 클릭**
- "모두 보기": 전체 항공기 표시
- "Airbus": Airbus 항공기만 표시
- "Boeing": Boeing 항공기만 표시
- 기타 제조사

### 3. 상세 정보 보기

**항공기 카드 클릭**
```
1. 카드를 클릭하면 모달 창이 나타남
2. 상세 정보 확인
3. "×" 버튼 또는 ESC 키로 닫기
```

## 🌐 GitHub Pages 배포

### 배포 방법

1. **GitHub 저장소 생성**
   - `[your-username]/Aerotype` 저장소 생성

2. **로컬에서 커밋 및 푸시**
   ```bash
   git add .
   git commit -m "Initial commit: AeroType MVP"
   git push origin main
   ```

3. **GitHub Pages 활성화**
   - 저장소 Settings → Pages
   - Branch: `main` / Folder: `/(root)` 선택
   - Save

4. **배포 확인**
   ```
   https://[your-username].github.io/Aerotype/
   ```

### 배포 후 확인

- [ ] 검색 기능 정상 작동
- [ ] 필터 버튼 정상 작동
- [ ] 카드 클릭 시 모달 표시
- [ ] 모달 닫기 작동
- [ ] 모바일에서 반응형 확인
- [ ] 모든 항공기 데이터 표시 확인

## 🚀 향후 개발 계획

### Phase 2: 기능 확대 (예정)

- [ ] **다양한 필터**
  - 엔진 수 필터
  - 항공기 분류 필터
  - 생산 상태 필터

- [ ] **정렬 기능**
  - 기종명 A-Z 정렬
  - 첫 비행 연도 정렬
  - 항속거리 정렬

- [ ] **페이지 구분**
  - 항공기 목록 페이지 (현재)
  - 항공기 상세 페이지 추가 (모달 대신)
  - URL 라우팅 (예: /aircraft/A380)

- [ ] **데이터 추가**
  - 더 많은 항공기 기종 추가 (현재 103개)
  - 이미지/사진 추가
  - 유명한 항공사별 운항 기종 정보

### Phase 3: 기술 업그레이드 (예정)

- [ ] **React 마이그레이션**
  - Vite를 사용한 프로젝트 초기화
  - JavaScript → TypeScript 마이그레이션
  - 컴포넌트 기반 구조 개편

- [ ] **Supabase 연동**
  - JSON 파일 → Supabase 데이터베이스 이동
  - 실시간 데이터 동기화
  - 관리자 기능 추가

- [ ] **검색 고도화**
  - 텍스트 검색 최적화 (fuzzy search)
  - 필터 조합 가능
  - 검색 히스토리

- [ ] **사용자 기능**
  - 즐겨찾기 기능 (localStorage)
  - 비교 기능 (여러 항공기 비교)
  - 공유 기능

### Phase 4: Flight Log 서비스와 연동 (장기 계획)

```
┌─────────────────────────────────────────┐
│         Flight Log Service             │
│  (탑승 기록 앱)                          │
│                                         │
│  [여행 추가]                            │
│  - 항공편: KE123                        │
│  - 기종: [A380 검색 및 선택] ──────┐  │
│                                    │  │
└────────────────────────────────────┼──┘
                                     │
                            [aircraft ID: A380]
                                     │
┌────────────────────────────────────┼──┘
│         AeroType                    │
│  (항공기 기종 사전)                 │
│                                     │
│  A380 상세 정보 페이지 표시         │
│  - 제조사: Airbus                  │
│  - 엔진: 4개                       │
│  - 좌석: 555명                     │
│  - 항속거리: 15,000km              │
│  ...                               │
└────────────────────────────────────┘
```

- [ ] Flight Log 서비스에서 항공기 선택 시 AeroType API 호출
- [ ] 항공기 고유 ID로 기종 데이터 조회 가능
- [ ] 동일 데이터베이스 (Supabase) 사용으로 데이터 일관성 유지
- [ ] Cross-origin 설정으로 도메인 간 통신 가능

## 🔗 Flight Log 서비스 연동 계획

### 데이터 연동 방식

**현재 (로컬 JSON)**
```javascript
// aircraftTypes.json 파일에서 직접 로드
fetch('./data/aircraftTypes.json')
```

**향후 (REST API)**
```javascript
// Supabase REST API로 데이터 조회
fetch('https://[project].supabase.co/rest/v1/aircraft_types?id=eq.A380', {
  headers: { 'apikey': process.env.SUPABASE_API_KEY }
})
```

### API 명세 설계 (Future)

| Endpoint | 메서드 | 설명 |
|----------|--------|------|
| `/api/aircraft` | GET | 전체 항공기 목록 |
| `/api/aircraft/:id` | GET | 특정 항공기 상세 정보 |
| `/api/aircraft?manufacturer=Airbus` | GET | 제조사별 검색 |

## 📝 개발자 노트

### 코드 구조

- **선언적 마크업**: HTML은 시맨틱하게 작성
- **캐스케이딩 스타일**: CSS 변수로 테마 관리
- **순수 JavaScript**: 프레임워크 없이 구현 (나중에 React 마이그레이션 쉽게)

### 주석 스타일

모든 JavaScript 함수에 상세한 주석 포함:
```javascript
/**
 * 함수 설명
 * @param {Type} paramName - 파라미터 설명
 * @returns {Type} 반환값 설명
 */
function myFunction(paramName) {
  // 구현부
}
```

### 접근성 (Accessibility)

- HTML5 semantic 태그 사용
- `aria-label` 속성으로 스크린 리더 지원
- 충분한 색상 대비
- 키보드 네비게이션 지원 (Tab, Enter, ESC)

## 📄 라이센스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 👤 작성자

- **개발자**: Information System 전공 대학생
- **프로젝트**: 항공 IT 서비스 개발 로드맵 1단계
- **장기 목표**: 항공 데이터 기반 서비스 개발 및 운영

## 🤝 피드백 및 기여

이 프로젝트는 학습 및 개인 포트폴리오 목적입니다.
아이디어나 개선 사항이 있으시면 Issue나 Pull Request로 알려주세요!

---

**마지막 업데이트**: 2024년 5월
**현재 버전**: 0.1.0 (MVP)
