/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    if(amount === 0) return 0
    let minCount = new Array(amount+1)
    minCount[0] = 0
    minCount[1] = -1
    for (let c of coins) {
        if (1-c >= 0) {
            minCount[1] = 1
        }
    }
    for (let i = 2; i <=amount; i++) {
        let temp = []
        for (let c of coins) {
            if (i - c >= 0 && minCount[i-c] !== -1) temp.push(minCount[i-c])
        }
        minCount[i] = temp.length === 0 ? -1 : Math.min(...temp) + 1
    }
    // console.log(minCount)
    return minCount[amount]
};