slid= 5;
if (window.innerWidth <= 768) {
   slid =3
}

var swiper = new Swiper(".slide-product", {
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  slidesPerView: slid,
  speed: 2000,
  spaceBetween: 15,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,

});






