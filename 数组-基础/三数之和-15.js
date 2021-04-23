/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  if (nums.length <= 2) {
    return [];
  }
  let results = [];
  let n = nums.slice();
  // for (let i = 1; i < n.length; i++) {
  //   let temp = n[i];
  //   let j = i - 1;
  //   for (j; j >= 0; j--) {
  //     if (n[j] <= temp) {
  //       break;
  //     } else {
  //       n[j+1] = n[j];
  //     }
  //   }
  //   n[j+1] = temp;
  // }
  n.sort((a,b) => a - b);
  if (n[0] > 0) {
    return [];
  }
  for (let i = 0; i < n.length; i++) {
    if (i > 0 && n[i-1] == n[i]) {
      continue;
    }
    let target = -n[i];  
    let left = i + 1;
    let right = n.length - 1;
    while (left < right) {
      if (n[left] + n[right] === target) {
        results.push([n[i], n[left], n[right]]);
        left++;
        right--;
        while (left < right && n[left] == n[left-1]) {
          left++;
        }
        while (left < right && n[right] == n[right+1]) {
          right--;
        }
      } else if (n[left] + n[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return results;
};