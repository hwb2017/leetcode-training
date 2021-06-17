/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    // 记录所有中间结果的平方和
    let history = new Set();
    let lastSum;
    while (true) {
        let sum = 0;
        let m = lastSum !== undefined ? lastSum : n;
        while (m > 0) {
            sum += (m % 10)**2;
            m = Math.floor(m / 10);
        }
        lastSum = sum;
        if (sum !== 1) {
            if (history.has(sum)) {
                return false;
            } else {
                history.add(sum);
            }
        } else {
            return true;
        }
    }
};