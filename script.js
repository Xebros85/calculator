// Define Global Variables

let firstNumber = "";
let secondNumber = "";
const displayBox = document.querySelector("#display");

function updateDisplay() {
    displayBox.setAttribute("value", `${firstNumber}`);
}


function appendDisplay(input) {
    console.log("Input:", input)
    firstNumber = firstNumber + input;
    displayBox.textContent = firstNumber;
    console.log("First Number:", firstNumber);
}

function clearAll() {    
    firstNumber = "";
    console.log("Cleared Display");
}