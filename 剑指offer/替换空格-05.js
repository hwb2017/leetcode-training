/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    return s.split(' ').join('%20')
    // return s.replaceAll(' ', '%20')
    // 此处如果使用 s.replace(/\s/g, '%20') 会比较慢，可能因为这里的\s对应多种空格，比如制表符等
};