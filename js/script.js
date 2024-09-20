
let typingEffect = new Typed(".name", {
    strings: ["Henry Erondu", " A Frontend Developer"," A Game Developer", " An Administartor"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
})

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

 