/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    const operator = ["+", "-", "*", "/"];
    let stack = [];
    for (let t of tokens) {
        if (operator.includes(t)) {
            let operand2 = stack.shift();
            let operand1 = stack.shift();
            let result = calc(operand1, operand2, t);
            stack.unshift(result);
        } else {
            stack.unshift(+t);
        }
        // console.log(stack);
    }
    return stack[0];
};
const calc = (operand1, operand2, operator) => {
    let result;
    if (operator === "+") {
        result = operand1 + operand2;
    } else if (operator === "-") {
        result = operand1 - operand2;
    } else if (operator === "*") {
        result = operand1 * operand2;
    } else if (operator === "/") {
        let temp = operand1 / operand2;
        result = temp > 0 ? Math.floor(temp) : Math.ceil(temp);
    }
    return result;
}