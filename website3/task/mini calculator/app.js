let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));

let results;

if (operator === "+") {
    result = num1 + num2;    
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if  (num2 !== 0)
        result = num1 / num2;
    } else {
        result = "cannot divide by zero!";
    }

}else {
    result = "Invalid operator!"; 
}

alert("Result: " + results);
console.log("Result:", result);
