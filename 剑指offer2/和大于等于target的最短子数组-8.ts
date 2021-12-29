function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0, right = 0
  let sum = nums[left]
  let minLen = nums.length + 1
  while (right < nums.length) {
    // console.log(nums.slice(left, right+1), sum)
    if (sum >= target) {
      minLen = Math.min(minLen, right - left + 1)
      sum -= nums[left++]
      if (right < left) {
        right++
      }
    } else {
      sum += nums[++right]
    }
  }
  return minLen > nums.length ? 0 : minLen
};