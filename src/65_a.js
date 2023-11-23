function calculator(num1, num2, operator) {
    var answer = 0;
    switch (operator) {
        case "+":
            answer = num1+num2;
            break;
        case "-":
            answer = num1-num2;
            break;
        case "*":
            answer = num1*num2;
            break;
        case "/":
            answer = num1/num2;
            break;
        default:
            break;
    }
    return answer;
}

console.log(calculator(2,3,"*"));
console.log(calculator(64,2,"/"));