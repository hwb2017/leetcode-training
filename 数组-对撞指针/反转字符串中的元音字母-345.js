/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {  
  let i = 0, j = s.length - 1;
  let s1 = s.split("");
  while (i < j) {
    if (!isVowel(s1[i])) {
        i++;
        continue;
    }
    if (!isVowel(s1[j])) {
        j--;
        continue;
    }
    if (isVowel(s1[i]) && isVowel(s1[j])) {
        let temp = s1[i];
        s1[i] = s1[j];
        s1[j] = temp;
        i++;
        j--;
    }
  }
  return s1.join("");
};

function isVowel(char) {
  const c = char.toLowerCase();
  return c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
}