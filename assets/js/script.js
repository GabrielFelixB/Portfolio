function _mostraMenu() {
  const menu = document.querySelector(".menu-mobile");
  const blur = document.querySelector(".blur");

  menu.classList.toggle("ativo");
  blur.classList.toggle("blur-on");
}
