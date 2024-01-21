/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {

    let stack = [];
    let sum = 0;

    for (let i = 0; i < operations.length; i++) {

        if (operations[i] === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
            sum += stack[stack.length - 1];
        } else if (operations[i] === "D") {
            stack.push(2 * stack[stack.length - 1]);
            sum += stack[stack.length - 1];
        } else if (operations[i] === "C") {
            sum -= stack[stack.length - 1];
            stack.pop();
        } else {
            stack.push(parseInt(operations[i]));
            sum += stack[stack.length - 1];
        }

    }
    
    return sum;
};
