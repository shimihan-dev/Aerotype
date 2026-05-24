# AeroType | Aircraft Type Dictionary

## 프로젝트 소개
AeroType은 다양한 상용 항공기의 기종 정보를 제공하는 웹 서비스입니다. 항공기 기종(Airbus, Boeing 등)을 쉽게 검색하고, 제조사별로 필터링하며, 각 기종에 대한 제원(분류, 엔진 수, 좌석 수, 항속거리, 생산 상태 등)을 열람할 수 있습니다.
개인 프로젝트로서 1년짜리 항공 IT 서비스 로드맵의 첫 번째 MVP(Minimum Viable Product) 버전이며, 추후 'Flight Log' 서비스와 연동될 예정입니다.

## 주요 기능
- **항공기 기종 검색**: 검색창을 통해 기종명(예: A350, 777) 또는 제조사 등으로 빠른 검색 지원.
- **제조사 필터링**: Airbus, Boeing, Bombardier, Embraer 등 제조사별 필터 버튼 제공.
- **상세 정보 모달(Modal)**: 항공기 카드를 클릭하면 세부 기종(Variants) 정보와 기술 정보를 포함한 모달 팝업 표시 (A320 패밀리처럼 개별 카드로 운영되는 기종은 제외).
- **반응형 디자인**: PC, 태블릿, 모바일 환경에 최적화된 Grid 기반 UI 제공.

## 사용 기술
- **HTML5**: 시맨틱 마크업을 통한 뼈대 구축.
- **CSS3 (Vanilla)**: 반응형 그리드 시스템 및 CSS Variables 기반의 테마 스타일링.
- **JavaScript (Vanilla)**: 검색, 필터링, 모달 표시, 데이터 동적 렌더링.
- **JSON (JavaScript Object)**: 기종별 속성값 및 부모-자식 모델(Parent-Child Variants) 적용 데이터.

## 실행 방법
이 프로젝트는 순수 정적(Static) 파일로 구성되어 있으므로, 별도의 백엔드 서버나 빌드 과정 없이 즉시 실행 가능합니다.

1. 이 저장소를 로컬 환경에 클론합니다.
   ```bash
   git clone https://github.com/shimihan-dev/Aerotype.git
   ```
2. `index.html` 파일을 브라우저(Chrome, Safari 등)에서 더블클릭하여 엽니다.
3. (또는) Visual Studio Code의 `Live Server` 확장을 사용하면 더욱 원활하게 테스트할 수 있습니다.
4. **GitHub Pages**로 배포되어 있다면 해당 URL로 즉시 접속 가능합니다.

## 데이터 구조 설명
항공기 제원 데이터는 `data/aircrafts.js`에 배열(Array) 및 객체(Object) 형태로 저장되어 있습니다.
미래의 관계형 데이터베이스 전환(예: Supabase)을 고려하여 다음과 같은 구조로 설계되었습니다.

```javascript
{
  id: "b777-family",          // Primary Key 역할을 하는 고유 ID
  manufacturer: "Boeing",     // 제조사
  familyName: "777 Family",   // 기종 계열
  isGroup: true,              // 그룹형 기종인지 여부 (A320 예외 처리에 사용)
  variants: [ ... ]           // 세부 기종 배열 (그룹형일 경우 상세 모달에서 표시)
}
```

> **주의:**
> 현재 제공되는 항공기 제원 데이터는 개발 및 학습 목적의 샘플 데이터입니다. 실제 운항 계획 및 전문적인 항공 정보 확인이 필요한 경우에는 반드시 제조사의 공식 제원표를 참고하시기 바랍니다.

## 향후 개발 계획
1. **React 기반 전환**: 현재 Vanilla JS 구조에서 React/Vite 기반으로 프로젝트 포팅.
2. **Supabase 연동**: 정적 파일(`aircrafts.js`)을 Supabase PostgreSQL 테이블 기반으로 변경하여 실시간 데이터베이스 운영.
3. **Flight Log 서비스 연동**: 향후 개발될 탑승 기록(Flight Log) 서비스 내에서, 사용자가 탑승한 기종명을 클릭하면 AeroType의 해당 기종 ID 기반 상세 페이지로 연결되도록 통합 라우팅 구축.
