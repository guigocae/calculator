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
