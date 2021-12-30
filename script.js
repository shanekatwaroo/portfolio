const menu = document.querySelector('#mobile-menu');
const links = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')
//displaying menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    links.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Active menu scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const projectMenu = document.querySelector('#project-page');
    const resumeMenu = document.querySelector('#resume-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos)

    //highlight class
    if(window.innerWidth > 960 && scrollPos < 600)  {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projectMenu.classList.remove('highlight');
        resumeMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2500) {
        aboutMenu.classList.remove('highlight');
        projectMenu.classList.add('highlight');
        resumeMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 4000) {
        resumeMenu.classList.add('highlight');
        projectMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 4300) {
        resumeMenu.classList.remove('highlight');
        return;
    }

    if((elem  && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//closing menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('is.active')
    if(window.innerWidth <= 768 && menu) {
        menu.classList.toggle('is-active');
        links.classList.remove('active');
    }
};

links.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);

