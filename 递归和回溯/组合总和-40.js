/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    const ans = []
    // candidates = candidates.sort((a, b) => a - b)
    const freq = new Map()
    for (let c of candidates) {
        if (freq.has(c)) {
            freq.set(c, freq.get(c)+1)
        } else {
            freq.set(c, 1)
        }
    }
    let nums = []
    for (let k of freq.keys()) {
        nums.push(k)
    }
    const dfs = (target, combine, idx) => {
        if (target === 0) {
            ans.push(combine)
            return
        }
        if (idx >= nums.length) return      
        let len = freq.get(nums[idx])
        for (let i = 0; i <= len; i++) {
            if (target - i * nums[idx] >= 0) {
              dfs(target - i * nums[idx], [...combine, ...new Array(i).fill(nums[idx])], idx+1)
            }
        }
    }
    dfs(target, [], 0)
    return ans
};