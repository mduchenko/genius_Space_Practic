const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
    }
  },
  // If we need pagination
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletClassActive:'pagination__button--active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carusel-button-next',
    prevEl: '.carusel-button-prev',
  },
});