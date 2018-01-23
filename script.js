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

// Day 4: Score Keeper

var playerOneButton = document.querySelector('#playerOneButton')
var playerTwoButton = document.querySelector('#playerTwoButton')
var playerOneValue = document.querySelector('#playerOneValue')
var playerTwoValue = document.querySelector('#playerTwoValue')
var playingToInput = document.querySelector('#playingToInput')
var resetButton = document.querySelector('#resetButton')
var playingTo = document.querySelector('#playingTo')

var playerOneNumber = 0
var playerTwoNumber = 0
var playingToNumber = 5

playerOneButton.addEventListener('click', function () {
  playerOneNumber = playerOneNumber + 1
  playerOneValue.textContent = playerOneNumber
  if (playerOneNumber == playingToNumber) {
    playerOneValue.style.color = 'green'
    playerOneNumber = playerOneNumber
  }
})

playerTwoButton.addEventListener('click', function () {
  playerTwoNumber = playerTwoNumber + 1
  playerTwoValue.textContent = playerTwoNumber
  if (playerTwoNumber == playingToNumber) {
    playerTwoValue.style.color = 'green'
  }
})

document.querySelector('#playingToButton').addEventListener('click', function () {
  playingToNumber = playingToInput.value
  playingTo.textContent = playingToInput.value
})

resetButton.addEventListener('click', function () {
  playerOneNumber = 0
  playerTwoNumber = 0
  playingToNumber = 5
  playerOneValue.innerHTML = '0'
  playerTwoValue.innerHTML = '0'
  playerOneValue.style.color = 'black'
  playerTwoValue.style.color = 'black'
  playingToInput.value = ''
  playingTo.textContent = '5'
})
