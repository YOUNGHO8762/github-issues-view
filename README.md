<img width="1440" alt="스크린샷 2021-11-30 오후 4 02 17" src="https://user-images.githubusercontent.com/79790476/144001043-cab9d11e-014e-48f3-a677-6cca679f8d7c.png">

### <a href="https://youtu.be/-rt_oDdcGEA">🎥 시연영상 보러가기</a>

<br>

깃허브 API를 이용해 레포지토리의 이슈를 보여주는 사이트를 구현하였습니다.

- 개발기간 : 2021/10/08 ~ 2021/10/12

## 적용 기술

- react.js <br>
- styled-components<br>
- axios<br>
- rc-pagination<br>
  <br>

## 구현 기능

### 초기 화면

- `조건부렌더링` 을 통해 추가한 레포지토리가 없을 경우 레포지토리를 추가해달라는 페이지 렌더

### 검색결과

- 조건부렌더링을 통해 `로딩페이지` 구현
- 조건부렌더링을 통해 레포지토리 추가 / 삭제 버튼 구현

### 메인페이지

- 조건부렌더링을 통해 `로딩페이지` 구현
- `rc-pagination` 라이브러리를 이용해 페이지네이션 구현
- `filter` 메서드를 이용해 삭제 기능 구현
- `Promise.all` 메서드를 이용해 API 통신 병렬 처리
- `sort` 메서드를 이용해 이슈들을 최신순으로 정렬
- `scroll` 메서드를 이용해 페이지 전환시 스크롤이 최상단으로 이동하도록 구현
- 조건부렌더링을 통해 추가된 레포지토리의 이슈가 없을 경우 해당 페이지 렌더

### 빌드 / 배포

- AWS EC2 환경에서 Node Express를 활용한 배포 경험

## 시작 방법

깃허브 API는 Personal access tokens을 발급받아 입력하지 않으면 시간당 횟수 제한이 걸립니다.

횟수 제한 없이 사용하시려면 config.js의 TOKEN에 Personal access tokens을 입력해주세요.

### Installation

```
npm install
```

### Run

```
npm start
```
