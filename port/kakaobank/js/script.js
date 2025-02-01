$(function(){
    $('.sub').hide();
    $('nav>ul>li').mouseover(function(){
        $(this).find('.sub').show();
    }).mouseout(function(){
        $(this).find('.sub').hide();
    })
    // 메뉴
        
    $('.site > a').click(function(e){
        e.preventDefault(); // 링크 기본 동작 방지
        var $siteSub = $(this).next('.site_sub');
        if($siteSub.hasClass('show')) {
            $siteSub.removeClass('show').addClass('hide');
            setTimeout(function() {
                $siteSub.css('display', 'none'); // 숨기기
            }, 200); // 애니메이션 시간 (0.5초) 이후에 display none 설정
        } else {
            $siteSub.removeClass('hide').addClass('show').css('display', 'block').css('top', '70px'); // 처음에 아래에서 시작
            setTimeout(function() {
                $siteSub.css('top', '65px'); // 애니메이션으로 위로 올리기
            }, 10); // 살짝 지연을 주어 애니메이션 효과 적용
        }
    });
    //관련사이트


    let obseverleft = new IntersectionObserver((e)=>{
       e.forEach((saveimg)=>{
        if (saveimg.isIntersecting){
            saveimg.target.style.opacity = 1;
            saveimg.target.style.transform = 'translateX(0)';
        }
       })
    });

    let save = document.querySelectorAll('.save_p>img')
    obseverleft.observe(save[0])
    // 예금적금 이미지 나타나기



    let obseverup = new IntersectionObserver((e)=>{
       e.forEach((wuimg)=>{
        if (wuimg.isIntersecting){
            wuimg.target.style.opacity = 1;
            wuimg.target.style.transform = 'translateY(0)';
        }
       })
    });

    let wu = document.querySelectorAll('.wu>li>img')
    obseverup.observe(wu[0])
    // 해외송금 이미지 나타나기




    let skybgup = new IntersectionObserver((e) => {
        e.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(-100%)';
    
                let moonShadow = document.querySelector('.moon_shadow');
                moonShadow.style.opacity = '1'; // 그림자를 보이게 함
                moonShadow.style.top = '-25px'; // 위치를 초기화
                moonShadow.style.left = '-25px'; // 위치를 초기화
    
                let moonOrigin = document.querySelector('.moon_origin');
                moonOrigin.style.backgroundColor = '#fff'; // 색상을 흰색으로 변경

                let stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                star.style.visibility = 'visible'; // 별을 보이게 함
                star.style.opacity = '1'; // 별을 보이게 함
            });

            }
        });
    });
    
    let skybg = document.querySelectorAll('.skybg');
    skybgup.observe(skybg[0]);



    const leftBtn = document.querySelector('.left_btn');
    const rightBtn = document.querySelector('.right_btn');
    const slideContainer = document.querySelector('.card_slide');
    let items = Array.from(slideContainer.children);

    const updateOrder = () => {
        items.forEach((item, index) => {
            if(index === 0){
                item.style.transform = 'translate(-138%, 0) scale(0.8)';
                item.style.zIndex = '0';
            } else if(index === 1){
                item.style.transform = 'translate(-58%, 0) scale(0.8)';
                item.style.zIndex = '1';
                
            } else if(index === 2){
                item.style.transform = 'translate(0, 0) scale(1)';
                item.style.zIndex = '2';
                
            } else if(index === 3){
                item.style.transform = 'translate(58%, 0) scale(0.8)';
                item.style.zIndex = '1';
                
            } else {
                item.style.transform = 'translate(138%, 0) scale(0.8)';
                item.style.zIndex = '0';
                
            }
        });
    };

    leftBtn.addEventListener('click', () => {
        items.unshift(items.pop());
        updateOrder();
    });

    rightBtn.addEventListener('click', () => {
        items.push(items.shift());
        updateOrder();
    });

    updateOrder();

})


