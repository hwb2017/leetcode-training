// 其实就是归并排序的归并部分
const mergeSortedArray = (arr1, arr2) => {
  // 指针i用于遍历arr1，指针j用于遍历arr2  
  let i = 0, j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;  
      } else {
        result.push(arr1[i]);
        i++;
      }
  }
  // 合并多余数组
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}