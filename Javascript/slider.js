const swiper1 = new Swiper(".slide-content", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".next-1",
    prevEl: ".prev-1",
  },
  pagination: {
    el: ".slide-1",
    dynamicBullets: true,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
  keyboard: true,
});

const swiper2 = new Swiper(".frida-slide", {
  slidesPerView: 1,
  pagination: {
    el: ".frida-pagination",
    dynamicBullets: true
  }
});

const swiper3 = new Swiper(".tiana-slide", {
  slidesPerView: 1,
  pagination: {
    el: ".tiana-pagination",
    dynamicBullets: true
  }
});

const swiper4 = new Swiper(".martina-slide", {
  slidesPerView: 1,
  pagination: {
    el: ".martina-pagination",
    dynamicBullets: true
  }
});

const swiper5 = new Swiper(".dafne-slide", {
  slidesPerView: 1,
  pagination: {
    el: ".dafne-pagination",
    dynamicBullets: true
  }
});

const swiper6 = new Swiper(".cirene-slide", {
  slidesPerView: 1,
  pagination: {
    el: ".cirene-pagination",
    dynamicBullets: true
  }
});