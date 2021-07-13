/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    let len = s.length
    let decodeTotal = new Array(len).fill(0)
    let digitList = s.split('').map(i => +i)
    decodeTotal[len-1] = decode(digitList, len-1)
    decodeTotal[len-2] = decode(digitList, len-2)
    for (let i = len-3; i >= 0; i--) {
        let res = decode(digitList, i)
        if (res === 0) {
            decodeTotal[i] = 0
        } else if (res === 1) {
            // 如果是10或20，则返回 decodeTotal[i+2]
            decodeTotal[i] = digitList[i+1] != 0 ? decodeTotal[i+1] : decodeTotal[i+2]
        } else {
            decodeTotal[i] = decodeTotal[i+1] + decodeTotal[i+2]
        }
    }
    // console.log(decodeTotal)
    return decodeTotal[0]
};

const decode = (arr, i) => {
    if (arr[i] === 0) return 0
    if (i === arr.length-1) return 1 
    if (arr[i+1] === 0 && arr[i] >= 3) return 0
    let num = arr[i]*10+arr[i+1]
    if (num >= 11 && num <= 19) return 2
    if (num >= 21 && num <= 26) return 2
    return 1
}