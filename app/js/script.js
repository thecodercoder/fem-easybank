const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
const headMenu = document.querySelector('.header__menu');

// Open/Close Hamburger Menu.
const mobileMenu = () => {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    headMenu.classList.toggle('has-fade');
  } else {
    body.classList.add('noscroll');
    header.classList.add('open');
    headMenu.classList.toggle('has-fade');
  }
};

btnHamburger.addEventListener('click', mobileMenu);

// Close header__menu when browser hit 1023px.
const closeHamMenu = () => {
  if (window.innerWidth >= 1023) {
    document.querySelector('.header__menu').style.display = 'none';
  } else {
    document.querySelector('.header__menu').style.display = 'block';
  }
};

window.addEventListener('load', closeHamMenu);
window.addEventListener('resize', closeHamMenu);
