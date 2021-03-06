// Freya Dixon Calculator Project Java Script

// calculator object, condenses important values into one object, curentValue will always be set to 0 by default, number 1 will be null. If number2 will be set to false, declared as boolean to adapt to multiple instances where user may or may not return value. The operator will also be set to null


const buttons = document.querySelectorAll('.btn');
console.log(buttons);

const operator = document.querySelectorAll('.btn.operator');
console.log(operator);

const numberKeys = document.querySelectorAll('.btn.number')
console.log(numberKeys);

const functionKeys = document.querySelectorAll('.btn.function');
console.log(functionKeys);

const display = document.querySelector('#result');
console.log(display);

const clearButton = document.querySelector('.btn.function.clear');
console.log(clearButton);

const equalsButton = document.querySelector('.btn.operator.equals')
console.log();

const plusButton = document.querySelector('.btn.operator.plus')
console.log();

const minusButton = document.querySelector('.btn.operator.minus')
console.log();

const divideButton = document.querySelector('.btn.operator.divide')
console.log();

const muliplyButton = document.querySelector('.btn.operator.multiply')

let stringValue = "";

//loops through event listeners 
    
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    updateInput(e);
    console.log('clicked');
    });
});

// update display to the user's input 
updateInput = (e) => {
    if (e.target.innerHTML == '=') {
        console.log("Not adding ");
    } else {
    display.value += (e.target.innerHTML);
    console.log(e.target.innerHTML);
    }
};

// clear input
clearButton.addEventListener('click',() => {
    display.value = "";
});

equalsButton.addEventListener('click', () => {
    calculateSum();
})
//converting string into number 


//exploring potential input scenarios

calculateSum = () => {
let tempOperator = "";
console.log(display.value.split(""));
display.value.split("").forEach(item => {
    if (item == '+' || item == '-' || item == '??' || item == '/' || item == '%') {
        console.log(item);
        tempOperator = item;
    }
})
const number1 = parseFloat(display.value.split(tempOperator)[0]);
const number2 = parseFloat(display.value.split(tempOperator)[1]);
console.log(display.value.split(tempOperator));
        if (tempOperator === '+') {
    display.value = number1 + number2;
    return number1 + number2;
        }
        else if (tempOperator === '-') {
        display.value = (number1 - number2);
        return number1 - number2;
    }
    else if (tempOperator === '??') {
        display.value = (number1 * number2);
        return number1 * number2;
    }
    else if (tempOperator === '??') {
        display.value = (number1 / number2);
        return number1 / number2;
    }
    else if (tempOperator === '%') {
        display.value = (number1 / number2 * 100);
        return number1 / number2;
    }
}  
calculateSum();

// now, a separate function needs to be made to allow for multiple integers to be added together 

// then, a function that allows for minus numbers to be displayed on the page 

// a function that allows a number with a decimal to be added 


// a toggle function that bypasses the default function on the opeartor buttons so the buttons do not show on the page 


// a function that allows for the user to find a percentage 

// a toggle function on the plus/minus 

//inner html set to zero

// round decimal to nearest two digits

// // };
// // enterDecimal = () => {
// //     if (calculatorObject.currentValue = 0) {
//     display.innerHTML = currentValue;
// // }
// //     return
// //     else
// // }
// // // create operator function
