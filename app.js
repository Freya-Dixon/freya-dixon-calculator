//access html elements onto js 

// calculator object, condenses important values into one object, curentValue will always be set to 0 by default, number 1 will be null. If number2 will be set to false, declared as boolean to adapt to multiple instances where user may or may not return value. The operator will also be set to null
const calculatorObject = {
    currentValue = '0',
    number1 = null,
    ifnumber2 = false,
    operator = null
};

const numberButtons = document.querySelectorAll('.btn.number');
console.log(numberButtons);

const allButtons = document.querySelectorAll('.btn');
console.log(allButtons);

const clearButton = document.querySelector('.btn.function.clear');
console.log(clearButton);

const functionsButtons = document.querySelectorAll('.btn.function')
console.log(functionsButtons);

const operatorButtons = document.querySelectorAll('.btn.operator')
console.log(operatorButtons);

const plusButton = document.querySelector('.btn.function.plus');
console.log(plusButton);

const equalButton = document.querySelector('.btn.operator.equals')
console.log(equalButton);

allButtons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        buttonEventListener(e)
    })
})
let value = 0;
    const buttonEventListener = (e) => {
    if (value === 0) {
        value = e.target.innerHTML
        numberResult.innerHTML = value;
       return value;
    } else {
        value = value + e.target.innerHTML
        numberResult.innerHTML = value;
    }
}

// clears output- should be able to clear value without keeping session storage data and display 0 on H1 

// 
// clearButton.addEventListener('click',() => {
//     numberResult.innerHTML = 0;
//     if (value > 0) {
//         window.sessionStorage.removeItem()
//     }
// });


// clearButton.addEventListener('click',() => {
//     numberResult.innerHTML = 0;
// })

const clearNumber = clearButton.addEventListener('click',() => {
    stringOutput = "";
    resetOutput();
});

const resetOutput = () => {
    if (stringOutput == "") {
        numberResult.innerHTML = "";
    } else {
        numberResult.innerHTML = stringOutput;
    }
};



