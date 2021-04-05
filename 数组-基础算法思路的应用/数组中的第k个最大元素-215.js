/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {  
  let p = 0, q = nums.length - 1;
  while (p <= q) {
    let [pivotStart, pivotEnd] = partition(nums, p, q);
    if (k-1 >= pivotStart && k-1 <= pivotEnd) {
      return nums[pivotStart];
    } else if (k-1 > pivotEnd) {
      p = pivotEnd + 1;
    } else {
      q = pivotStart - 1;
    }
  }
};

function partition(nums, start, end) {
  // p指针保证[start,p)范围内都是大于pivot的元素  
  let p = start;
  // q指针保证(q,end]范围内都是小于pivot的元素
  let q = end;  
  // 选择区域内的最后一个元素作为分区点pivot
  //   let pivot = nums[end];
  // 选择区域内的随机一个元素作为分区点，防止算法复杂度退化到O(n^2)
  let pivot = nums[Math.floor(Math.random()*(end-start+1) + start)];
  for (let i = p; i <= q; ) {
    if (nums[i] < pivot) {  
      let temp = nums[i];
      nums[i] = nums[q];
      nums[q--] = temp;
    } else if (nums[i] > pivot) {
      let temp = nums[i];
      nums[i] = nums[p];
      nums[p++] = temp;
      i++;
    } else {
      i++;
    }
  }
  return [p,q];
}