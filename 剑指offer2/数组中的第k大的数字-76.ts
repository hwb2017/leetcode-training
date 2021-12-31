function findKthLargest(nums: number[], k: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const [pivotStart, pivotEnd] = partition(nums, left, right)
    if (k-1 <= pivotEnd && k-1 >= pivotStart) {
      return nums[pivotStart]
    } else if (k-1 > pivotEnd) {
      left = pivotEnd + 1
    } else {
      right = pivotStart - 1
    }
  }
};

const partition = (nums: number[], left: number, right: number) => {
  const pivot = nums[Math.floor(Math.random()*(right-left+1)+left)]
  let less = left
  let more = right
  for (let i = less; i <= more;) {
    if (nums[i] < pivot) {
      const temp = nums[more]
      nums[more] = nums[i]
      nums[i] = temp
      more--
    } else if (nums[i] > pivot) {
      const temp = nums[less]
      nums[less] = nums[i]
      nums[i] = temp
      less++
      i++
    } else {
      i++
    }
  }
  return [less, more] as const
}