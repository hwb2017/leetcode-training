/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    let memo = new Array(n).fill(0)
    for (let i = 1; i <= n ; i++) {
        let j = 1
        let minCount = i
        while (i - j*j >= 0) {
            minCount = Math.min(minCount, memo[i-j*j] + 1)
            j++
        }
        memo[i] = minCount
    }
    return memo[n]
};