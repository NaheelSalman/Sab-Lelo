const navbutton = document.querySelector(".hamburger");
const navLink =document.querySelector(".navbar-links");

navbutton.addEventListener('click',function(){
    navLink.classList.toggle('open');
});