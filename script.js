// Day 1: Hello, Name!

var getNameInput = document.getElementById('getNameInput')

document.querySelector('button').addEventListener('click', function getName () {
  document.getElementById('helloName').innerHTML = 'Hello ' + getNameInput.value + '!'
  getNameInput.value = ''
})
