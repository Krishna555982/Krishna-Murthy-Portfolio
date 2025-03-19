let menuIcons = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcons.onclick = () => {
    menuIcons.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
};

/***************** Scroll section active link *****************/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        
        
    });

    /***************** Sticky navbar *****************/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); 


    if (window.innerWidth <= 768) {
        menuIcons.classList.remove('bx-x'); 
        navbars.classList.remove('active');  
    }
};
