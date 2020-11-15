var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween:  20,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      319:{
        slidesPerView: 1,
      },
      420:{
        slidesPerView: 2,
      },
      500:{
        slidesPerView: 3,
      },
      640:{
        slidesPerView: 4,
      },
      860:{
        slidesPerView: 5,
      },
      1360:{
        slidesPerView: 6,
      },
      
    }
    
  })

