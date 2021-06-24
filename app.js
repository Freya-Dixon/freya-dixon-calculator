//access html elements onto js 

const numberResult = document.querySelector('h1');
const numberButtons = document.querySelectorAll('.btn.number');
console.log(numberButtons);
const allButtons = document.querySelectorAll('.btn');

const clearButton = document.querySelector('.btn.function.clear');
console.log(clearButton);

const functionsButtons = document.querySelectorAll('.btn.function')

const operatorButtons = document.querySelectorAll('.btn.operator')

allButtons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        buttonEventListener(e)
    })
})

    const buttonEventListener = (e) => {
 
    const buttonPressed = e.target.innerHTML;
    numberResult.innerHTML = buttonPressed;
    numberButtons.addEventListener('buttonEventListener');
    
}

//clears ouput 

clearButton.addEventListener('click',() => {
    numberResult.innerHTML = 0;
});


