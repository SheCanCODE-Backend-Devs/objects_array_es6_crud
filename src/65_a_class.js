const calculator = (num1, num2, operator) => {
    var result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-': 
            result = num1 - num2;
            break;
        case '*': 
            result = num1 * num2;
            break;
        case '/': 
            result = num1 / num2;
            break;
        default:
            result = num1%num2;
            break;
    }

    return result;
}

console.log(calculator(3,4,'*'));
console.log(calculator(3,4,'+'));
console.log(calculator(3,4));


