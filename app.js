// Freya Dixon Calculator Project Java Script

// calculator object, condenses important values into one object, curentValue will always be set to 0 by default, number 1 will be null. If number2 will be set to false, declared as boolean to adapt to multiple instances where user may or may not return value. The operator will also be set to null

const calculatorObject = {
    currentValue: 0,
    number1: null,
    ifnumber2: false,
    operator: null
};
console.log(calculatorObject);

const keys = document.querySelectorAll('.btn');
console.log(keys);
const operatorKeys = document.querySelectorAll('.btn.operator');
console.log(operatorKeys);
const numberKeys = document.querySelectorAll('.btn.number')
console.log(numberKeys);
const functionKeys = document.querySelectorAll('.btn.function');
    
keys.forEach((button) => {
    button.addEventListener('click', (e) => {
    updateInput(e);
    enterNumber(e);
    accessOperator(e);
    calculate(e);
    resetButton(e);
    });
});

// update display to the user's input 

updateInput = () => {
const display = document.querySelector('#result');
display.value = calculator.currentValue;
}
updateInput();


// display buttons on input display when user hits key

enterNumber = () => {
    const currentValue = calculatorObject;
    if (calculator.currentValue = 0) {
     display.innerHTML = currentValue;
    }
    else {
    currentValue = value + e.target.innerHTML;
    display.innerHTML = value;
    }
};

// create operator function

accessOperator = (e) => {
    const {curentValue, number1, operator} = calculator;
    const inputValue = parsefloat(curentValue);
    if (number1 = null) {
        calculator.number1 = inputValue;
    }
calculator.ifnumber2 = true;
calculator.operator = secondOperator;
}
// calculate function
calculate = (e) => {
    if (operator === '+') {
        return number1 + number2;
    }
    else if (operator === '-') {
        return number1 - number2;
    }
    else if (operator === 'x') {
        return number1 * number2;
    }
    else if (operator === '÷') {
        return number1 / number2;
    }
    return number2;
}

resetButton = (e) => {
    calculator.currentValue = "0"
    calculator.number1 = null;
    calculator.ifnumber2 = false;
    calculator.operator = null;
}

