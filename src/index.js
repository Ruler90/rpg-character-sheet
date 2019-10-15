/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */

// need to use import to make webpack bundle all files
import { } from './modules/description.js'
import { } from './modules/portraits.js'

const ourCharacter = {
  attributes: {},
  stats: {},
  attrInitialValues: {}
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

const charInit = ourCharacter.attrInitialValues;

function raceAttrChange(n) {
  switch (n) {
    case 1:
      charInit.attr1Race = +charInit.attr1Init;
      charInit.attr2Race = +charInit.attr2Init;
      charInit.attr3Race = +charInit.attr3Init;
      charInit.attr4Race = +charInit.attr4Init;
      ourCharacter.race = 'Human';
      break;
    case 2:
      charInit.attr1Race = +charInit.attr1Init - 2;
      charInit.attr2Race = +charInit.attr2Init + 1;
      charInit.attr3Race = +charInit.attr3Init - 1;
      charInit.attr4Race = +charInit.attr4Init + 2;
      ourCharacter.race = 'Elf';
      break;
    case 3:
      charInit.attr1Race = +charInit.attr1Init + 2;
      charInit.attr2Race = +charInit.attr2Init - 2;
      charInit.attr3Race = +charInit.attr3Init + 1;
      charInit.attr4Race = +charInit.attr4Init - 1;
      ourCharacter.race = 'Dwarf';
      break;
    case 4:
      charInit.attr1Race = +charInit.attr1Init - 1;
      charInit.attr2Race = +charInit.attr2Init + 2;
      charInit.attr3Race = +charInit.attr3Init + 1;
      charInit.attr4Race = +charInit.attr4Init - 2;
      ourCharacter.race = 'Dark Elf';
      break
  }
}

function classAttrChange(n) {
  switch (n) {
    case 1:
      charInit.attr1Class = +charInit.attr1Init + 2;
      charInit.attr2Class = +charInit.attr2Init - 1;
      charInit.attr3Class = +charInit.attr3Init + 1;
      charInit.attr4Class = +charInit.attr4Init - 2;
      ourCharacter.class = 'Warrior';
      break;
    case 2:
      charInit.attr1Class = +charInit.attr1Init - 2;
      charInit.attr2Class = +charInit.attr2Init + 2;
      charInit.attr3Class = +charInit.attr3Init + 1;
      charInit.attr4Class = +charInit.attr4Init - 1;
      ourCharacter.class = 'Ranger';
      break;
    case 3:
      charInit.attr1Class = +charInit.attr1Init - 2;
      charInit.attr2Class = +charInit.attr2Init - 1;
      charInit.attr3Class = +charInit.attr3Init + 1;
      charInit.attr4Class = +charInit.attr4Init + 2;
      ourCharacter.class = 'Mage';
      break;
    case 4:
      charInit.attr1Class = +charInit.attr1Init + 1;
      charInit.attr2Class = +charInit.attr2Init + 2;
      charInit.attr3Class = +charInit.attr3Init - 1;
      charInit.attr4Class = +charInit.attr4Init - 2;
      ourCharacter.class = 'Assassin';
      break
  }
}

const charAttrs = ourCharacter.attributes;

function getActualAttrValues() {
  for (let i = 1; i <= Object.keys(charAttrs).length; i++) {
    charAttrs['attr' + i] = document.querySelector('#attr' + i).value;
  };
}

function changeAllAttrValues() {
  for (let i = 1; i <= Object.keys(charAttrs).length; i++) {
    if (charInit['attr' + i + 'Race'] === undefined && charInit['attr' + i + 'Class'] === undefined) {
      document.querySelector('#attr' + i).value = charInit['attr' + i + 'Init'];
    }
    if (charInit['attr' + i + 'Race'] !== undefined && charInit['attr' + i + 'Class'] === undefined) {
      document.querySelector('#attr' + i).value = charInit['attr' + i + 'Race']
    }
    if (charInit['attr' + i + 'Race'] === undefined && charInit['attr' + i + 'Class'] !== undefined) {
      document.querySelector('#attr' + i).value = charInit['attr' + i + 'Class']
    }
    if (charInit['attr' + i + 'Race'] !== undefined && charInit['attr' + i + 'Class'] !== undefined) {
      document.querySelector('#attr' + i).value = charInit['attr' + i + 'Race'] + charInit['attr' + i + 'Class'] - charInit['attr' + i + 'Init'];
    }
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

const raceUsed = document.querySelectorAll('.raceRadioBtn');
const classUsed = document.querySelectorAll('.classRadioBtn');

for (let i = 0; i < raceUsed.length; i++) {
  raceUsed[i].addEventListener('change', function () {
    raceAttrChange(i + 1);
    changeAllAttrValues();
    charStatsChange();
    document.querySelector('#pointsLeft').value = 10;
  })
}

for (let i = 0; i < classUsed.length; i++) {
  classUsed[i].addEventListener('change', function () {
    classAttrChange(i + 1);
    changeAllAttrValues();
    charStatsChange()
    document.querySelector('#pointsLeft').value = 10;
  })
}

function generateRandom() {
  for (let i = 1; i <= 4; i++) {
    charAttrs['attr' + i] = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
    charInit['attr' + i + 'Init'] = charAttrs['attr' + i];
  }
  // log random attr to compare them to the attr with radio btn checked
  console.log(charAttrs);

  for (let i = 0; i < raceUsed.length; i++) {
    if (raceUsed[i].checked) {
      raceAttrChange(i + 1);
    }
  }
  for (let i = 0; i < classUsed.length; i++) {
    if (classUsed[i].checked) {
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

const randomButton = document.querySelector('.randomButton');
randomButton.addEventListener('click', generateRandom);

for (let i = 1; i < 5; i++) {
  const addAttrBtn = document.querySelector('.addAttr' + i + 'Btn');
  addAttrBtn.addEventListener('click', function addAttr () {
    if (document.querySelector('#attr' + i).value < 20 && document.querySelector('#pointsLeft').value > 0) {
      document.querySelector('#attr' + i).value++;
      document.querySelector('#pointsLeft').value--;
      charStatsChange()
    }
  });
}

for (let i = 1; i < 5; i++) {
  const substrAttrBtn = document.querySelector('.substrAttr' + i + 'Btn');
  substrAttrBtn.addEventListener('click', function subtractAttr() {
    if (document.querySelector('#attr' + i).value > charInit['attr' + i + 'Init'] && document.querySelector('#pointsLeft').value < 10) {
      document.querySelector('#attr' + i).value--;
      document.querySelector('#pointsLeft').value++
      charStatsChange()
    }
  });
}
