/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  if (nums.length <= 1) {
      return nums.length;
  }  
  // 声明 i 指针和 j 指针, [0,i] 范围内的数据已经遍历过，[o,j]范围内时不重复的数组，countNum 用于记录统计重复次数中的元素, 出现新的不重复元素时则被赋值为新元素
  let i = 1, j = 0;
  while (i < nums.length) {
    if (nums[i] !== nums[j]) {
      nums[++j] = nums[i];
    }
    i++;
  }
  return j+1;
};