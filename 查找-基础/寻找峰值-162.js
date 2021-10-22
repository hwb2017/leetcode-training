// 这题主要在于理解题目中的条件 nums[-1] = nums[n] = -∞

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  const len = nums.length
  let left = 0
  let right = len - 1
  // 哨兵函数，处理边界条件
  const get = (i) => {
    if (i == -1 || i == len) {
      return -Infinity
    }
    return nums[i]
  }
  while (true) {
    let mid = Math.floor((left + right)/2)
    if (get(mid-1) < get(mid) && get(mid) > get(mid+1)) {
      return mid
    }
    if (get(mid) < get(mid+1)) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
};