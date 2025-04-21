console.log('welcome to calc!')

function addition (a, b) {
    return Number(a) + Number(b);
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if(Number(b) === 0) {
        return "Cannot divide by 0"
    } else {
        return a / b;
    }
}

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result =''; //this will store the answer after operate() is passed

function operate (operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return addition(firstNumber, secondNumber)
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber)
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber)
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber)
    }
}

const display = document.querySelector(".text");
display.textContent = "";

document.querySelectorAll(".buttonSize").forEach(item => {
    item.addEventListener("click", (e) => {
        // console.log(e.target.textContent);
        // display.textContent = display.textContent + e.target.textContent;
        switch (e.target.textContent) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            if(operator === "") {
                firstNumber = firstNumber + e.target.textContent
                display.textContent = firstNumber;
                console.log(firstNumber);
            } else {
                secondNumber = secondNumber + e.target.textContent;
                display.textContent = firstNumber + operator + secondNumber;
                console.log(secondNumber);
            }
            break;
            
            case "+":
            case "-":
            case "*":
            case "/":
            operator = e.target.textContent;
            display.textContent = `Operator selected: ${operator}`;
            break;

            case "=":
            display.textContent = operate (operator, firstNumber, secondNumber);
            firstNumber = "";
            secondNumber = "";
            operator = "";
            break;

            case "C":
            case ".":
            case "AC":
            case "+/-":
            case "%":
            display.textContent = "Not added yet!! Working on it";
        }
    });
});