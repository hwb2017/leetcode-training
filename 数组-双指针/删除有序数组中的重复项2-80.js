/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  // 声明 i 指针和 j 指针, [0,i] 范围内的数据已经遍历过，[o,j]范围内是元素重复不超过两次的数组，声明 currentNum 变量用于记录统计重复次数中的元素, 出现新的不重复元素时则被赋值为新元素, 声明 counter变量用于统计重复次数  
  let i = 1, j = 0, counter = 1;
  let currentNum = nums[0];
  while (i < nums.length) {
    if (nums[i] === currentNum) {
        counter++;
        if (counter <= 2) {
            nums[++j] = currentNum;
        }        
    } else {
        currentNum = nums[i];
        nums[++j] = currentNum;
        counter = 1;
    }
    i++;
  }
  return j+1;
};