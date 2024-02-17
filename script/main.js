const menuBurger = document.querySelector('.menu-burger');
const menuList = document.querySelector('.header__list');
const btnsSeeTrailer = document.querySelector('.btns__see-trailer');
const modalTrailer = document.querySelector('.modal-trailer');
const modalTrailerClose = document.querySelector('.modal-trailer__close');

menuBurger.addEventListener('click', function () {
  menuBurger.classList.toggle('active');
  menuList.classList.toggle('active');
});
btnsSeeTrailer.addEventListener('click', function () {
  modalTrailer.classList.add('activ');
  modalTrailerClose.classList.remove('activ');
  // menuList.classList.toggle('active');
});
modalTrailerClose.addEventListener('click', function () {
  modalTrailer.classList.remove('activ');
});
modalTrailer.addEventListener('click', () => {
  modalTrailer.classList.remove('activ');
});

