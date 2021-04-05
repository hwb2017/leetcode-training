/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  // i指针用于确保[0,i]范围内的元素都不包含val, j指针用于确保(j,nums.length-1]范围内的元素都是val
  let i = 0, j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j--];
    //   nums[j] = val;
    //   j--;
    } else {
        i++;
    }
  }
  return j+1;
};