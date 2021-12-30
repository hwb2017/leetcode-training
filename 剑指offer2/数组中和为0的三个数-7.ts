function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  const sortedNums = nums.sort((a, b) => a - b)
  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i-1]) {
      continue
    }
    const target = 0 - sortedNums[i]
    let left = i+1
    let right = sortedNums.length - 1
    while (left < right) {
      const sum = sortedNums[left] + sortedNums[right]
      if (sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]])
        while (sortedNums[left] === sortedNums[left+1]) {
          left++
        }
        while (sortedNums[right] === sortedNums[right-1]) {
          right--
        }
        left++
        right--
      }
    }
  }
  return result
};