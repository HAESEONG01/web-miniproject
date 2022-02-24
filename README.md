# web-miniproject
* 팀원 구성 : 
  - 🐈 윤소희
  - 🐣 김민기
  - 🐹 이준석

* 서비스 소개 : Naver 책 검색 API를 활용한 검색 웹사이트 구현

* 프로젝트 기간 : 22/02/23 ~ 22/02/24

* 핵심 기능 : 
  1. 😀책 검색 - 책 제목으로 찾고자하는 책 검색.
  2. 🧾책 상세내용 보여주기 - Naver 책 검색 API를 통해 받아온 정보 중 책 제목, 저자, 가격, 책 소개 등 출력

* 동작 구조 📊


* 실행화면 🖥

 <메인 페이지>
 
![image](https://user-images.githubusercontent.com/93183070/155489457-e6372dce-8107-4ef4-8f86-571a8a376a2c.png)
![image](https://user-images.githubusercontent.com/93183070/155489978-d902ba3f-cbae-4aa5-bee3-48139830b2e0.png)



 <책 검색 페이지>
 ![image](https://user-images.githubusercontent.com/93183070/155489551-8525f410-6eab-43a9-931b-7b05bfcd7624.png)



* 트러블 슈팅
  - 메인 페이지에서 검색했을 때 검색한 내용을 새로운 페이지로 리다이렉트 시키는 것<br>
    -> 템플릿 리터럴을 이용하여 조회한 책의 정보를 담은 html 페이지를 브라우저에 띄움
  - 메인 페이지 양쪽 여백 주고 가운데 정렬 하기
  - 인코딩 오류로 인해 한글 검색 오류 발생<br>
    -> encodeURI를 사용해 인코딩하여 오류 해결
  - 공백으로 검색 시 400 error 발생<br>
    -> 다시 첫 화면으로 돌아가도록 설정<br>
    -> alert나 팝업창을 이용해 문제 상황에 대해 전달하고자 했으나, node.js에서 window 객체를 사용할 수 없다고 해서 구현하지 못함
