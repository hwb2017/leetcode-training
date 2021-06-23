/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let freqMap = new Set();
    for (let n of nums) {
        if (!freqMap.has(n)) {
            freqMap.add(n);
        } else {
            return true;
        }
    }
    return false;
};