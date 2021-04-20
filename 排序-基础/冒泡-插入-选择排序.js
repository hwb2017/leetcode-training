const bubbleSort = (arr) => {
  if (arr.length <= 1) {
      return;
  }
  for (let i = 0; i < arr.length; i++) {
    let swapFlag = false;
      for (let j = 1; j < arr.length - i; j++) {
          if (arr[j] < arr[j-1]) {
              let temp = arr[j];
              arr[j] = arr[j-1];
              arr[j-1] = temp;
              swapFlag = true;
          }
      }
      if (!swapFlag) {
          break;
      }
  }
}

const insertionSort = (arr) => {
    if (arr.length <= 1) {
        return;
    }
    // i指针遍历未排序区，j指针遍历排序区
    for (let i = 1; i < arr.length; i++) {
        let temp = a[i];
        let j = i - 1;
        for (j; j >= 0; j--) {
            if (temp >= a[j]) {
                break;
            } else {
                a[j+1] = a[j];
            }
        }
        arr[j+1] = temp;
    }
}