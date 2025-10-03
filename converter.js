// Converter functionalities
//
// Author: Jacob Dawes
//---------------------------

// declaring global variables
let CELSIUS = 1;
let FARENHEIT = 2;
let KELVIN = 3;

let Celsius = document.getElementById("celsius-input");
let Farenheit = document.getElementById("faranheit-input");
let Kelvin = document.getElementById("kelvin-input");

// input validation
function inValidation(input1) {
    // convert to numbers first
    const num1 = Number(input1);

    // check if both are integers
    if (!Number.isInteger(num1)) {
        return false;
    }
    return true;
}

// Conversion Logic
function converter(num, operation) {

    if (inValidation(num)) {

        number = Number(num);

        if (operation == 1) {// Celsius to Farenheit - Kelvin

            var fResult = number * (9 / 5) + 32;
            var kResult = number + 273.15;

            Farenheit.value = fResult.toFixed(2);
            Kelvin.value = kResult.toFixed(2);
        }
        else if(operation == 2){// Farenheit to Celsius - Kelvin
            var cResult = (number - 32) * (5/9);
            var kResult = cResult + 273.15;

            Celsius.value = cResult.toFixed(2);
            Kelvin.value = kResult.toFixed(2);
        }
        else if(operation == 3){// Kelvin to Farenheit - Celsius
            var cResult = number - 273.15;
            var fResult = cResult * (9/5) + 32;

            Celsius.value = cResult.toFixed(2);
            Farenheit.value = fResult.toFixed(2);
        }
    }
};
// Celsius to Farenheit - Kelvin
Celsius.addEventListener("input", function () {

    const val = this.value;

    if (val === "") {
        Kelvin.value = "";
        Farenheit.value = "";
    }
    else if(isNaN(val)){
        Kelvin.value = "???";
        Farenheit.value = "???";
    }
    else {
        converter(val, CELSIUS);
    }
})

// Farenheit to Celsius - Kelvin
Farenheit.addEventListener("input", function (){
    const val = this.value;

    if (val === "") {
        Kelvin.value = "";
        Celsius.value = "";
    }
    else if(isNaN(val)){
        Kelvin.value = "???";
        Celsius.value = "???";
    }
    else {
        converter(val, FARENHEIT);
    }
});

// Kelvin to Farenheit - Celsius
Kelvin.addEventListener("input", function (){
    const val = this.value;

    if (val === "") {
        Celsius.value = "";
        Farenheit.value = "";
    }
    else if(isNaN(val)){
        Celsius.value = "???";
        Farenheit.value = "???";
    }
    else {
        converter(val, KELVIN);
    }
});