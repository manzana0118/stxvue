window.onload = function() {

    // 모달창
    let modal_close = $('.modal-close');
    let modal = $('.modal');

    modal_close.click(function(){
        modal.hide();
    });

    let modal_bt = $('.modal-bt');
    modal_bt.click(function(){
        modal.show();
    });

    let visual_bt = $('.visual-bt');
    let part_pos = $('.part').offset().top;            
    visual_bt.click(function(){
        $('html').animate({
            scrollTop: part_pos
        });
    });

    // gnb 기능
    // 1. nav를 저장한다.
    let nav = $('.nav');
    // 2. gnb를 저장한다.
    let gnb = $('.gnb');
    // 3. header를 저장한다.
    let header = $('.header');
    // 4. gnb에 마우스 오버를 하면 .header가 늘어난다.
    gnb.mouseenter(function(){
        header.addClass('header-active');
    });
    // 5. gnb에 마우스 아웃을 하면 .header가 줄어든다.
    gnb.mouseleave(function(){
        header.removeClass('header-active');
    });


    // 메뉴를 작성하는 코드
    // 1. 메뉴를 위한 사용자 객체 생성자 함수
    function MakeMenu(_mainmenu, _mainlink, _submenu, _sublink){
        this.mainmenu = _mainmenu;
        this.mainlink = _mainlink;
        this.submenu = _submenu;
        this.sublink = _sublink;
    };

    let menu_data = [
    new MakeMenu('회사소개', '#', '인사말, STX건설, 기업문화, STX건설연혁, 조직안내, 윤리경영, 안전·환경·품질경영, 찾아오시는 길', '#, #, #, #, #, #, #, #'),
    new MakeMenu('사업분야', '#', '건축사업, 주택사업, 토목사업, 플랜트/공작기계사업, 해외사업', '#, #, #, #, #'),
    new MakeMenu('사회공헌', '#', '나눔의생각, 주요활동분야, 활동현황', '#, #, #'),
    new MakeMenu('홍보센터', '#', '홍보동영상, 홍보브로슈어, STX건설뉴스', '#, #, #'),
    new MakeMenu('고객지원', '#', '자주묻는질문, 고객문의', '#, #'),
    new MakeMenu('채용정보', '#', '채용안내, 채용공고, 채용FAQ', '#, #, #')
    ];

    // 2. 총 메뉴의 개수를 저장한다.
    let menu_total = menu_data.length;

    // 3. li를 만들어야 한다.
    let menu_li = '';

    for(let i = 0; i < menu_total; i++){
        menu_li += '<li></li>';
    };

    gnb.html(menu_li);

    // 4. .gnb > li를 찾아서 저장한다.
    let menu_lis = gnb.find('>li');

    // 5. 주메뉴를 출력한다.
    $.each(menu_lis, function(index, item){

        let temp = menu_data[index];
        let cate = '<a href=';
        cate = cate + temp.mainlink;
        cate = cate + '>';

        cate = cate + temp.mainmenu;
        cate = cate + '</a>';
        cate = cate + '<ul class=submenu>';
        // submenu의 li를 만든다.
        // 서브메뉴 글자들에게서 ','를 기준으로 분리한다.
        let temp_sub = (temp.submenu).split(',');

        // 서브메뉴 링크들을 ','를 기준으로 분리한다.
        let temp_sub_link = (temp.sublink).split(',');

        // 최종 li 문구를 저장한다.
        let temp_sub_lis = '';

        for(let i = 0; i < temp_sub.length; i++) {
            temp_sub_lis = temp_sub_lis +'<li>';
            temp_sub_lis = temp_sub_lis + '<a href=';
            temp_sub_lis = temp_sub_lis + temp_sub_link[i];
            temp_sub_lis = temp_sub_lis + '>';
            temp_sub_lis = temp_sub_lis + temp_sub[i];
            temp_sub_lis = temp_sub_lis + '</a>';
            temp_sub_lis = temp_sub_lis + '</li>';
        }
        
        cate = cate + temp_sub_lis;
        cate = cate + '</ul>';
        $(this).html(cate);

    });

};