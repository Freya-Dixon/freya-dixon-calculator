"use strict";

//access html elements onto js 
var numberResult = document.querySelector('h1');
var numberButtons = document.querySelectorAll('.btn.number');
console.log(numberButtons);
var allButtons = document.querySelectorAll('.btn');
var clearButton = document.querySelector('.btn.function.clear');
console.log(clearButton);
var functionsButtons = document.querySelectorAll('.btn.function');
var operatorButtons = document.querySelectorAll('.btn.operator');
allButtons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    buttonEventListener(e);
  });
});

var buttonEventListener = function buttonEventListener(e) {
  var buttonPressed = e.target.innerHTML;
  numberResult.innerHTML = buttonPressed;
  numberButtons.addEventListener('buttonEventListener');
}; //clears ouput 


clearButton.addEventListener('click', function () {
  numberResult.innerHTML = 0;
});