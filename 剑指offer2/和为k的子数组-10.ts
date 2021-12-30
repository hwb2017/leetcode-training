function subarraySum(nums: number[], k: number): number {
  let count = 0
  const sumMap = {0: 1}
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    count += sum-k in sumMap ? sumMap[sum-k] : 0
    if (sum in sumMap) {
      sumMap[sum] += 1
    } else {
      sumMap[sum] = 1
    }
  }
  return count
};