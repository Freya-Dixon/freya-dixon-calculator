"use strict";

//access html elements onto js 
var result = document.getElementsByClassName('result');
console.log(result);
var numberButtons = document.getElementsByClassName('btn__number');
console.log(numberButtons); // set variables 

numberButtons.addEventListener('click', function (e) {
  e.preventDefault();
  var newNumber = numberButton.value;
  result.innerHTML = newNumber;
  console.log(newNumber);
}); //functions 
//return values 
//