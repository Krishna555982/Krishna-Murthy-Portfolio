/***************** taggle icon navbar *****************/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*****************Scroll section active link*****************/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)  {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
        };
    });
/***************** sticky navbar *****************/

let header = document.querySelector('header');

header.classList.toggle ('sticky',window.scrollY > 100);


/***************** remove toggle icon and navbar when click navbar link(scroll) *****************/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/***************** scroll reveal *****************/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 75
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home_img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.social-media, .about-content', { origin: 'right' });

/***************** Typed js imported *****************/

const typed = new Typed ('.multiple-text', {
    strings: ['Frontend Developer', 'Java Developer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

/***************** getting responce form user *****************/
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let emailSubject = document.getElementById("emailSubject").value;
    let Message = document.getElementById("Message").value;

    console.log ("Full Name:", fullname);
    console.log ("Email:", email);
    console.log ("Mobile Number:", mobileNumber);
    console.log ("Email Subject:", emailSubject);
    console.log ("Message:", Message);

    alert('Thank you, ${fullName}! your message has been recived');

});

/**form database */

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent page reload on submission

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  });

  if (response.ok) {
    alert("Your message has been sent successfully!");
    form.reset(); 
  } else {
    alert("Oops! Something went wrong. Please try again.");
  }
});