/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let strList = s.split(' ');
    if (strList.length !== pattern.length) {
        return false;
    }
    // 记录已经遍历过的字符
    let charMap = new Map();
    for (let i = 0; i < pattern.length; i++) {
        let indexes = charMap.get(pattern[i]);
        if (indexes === undefined) {
            charMap.set(pattern[i], [i]);
        } else {
            indexes.push(i);
            charMap.set(pattern[i], indexes);
        }
    }
    // 记录索引组中的第一个索引和索引的对应关系
    let indexMap = new Map();
    charMap.forEach(value => indexMap.set(value[0], value.slice(1)));

    let compSet = new Set();
    for (let kv of indexMap) {
        let key = kv[0];
        let value = kv[1];
        let comp = strList[key];
        if (compSet.has(comp)) {
            return false;
        } else {
            compSet.add(comp);
        }
        for (let v of value) {
            if (strList[v] !== comp) {
                return false
            }
        }    
    }
    return true;
};