/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  const s1 = s.toLowerCase();
  let i = 0, j = s1.length - 1;
  while (i < j) {
    const iNum = s1.charCodeAt(i);
    const jNum = s1.charCodeAt(j);
    const iFlag = isNumberOrAlphabet(iNum);
    const jFlag = isNumberOrAlphabet(jNum);
    if (!iFlag) {
      i++;
      continue;
    }
    if (!jFlag) {
      j--;
      continue;
    }
    if (iFlag && jFlag) {
      if (iNum !== jNum) {
          return false;
      }
      i++;
      j--;
    }
  }
  return true;
};

function isNumberOrAlphabet(i) {
  return (i >=48 && i <= 57) || (i >= 97 && i <= 122) ? true : false
}