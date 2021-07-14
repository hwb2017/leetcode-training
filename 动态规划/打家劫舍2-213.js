/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let len = nums.length
    if (len === 1) return nums[0]
    let robAmount = new Array(len).fill(0)
    let robAmount1 = new Array(len).fill(0)
    robAmount[0] = nums[0]
    robAmount[1] = Math.max(nums[0], nums[1])
    robAmount1[1] = nums[1]
    for (let i = 2; i < len-1; i++) {
        for (let j = i; j >= 0; j--) {
            robAmount[i] = Math.max(robAmount[i], j-2 >= 0 ? nums[j] + robAmount[j-2] : nums[j])
        }
    }
    for (let i = 2; i <= len-1; i++) {
        for ( j = i; j >= 1; j--) {
            robAmount1[i] = Math.max(robAmount1[i], j-2 >= 0 ? nums[j] + robAmount1[j-2] : nums[j])
        }
    }
    // console.log(robAmount)
    // console.log(robAmount1)
    return Math.max(robAmount[len-2], robAmount1[len-1])
};