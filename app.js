// Freya Dixon Calculator Project Java Script

// calculator object, condenses important values into one object, curentValue will always be set to 0 by default, number 1 will be null. If number2 will be set to false, declared as boolean to adapt to multiple instances where user may or may not return value. The operator will also be set to null

const calculatorObject = {
    currentValue = '0',
    number1 = null,
    ifnumber2 = false,
    operator = null
};
return calculatorObject;

// add event listener to each button
const buttons = document.querySelectorAll('.button'); 
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (e));
})

// update display to the user's input 

updateInput = () => {
const display = document.querySelector('#result');
display.value = calculator.currentValue;
}
updateInput();


// display digits on input display when user hits key

enterNumber = (number) => {
    const displayInput = calculatorObject;
    if 
}

// const clearButton = document.querySelector('.btn.function.clear');
// console.log(clearButton);

// const functionsButtons = document.querySelectorAll('.btn.function')
// console.log(functionsButtons);

// const operatorButtons = document.querySelectorAll('.btn.operator')
// console.log(operatorButtons);

// const plusButton = document.querySelector('.btn.function.plus');
// console.log(plusButton);

// const equalButton = document.querySelector('.btn.operator.equals')
// console.log(equalButton);

// // const display = document.getElementById('result');
// // console.log(display);


// functions 

// display value on page 


// function updateInput() {
//     const display = document.getElementById('result');
//     display.value = calculator.displayInput;
// }
// updateInput();

// // recognise keys and display on input 




// clearButton.addEventListener('click',() => {
//     numberResult.innerHTML = 0;
// })

// const clearNumber = clearButton.addEventListener('click',() => {
//     stringOutput = "";
//     resetOutput();
// });

