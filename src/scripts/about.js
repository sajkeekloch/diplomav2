import '../styles/about.css';

import './swiper.js';


var swiper = new Swiper('.swiper-container', {
    pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    },
    height: 288,
    loop: true,
    width: 400,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    fadeEffect: {
      crossFade: true
    },
  });