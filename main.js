function getTimeNow(){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const customDateTime = new Date().toLocaleString('pt-BR', options);
    const customTimeSlice = customDateTime.slice(-8, -3);
    
    return(customTimeSlice);
}

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
