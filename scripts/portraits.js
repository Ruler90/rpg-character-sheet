/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const portraitImages = document.querySelectorAll('.portraits');
const emptyPortrait = document.querySelector('.emptyPortrait');

function nextPortrait () {
  for (let i = 0; i < portraitImages.length; i++) {
    if (!emptyPortrait.classList.contains('portraitHidden')) {
      emptyPortrait.classList.add('animation__slideFromZeroToLeft');
      setTimeout(function () { emptyPortrait.classList.add('portraitHidden') }, 400);
      portraitImages[0].classList.remove('portraitHidden');
      portraitImages[0].classList.add('animation__slideFromRightToLeft');
      setTimeout(function () { portraitImages[0].classList.remove('animation__slideFromRightToLeft') }, 400);
      break;
    };
    if (!portraitImages[portraitImages.length - 1].classList.contains('portraitHidden')) {
      setTimeout(function () { portraitImages[portraitImages.length - 1].classList.add('portraitHidden') }, 400);
      portraitImages[portraitImages.length - 1].classList.add('animation__slideFromZeroToLeft');
      setTimeout(function () { portraitImages[portraitImages.length - 1].classList.remove('animation__slideFromZeroToLeft') }, 400);
      portraitImages[0].classList.remove('portraitHidden');
      portraitImages[0].classList.add('animation__slideFromRightToLeft');
      setTimeout(function () { portraitImages[0].classList.remove('animation__slideFromRightToLeft') }, 400);
      break;
    }
    if (!portraitImages[i].classList.contains('portraitHidden')) {
      setTimeout(function () { portraitImages[i].classList.add('portraitHidden') }, 400);
      portraitImages[i].classList.add('animation__slideFromZeroToLeft');
      setTimeout(function () { portraitImages[i].classList.remove('animation__slideFromZeroToLeft') }, 400);
      portraitImages[i + 1].classList.remove('portraitHidden');
      portraitImages[i + 1].classList.add('animation__slideFromRightToLeft');
      setTimeout(function () { portraitImages[i + 1].classList.remove('animation__slideFromRightToLeft') }, 400);
      break;
    }
  }
}

function previousPortrait () {
  for (let i = 0; i < portraitImages.length; i++) {
    if (!emptyPortrait.classList.contains('portraitHidden')) {
      emptyPortrait.classList.add('animation__slideFromZeroToRight');
      setTimeout(function () { emptyPortrait.classList.add('portraitHidden') }, 400);
      portraitImages[portraitImages.length - 1].classList.remove('portraitHidden');
      portraitImages[portraitImages.length - 1].classList.add('animation__slideFromLeftToRight');
      setTimeout(function () { portraitImages[portraitImages.length - 1].classList.remove('animation__slideFromLeftToRight') }, 400);
      break;
    };
    if (!portraitImages[0].classList.contains('portraitHidden')) {
      setTimeout(function () { portraitImages[0].classList.add('portraitHidden') }, 400);
      portraitImages[0].classList.add('animation__slideFromZeroToRight');
      setTimeout(function () { portraitImages[0].classList.remove('animation__slideFromZeroToRight') }, 400);
      portraitImages[portraitImages.length - 1].classList.remove('portraitHidden');
      portraitImages[portraitImages.length - 1].classList.add('animation__slideFromLeftToRight');
      setTimeout(function () { portraitImages[portraitImages.length - 1].classList.remove('animation__slideFromLeftToRight') }, 400);
      break;
    }
    if (!portraitImages[i].classList.contains('portraitHidden')) {
      setTimeout(function () { portraitImages[i].classList.add('portraitHidden') }, 400);
      portraitImages[i].classList.add('animation__slideFromZeroToRight');
      setTimeout(function () { portraitImages[i].classList.remove('animation__slideFromZeroToRight') }, 400)
      portraitImages[i - 1].classList.remove('portraitHidden');
      portraitImages[i - 1].classList.add('animation__slideFromLeftToRight');
      setTimeout(function () { portraitImages[i - 1].classList.remove('animation__slideFromLeftToRight') }, 400);
      break;
    }
  }
}
