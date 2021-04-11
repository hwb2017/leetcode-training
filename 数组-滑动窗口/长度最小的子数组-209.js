/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let i = 0, j = -1; // 滑动窗口的范围为[i,j]
  let minLength = nums.length + 1;
  let sum = 0;
  while (i < nums.length) { 
    if (j+1 < nums.length && sum < target) {
        sum += nums[++j];
    } else {
        sum -= nums[i++];
    }
    if (sum >= target) {
        minLength = Math.min(minLength, j-i+1);
    }
  }
  if (minLength === nums.length + 1) {
      return 0;
  }
  return minLength;
};