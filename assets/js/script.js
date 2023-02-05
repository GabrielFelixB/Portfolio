function mostraMenu() {
  let menu = document.querySelector(".menu-mobile");
  let blur = document.querySelector(".blur");

  menu.classList.toggle("ativo");
  blur.classList.toggle("blur-on");
}
