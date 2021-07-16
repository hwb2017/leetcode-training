/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    wd = wordDict.map(i => [i, i.length]).sort((a,b) => b[1]-a[1])
    // console.log(wd)
    minLen = wd[wd.length-1][1]
    isSplit = new Array(s.length).fill(false)
    let flag = false;
    for (w of wd) {
        if (s.slice(0,w[1]) === w[0]) {
            isSplit[w[1]-1] = true
            flag = true
        }
    }
    if (!flag) return false
    for (let i = minLen-1; i < s.length; i++) {
        for (let w of wd) {
            if (i+1 - w[1] >= 0) {
                if (s.slice(i+1-w[1], i+1) === w[0] && isSplit[i-w[1]]) {
                    isSplit[i] = true
                    break
                }
            }
        }   
    }
    // console.log(isSplit)
    return isSplit[s.length-1]
};