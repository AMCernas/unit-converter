/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("input");
const btn = document.getElementById("btn").addEventListener("click", convert)
const distance = document.getElementById("distance");
const liquid = document.getElementById("liquid");   
const weigth = document.getElementById("weigth");

function convert(){
    inputNumber = Number(input.value)
    input.value = "";
    if (isNaN(inputNumber)) {
        alert("Please enter a valid number");
        return;
    }
    // length
    const feet = (inputNumber * 3.281).toFixed(3);
    const meter = (inputNumber / 3.281).toFixed(3);
    distance.innerHTML = `${inputNumber} meters = ${feet} feet | ${inputNumber} feet = ${meter} meters`;

    // volume
    const gallon = (inputNumber * 0.264).toFixed(3);
    const liter = (inputNumber / 0.264).toFixed(3);
    liquid.innerHTML = `${inputNumber} liters = ${gallon} gallons | ${inputNumber} gallons = ${liter} liters`; 

    // mass
    const pounds = (inputNumber * 2.204).toFixed(3);
    const kilos = (inputNumber / 2.204).toFixed(3);
    weigth.innerHTML = `${inputNumber} kilos = ${pounds} pounds | ${inputNumber} pounds = ${kilos} kilos`;
}