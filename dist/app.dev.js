"use strict";

//access html elements onto js 
var numberResult = document.querySelector('h1');
var numberButtons = document.querySelectorAll('.btn.number');
console.log(numberButtons);
var allButtons = document.querySelectorAll('.btn');
var clearButton = document.querySelector('.btn.function.clear');
console.log(clearButton);
var plusButton = document.querySelector('.btn.function.minus');
console.log(plusButton);
var functionsButtons = document.querySelectorAll('.btn.function');
var operatorButtons = document.querySelectorAll('.btn.operator');
allButtons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    buttonEventListener(e);
  });
});
var value = 0;

var buttonEventListener = function buttonEventListener(e) {
  if (value === 0) {
    value = e.target.innerHTML;
    buttonPressed.value = value;
    return value;
  } else {
    value = value + e.target.innerHTML;
    buttonPressed.value = value;
  }

  var buttonPressed = e.target.innerHTML;
  numberResult.innerHTML = buttonPressed;
  numberButtons.addEventListener('buttonEventListener');
}; //clears ouput 


clearButton.addEventListener('click', function () {
  numberResult.innerHTML = 0;
}); // operator interaction 
// plus function 

var sum = function sum() {};

var multiply = function multiply() {};

var minus = function minus() {};

var divide = function divide() {};

var findPercentage = function findPercentage() {};