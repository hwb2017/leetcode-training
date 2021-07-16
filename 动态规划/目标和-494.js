/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var findTargetSumWays = function(nums, target) {
    let count = 0
    const bt = (i, target) => {
        if (i === -1) {
            if (target === 0) count++
            return
        }
        for (let j of [-1,1]) {
            // console.log(i-1, target-nums[i]*j)
            bt(i-1, target-nums[i]*j)
        }
    }
    bt(nums.length-1, target)
    return count
};