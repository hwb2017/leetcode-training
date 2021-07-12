/**
 * @param {string} digits
 * @return {string[]}
 */
 const dict = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
} 
var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    if (digits.length === 1) return dict[digits[0]]
    let res = []
    let postfixList = letterCombinations(digits.slice(1))
    for (let prefix of dict[digits[0]]) {
        for (let postfix of postfixList) {
            res.push(prefix + postfix)
        }
    }
    return res
};