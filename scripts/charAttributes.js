/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */

const ourCharacter = {
  attributes: {},
  stats: {}
};

const charName = document.querySelector('#charName');
charName.addEventListener('change', function () {
  ourCharacter.name = charName.value;
})

const genderSelect = document.getElementsByName('genderSelect');
for (let i = 0; i < genderSelect.length; i++) {
  genderSelect[i].addEventListener('change', function () {
    ourCharacter.gender = genderSelect[i].value;
  })
}

const charAttrs = ourCharacter.attributes;

function raceAttrChange(n) {
  switch (n) {
    case 1:
      // Human race have no attribute modifiers
      ourCharacter.race = 'Human';
      break;
    case 2:
      charAttrs.attr1 = +charAttrs.attr1 - 2;
      charAttrs.attr2 = +charAttrs.attr2 + 1;
      charAttrs.attr3 = +charAttrs.attr3 - 1;
      charAttrs.attr4 = +charAttrs.attr4 + 2;
      ourCharacter.race = 'Elf';
      break;
    case 3:
      charAttrs.attr1 = +charAttrs.attr1 + 2;
      charAttrs.attr2 = +charAttrs.attr2 - 2;
      charAttrs.attr3 = +charAttrs.attr3 + 1;
      charAttrs.attr4 = +charAttrs.attr4 - 1;
      ourCharacter.race = 'Dwarf';
      break;
    case 4:
      charAttrs.attr1 = +charAttrs.attr1 - 1;
      charAttrs.attr2 = +charAttrs.attr2 + 2;
      charAttrs.attr3 = +charAttrs.attr3 + 1;
      charAttrs.attr4 = +charAttrs.attr4 - 2;
      ourCharacter.race = 'Dark Elf';
      break
  }
}

function raceAttrReset(n) {
  switch (n) {
    // case 1:
    //   Human race have no attribute modifiers
    //   break;
    case 2:
      charAttrs.attr1 = +charAttrs.attr1 + 2;
      charAttrs.attr2 = +charAttrs.attr2 - 1;
      charAttrs.attr3 = +charAttrs.attr3 + 1;
      charAttrs.attr4 = +charAttrs.attr4 - 2;
      break;
    case 3:
      charAttrs.attr1 = +charAttrs.attr1 - 2;
      charAttrs.attr2 = +charAttrs.attr2 + 2;
      charAttrs.attr3 = +charAttrs.attr3 - 1;
      charAttrs.attr4 = +charAttrs.attr4 + 1;
      break;
    case 4:
      charAttrs.attr1 = +charAttrs.attr1 + 1;
      charAttrs.attr2 = +charAttrs.attr2 - 2;
      charAttrs.attr3 = +charAttrs.attr3 - 1;
      charAttrs.attr4 = +charAttrs.attr4 + 2;
      break
  }
}

function classAttrChange(n) {
  switch (n) {
    case 1:
      charAttrs.attr1 = +charAttrs.attr1 + 2;
      charAttrs.attr2 = +charAttrs.attr2 - 1;
      charAttrs.attr3 = +charAttrs.attr3 + 1;
      charAttrs.attr4 = +charAttrs.attr4 - 2;
      ourCharacter.class = 'Warrior';
      break;
    case 2:
      charAttrs.attr1 = +charAttrs.attr1 - 2;
      charAttrs.attr2 = +charAttrs.attr2 + 2;
      charAttrs.attr3 = +charAttrs.attr3 + 1;
      charAttrs.attr4 = +charAttrs.attr4 - 1;
      ourCharacter.class = 'Ranger';
      break;
    case 3:
      charAttrs.attr1 = +charAttrs.attr1 - 2;
      charAttrs.attr2 = +charAttrs.attr2 - 1;
      charAttrs.attr3 = +charAttrs.attr3 + 1;
      charAttrs.attr4 = +charAttrs.attr4 + 2;
      ourCharacter.class = 'Mage';
      break;
    case 4:
      charAttrs.attr1 = +charAttrs.attr1 + 1;
      charAttrs.attr2 = +charAttrs.attr2 + 2;
      charAttrs.attr3 = +charAttrs.attr3 - 1;
      charAttrs.attr4 = +charAttrs.attr4 - 2;
      ourCharacter.class = 'Assassin';
      break
  }
}

function classAttrReset(n) {
  switch (n) {
    case 1:
      charAttrs.attr1 = +charAttrs.attr1 - 2;
      charAttrs.attr2 = +charAttrs.attr2 + 1;
      charAttrs.attr3 = +charAttrs.attr3 - 1;
      charAttrs.attr4 = +charAttrs.attr4 + 2;
      break;
    case 2:
      charAttrs.attr1 = +charAttrs.attr1 + 2;
      charAttrs.attr2 = +charAttrs.attr2 - 2;
      charAttrs.attr3 = +charAttrs.attr3 - 1;
      charAttrs.attr4 = +charAttrs.attr4 + 1;
      break;
    case 3:
      charAttrs.attr1 = +charAttrs.attr1 + 2;
      charAttrs.attr2 = +charAttrs.attr2 + 1;
      charAttrs.attr3 = +charAttrs.attr3 - 1;
      charAttrs.attr4 = +charAttrs.attr4 - 2;
      break;
    case 4:
      charAttrs.attr1 = +charAttrs.attr1 - 1;
      charAttrs.attr2 = +charAttrs.attr2 - 2;
      charAttrs.attr3 = +charAttrs.attr3 + 1;
      charAttrs.attr4 = +charAttrs.attr4 + 2;
      break
  }
}

const raceUsed = document.querySelectorAll('.raceRadioBtn');

function uncheckedRacePointsReset() {
  for (let i = 0; i < raceUsed.length; i++) {
    if (raceUsed[i].classList.contains('raceUsed')) {
      raceUsed[i].classList.remove('raceUsed');
      raceUsed[i].classList.add('raceNotUsed');
      raceAttrReset(i + 1);
      changeAllAttrValues();
    }
  }
}

const classUsed = document.querySelectorAll('.classRadioBtn');

function uncheckedClassPointsReset() {
  for (let i = 0; i < classUsed.length; i++) {
    if (classUsed[i].classList.contains('classUsed')) {
      classUsed[i].classList.remove('classUsed');
      classUsed[i].classList.add('classNotUsed');
      classAttrReset(i + 1);
      changeAllAttrValues();
    }
  }
}

function getActualAttrValues() {
  for (let i = 1; i <= Object.keys(charAttrs).length; i++) {
    charAttrs['attr' + i] = document.querySelector('#attr' + i).value;
  };
}

function changeAllAttrValues() {
  for (let i = 1; i <= Object.keys(charAttrs).length; i++) {
    document.querySelector('#attr' + i).value = charAttrs['attr' + i];
  }
}

function charStatsChange () {
  getActualAttrValues();
  document.querySelector('#attrHP').value = +charAttrs.attr3 * 10;
  document.querySelector('#attrAtk').value = +charAttrs.attr1 * 2;
  document.querySelector('#attrDef').value = +charAttrs.attr2 * 1;
  document.querySelector('#attrMag').value = +charAttrs.attr4 * 2;
  ourCharacter.stats.HP = document.querySelector('#attrHP').value;
  ourCharacter.stats.Attack = document.querySelector('#attrAtk').value;
  ourCharacter.stats.Defence = document.querySelector('#attrDef').value;
  ourCharacter.stats.Magic = document.querySelector('#attrMag').value;
}

for (let i = 0; i < raceUsed.length; i++) {
  raceUsed[i].addEventListener('change', function () {
    uncheckedRacePointsReset();
    raceUsed[i].classList.remove('raceNotUsed');
    raceUsed[i].classList.add('raceUsed');
    getActualAttrValues();
    raceAttrChange(i + 1);
    changeAllAttrValues();
    charStatsChange();
  })
}

for (let i = 0; i < classUsed.length; i++) {
  classUsed[i].addEventListener('change', function () {
    uncheckedClassPointsReset();
    classUsed[i].classList.remove('classNotUsed');
    classUsed[i].classList.add('classUsed');
    getActualAttrValues();
    classAttrChange(i + 1);
    changeAllAttrValues();
    charStatsChange()
  })
}

let generatedAttrs = [];

function generateRandom() {
  generatedAttrs = [];
  for (let i = 1; i <= 4; i++) {
    charAttrs['attr' + i] = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
    generatedAttrs.push(charAttrs['attr' + i]);
  }
  // log random attr to compare them to the attr with radio btn checked
  console.log(charAttrs);
  // log random array to check subtract
  console.log(generatedAttrs);

  for (let i = 0; i < raceUsed.length; i++) {
    if (raceUsed[i].classList.contains('raceUsed')) {
      raceAttrChange(i + 1);
    }
  }
  for (let i = 0; i < classUsed.length; i++) {
    if (classUsed[i].classList.contains('classUsed')) {
      classAttrChange(i + 1);
    }
  }

  changeAllAttrValues();
  document.querySelector('#pointsLeft').value = 10;

  const disabledButtons = document.querySelectorAll('.disabledBtn');
  for (let i = 0; i < disabledButtons.length; i++) {
    disabledButtons[i].disabled = false;
  }

  charStatsChange()
}

function addAttr(n) {
  if (document.querySelector('#attr' + n).value < 20 && document.querySelector('#pointsLeft').value > 0) {
    document.querySelector('#attr' + n).value++;
    document.querySelector('#pointsLeft').value--;
    charStatsChange()
  }
}

function subtractAttr(n) {
  if (document.querySelector('#attr' + n).value > generatedAttrs[n - 1] && document.querySelector('#pointsLeft').value < 10) {
    document.querySelector('#attr' + n).value--;
    document.querySelector('#pointsLeft').value++
    charStatsChange()
  }
}
