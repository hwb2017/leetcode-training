/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let indexMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let pair = indexMap.get(target-num);
        if (pair !== undefined) {
            return [pair, i];
        }
        indexMap.set(num, i);
    }
};