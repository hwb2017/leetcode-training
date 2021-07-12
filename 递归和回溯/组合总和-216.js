/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    const res = []
    const bt = (target, combine, num) => {
      if (target === 0) {
          res.push(combine)
          return
      }
      if (num === 10) return
      for (let i = 0; i <= 1; i++) {
          if (target - i*num >= 0) {
              bt(target-i*num, [...combine, ...new Array(i).fill(num)], num+1)
          }
      }
    }
    bt(n, [], 1)
    return res.filter(i => i.length === k)
};