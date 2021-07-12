/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    if (s.length === 0) return [[]]
    if (s.length === 1) return [[s]]
    let res = []
    for (let i = 1; i <= s.length; i++) {
        if (isPalindrome(s.slice(0,i))) {
            for (let p of partition(s.slice(i))) {
                p.unshift(s.slice(0,i))
                res.push(p)
            }
        }
    }
    return res
 };
 
 const isPalindrome = (s) => {
     let s1 = s.split('').reverse().join('')
     return s1 === s
 }