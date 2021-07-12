/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 var permuteUnique = function(nums) {
    let res = Array.from(_permuteUnique(nums))
    // console.log(res)
    return res.map(i => i.split(','))
};

const _permuteUnique = (nums) => {
    if (nums.length === 1) return new Set(nums.map(i => String(i)))
    let res = new Set()
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        let copyNums = nums.slice()
        copyNums.splice(i,1)
        let others = copyNums
        // console.log(n, others)
        for (let p of _permuteUnique(others)) {
            // p.unshift(n)
            // res.push(p)
            res.add(String(n)+','+p)
        }
    }
    return res
};