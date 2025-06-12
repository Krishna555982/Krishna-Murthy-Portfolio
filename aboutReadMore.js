
let menuIcons = document.querySelector('#menu-icons');
let navbars = document.querySelector('.navbars');

menuIcons.onclick = () => {
    menuIcons.classList.toggle('bx-x'); 
    navbars.classList.toggle('active'); 
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

        
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');


                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /***************** Sticky navbar *****************/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); 


    if (window.innerWidth <= 768) {
        menuIcons.classList.remove('bx-x'); 
        navbars.classList.remove('active');  
    }
};
