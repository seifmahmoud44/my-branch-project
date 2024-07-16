// slide menu

const slideMenu = document.getElementById("slide-menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-silde");

openMenu.onclick = () => {
  slideMenu.classList.add("active");
  document.body.style.overflowY = "hidden";
};
closeMenu.onclick = () => {
  slideMenu.classList.remove("active");
  document.body.style.overflowY = "auto";
};

//swiper
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
