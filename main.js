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
