/**
 * AeroType - 메인 JavaScript 파일
 * 항공기 검색, 필터링, 상세 정보 표시 기능 구현
 */

// ========== 글로벌 변수 ==========
let allAircraftData = [];              // 전체 항공기 데이터
let filteredAircraftData = [];         // 필터링된 항공기 데이터
let currentManufacturerFilter = 'All'; // 현재 선택된 제조사 필터
let currentSearchQuery = '';            // 현재 검색어

// ========== 페이지 로드 이벤트 ==========
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * 애플리케이션 초기화
 * 1. 데이터 로드
 * 2. 이벤트 리스너 등록
 * 3. 초기 UI 렌더링
 */
async function initializeApp() {
    try {
        // 전역 변수에서 데이터 로드 (data/aircrafts.js)
        if (typeof window.aircraftData !== 'undefined') {
            allAircraftData = window.aircraftData;
        } else {
            throw new Error('데이터를 찾을 수 없습니다.');
        }
        filteredAircraftData = [...allAircraftData];

        // 이벤트 리스너 등록
        attachEventListeners();

        // 초기 UI 렌더링
        renderAircraftCards();
        updateResultsCount();

        // URL 파라미터 확인 및 특정 기종 모달 자동 노출 처리 (예: ?id=B787-9)
        const urlParams = new URLSearchParams(window.location.search);
        const targetId = urlParams.get('id');
        if (targetId) {
            const targetIdLower = targetId.toLowerCase();
            // 1. 메인 그룹 기종 ID가 일치하거나
            // 2. 메인 기종 모델명(modelName)이 일치하거나
            // 3. 메인 기종의 시리즈명(series)이 일치하거나
            // 4. 세부 기종(variants) 중 ID나 typeName이 일치하는 항공기 검색
            let found = allAircraftData.find(a => 
                (a.id && a.id.toLowerCase() === targetIdLower) ||
                (a.modelName && a.modelName.toLowerCase() === targetIdLower) ||
                (a.series && a.series.toLowerCase() === targetIdLower) ||
                (a.variants && a.variants.some(v => 
                    (v.id && v.id.toLowerCase() === targetIdLower) ||
                    (v.typeName && v.typeName.toLowerCase() === targetIdLower)
                ))
            );

            // Bombardier Dash 8 / Q-series 전용 소프트 매칭 예외 처리 (Dash-8, Q100~Q400 키워드 지원)
            if (!found) {
                const isDash8Query = targetIdLower.includes("dash-8") || 
                                     targetIdLower.includes("dash 8") || 
                                     targetIdLower.includes("dash8") || 
                                     targetIdLower.includes("q400") || 
                                     targetIdLower.includes("q300") || 
                                     targetIdLower.includes("q200") || 
                                     targetIdLower.includes("q100") || 
                                     targetIdLower.includes("dh4") ||
                                     targetIdLower.includes("dh3") ||
                                     targetIdLower.includes("dh2") ||
                                     targetIdLower.includes("dh1");
                                     
                if (isDash8Query) {
                    found = allAircraftData.find(a => a.id === "dash-8-family");
                }
            }

            // 매칭되는 기종을 찾지 못했을 때의 소프트 매칭 (특수문자/공백 제거 비교 및 제조사 접두사 제거 비교)
            if (!found) {
                let cleanTarget = targetIdLower.replace(/[^a-z0-9]/g, '');
                
                // 제조사 접두사 제거 (예: airbusa330 -> a330, boeing777 -> b777)
                const targetWithoutManufacturer = cleanTarget
                    .replace(/^airbus/, '')
                    .replace(/^boeing/, 'b')
                    .replace(/^bombardier/, '')
                    .replace(/^embraer/, 'e');

                if (cleanTarget) {
                    found = allAircraftData.find(a => {
                        const cleanId = (a.id || "").toLowerCase().replace(/[^a-z0-9]/g, '');
                        const cleanModel = (a.modelName || "").toLowerCase().replace(/[^a-z0-9]/g, '');
                        const cleanSeries = (a.series || "").toLowerCase().replace(/[^a-z0-9]/g, '');
                        
                        // 1. 단순 일치 비교
                        if (cleanId === cleanTarget || cleanModel === cleanTarget || cleanSeries === cleanTarget ||
                            cleanId === targetWithoutManufacturer || cleanModel === targetWithoutManufacturer || cleanSeries === targetWithoutManufacturer) {
                            return true;
                        }
                        
                        // 2. 포함 관계 비교 (예: "a330"이 "airbusa330"에 포함되는지 등)
                        if (cleanTarget.includes(cleanModel) || targetWithoutManufacturer.includes(cleanModel) ||
                            cleanModel.includes(cleanTarget) || cleanModel.includes(targetWithoutManufacturer)) {
                            return true;
                        }
                        
                        // 3. Variants 내 기종 비교
                        return a.variants && a.variants.some(v => {
                            const cleanVId = (v.id || "").toLowerCase().replace(/[^a-z0-9]/g, '');
                            const cleanVTypeName = (v.typeName || "").toLowerCase().replace(/[^a-z0-9]/g, '');
                            return cleanVId === cleanTarget || cleanVId === targetWithoutManufacturer || 
                                   cleanVTypeName.includes(cleanTarget) || cleanVTypeName.includes(targetWithoutManufacturer) ||
                                   cleanTarget.includes(cleanVId) || targetWithoutManufacturer.includes(cleanVId);
                        });
                    });
                }
            }

            if (found) {
                showAircraftDetail(found);
            }
        }

        console.log(`✈️ AeroType 초기화 완료. 총 ${allAircraftData.length}개 항공기 로드됨`);
    } catch (error) {
        console.error('초기화 오류:', error);
        alert('데이터를 불러오는 데 실패했습니다.');
    }
}

/**
 * 이벤트 리스너 등록
 */
function attachEventListeners() {
    // 검색 입력 필드
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // 제조사 필터 버튼들
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });

    // 모달 닫기 버튼
    const closeModalBtn = document.getElementById('closeModal');
    closeModalBtn.addEventListener('click', closeModal);

    // 모달 배경 클릭 시 닫기
    const modal = document.getElementById('detailModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

/**
 * 검색 처리 함수
 * 입력된 검색어로 항공기 필터링
 */
function handleSearch(event) {
    currentSearchQuery = event.target.value.trim().toUpperCase();
    applyFilters();
}

/**
 * 제조사 필터 클릭 처리
 */
function handleFilterClick(event) {
    // 이전 선택 상태 해제
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 현재 클릭한 버튼을 활성화 상태로 설정
    event.target.classList.add('active');

    // 필터 값 업데이트
    currentManufacturerFilter = event.target.getAttribute('data-filter');
    applyFilters();
}

/**
 * 검색어와 필터를 적용하여 데이터 필터링
 */
function applyFilters() {
    // 제조사 필터 적용
    let filtered = allAircraftData;

    if (currentManufacturerFilter !== 'All') {
        filtered = filtered.filter(aircraft => {
            if (currentManufacturerFilter === 'Airbus') {
                return aircraft.manufacturer === 'Airbus' || aircraft.manufacturer === 'Aerospatiale/BAC';
            }
            return aircraft.manufacturer === currentManufacturerFilter;
        });
    }

    // 검색어 필터 적용
    if (currentSearchQuery !== '') {
        filtered = filtered.filter(aircraft => 
            aircraft.modelName.toUpperCase().includes(currentSearchQuery) ||
            aircraft.series.toUpperCase().includes(currentSearchQuery) ||
            aircraft.manufacturer.toUpperCase().includes(currentSearchQuery)
        );
    }

    // 필터링된 결과 업데이트
    filteredAircraftData = filtered;

    // UI 업데이트
    renderAircraftCards();
    updateResultsCount();
}

/**
 * 항공기 카드를 화면에 렌더링
 */
function renderAircraftCards() {
    const aircraftGrid = document.getElementById('aircraftGrid');
    const noResults = document.getElementById('noResults');

    // 기존 카드 제거
    aircraftGrid.innerHTML = '';

    // 검색 결과가 없는 경우
    if (filteredAircraftData.length === 0) {
        aircraftGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    // 검색 결과가 있는 경우
    aircraftGrid.style.display = 'grid';
    noResults.style.display = 'none';

    // 각 항공기에 대해 카드 생성 및 추가
    filteredAircraftData.forEach(aircraft => {
        const card = createAircraftCard(aircraft);
        aircraftGrid.appendChild(card);
    });
}

/**
 * 항공기 카드 엘리먼트 생성
 * @param {Object} aircraft - 항공기 데이터 객체
 * @returns {HTMLElement} 생성된 카드 엘리먼트
 */
function createAircraftCard(aircraft) {
    const card = document.createElement('div');
    card.className = 'aircraft-card';
    card.style.cursor = 'pointer';

    // 생산 상태에 따른 CSS 클래스 결정
    const statusClass = getStatusClass(aircraft.productionStatus);

    // 카드 HTML 생성
    const imageHTML = aircraft.imageUrl ? `<img src="${aircraft.imageUrl}" alt="${aircraft.modelName} 사진" class="card-image">` : `<div class="card-image-placeholder">✈️</div>`;

    card.innerHTML = `
        ${imageHTML}
        <div class="card-content">
            <div class="card-manufacturer">${aircraft.manufacturer}</div>
            <div class="card-model">${aircraft.modelName}</div>
        <div class="card-series">${aircraft.series}</div>
        
        <div class="card-specs">
            <div class="spec-item">
                <span class="spec-label">분류</span>
                <span class="spec-value">${aircraft.classification}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">엔진</span>
                <span class="spec-value">${aircraft.engines}개</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">좌석</span>
                <span class="spec-value">${aircraft.seatsTypical}명</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">항속거리</span>
                <span class="spec-value">${aircraft.range.toLocaleString()}km</span>
            </div>
        </div>

        <div>
            <span class="card-status ${statusClass}">${translateStatus(aircraft.productionStatus)}</span>
        </div>

        <div class="card-footer">
            클릭하여 상세 정보 보기
        </div>
        </div>
    `;

    // 카드 클릭 이벤트
    card.addEventListener('click', function() {
        showAircraftDetail(aircraft);
    });

    return card;
}

/**
 * 생산 상태 문자열을 한글로 번역
 * @param {string} status - 생산 상태 (Active, Retired, Development)
 * @returns {string} 한글 생산 상태
 */
function translateStatus(status) {
    const statusMap = {
        'Active': '현재 생산 중',
        'Retired': '단종',
        'Development': '개발 중'
    };
    return statusMap[status] || status;
}

/**
 * 생산 상태에 따른 CSS 클래스 반환
 * @param {string} status - 생산 상태
 * @returns {string} CSS 클래스명
 */
function getStatusClass(status) {
    const statusClassMap = {
        'Active': 'status-active',
        'Retired': 'status-retired',
        'Development': 'status-development'
    };
    return statusClassMap[status] || 'status-active';
}

/**
 * 항공기 상세 정보 표시
 * 모달 창에 선택된 항공기의 상세 정보를 표시
 * @param {Object} aircraft - 항공기 데이터 객체
 */
function showAircraftDetail(aircraft) {
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');

    let variantsHTML = '';
    if (aircraft.isGroup && aircraft.variants && aircraft.variants.length > 0) {
        variantsHTML = `
        <div class="detail-section">
            <div class="detail-section-title">🔀 세부 기종 (Variants)</div>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem; font-size: 0.9rem;">
                    <thead>
                        <tr style="background-color: #f1f3f4; text-align: left;">
                            <th style="padding: 0.5rem; border-bottom: 2px solid #ddd;">기종명</th>
                            <th style="padding: 0.5rem; border-bottom: 2px solid #ddd;">엔진 옵션</th>
                            <th style="padding: 0.5rem; border-bottom: 2px solid #ddd;">좌석 수 / 적재중량</th>
                            <th style="padding: 0.5rem; border-bottom: 2px solid #ddd;">항속거리</th>
                            <th style="padding: 0.5rem; border-bottom: 2px solid #ddd;">첫 비행</th>
                            <th style="padding: 0.5rem; border-bottom: 2px solid #ddd;">상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${aircraft.variants.map(v => `
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 0.5rem; font-weight: 500;">${v.typeName}</td>
                            <td style="padding: 0.5rem; font-size: 0.85rem; color: #5f6368;">${v.engineOptions ? v.engineOptions.join(', ') : '-'}</td>
                            <td style="padding: 0.5rem;">${v.isCargo ? v.seatsTypical + 't' : v.seatsTypical + '명'}</td>
                            <td style="padding: 0.5rem;">${v.range.toLocaleString()}km</td>
                            <td style="padding: 0.5rem;">${v.firstFlight}년</td>
                            <td style="padding: 0.5rem;"><span class="card-status ${getStatusClass(v.productionStatus)}" style="font-size:0.75rem; padding: 0.2rem 0.5rem;">${translateStatus(v.productionStatus)}</span></td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
        `;
    }

    let descriptionHTML = '';
    if (aircraft.description) {
        descriptionHTML = `
        <div class="detail-section">
            <div class="detail-section-title">💡 기종 소개 및 특징</div>
            <div class="detail-description" style="line-height: 1.7; color: var(--text-color); font-size: 0.95rem; background-color: var(--secondary-color); padding: 1rem; border-radius: 6px; border-left: 4px solid var(--primary-color);">
                ${aircraft.description}
            </div>
        </div>
        `;
    }

    // 모달 HTML 생성
    let modalImageHTML = '';
    if (aircraft.imageUrl) {
        const photoVariantStr = aircraft.photoVariant ? `${aircraft.photoVariant}의 사진` : `${aircraft.modelName}의 사진`;
        modalImageHTML = `
            <img src="${aircraft.imageUrl}" alt="${aircraft.modelName} 사진" class="modal-image">
            <div class="modal-image-caption">${photoVariantStr}</div>
        `;
    } else {
        modalImageHTML = `<div class="modal-image-placeholder">✈️</div>`;
    }

    modalBody.innerHTML = `
        ${modalImageHTML}
        <div class="modal-header">
            <div class="modal-manufacturer">${aircraft.manufacturer}</div>
            <div class="modal-model">${aircraft.modelName}</div>
            <div class="modal-series">${aircraft.series}</div>
        </div>

        <div class="detail-section">
            <div class="detail-section-title">📊 기본 정보</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">제조사</div>
                    <div class="detail-value">${aircraft.manufacturer}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">분류</div>
                    <div class="detail-value">${aircraft.classification}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">첫 비행</div>
                    <div class="detail-value">${aircraft.firstFlight}년</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">생산 상태</div>
                    <div class="detail-value">${translateStatus(aircraft.productionStatus)}</div>
                </div>
            </div>
        </div>

        <div class="detail-section">
            <div class="detail-section-title">✈️ 성능 및 수용인원</div>
            <div class="detail-grid">
                <div class="detail-item">
                    <div class="detail-label">엔진 수</div>
                    <div class="detail-value">${aircraft.engines}개</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">대표 좌석 수</div>
                    <div class="detail-value">${aircraft.seatsTypical}명</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">항속거리 (최대)</div>
                    <div class="detail-value">${aircraft.range.toLocaleString()}km</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">엔진 옵션</div>
                    <div class="detail-value" style="font-size: 0.9rem;">${aircraft.engineOptions ? aircraft.engineOptions.join(', ') : '정보 없음'}</div>
                </div>
            </div>
        </div>

        ${variantsHTML}
        ${descriptionHTML}

        <div class="detail-section">
            <div class="detail-section-title">🔧 기술 정보</div>
            <div class="detail-grid">
                <div class="detail-item full-width">
                    <div class="detail-label">고유 ID (데이터베이스)</div>
                    <div class="detail-value" style="font-family: monospace; font-size: 0.95rem;">
                        ${aircraft.id}
                    </div>
                    <small style="color: #5f6368; margin-top: 0.3rem; display: block;">
                        Flight Log 서비스와 연동 시 사용
                    </small>
                </div>
            </div>
        </div>

        <div style="background-color: #f9f9f9; padding: 1rem; border-radius: 4px; margin-top: 1rem;">
            <small style="color: #5f6368;">
                ⚠️ 이 데이터는 학습 및 개발 목적의 샘플입니다. 
                실제 항공 운항에 사용하시려면 공식 자료를 확인하세요.
            </small>
        </div>
    `;

    // 모달 표시
    modal.classList.add('active');

    // 접근성: 모달 활성화 시 포커스 설정
    setTimeout(() => {
        document.getElementById('closeModal').focus();
    }, 0);
}

/**
 * 모달 닫기
 */
function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
}

/**
 * 검색 결과 수 업데이트
 */
function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    const count = filteredAircraftData.length;
    
    if (count === 0) {
        resultsCount.textContent = '검색 결과가 없습니다.';
    } else if (count === 1) {
        resultsCount.textContent = '항공기 기종 1개를 찾았습니다.';
    } else {
        resultsCount.textContent = `항공기 기종 ${count}개를 찾았습니다.`;
    }
}

// ========== 개발자 노트 ==========
/*
 * 이 파일의 주요 기능:
 * 
 * 1. initializeApp()
 *    - JSON 파일에서 항공기 데이터 로드
 *    - 이벤트 리스너 등록
 *    - 초기 UI 렌더링
 * 
 * 2. Search & Filter 기능
 *    - handleSearch(): 검색어 입력 처리
 *    - handleFilterClick(): 제조사 필터 처리
 *    - applyFilters(): 필터 적용
 * 
 * 3. UI Rendering
 *    - renderAircraftCards(): 카드 그리드 렌더링
 *    - createAircraftCard(): 개별 카드 생성
 *    - showAircraftDetail(): 모달에서 상세 정보 표시
 * 
 * 나중에 React로 마이그레이션할 때:
 * - 각 함수를 React 컴포넌트로 변환
 * - useState, useEffect를 사용하여 상태 관리
 * - JSON fetch를 API 호출로 변경 가능
 */
