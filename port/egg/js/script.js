$(function(){

    //메뉴
  $('.menu>h2, .menu__bar').on('click', function () {
    $('.menu__bar__top, .menu__bar__bottom').toggleClass('active');
    $('.menu__item').toggleClass('on');
  });

})


