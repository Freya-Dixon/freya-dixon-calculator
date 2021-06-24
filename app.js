//access html elements onto js 

const result = document.getElementsByClassName('result');
console.log(result);
const numberButtons = document.getElementsByClassName('btn__number');
console.log(numberButtons);

// set variables 

numberButtons.addEventListener('click', function (e) {
    e.preventDefault();
    let newNumber = numberButton.value;
    result.innerHTML = newNumber;
    console.log(newNumber);
});

//functions 


//return values 


//