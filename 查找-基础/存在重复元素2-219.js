/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let left = 0;
    let right = left+k > nums.length ? nums.length-1 : left+k;
    let itemMap = new Set();
    for (let i = left; i <= right; i++) {
        if(!itemMap.has(nums[i])) {
            itemMap.add(nums[i]);
        } else {
            return true;
        }
    }
    if (left+k > nums.length) {
        return false;
    }
    for (let i = right+1; i < nums.length; i++) {
        itemMap.delete(nums[i-k-1]);
        if(!itemMap.has(nums[i])) {
            itemMap.add(nums[i]);
        } else {
            return true;
        }
    }
    return false;
};