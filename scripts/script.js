let offset = 0;
const sliderLine = document.querySelector('.slider-box__line');
let mapOpen = document.querySelector('.about-us__map-open');
let formOpen = document.querySelector('.about-us__write-us-open');
let servicesButtons = document.querySelectorAll('.slider-buttons-list__button');
let deliveryButton = document.querySelector('.slider-buttons-list__button--delivery');
let warrantyButton = document.querySelector('.slider-buttons-list__button--warranty');
let creditButton = document.querySelector('.slider-buttons-list__button--credit');

if (servicesButtons) {
  servicesButtons.forEach(item => {
    item.addEventListener('click', function () {
      let current = document.getElementsByClassName('slider-buttons-list__button--active');
      current[0].className = current[0].className.replace(' slider-buttons-list__button--active', '');
      this.className += ' slider-buttons-list__button--active';
    })
  });
}

if (deliveryButton) {
  deliveryButton.addEventListener('click', function () {
    offset = offset + 0;
    if (offset > 0) {
      offset = 0;
    }
    sliderLine.style.bottom = -offset + 'px';
  });
}

if (warrantyButton) {
  warrantyButton.addEventListener('click', function () {
    offset = offset + 285;
    if (offset > 0) {
      offset = 285;
    }
    sliderLine.style.bottom = offset + 'px';
  });
}

if (creditButton) {
  creditButton.addEventListener('click', function () {
    offset = offset + 570;
    if (offset > 0) {
      offset = 570;
    }
    sliderLine.style.bottom = offset + 'px';
  });
}

$(document).ready(function () {
  $('.features__slider').slick({
    dots: true,
    arrows: true,
    draggable: false,
    speed: 0,
  });
});

if (mapOpen) {
  let mapShow = document.querySelector('.about-us__modal-map');
  let mapClose = document.querySelector('.about-us__modal-close');

  mapOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapShow.classList.add('about-us__modal-map--show');
  });

  mapClose.addEventListener('click', function () {
    mapShow.classList.remove('about-us__modal-map--show');
  });
}

if (formOpen) {
  let formShow = document.querySelector('.about-us__modal-write-us');
  let formClose = document.querySelector('.modal-write-us__modal-close');
  let userName = document.querySelector('.modal-write-us__input');

  formOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    formShow.classList.add('about-us__modal-write-us--show');
    userName.focus();
  });

  formClose.addEventListener('click', function () {
    formShow.classList.remove('about-us__modal-write-us--show');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapShow.classList.contains('about-us__modal-map--show')) {
      mapShow.classList.remove('about-us__modal-map--show');
    }
    if (formShow.classList.contains('about-us__modal-write-us--show')) {
      formShow.classList.remove('about-us__modal-write-us--show');
    }
  }
});
