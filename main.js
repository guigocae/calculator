// relógio
function getTimeNow(){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const customDateTime = new Date().toLocaleString('pt-BR', options);
    const customTimeSlice = customDateTime.slice(-8, -3);
    
    return(customTimeSlice);
}

const relogio = document.getElementById("time");
const intervalTime = setInterval(() => {
    let time = getTimeNow();
    relogio.innerHTML = time;
}, 100)

//lógica da calculadora
let firstNumber, operator, lastNumber;

function operate(operator, number1, number2){
    let result;
    switch(operator){
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "*":
            result = multiply(number1, number2);
            break;
        case "/":
            result = divide(number1, number2);
            break;
        default:
            result = "error";
    }
    return result;
}

function add(number1, number2){
    return number1+number2;
}

function subtract(number1, number2){
    return number1-number2;
}

function multiply(number1, number2){
    return number1*number2;
}

function divide(number1, number2){
    if(number2 === 0)
        return "error";
    return number1/number2;
}

const display = document.querySelector("#display-number");
const arm = document.querySelector(".arm");

function clearAll(){
    display.innerHTML = "0";
    arm.innerHTML = "";
    firstNumber = undefined;
    lastNumber = undefined;
    operator = undefined;
}

function displayExpression(digit){
    if(display.textContent.length >= 8) return;
    if(display.textContent === "0"){
        display.innerHTML = digit;
        return;
    }
    display.innerHTML += digit;
}

function armFirst(oper) {
    if(firstNumber !== undefined){
        lastNumber = +display.textContent;
        let result = operate(operator, firstNumber, lastNumber);
        firstNumber = result;
        operator = oper;
        arm.innerHTML = `${firstNumber} ${operator} `;
        display.innerHTML = "0";

        return;
    } 

    firstNumber = +display.textContent;
    operator = oper;
    
    arm.innerHTML = `${firstNumber} ${operator} `;
    display.innerHTML = "0";
}

function getResult() {
    if(arm.textContent.includes("=")) return;
    lastNumber = +display.textContent;
    let result = operate(operator, firstNumber, lastNumber);
    arm.innerHTML += `${lastNumber} =`;
    display.innerHTML = result;
}
