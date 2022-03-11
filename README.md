# Ateamventures_frontend_codingTest

에이팀벤쳐스 프론트엔드 지원 김정음

<br/>

## 실행하기

Ateamventures_frontend_codingTest 안의 capa_partners 에서

1. yarn install 후 yarn dev 실행
2. json-server ./requests.json --port 4000 데이터 호출 서버 실행

<br/>

## 완성하지 못한 기능에 대한 시도

### 드롭다운의 체크박스 선택 후 필터링 리셋 기능

문제 1 : 드롭다운의 내용 체크 시 체크한 개수와 필터링 리셋 버튼 구현했으나 필터링 리셋 버튼 클릭시 숫자만 초기화 되고, 체크된 항목은 체크 해제가 안됨
체크 된 항목이 해제되지 않아서 체크된 항목을 해제시 기본값에서 -1을 실행하는 함수를 작동해 -1값 도출

시도 1 : 필터링 리셋 버튼을 누를 시 체크된 항목이 해제되게 시도

<div>----</div>

### 조건에 맞춘 카드 내용 보여주기

문제 1-1 : 체크한 목록과 카드의 내용 데이터 일치 연동, (조건에 맞는 견적 요청) 연동 시도

시도 1 : 체크한 값을 새로운 배열 변수에 저장 후 .filter()를 사용해서 조건에 맞는 데이터만 불러오고 그 데이터를 .map()으로 나열
