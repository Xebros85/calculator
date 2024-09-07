// Define Global Variables

let firstNumber;
let secondNumber;

// Click a number button and display it in the display area
function showNumber(number) {
    
    const displayBox = document.getElementById("display");
    let num = parseInt(number);
    displayBox.innerHTML = num;    
}

// Create a clearDisplay function

// Create add function