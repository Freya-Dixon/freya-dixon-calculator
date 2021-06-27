//access html elements onto js 

const numberResult = document.querySelector('h1');
console.log(numberResult);

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

const myStorage = window.sessionStorage;
console.log(myStorage);

let stringOutput = "";
console.log(stringOutput);

const calculatorObject = {
    outputValue = "0",
    number1 = null,
    number2 = false,
    operator = null
};

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


// operator interaction 

// plus function 

// const sum = plusButton.addEventListener('click',(number1,number2) => {
// if (value === n1 + n2) {
//     value = e.target.innerHTML
//     numberResult.innerHTML = n1 + n2
// }
// })




// const multiply = () => {
    
// }

// const minus = () => {

// }

// const divide = () => {

// }

// const findPercentage = () => {
    
// }

