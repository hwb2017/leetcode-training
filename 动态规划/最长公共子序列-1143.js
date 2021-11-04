/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
  const dp = Array.from({ length: text1.length }, () => Array.from({ length: text2.length }).fill(0))
  dp[0][0] = text1[0] === text2[0] ? 1 : 0
  for (let i = 0; i < text1.length; i++) {
      for (let j = 0; j < text2.length; j++) {
          if (text1[i] === text2[j]) {
              let lastLCS
              if (text1[i-1] !== undefined && text2[j-1] !== undefined) {
                  lastLCS = dp[i-1][j-1]
              } else {
                  lastLCS = 0
              }
              dp[i][j] = lastLCS + 1
          } else {
              let lastLCS1 = text1[i-1] !== undefined ? dp[i-1][j] : 0
              let lastLCS2 = text2[j-1] !== undefined ? dp[i][j-1] : 0
              dp[i][j] = Math.max(lastLCS1,lastLCS2)
          }
      }
  }
  return dp[text1.length-1][text2.length-1]
};