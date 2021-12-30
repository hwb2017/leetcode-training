function pivotIndex(nums: number[]): number {
  let pivot = -1
  const sum = nums.reduce((a, b) => a + b)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (sum - nums[i] - leftSum === leftSum) {
      pivot = i
      return pivot
    } else {
      leftSum += nums[i]
    }
  }
  return pivot
};