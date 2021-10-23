// 状态转移方程：
// dp[i] = max(dp[j] + 1) 其中 0 <= j < i, 且 nums[j] < nums[i]
// dp[i]表示以nums[i]结尾的最长递增子序列的长度(最小为1)
// 最终结果为 max(dp[i]) 其中 0 <= i < n

// vue3 patch vnode 的 getSequence 方法也用到了LIS packages\runtime-core\src\renderer.ts

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const len = nums.length;
  const dp = Array.from({ length: len }).fill(1);
  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp)
};