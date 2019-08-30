var backgroundImg = ['ux/aladdin-movie-poster-8k-e4-1920x1080.jpg',
  'ux/ex_machina_donal_gleeson_robot_2015_97902_1920x1080.jpg',
  'ux/the_grand_budapest_hotel_gustave_henckels_ralph_fiennes_edward_norton_93057_1920x1080.jpg',
  'ux/the_revenant_leonardo_dicaprio_hugh_glass_106918_1920x1080.jpg',
  'ux/the_wolf_of_wall_street_leonardo_dicaprio_jordan_belfort_92864_1920x1080.jpg',
  'ux/transformers_age_of_extinction_robot_optimus_prime_99595_1920x1080.jpg'
]; //Add more backgrounds to the array

var backgroundImgReverse = ['ux/transformers_age_of_extinction_robot_optimus_prime_99595_1920x1080.jpg',
  'ux/the_wolf_of_wall_street_leonardo_dicaprio_jordan_belfort_92864_1920x1080.jpg',
  'ux/the_revenant_leonardo_dicaprio_hugh_glass_106918_1920x1080.jpg',
  'ux/the_grand_budapest_hotel_gustave_henckels_ralph_fiennes_edward_norton_93057_1920x1080.jpg',
  'ux/ex_machina_donal_gleeson_robot_2015_97902_1920x1080.jpg',
  'ux/transformers_age_of_extinction_robot_optimus_prime_99595_1920x1080.jpg',
  'ux/aladdin-movie-poster-8k-e4-1920x1080.jpg',
];

var backgroundCount = 0;

$(function () {
  $('body').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')'); //allows a variable for changing background img based in an array, change number in [] to change background...
});

$('.slider-right').on('click', function () {
  backgroundCount++;
  if (backgroundCount > backgroundImg.length - 1) backgroundCount = 0;
  $('body').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')');
});

$('.slider-left').on('click', function () {
  backgroundCount++;
  if (backgroundCount > backgroundImgReverse.length) backgroundCount = 0;
  $('body').css('background-image', 'url(' + backgroundImgReverse[backgroundCount] + ')');
});




$(document).on('ready', function () {
  var slide = $('.slider-single');
  var slideTotal = slide.length - 1;
  var slideCurrent = -1;

  function slideInitial() {
    slide.addClass('proactivede');
    setTimeout(function () {
      slideRight();
    }, 500);
  }

  function slideRight() {
    if (slideCurrent < slideTotal) {
      slideCurrent++;
    } else {
      slideCurrent = 0;
    }

    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);

    }

    slide.each(function () {
      var thisSlide = $(this);
      if (thisSlide.hasClass('preactivede')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
      if (thisSlide.hasClass('preactive')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
  }

  function slideLeft() {
    if (slideCurrent > 0) {
      slideCurrent--;
    } else {
      slideCurrent = slideTotal;
    }

    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    slide.each(function () {
      var thisSlide = $(this);
      if (thisSlide.hasClass('proactivede')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
      if (thisSlide.hasClass('proactive')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
  }
  var left = $('.slider-left');
  var right = $('.slider-right');
  left.on('click', function () {
    slideLeft();
  });
  right.on('click', function () {
    slideRight();
  });
  slideInitial();
});