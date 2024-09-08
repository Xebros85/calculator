
// TODO: Still need to add decimal support and a delete function to delete number if user makes a mistake.
// TODO: Add percentage sign support.


// Define Global Variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;
let percentNumber = "";
let operatorCheck = false;
let solved = false;
const displayBox = document.querySelector("#display");

function updateDisplay() {
    displayBox.setAttribute("value", `${firstNumber} + " " + ${operator} + " " + ${secondNumber}`);
}

function clearAll() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = 0;          
    displayBox.textContent = "";
    operatorCheck = false;
    solved = false;
    console.log("Cleared Display");    
}

function appendDisplay(input) {
    // if (solved === false) {
    //     checkOperator(input);
    // } else {
    //     clearAll();
    //     checkOperator(input);
    // }
    checkOperator(input);         
}


function clearScreen() {
    displayBox.textContent = "";
}

// check for operator - if operator is true then store secondNumber, if false, firstNumber

function checkOperator(input) {
    if (operatorCheck === false) {
        firstNumber += input;
        firstNumber = parseInt(firstNumber);
        displayBox.textContent = firstNumber;
        updateDisplay();
    } else if (operatorCheck === true) {
        secondNumber += input;
        secondNumber = parseInt(secondNumber);
        displayBox.textContent = secondNumber;
        updateDisplay();
    }
}

function getOperator(input) {
    clearScreen();    
    operator += input;
    displayBox.textContent = operator;
    operatorCheck = true;
    updateDisplay();    
}

function performCalculation() {
    console.log(firstNumber, operator, secondNumber);    
    
    switch(operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0) {
                result = "ERROR"
            } else {
                result = firstNumber / secondNumber
            }
            break;        
        default:
            break;
    }
    solved = true;

    let newResult = result.toString();
    
    console.log("newResult:", newResult);
    displayBox.textContent = newResult.substring(0, 9);
    
    firstNumber = result;
    console.log("FN:", firstNumber)
    secondNumber = "";
    operator = "";
    operatorCheck = false;
    
}

