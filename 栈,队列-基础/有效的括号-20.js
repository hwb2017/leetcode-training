/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    for (let parenthesis of s) {
      if (stack.length > 0) {
          if (match(stack[0], parenthesis)) {
              stack.shift();
          } else {
              stack.unshift(parenthesis);
          }
      } else {
          stack.unshift(parenthesis);
      }
    }
    if (stack.length === 0) return true;
    return false;
  };
  
  const match = (l, r) => {
    if (l === '(' && r === ')') return true;
    if (l === '{' && r === '}') return true;
    if (l === '[' && r === ']') return true;  
    return false;
  }