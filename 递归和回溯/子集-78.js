/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const res = []
    const bt = (combine, idx) => {
        if (idx === nums.length) {
            res.push(combine)
            return
        }
        // 每个元素选择0次或1次
        for (let i = 0; i <= 1; i++) {
            bt([...combine, ...new Array(i).fill(nums[idx])], idx+1)
        }
    }
    bt([],0)
    return res
};