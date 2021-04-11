/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
  if (s.length < p.length) {
    return [];
  } 
  //确保[i,j]范围内的字符串与p构成异位词的字符串  
  let i = 0, j = -1;
  let startIndex = [];
  let dict = new Map();
  let pMap = str2Map(p);
  while (i+p.length <= s.length) {
      let length = j-i+1;
      if ( j+1 < s.length && length < p.length) {
          j++;
          let currentV = dict.get(s[j]);
          let v = currentV !== undefined ? currentV : 0;
          dict.set(s[j], v+1);
      } else {
        let isAnagram = true;
        for (let k of dict.keys()) {
            if (dict.get(k) !== pMap.get(k)) {
                isAnagram = false;
            }
        }
        if (isAnagram) {
            startIndex.push(j-p.length+1);
        }
        // 将左指针所指向的元素的频数减小，如果减小到0则移出Map，防止之后Map越来越大，遍历超时
        let currentV = dict.get(s[i]); 
        if (currentV - 1 !== 0) {
            dict. set(s[i], currentV - 1)
        } else {
            dict.delete(s[i]);
        }
        i++;
      }
  }
  return startIndex;
};

function str2Map(s) {
  let m = new Map();  
  s.split("").forEach((item) => {
    let currentV = m.get(item)
    let v = currentV !== undefined ? currentV : 0;
    m.set(item, v+1);
  })
  return m;
}