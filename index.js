
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href* = ' + id + ']').classList.add('active');
            })
        }

    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
 

function readMore(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var button = document.getElementById("btn");

    if(dots.style.display ==='none'){
        dots.style.display = 'inline';
        moreText.style.display="none"
        button.innerHTML = "Read More"
    }else{
        dots.style.display = "none"
        moreText.style.display = "inline";
        button.innerHTML = "Read Less"
    }
}

