/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    // 记录已经遍历过的字符
    let charMap = new Map();
    for (let i = 0; i < t.length; i++) {
        let indexes = charMap.get(t[i]);
        if (indexes === undefined) {
            charMap.set(t[i], [i]);
        } else {
            indexes.push(i);
            charMap.set(t[i], indexes);
        }
    }
    // 记录索引组中的第一个索引和索引的对应关系
    let indexMap = new Map();
    charMap.forEach(value => indexMap.set(value[0], value.slice(1)));

    let compSet = new Set();
    for (let kv of indexMap) {
        let key = kv[0];
        let value = kv[1];
        let comp = s[key];
        if (compSet.has(comp)) {
            return false;
        } else {
            compSet.add(comp);
        }
        for (let v of value) {
            if (s[v] !== comp) {
                return false
            }
        }    
    }
    return true;
};