/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sFreq = new Map();
    let tFreq = new Map();
    for (let char of s) {
        let freq = sFreq.get(char);
        if (freq === undefined) {
            freq = 1;
        } else {
            freq++;
        }
        sFreq.set(char, freq);
    }

    for (let char of t) {
        if (!sFreq.has(char)) {
            return false;
        }
        let freq = tFreq.get(char);
        if (freq === undefined) {
            freq = 1;
        } else {
            freq++;
        }
        if (freq > sFreq.get(char)) {
            return false;
        } else {
            tFreq.set(char, freq);
        }
    }
    return true;
};