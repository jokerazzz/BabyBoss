new WOW().init();


$('.mobile-btn').on('click', function(){
    $('.mobile-menu ul').toggleClass('active');
})

$('.filter2').on('click', function() {
  $('.grid').toggleClass('active2');
  $('.grid').removeClass('active3');
})

$('.filter3').on('click', function() {
$('.grid').toggleClass('active3');
$('.grid').removeClass('active2');
})

$('.filter1').on('click', function() {
$('.grid').removeClass('active3');
$('.grid').removeClass('active2');
})








$('.slider__container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.png" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 3000,    
  });

const sliderDotsContainer = document.querySelector('.slick-dots');
const sliderDots = document.querySelectorAll('.slick-dots li');
const myDotsContainer = document.querySelector('.slider__elemets');
const myDots = document.querySelectorAll('.slider__elemets li');

sliderDots.forEach((dot, index) => {
  dot.textContent = myDots[index].textContent;
  dot.classList.add('element');
});

myDotsContainer.remove();
sliderDotsContainer.classList.add('slider__elemets');

