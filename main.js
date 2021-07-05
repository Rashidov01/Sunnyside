let elHeaderMenu = document.querySelector(".header");
let elHamburgMenu = elHeaderMenu.querySelector(".header-top__hamburg");

elHamburgMenu.addEventListener("click", function(){
  elHeaderMenu.classList.toggle("header-top__open");
})