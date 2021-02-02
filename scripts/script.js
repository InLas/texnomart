$(document).ready(function(){
  $('.features__slider').slick({
      dots: true,
      arrows: true,
      draggable: false,
      speed: 0,
  });
});

let offset = 0;
const sliderLine = document.querySelector(".slider-box__line");
let mapOpen = document.querySelector(".about-us__map-open");
let mapShow = document.querySelector(".about-us__modal-map");
let mapClose = document.querySelector(".about-us__modal-close");
let formOpen = document.querySelector(".about-us__write-us-open");
let formShow = document.querySelector(".about-us__modal-write-us");
let formClose = document.querySelector(".modal-write-us__modal-close");
let userName = document.querySelector(".modal-write-us__input");


document.querySelector(".slider-buttons-list__button--delivery").addEventListener("click", function (evt)  {
    evt.preventDefault();
  offset = offset + 0;
  if (offset > 0)  {
      offset = 0;
  }
  sliderLine.style.bottom = -offset + "px";
});


document.querySelector(".slider-buttons-list__button--warranty").addEventListener("click", function (evt)  {
    evt.preventDefault();
  offset = offset + 285;
  if (offset > 0)  {
      offset = 285;
  }
  sliderLine.style.bottom = offset + "px";
});


document.querySelector(".slider-buttons-list__button--credit").addEventListener("click", function (evt)  {
    evt.preventDefault();
  offset = offset + 570;
  if (offset > 0)  {
      offset = 570;
  }
  sliderLine.style.bottom = offset + "px";
});

  
mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();;
  mapShow.classList.add("about-us__modal-map--show");
});


mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();;
  mapShow.classList.remove("about-us__modal-map--show");
});


formOpen.addEventListener("click", function (evt) {
  evt.preventDefault();;
  formShow.classList.add("about-us__modal-write-us--show");
  userName.focus();
});


formClose.addEventListener("click", function (evt) {
  evt.preventDefault();;
  formShow.classList.remove("about-us__modal-write-us--show");
});
