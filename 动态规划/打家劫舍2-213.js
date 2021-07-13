/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let len = nums.length
    let robAmount = new Array(len).fill(0)
    robAmount[0] = nums[0]
    robAmount[1] = nums[1]
    baseMax = Math.max(robAmount[0], robAmount[1])
    const tryRob = (nums, endIndex) => {
        for (let i = 2; i <= endIndex; i++) {
            let res = baseMax
            for (let j = 2; j <= i ; j++) {
                if (j === len - 1) {
                    res = Math.max(res, nums[i])
                } else {
                    res = Math.max(res, nums[j]+robAmount[j-2])
                }
            }
        }
    }
    tryRob(nums, len-1)
    return robAmount[len-1]
};