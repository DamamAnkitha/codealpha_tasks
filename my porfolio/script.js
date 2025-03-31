let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
let sections=document.querySelector('section');
let navLinks=document.querySelector("header nav a");

window.onscroll = function() {
    myFunction()};
    function myFunction() {
        let top=window.scrollY;
        let offset = sections.offsetTop - 150;
        let height = sections.offsetHeight;
        let id = sections.getAttribute('id');

        if(top>=offset && top < offset + height){
            my(id);}
            
        }
        function my(id){
            navLinks.classList.remove('active');
            id.classList.add('active')
        }
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
