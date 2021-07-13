/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    let len = s.length
    let decodeTotal = new Array(len).fill(0)
    let digitList = s.split('').map(i => +i)
    decodeTotal[len-1] = 1
    decodeTotal[len-2] = hasExtra(digitList, len-2) ? 2 : 1
    for (let i = len-3; i >= 0; i--) {
        // console.log(hasExtra(digitList, i))
        decodeTotal[i] = hasExtra(digitList, i) ? decodeTotal[i+2] + decodeTotal[i+1]: decodeTotal[i+1]
    }
    // console.log(decodeTotal)
    return decodeTotal[0]
};

const hasExtra = (arr, i) => {
    if (i === arr.length-1) return false
    if (arr[i] === 1) return true
    if (arr[i] === 2 && arr[i+1] <= 6) return true
    return false
}