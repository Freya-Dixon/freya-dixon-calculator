"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// Freya Dixon Calculator Project Java Script
// calculator object, condenses important values into one object, curentValue will always be set to 0 by default, number 1 will be null. If number2 will be set to false, declared as boolean to adapt to multiple instances where user may or may not return value. The operator will also be set to null
var calculatorObject = {
  currentValue: 0,
  number1: null,
  ifnumber2: false,
  operator: null
};
console.log(calculatorObject);
var button = document.querySelectorAll('.btn');
console.log(button);
var operatorKeys = document.querySelectorAll('.btn.operator');
console.log(operatorKeys);
var numberKeys = document.querySelectorAll('.btn.number');
console.log(numberKeys);
var functionKeys = document.querySelectorAll('.btn.function');
var display = document.querySelector('#result');
console.log(display);
var clearButton = document.querySelector('.btn.function.clear');
console.log(clearButton);
var equalsButton = document.querySelector('.btn.operator.equals');
console.log();
var plusButton = document.querySelector('.btn.operator.plus');
console.log();
var divideButton = document.querySelector('.btn.operator.divide');
console.log();
var muliplyButton = document.querySelector('.btn.operator.multiply');
button.forEach(function (button) {
  button.addEventListener('click', function (e) {
    updateInput(e);
    enterNumber(e);
    accessOperator(e);
    calculate(e);
    resetButton(e);
  });
}); // update display to the user's input 

updateInput = function updateInput() {
  display.value = calculatorObject.currentValue;
};

updateInput(); // display buttons on input display when user hits key

enterNumber = function enterNumber() {
  var currentValue = calculatorObject.currentValue;

  if (calculatorObject.currentValue = 0) {
    display.innerHTML = currentValue;
  } else {
    currentValue = (_readOnlyError("currentValue"), value + e.target.innerHTML);
    display.innerHTML = value;
  }
}; // enterDecimal = () => {
//     if ()
//     return
//     else
// }
// // create operator function


accessOperator = function accessOperator(e) {
  var curentValue = calculatorObject.curentValue,
      number1 = calculatorObject.number1,
      operator = calculatorObject.operator;
  var inputValue = parsefloat(curentValue);

  if (number1 = (_readOnlyError("number1"), null)) {
    calculatorObject.number1 = inputValue;
  }

  calculatorObject.ifnumber2 = true;
  calculatorObject.operator = secondOperator;
}; // calculate function


calculate = function calculate(e) {
  if (operator === '+') {
    return number1 + number2;
  } else if (operator === '-') {
    return number1 - number2;
  } else if (operator === 'x') {
    return number1 * number2;
  } else if (operator === '÷') {
    return number1 / number2;
  }

  return number2;
};

resetButton = function resetButton(e) {
  calculatorObject.currentValue = "0";
  calculator0bject.number1 = null;
  calculatorObject.ifnumber2 = false;
  calculatorObject.operator = null;
}; // const buttonEventListener = (e) => {
//     const buttonPressed = e.target.innerHTML;
//     numberResult.innerHTML = buttonPressed;
//     numberButtons.addEventListener('buttonEventListener');
// }
// // clears output 
// const clearValue = (e) => {
//     clearButton.innerHTML == 0
//     clearButton.addEventListener('click', (e))
// }