/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    if (n < k) return [[]]
    if (k === n) return [genIntArray(n)]
    if (k === 1) return genIntArray(n).map(i => [i])

    return _combine(genIntArray(n),k)
};

const _combine = (nums, k) => {
    if (nums.lengtn < k) return [[]]
    if (nums.lengtn === k) return [nums]
    if (k === 1) {
        return nums.map(i => [i])
    }
    let res = [];
    let length = nums.length
    // 减枝优化，最后一次无数可选的情况可以忽略，即(nums.length < k)的情况要事先排除掉
    for (let i = 0; i < length-k+1; i++) {
        let result = _combine(nums.slice(i+1), k-1)
        res.push(...result.map(j => {
            j.unshift(nums[i])
            return j}))
    }
    return res
}

const genIntArray = (n) => {
    let res =[]
    while (n > 0) {
        res.unshift(n--)
    }
    return res
}