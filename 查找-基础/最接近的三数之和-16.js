/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    if (nums.length < 3) {
        return [];
    }
    nums.sort((a,b) => a - b);
    const length = nums.length;
    let minSum = nums[0] + nums[1] + nums[2];
    let maxSum = nums[length-1] + nums[length-2] + nums[length-3];
    let minDiff = Math.max(Math.abs(minSum-target), Math.abs(maxSum-target));
    let closestSum;

    for (let i = 0; i < length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        let left = i+1, right = length-1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            let diff = Math.abs(sum-target);
            if (sum === target) {
                return sum;
            } else if (sum > target) {
                right--;
            } else {               
                left++;
            }
            if (Math.abs(sum-target) <= minDiff) {
                minDiff = diff;
                closestSum = sum;
            }             
        }
    }
    return closestSum;
};