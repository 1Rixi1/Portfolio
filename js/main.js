$(function () {

  var mixer = mixitup('.portfolio__items');



  $('.header__btn, menu__list a, .btn-down').on('click', function () {
    $('body').toggleClass('body--active');
    $('.btn-down').toggleClass('btn-down--active');
    // $('.menu__list').toggleClass('menu__list--active');
    $('.header__btn').toggleClass('header__btn--active');
    $('.header__logo').toggleClass('header__logo--active');
    $('.menu__list').toggleClass('menu__list--down menu__list--active');
  });

  $(".menu__list a, .header__link, .up-icon, .btn-down--active, .header__logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);


    $('body').removeClass('body--active');
    $('.btn-down').removeClass('btn-down--active');
    // $('.menu__list').removeClass('menu__list--active');
    $('.header__btn').removeClass('header__btn--active');
    $('.header__logo').removeClass('header__logo--active');
    $('.menu__list').removeClass('menu__list--down menu__list--active');

  });

  $('.header__btn').on('click', function () {
    $('.header__logo').removeClass('header__logo--active');
  });

  $('.header__logo').on('click', function () {
    $('.header__logo').removeClass('header__logo--active');
  });


  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.up-icon, .btn-down').fadeIn();
    } else {
      $('.up-icon, .btn-down').fadeOut();
    }
  });


});





const swiperSlids = new Swiper('.reviews__inner', {

  speed: 800,
  loop: true,
  autoHeight: true,
  grabCursor: true,
  spaceBetween: 100,

  pagination: {
    clickable: true,
    dynamicBullets: true,
    el: '.swiper-pagination',
  },

  effect: 'coverflow',

  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
  },

  keyboard: {
    enable: true,
    OnlyInViewport: true,
    pageUpDown: true,
  },

  a11y: {
    enabled: true,
    nextSlideMessage: 'Next slide',
    prevSlideMessage: 'Previous slide',
    lastSlideMessage: 'This is the last slide',
    firstSlideMessage: 'This is the first slide',
    paginationBulletMessage: 'Go to slide {{index}}',
  },

  breakpoints : {
    375: {
      effect: 'slide'
    },
    576: {
      effect: 'coverflow',
    }
  }

});


const swiperVideo = new Swiper('.swiper-video', {

  loop: true,
  direction: 'vertical',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



  effect: 'cube',
  cubeEffect: {
    shadow: false,
    slideShadows: false,
  },

  autoplay: {
    delay: 3100,
    disableOnInteraction: false,
  },


});