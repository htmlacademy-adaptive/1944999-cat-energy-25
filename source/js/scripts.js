let nav = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

nav.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('navigation--open')) {
    nav.classList.remove('navigation--open');
  }
  else {
    nav.classList.add('navigation--open');
  }
});
