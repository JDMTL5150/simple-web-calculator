// Calculator functionalities
//
// Author: Jacob Dawes
//---------------------------

//global variables
let result = 0;

let ADD = 1;
let SUB = 2;
let MULTI = 3;
let CLEAR = 4;

// input validation
function inValidation(input1, input2) {
    // convert to numbers first
    const num1 = Number(input1);
    const num2 = Number(input2);

    // check if both are integers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return false;
    }
    return true;
}

//Operation function
function Operation(operation) {
    const num1El = document.getElementById("in-num1");
    const num2El = document.getElementById("in-num2");
    const resultLabel = document.getElementById("result-label");

    const num1Input = num1El.value;
    const num2Input = num2El.value;

    if (operation == 4) {
        num1El.value = "";
        num2El.value = "";
        resultLabel.textContent = "Result:";
    }
    else if (inValidation(num1Input, num2Input)) {
        if (operation == 1) {
            result = Number(num1Input) + Number(num2Input);
            resultLabel.textContent = "Result: " + num1Input + " + " + num2Input + " = " + result;
        }
        else if (operation == 2) {
            result = Number(num1Input) - Number(num2Input);
            resultLabel.textContent = "Result: " + num1Input + " - " + num2Input + " = " + result;
        }
        else if (operation == 3) {
            result = Number(num1Input) * Number(num2Input);
            resultLabel.textContent = "Result: " + num1Input + " × " + num2Input + " = " + result;
        }
    }
    else {
        alert("Inputs must be integer values!");
        num1El.value = "";
        num2El.value = "";
    }
}

// ADD button functionality
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener("click", () => Operation(ADD));

// SUB button functionality
const subBtn = document.getElementById("sub-btn");
subBtn.addEventListener("click", () => Operation(SUB));

// MULTI button functionality
const multiBtn = document.getElementById("multi-btn");
multiBtn.addEventListener("click", () => Operation(MULTI));

// CLEAR button functionality
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => Operation(CLEAR));