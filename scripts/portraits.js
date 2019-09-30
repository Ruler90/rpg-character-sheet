/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const portraitImages = document.querySelectorAll('.portraits');
const emptyPortrait = document.querySelector('.emptyPortrait');
const time = +getComputedStyle(document.querySelector('.animation--time')).animationDuration.replace('s', '') * 1000;

function nextPortrait () {
  for (let i = 0; i < portraitImages.length; i++) {
    if (!emptyPortrait.classList.contains('portraitHidden')) {
      portraitImages[i].classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft', 'activePortrait');
      emptyPortrait.classList.add('animation', 'animation--time', 'animation__slideFromZeroToLeft');
      setTimeout(function () { emptyPortrait.setAttribute('class', 'emptyPortrait portraitHidden') }, time);
      setTimeout(function () { portraitImages[i].setAttribute('class', 'portraits activePortrait') }, time);
      break;
    }
    if (portraitImages[portraitImages.length - 1].classList.contains('activePortrait')) {
      portraitImages[0].classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft', 'activePortrait');
      portraitImages[portraitImages.length - 1].classList.add('animation', 'animation--time', 'animation__slideFromZeroToLeft');
      setTimeout(function () { portraitImages[portraitImages.length - 1].setAttribute('class', 'portraits') }, time);
      break;
    }
    if (portraitImages[i].classList.contains('activePortrait')) {
      portraitImages[i + 1].classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft', 'activePortrait');
      portraitImages[i].classList.add('animation', 'animation--time', 'animation__slideFromZeroToLeft');
      setTimeout(function () { portraitImages[i].setAttribute('class', 'portraits') }, time);
      break;
    }
  }
}

function previousPortrait () {
  for (let i = 0; i < portraitImages.length; i++) {
    if (!emptyPortrait.classList.contains('portraitHidden')) {
      portraitImages[portraitImages.length - 1].classList.add('animation', 'animation--time', 'animation__slideFromLeftToRight', 'activePortrait');
      emptyPortrait.classList.add('animation', 'animation--time', 'animation__slideFromZeroToRight');
      setTimeout(function () { emptyPortrait.setAttribute('class', 'emptyPortrait portraitHidden') }, time);
      break;
    }
    if (portraitImages[0].classList.contains('activePortrait')) {
      portraitImages[portraitImages.length - 1].setAttribute('class', 'portraits animation animation--time animation__slideFromLeftToRight activePortrait');
      portraitImages[0].setAttribute('class', 'portraits animation animation--time animation__slideFromZeroToRight');
      setTimeout(function () { portraitImages[0].setAttribute('class', 'portraits') }, time);
      break;
    }
    if (portraitImages[i].classList.contains('activePortrait')) {
      portraitImages[i - 1].setAttribute('class', 'portraits animation animation--time animation__slideFromLeftToRight activePortrait');
      portraitImages[i].setAttribute('class', 'portraits animation animation--time animation__slideFromZeroToRight');
      setTimeout(function () { portraitImages[i].setAttribute('class', 'portraits') }, time);
      break;
    }
  }
}
