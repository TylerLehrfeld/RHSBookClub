const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// show active menu 
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const home = document.querySelector('#home-page');
  const cbook = document.querySelector('#about-page');
  const archive = document.querySelector('#archive-page');
  const signUp = document.querySelector('#signUp-page');
  let scrollPos = window.scrollY;
  
  //highlights
  if(window.innerWidth > 960 && scrollPos < 600) {
    home.classList.add('highlight');
    cbook.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    cbook.classList.add('highlight');
    home.classList.remove('highlight');
    archive.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 1400 && scrollPos < 2345) {
    cbook.classList.remove('highlight');
    archive.classList.add('highlight');
    return;
  }

  if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', 'highlightMenu');
window.addEventListener('click', 'highlightMenu');

//close mobile

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
  if(window.innerWidth <= 968 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');

  }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
