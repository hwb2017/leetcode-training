/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    if (s.length < 4 || s.length > 12) return []
    const validIPSectios = (s, depth = 4) => {
        if (s.length < depth || s.length > 3*depth) return []
        if (depth === 1) {
            return isValidIPSection(s) ? [[s]] : []
        }
        let res = []
        for (let i = 1; i <= 3; i++) {
            let section = s.slice(0, i)
            if (isValidIPSection(section)) {
                for (let postfix of validIPSectios(s.slice(i), depth-1)) {
                        postfix.unshift(section)
                        // console.log(postfix)
                        res.push(postfix)
                }
            }
        }
        return res        
    }
    return validIPSectios(s).map(item => item.join('.'))
};

const isValidIPSection = (s) => {
    if (s.length > 3 || s.length < 1) return false
    // 存在前导零，则认为是无效的IP地址段
    if (s.length > String(+s).length) return false
    if (+s > 255) return false
    return true
}