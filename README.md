# NFT-auction
toy project for NestJS,NFT web auction project

# ref

project structure: https://github.com/CatsMiaow/node-nestjs-structure
# 목적
- NestJS 및 Typescript 학습
- AWS에 학습 및 배포
- 테스트 케이스 작성
- 실제 사용 애플리케이션 운영
# 기능 스케치

- nft 등록
- nft 목록 보여주기
- nft 거래


# API 스케치
## common

| path | method |desc|
| ------- | --- | --- |
| /did | POST | 옥션을 하기 위한 DID 기반 계정 생성 |
| /login | GET | DID 계정으로 로그인 |
| /support | GET | 사이트 설명서 |


## seller

| path | method |desc|
| ------- | --- | --- |
| /theme/create | POST | 테마 생성 |
| /theme/테마이름 | PUT | 해당 테마 정보 편집 |
| /theme/테마이름 | DELETE | 해당 테마 삭제 |
| /theme/테마이름/assets/auction/create | POST | NFT에 대한 옥션 등록 |
| /theme/테마이름/assets/auction/NFT 번호 | PUT | [옥션 시작전] NFT에 대한 옥션 정보 수정 |
| /theme/테마이름/assets/auction/NFT 번호 | DELETE | [옥션 시작전] NFT에 대한 옥션 종료  |
## buyer

| path | method |desc|
| ------- | --- | --- |
| /assets | GET | 탐색하기 버튼을 클릭할 때, 랜덤한 상품 출력|
| /assets?필터 쿼리 | GET | 조건 NFT 검색 |
| /assets/테마이름/만든 사람의 DID | GET | 선택된 테마의 모든 상품 출력 |
| /assets/만든 사람의 DID/NFT 번호 | GET | 검색한 상태에서 한 NFT 상품을 클릭했을 때, NFT 옥션에 대한 정보 출력 |
| /assets/만든 사람의 DID/NFT 번호/bidding? | POST | 해당 옥션에 대해서 비딩하기 |


## web manager