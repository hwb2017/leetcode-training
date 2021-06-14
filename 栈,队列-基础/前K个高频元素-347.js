/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    // freqMap 记录所有元素的出现频率
    let freqMap = new Map();
    let queue = [];
    for (let num of nums) {
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
    }
    for (let k of freqMap) {
        queue.push(k);      
    }
    queue.sort((a,b) => b[1] - a[1]);
    let result = queue.slice(0, k).map(k => k[0]);
    return result;
};