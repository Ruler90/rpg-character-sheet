/* eslint-disable semi */

// 1st method to change description - JS + HTML paragraphs

const raceDescriptionToggle = document.querySelectorAll('.raceRadioBtn');
raceDescriptionToggle.forEach(function (value, index) {
  value.addEventListener('change', function () {
    for (let i = 1; i <= 4; i++) {
      document.querySelector('.raceDescr' + i).classList.add('hideDescription');
    }
    document.querySelector('.raceDescr' + [index + 1]).classList.remove('hideDescription');
  })
})

const classDescriptionToggle = document.querySelectorAll('.classRadioBtn');
classDescriptionToggle.forEach(function (value, index) {
  value.addEventListener('change', function () {
    for (let i = 1; i <= 4; i++) {
      document.querySelector('.classDescr' + i).classList.add('hideDescription');
    }
    document.querySelector('.classDescr' + [index + 1]).classList.remove('hideDescription');
  })
})

// 2nd method to change description - JS only - change with innerText
// I don't know if I can style part of template string (e.g. colors of changing attributes)

// const descrBox = document.querySelector('.descriptionBox');

// const raceDescriptionToggle = document.querySelectorAll('.raceRadioBtn');
// raceDescriptionToggle.forEach(function (value, index) {
//   value.addEventListener('change', function () {
//     descrBox.innerText = raceDescription[index]
//   })
// })

// const classDescriptionToggle = document.querySelectorAll('.classRadioBtn');
// classDescriptionToggle.forEach(function (value, index) {
//   value.addEventListener('change', function () {
//     descrBox.innerText = classDescription[index]
//   })
// })

// const raceDescription = [
//   `Race 1
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tincidunt neque. Suspendisse potenti. Aliquam erat volutpat. Sed rhoncus massa egestas, interdum urna vitae, congue sem.`,
//   `Race 2
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tincidunt neque. Suspendisse potenti. Aliquam erat volutpat. Sed rhoncus massa egestas, interdum urna vitae, congue sem.`,
//   `Race 3
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tincidunt neque. Suspendisse potenti. Aliquam erat volutpat. Sed rhoncus massa egestas, interdum urna vitae, congue sem.`,
//   `Race 4
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tincidunt neque. Suspendisse potenti. Aliquam erat volutpat. Sed rhoncus massa egestas, interdum urna vitae, congue sem.`
// ]

// const classDescription = [
//   `Class 1
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tincidunt neque. Suspendisse potenti. Aliquam erat volutpat. Sed rhoncus massa egestas, interdum urna vitae, congue sem.`,
//   `Class 2
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tincidunt neque. Suspendisse potenti. Aliquam erat volutpat. Sed rhoncus massa egestas, interdum urna vitae, congue sem.`,
//   `Class 3
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tincidunt neque. Suspendisse potenti. Aliquam erat volutpat. Sed rhoncus massa egestas, interdum urna vitae, congue sem.`,
//   `Class 4
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget tincidunt neque. Suspendisse potenti. Aliquam erat volutpat. Sed rhoncus massa egestas, interdum urna vitae, congue sem.`
// ]
