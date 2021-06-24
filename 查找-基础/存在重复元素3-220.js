/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let freqMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let leftItem = nums[i-k-1]; 
        if (freqMap.has(leftItem)) {
            if (freqMap.get(leftItem)-1 === 0) {
                freqMap.delete(leftItem);
            } else {
                freqMap.set(leftItem, freqMap.get(leftItem)-1);
            }
        }
        let sortedFreqMap = [...freqMap.keys()].sort((a,b) => a - b);
        console.log(n, sortedFreqMap)
        if (sortedFreqMap[0] > n+t || sortedFreqMap[sortedFreqMap.length-1] < n-t) {
            if (!freqMap.has(n)) {
                freqMap.set(n, 1);
            } else {
                freqMap.set(n, freqMap.get(n)+1);
            }
        } else {
            if (freqMap.size === 0) {
                continue;
            }
            return true;
        }     
    }
    return false;
};