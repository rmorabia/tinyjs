// Day 1: Hello, Name!

var getNameInput = document.getElementById('getNameInput')

document.querySelector('#nameButton').addEventListener('click', function getName () {
  document.getElementById('helloName').innerHTML = 'Hello ' + getNameInput.value + '!'
  getNameInput.value = ''
})

// Day 2: YDKJS: U&G IN THE DOM

const PHONE = 99.99
const ACCESSORY = 99.99
const TAX_RATE = 0.0888
var total = 0

var bankBalance = document.getElementById('bankBalanceInput')
var spendingThreshold = document.getElementById('spendingThresholdInput')

function calculateTaxes () {
  total = total + (total * TAX_RATE)
}

function theWholeThing () {
  while (bankBalance.value > (PHONE + ACCESSORY)) {
    bankBalance.value = bankBalance.value - PHONE
    total = total + PHONE
    if (spendingThreshold.value > (PHONE + ACCESSORY)) {
      bankBalance.value = bankBalance.value - ACCESSORY
      total = total + ACCESSORY
    }
  }
  calculateTaxes()
}

document.querySelector('#phoneButton').addEventListener('click', function printResults () {
  theWholeThing()
  document.getElementById('totalText').innerHTML = 'Your total is $' + total.toFixed(2) + '.'
  if (bankBalance.value > total) {
    document.getElementById('canYouAffordIt').innerHTML = 'You can afford it! Take your many new phones and have fun!'
  } else {
    document.getElementById('canYouAffordIt').innerHTML = "You can't afford it. :( Make more money next time!"
  }
  bankBalanceInput.value = ''
  spendingThresholdInput.value = ''
})

// Day 3: Change Background Colors

document.querySelector('#changeColorButton').addEventListener('click', function () {
  if (document.querySelector('html').style.backgroundColor === 'green') {
    document.querySelector('html').style.backgroundColor = 'blue'
  } else {
    document.querySelector('html').style.backgroundColor = 'green'
  }
})
