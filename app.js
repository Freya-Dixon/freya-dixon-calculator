//access html elements onto js 

const numberResult = document.querySelector('h1');
const numberButtons = document.querySelectorAll('.btn.number');
console.log(numberButtons);
const allButtons = document.querySelectorAll('.btn');

const clearButton = document.querySelector('.btn.function.clear');
console.log(clearButton);

const plusButton = document.querySelector('.btn.function.minus');
console.log(plusButton);

const functionsButtons = document.querySelectorAll('.btn.function')

const operatorButtons = document.querySelectorAll('.btn.operator')

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
    clearButton.addEventListener('click',() => {
        numberResult.innerHTML = 0;
    });
}

//clears ouput 

// clearButton.addEventListener('click',() => {
//     numberResult.innerHTML = 0;
// });


// operator interaction 

// plus function 

const sum = () => {
    
}

const multiply = () => {
    
}

const minus = () => {

}

const divide = () => {

}

const findPercentage = () => {
    
}

