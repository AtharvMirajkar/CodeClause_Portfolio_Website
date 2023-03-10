
var typingEffect = new Typed(".multiText",{
    strings : ["Frontend Developer","Coder", "Learner" ],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500 
})


// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}



