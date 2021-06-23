/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 const toNumStr = (str) => {
    let digits = new Array(26).fill(0);
    for (let s of str) {
        digits[s.charCodeAt() - 97]++;
    }
    return digits.join('.');
}

var groupAnagrams = function(strs) {
    let result = new Map();
    for (let str of strs) {
        let numStr = toNumStr(str);
        if (result.has(numStr)) {
            let list = result.get(numStr);
            list.push(str)
            result.set(numStr, list);
        } else {
            result.set(numStr, [str]);
        }
    }
    return Array.from(result.values())
};