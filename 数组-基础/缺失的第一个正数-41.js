/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    let n = nums.sort((a, b) => a - b).filter(a => a > 0);
    let missing = 1;
    if (n[0] >= 2) {
        return missing;
    }
    missing = n[n.length - 1] + 1;
    for (let i = 0; i < n.length - 1; i++) {
        if (n[i] > 0) {
            if (n[i+1] !== n[i]+1) {
                missing = Math.min(missing, n[i]+1)
            }
        }
    }
    return missing;
};