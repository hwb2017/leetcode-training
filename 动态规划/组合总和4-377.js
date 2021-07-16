/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
    if (target === 0) return 0
    // let res = []
    // const combineSum = (arrange, target) => {
    //     if (target === 0) res.push(arrange)
    //     for (let n of nums) {
    //         if (target - n >= 0) {
    //             combineSum([...arrange, n], target-n)
    //         } 
    //     }
    // }
    // combineSum([], target)
    // console.log(res)
    // return res.length
    let arrangeCount = new Array(target+1).fill(0)
    arrangeCount[0] = 1
    for (let i = 1; i <= target; i++) {
        for (let n of nums) {
            if (i - n >= 0) {
                arrangeCount[i] += arrangeCount[i-n]
            }
        }        
        // console.log(arrangeCount[i])
    }
    return arrangeCount[target]
};