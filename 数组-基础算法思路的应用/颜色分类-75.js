/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  //zero指针确保[0,zero]范围内的元素都是0,two指针确保[two,nums.length-1]范围内的元素都是2
  //i指针用于遍历数组,同时确保[zero+1,i-1]范围内的元素都是1
  let zero = -1;
  let two = nums.length;
  let i = 0;
  while (i < two) {
    if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 0) {
      nums[++zero] = 0;  
      if(zero < i) {
        nums[i] = 1;
      }
      i++;
    } else {
      nums[i] = nums[--two];
      nums[two] = 2;
    }
  }
};