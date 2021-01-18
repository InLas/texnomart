let offset = 0;
const sliderline1 = document.querySelector(".catalog__slider-line");
const sliderline2 = document.querySelector(".services__slider__line");
// let sliderbutton1 = document.querySelector(".slider__buttons-list__button--1");
//   let sliderbutton2 = document.querySelector('.slider__buttons-list__button--2');
//   let sliderbutton3 = document.querySelector('.slider__buttons-list__button--3');
let MapOpen = document.querySelector(".about-us__map__open");
let MapShow = document.querySelector(".about-us__modal__map");
let MapClose = document.querySelector(".about-us__modal__close");
let FormOpen = document.querySelector(".about-us__write-us__open");
let FormShow = document.querySelector(".about-us__modal__write-us");
let FormClose = document.querySelector(".about-us__modal__close--write-us");
let UserName = document.querySelector(".modal__input");


document.querySelector(".catalog__slider__next").addEventListener("click", function (evt)  {
  evt.preventDefault()
offset = offset + 620;
if (offset > 620)  {
    offset = 0
}
sliderline1.style.left = -offset + "px";
});


document.querySelector(".catalog__slider__prev").addEventListener("click", function (evt)  {
  evt.preventDefault()
offset = offset - 620;
if (offset < 0)  {
    offset = 620
}
sliderline1.style.left = -offset + "px";
});


document.querySelector(".slider__buttons-list__button--1").addEventListener("click", function (evt)  {
    evt.preventDefault()
  offset = offset + 0;
  if (offset > 0)  {
      offset = 0
  }
  sliderline2.style.bottom = -offset + "px";
});


document.querySelector(".slider__buttons-list__button--2").addEventListener("click", function (evt)  {
    evt.preventDefault()
  offset = offset + 285;
  if (offset > 0)  {
      offset = 285
  }
  sliderline2.style.bottom = offset + "px";
});


document.querySelector(".slider__buttons-list__button--3").addEventListener("click", function (evt)  {
    evt.preventDefault()
  offset = offset + 570;
  if (offset > 0)  {
      offset = 570
  }
  sliderline2.style.bottom = offset + "px";
});

  
MapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  MapShow.classList.add("about-us__modal__map--show");
});


MapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  MapShow.classList.remove("about-us__modal__map--show");
});


FormOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  FormShow.classList.add("about-us__modal__write-us--show");
  UserName.focus();
});


FormClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  FormShow.classList.remove("about-us__modal__write-us--show");
});
