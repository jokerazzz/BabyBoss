new WOW().init();



$('.mobile-btn').on('click', function(){
    $('.mobile-menu ul').toggleClass('active');
});

$('.filter2').on('click', function() {
  $('.grid').toggleClass('active2');
  $('.grid').removeClass('active3');
});

$('.filter3').on('click', function() {
$('.grid').toggleClass('active3');
$('.grid').removeClass('active2');
});

$('.filter').on('click', function() {
  setTimeout(() => {
    $('.filter__menu').toggleClass('active');
  }, 0)
});

$(document).on('click', function(event) {
  if ($('.filter__menu').hasClass('active') && !event.target.closest('.filter__menu')) {
    $('.filter__menu').removeClass('active');
  }
});

  

$('.filter1').on('click', function() {
$('.grid').removeClass('active3');
$('.grid').removeClass('active2');
});

$('.callback').on('click', function() {
  $('.modal-popup').addClass('active');
  $('body').addClass('active');
  $('.overlay').addClass('active');
  });

  $('.hits__item-buy').on('click', function() {
    $('.modal-popup').addClass('active');
    $('body').addClass('active');
    $('.overlay').addClass('active');
    });

  $('.close-popup').on('click', function() {
  $('.modal-popup').removeClass('active');
  $('body').removeClass('active');
  $('.overlay').removeClass('active');
  });
  
  $('.btn--close').on('click', function() {
    $('.modal-popup').removeClass('active');
    $('body').removeClass('active');
    $('.overlay').removeClass('active');
    });

  $('.overlay').on('click', function() {
    $('.modal-popup').removeClass('active');
    $('body').removeClass('active');
    $('.overlay').removeClass('active');
    });


$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 690,
  max: 89900,
  from: 0,
  to: 50000,
});