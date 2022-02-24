module.exports = {
    result:function(title, img, author, pub, price, desc){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="main_style.css">
        
            <!-- Bootstrap 설정 코드 -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        
            <!-- Google web font 설정 코드 -->
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet" />
        
            <!-- Font-awesome 설정 코드 -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        </head>
        
        <body>
            <article>
                <header class="Header">
                    <div class="Header__top">
                        <div class="Header__top__menus">
                            <li>바로콘 <i class="fa-solid fa-toggle-off"></i></li>
                            <li>매장 안내 <i class="fa-solid fa-angle-down"></i></li>
                            <li>회원혜택 <i class="fa-solid fa-angle-down"></i></li>
                            <li>Prestige Lounge</li>
                        </div>
                        <div class="Header__top__login__menu">
                            <button>로그인</button>
                            <li>|</li>
                            <li>회원가입</li>
                            <li>출석체크</li>
                            <li>고객센터</li>
                            <li>주문배송</li>
                            <i class="fa fa-cart-shopping"></i>
                        </div>
                    </div>
                    <div class="Header__bottom">
                        <div class="Header__bottom__logo">
                            <a href="/">
                                <img src="http://image.kyobobook.co.kr/ink/images/gnb/logo_kyobo.png" alt="kyobo logo">
                            </a>
                            </div>
                        <div class="Header__bottom__search">
                            <div class="Header__bottom__search__menu">
                                <li>아이가 있는 집</li>
                                <li>|</li>
                                <li>10만독자선택</li>
                                <li>|</li>
                                <li>박문각공인중개사</li>
                                <li>|</li>
                                <li>똑똑한 하루</li>
                            </div>
                            <div class="Header__bottom__search__btn">
                                <form action="/search">
                                    <div>
                                        <label for="search"></label>
                                        <input type="text" name="search" id="search" class="Header__bottom__search__main"
                                            placeholder="문과생이 극찬한 놀라운 수학 공부!"></input>
                                    </div>
                                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="Header__bottom__event">
                            <img src="https://simage.kyobobook.co.kr/ink/images/prom/2018/banner/181226/bnD_w03.jpg"
                                alt="event image">
                        </div>
                    </div>
                </header>
                <section>
                    <div class="Bookinfo">
                        <h2 class="Bookinfo__header">${title}</h2>
                        <hr>
                        <div class="Bookinfo__body">
                            <div class="Bookinfo__body__thumb">
                                <img src="${img}" alt="book thumb image">
                            </div>
                            <div class="Bookinfo__body__inner">
                                <div>
                                    <em>저자</em>
                                    <p class="author">${author}</p>
                                    <span class="bar">|</span>
                                    <em>출판사</em>
                                    <p class="publisher">${pub}</p>
                                    <span class="bar">|</span>
                                    <em>도서</em>
                                    <p>${price}</p>
                                </div>
                                <div>
                                    <em>책소개</em>
                                    <p>${desc}</p>
                                </div>
                                <a href="#" class="btn"> 책 구매하기 > </a>
        
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div class="Footer">
                        <div class="Footer__area">
                            <ul class="Footer__menu" data-ga-category="교보문고_공통_PC" data-ga-action="FNB">
                                <li><a data-ga-label="회사소개" href="#">회사소개</a></li>
                                <li><a data-ga-label="이용약관" href="#">이용약관</a></li>
                                <li><a data-ga-label="개인정보처리방침" href="#"><strong>개인정보처리방침</strong></a></li>
                                <li><a data-ga-label="청소년보호정책" href="#">청소년보호정책</a></li>
                                <li><a data-ga-label="고객센터" href="#">고객센터</a></li>
                                <li><a data-ga-label="협력사여러분" href="#">협력사여러분</a></li>
                                <li><a data-ga-label="제휴 제안" href="#">제휴·제안</a></li>
                                <li><a data-ga-label="광고문의" href="#">광고문의</a></li>
                                <li><a data-ga-label="채용정보" href="#" target="_blank">채용정보</a></li>
                            </ul>
        
                            <div class="Logo__area">
                                <img src="http://image.kyobobook.co.kr/ink/images/common/logo_footer.png" alt="KYOBO 교보문고">
                            </div>
        
        
                            <div class="Data__area">
                                <address>
                                    ㈜ #### &nbsp; ### ### ### 1 &nbsp; 대표이사 : ###
                                    <br>
                                    사업자등록번호 : 000-00-00000
                                    <br>
                                    <strong class="big">대표전화 : 0000-0000 (발신자 부담전화)</strong>
                                    &nbsp;
                                    팩스 : 0000-000-0000 (지역번호공통)
                                    <br>
                                    ### ######### : 제 000호 ▶
        
                                    <a href="#" target="_blank" title="새 창 열림">사업자정보확인</a>
                                    <br>
        
                                    <div class="copy">
                                        COPYRIGHT(C)
                                        <strong>KYOBO BOOK CENTRE</strong>
                                        ALL RIGHTS RESERVED.
                                    </div>
        
                                </address>
                            </div>
        
                            <div class="Promotion__area">
                                <p>
                                    LG U+ 구매안전서비스 &nbsp;
                                    ▶<a href="#"
                                        onclick="window.open(this.href,'lguplus','scrollbars=yes,width=470,height=550');return false;"
                                        title="새 창 열림">서비스 가입 확인</a><br>
                                    고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 LG유플러스의 구매안전서비스를 이용하실 수 있습니다.
                                </p>
        
        
                            </div>
        
                            <div class="Mark__area">
                                <a href="#" onclick="window.open(this.href,'mark_isms','width=600,height=855');return false;"
                                    title="새창열림">정보보호관리체계<br> ISMS 인증획득</a>
                                <p>[인증범위] 온라인 교보문고 서비스 운영<br>[유효기간] 2020.11.04. ~ 2023.11.03.
                                </p>
                            </div>
        
                        </div>
                    </div>
                </footer>
        
        
            </article>
        
        
        </body>
        </html>
        `
    }
  }