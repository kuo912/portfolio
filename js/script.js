$(function () {

  //메뉴
  $('.menu>h2, .menu__bar').on('click', function () {
    $('.menu__bar__top, .menu__bar__bottom').toggleClass('active');
    $('.menu__item').toggleClass('on');
  });


  //타이핑 효과
  const lines = [
    "소통으로 공감을 만들고,",
    "성실함으로 신뢰를 쌓는,",
    "신입 디자이너 정다영 입니다."
  ];

  const typingElements = document.querySelectorAll(".title__typing");

  let lineIndex = 0; //줄
  let charIndex = 0; //글자

  function type() {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex];
      const typingElement = typingElements[lineIndex];

      if (charIndex < currentLine.length) {
        typingElement.textContent += currentLine[charIndex];
        charIndex++;
        setTimeout(type, 100);
      } else {
        charIndex = 0;
        lineIndex++;
        setTimeout(type, 500);
      }
    }
  }

  setTimeout(type, 1000);

  // 자격증 모달 동작
  function setupModal(triggerClass, popupClass) {
    $('.' + triggerClass).click(function () {
      $('.' + popupClass).fadeIn();
      $('body').addClass('no-scroll');
    });

    $('.lic__modal').off('click').on('click', function () {
      $('.lic__modal').fadeOut();
      $('body').removeClass('no-scroll');
    });
  }

  setupModal('com', 'popup__com'); // 컴퓨터그래픽스운용기능사
  setupModal('web', 'popup__web'); // 웹디자인기능사
  setupModal('ps', 'popup__gtq'); // GTQ그래픽기술자격
  setupModal('ai', 'popup__gtqi'); // GTQ일러스트


  //포트폴리오 스와이퍼
  const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    effect: 'fade',
    speed: 800,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


});


