/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    const res = []
    const freq = new Map()
    for (let n of nums) {
        if (freq.has(n)) {
            freq.set(n, freq.get(n)+1)
        } else {
            freq.set(n, 1)
        }
    }
    const uniqNums = Array.from(freq.keys()).sort((a,b) => a-b)
    const bt = (combine, idx) => {
        if (idx === uniqNums.length) {
            res.push(combine)
            return
        }
        // 每个元素选择0次或1次
        for (let i = 0; i <= freq.get(uniqNums[idx]); i++) {
            bt([...combine, ...new Array(i).fill(uniqNums[idx])], idx+1)
        }
    }
    bt([],0)
    return res
};