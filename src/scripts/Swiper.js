var swiper = new Swiper(".promoSwiper", { // инициализация свайпера
  slidesPerView: 1,                       // установка параметров свайпера
  spaceBetween: 30,
  loop: true,
  simulateTouch: false,
  pagination: {
    el: "#paginationPromo",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: "#promo-next",
    prevEl: "#promo-prev",
  },
});

var swiper = new Swiper(".productsSwiper", { // инициализация свайпера
  slidesPerView: 'auto',                     // установка параметров свайпера
  spaceBetween: 0,
  centeredSlides: true,
  centeredSlidesBounds: true,
  simulateTouch: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#previous",
  },
});