/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const portraitImages = document.querySelectorAll('.portraits');
const emptyPortrait = document.querySelector('.emptyPortrait');
const time = +getComputedStyle(document.querySelector('.animation--time')).animationDuration.replace('s', '') * 1000;

function nextPortrait () {
  for (let i = 0; i < portraitImages.length; i++) {
    if (!emptyPortrait.classList.contains('portraitHidden')) {
      emptyPortrait.classList.add('animation', 'animation--time', 'animation__slideFromZeroToLeft');
      setTimeout(function () { emptyPortrait.classList.add('portraitHidden') }, time);
      portraitImages[0].classList.remove('portraitHidden');
      portraitImages[0].classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft');
      setTimeout(function () { portraitImages[0].classList.remove('animation', 'animation--time', 'animation__slideFromRightToLeft') }, time);
      break;
    };
    if (!portraitImages[portraitImages.length - 1].classList.contains('portraitHidden')) {
      setTimeout(function () { portraitImages[portraitImages.length - 1].classList.add('portraitHidden') }, time);
      portraitImages[portraitImages.length - 1].classList.add('animation', 'animation--time', 'animation__slideFromZeroToLeft');
      setTimeout(function () { portraitImages[portraitImages.length - 1].classList.remove('animation', 'animation--time', 'animation__slideFromZeroToLeft') }, time);
      portraitImages[0].classList.remove('portraitHidden');
      portraitImages[0].classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft');
      setTimeout(function () { portraitImages[0].classList.remove('animation', 'animation--time', 'animation__slideFromRightToLeft') }, time);
      break;
    }
    if (!portraitImages[i].classList.contains('portraitHidden')) {
      setTimeout(function () { portraitImages[i].classList.add('portraitHidden') }, time);
      portraitImages[i].classList.add('animation', 'animation--time', 'animation__slideFromZeroToLeft');
      setTimeout(function () { portraitImages[i].classList.remove('animation', 'animation--time', 'animation__slideFromZeroToLeft') }, time);
      portraitImages[i + 1].classList.remove('portraitHidden');
      portraitImages[i + 1].classList.add('animation', 'animation--time', 'animation__slideFromRightToLeft');
      setTimeout(function () { portraitImages[i + 1].classList.remove('animation', 'animation--time', 'animation__slideFromRightToLeft') }, time);
      break;
    }
  }
}

function previousPortrait () {
  for (let i = 0; i < portraitImages.length; i++) {
    if (!emptyPortrait.classList.contains('portraitHidden')) {
      emptyPortrait.classList.add('animation', 'animation--time', 'animation__slideFromZeroToRight');
      setTimeout(function () { emptyPortrait.classList.add('portraitHidden') }, time);
      portraitImages[portraitImages.length - 1].classList.remove('portraitHidden');
      portraitImages[portraitImages.length - 1].classList.add('animation', 'animation--time', 'animation__slideFromLeftToRight');
      setTimeout(function () { portraitImages[portraitImages.length - 1].classList.remove('animation', 'animation--time', 'animation__slideFromLeftToRight') }, time);
      break;
    };
    if (!portraitImages[0].classList.contains('portraitHidden')) {
      setTimeout(function () { portraitImages[0].classList.add('portraitHidden') }, time);
      portraitImages[0].classList.add('animation', 'animation--time', 'animation__slideFromZeroToRight');
      setTimeout(function () { portraitImages[0].classList.remove('animation', 'animation--time', 'animation__slideFromZeroToRight') }, time);
      portraitImages[portraitImages.length - 1].classList.remove('portraitHidden');
      portraitImages[portraitImages.length - 1].classList.add('animation', 'animation--time', 'animation__slideFromLeftToRight');
      setTimeout(function () { portraitImages[portraitImages.length - 1].classList.remove('animation', 'animation--time', 'animation__slideFromLeftToRight') }, time);
      break;
    }
    if (!portraitImages[i].classList.contains('portraitHidden')) {
      setTimeout(function () { portraitImages[i].classList.add('portraitHidden') }, time);
      portraitImages[i].classList.add('animation', 'animation--time', 'animation__slideFromZeroToRight');
      setTimeout(function () { portraitImages[i].classList.remove('animation', 'animation--time', 'animation__slideFromZeroToRight') }, time)
      portraitImages[i - 1].classList.remove('portraitHidden');
      portraitImages[i - 1].classList.add('animation', 'animation--time', 'animation__slideFromLeftToRight');
      setTimeout(function () { portraitImages[i - 1].classList.remove('animation', 'animation--time', 'animation__slideFromLeftToRight') }, time);
      break;
    }
  }
}
