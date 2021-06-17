/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    const map = new Map();
    for(const c of s){
        map.set(c,(map.get(c) || 0) + 1);
    }
    return [...map.keys()].sort((a,b)=>map.get(b) - map.get(a)).map(it=>it.repeat(map.get(it))).join('');
};