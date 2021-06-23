/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    // 要记录每种和出现的次数，因此用Map
    let num34Sum = new Map();
    for (let n3 of nums3) {
        for (let n4 of nums4) {
            let base = num34Sum.get(n3+n4);
            if (base === undefined) {
                num34Sum.set(n3+n4, 1);
            } else {
                num34Sum.set(n3+n4, base+1);
            }
            
        }
    }
    let result = 0;
    for (let n1 of nums1) {
        for (let n2 of nums2) {
             if (num34Sum.has(-n1-n2)) {
                 result += num34Sum.get((-n1-n2))
             }
        }
    }
    return result;
};