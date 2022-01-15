function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) {
    return false
  }
  let first = nums[0]
  let second = Number.MAX_VALUE
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    if (num > second) {
      return true
    } else if (num > first) {
      second = num
    } else {
      first = num
    }
  }
  return false
};