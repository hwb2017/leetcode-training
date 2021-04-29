/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    let records = {};
    let majority = null;
    let half = nums.length / 2;
    for (let i = 0; i < nums.length; i++) {
        if (!records[nums[i]]) {
            records[nums[i]] = 1;
        } else {
            records[nums[i]] += 1;
            if (records[nums[i]] > half) {
              majority = nums[i];
              break;
            }
        }
    }
    return majority;
  };