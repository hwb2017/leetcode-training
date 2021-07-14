/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let len = prices.length
    let maxP = new Array(len).fill(0)
    maxP[0] = 0
    for (let i = 1; i < len; i++) {
        maxP[i] = maxP[i-1]
        for (let j = i - 1; j >= 0; j--) {
            if (j-2 >= 0) {
                maxP[i] = Math.max(maxP[i], prices[i] - prices[j] + maxP[j-2])
            } else {
                maxP[i] = Math.max(maxP[i], prices[i] - prices[j])
            }
        }
    }
    // console.log(maxP)
    return maxP[len-1]
};