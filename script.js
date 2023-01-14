let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let themeToggler =document.querySelector('.theme-toggler');
let toggleBtn =document.querySelector('.toggle-btn');

toggle-btn.onclick = () => {
  themeToggler.classList.toggle('active');
}

window.onscorll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

  var swiper = new Swiper(".home-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
      loop:true,
      autoplay:{
        delay:3000,
        disableOnInteraction:false,
      }
      });
      