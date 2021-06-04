/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    let maxLength = 0;
    let stack = [];
    // 入栈 -1，为了第一次计算maxlength时结果符合预期
    stack.unshift(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            // 记录左括号的下标地址
            stack.unshift(i);
        } else {
            // 如果是右括号，则先弹出栈顶元素表示匹配
            stack.shift();
            if (stack.length === 0) {
                stack.unshift(i);
            } else {
                maxLength = Math.max(maxLength, i - stack[0])
            }
        }
    }
    return maxLength;
};