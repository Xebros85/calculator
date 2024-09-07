// Define Global Variables

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operators]");
const equalButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[clear-display]");
const displayBox = document.getElementsByClassName("displayBox");


function appendDisplay(input) {    
    displayBox.value += input;
    
    
}

function clearAll() {
    displayBox.value = "";
}