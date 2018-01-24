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

resetButton.addEventListener('click', function () {
  playerOneNumber = 0
  playerTwoNumber = 0
  playingToNumber = 5
  playerOneValue.textContent = '0'
  playerTwoValue.textContent = '0'
  playerOneValue.style.color = 'black'
  playerTwoValue.style.color = 'black'
  playingToInput.value = ''
  playingTo.textContent = '5'
})

playerOneButton.addEventListener('click', function () {
  if (playerTwoNumber >= playingToNumber) {
    playerOneValue.textContent = playerOneNumber
  } else if (playerOneNumber >= playingToNumber) {
    playerOneValue.textContent = playerOneNumber
  } else if (playerOneNumber <= playingToNumber) {
    playerOneNumber = playerOneNumber + 1
    playerOneValue.textContent = playerOneNumber
  }
})

playerOneButton.addEventListener('click', function () {
  if (playerOneNumber >= playingToNumber) {
    playerOneValue.style.color = 'green'
  }
})

playerTwoButton.addEventListener('click', function () {
  if (playerOneNumber >= playingToNumber) {
    playerTwoValue.textContent = playerTwoNumber
  } else if (playerTwoNumber >= playingToNumber) {
    playerTwoValue.textContent = playingToNumber
  } else if (playerTwoNumber < playingToNumber) {
    playerTwoNumber = playerTwoNumber + 1
    playerTwoValue.textContent = playerTwoNumber
  }
})

playerTwoButton.addEventListener('click', function () {
  if (playerTwoNumber >= playingToNumber) {
    playerTwoValue.style.color = 'green'
  }
})

document.querySelector('#playingToInput').addEventListener('keyup', function () {
  playingToNumber = playingToInput.value
  playingTo.textContent = playingToInput.value
})

document.querySelector('#playingToInput').addEventListener('click', function () {
  playingToNumber = playingToInput.value
  playingTo.textContent = playingToInput.value
})

// Day 5: Random Colors are Fun

function color() {
  var hex = '#' + Math.random().toString(16).slice(2, 8)
  document.querySelector('#randomColors').style.color = hex
}

setInterval (function() {
  color()
}, 1000)