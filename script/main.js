const menuBurger = document.querySelector('.menu-burger');
const menuList = document.querySelector('.header__list');
menuBurger.addEventListener('click', function () {
  menuBurger.classList.toggle('active');
  menuList.classList.toggle('active');

});
