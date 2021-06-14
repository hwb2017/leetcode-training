const partition = (arr, left, right) => {   
    // 选择区域内的随机一个元素作为分区点，防止算法复杂度退化到O(n^2)
    let pivot = arr[Math.floor(Math.random()*(right-left+1) + left)];
    // less指针保证从[left, less)范围内的都是小于pivot的元素
    // more指针保证从(more, right]范围内都是大于pivot的元素
    let less = left, more = right;
    for (let i = less; i <= more;) {
        if (arr[i] < pivot) {
            let temp = arr[i];
            arr[i] = arr[less];
            arr[less++] = temp;
            i++;
        } else if (arr[i] > pivot) {
            let temp = arr[i];
            arr[i] = arr[more];
            arr[more--] = temp;
        } else {
            i++;
        }
    }
    return [less, more];
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right)
        return
    let [pivotStart, pivotEnd] = partition(arr, left, right);
    quickSort(arr, left, pivotStart - 1);
    quickSort(arr, pivotEnd + 1, right);
}

const merge = (arr1, arr2) => {
    let result = [];
    let index1 = 0, index2 = 0;
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] <= arr2[index2]) {
            result.push(arr1[index1++]);
        } else {
            result.push(arr2[index2++]);
        }
    }
    while (index1 < arr1.length) {
        result.push(arr1[index1++]);
    }
    while (index2 < arr2.length) {
        result.push(arr2[index2++]);
    }
    return result;
}

const mergeSort = (arr) => {
    if (arr.length <= 1)
        return arr;
    let middle = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0,middle));
    let arr2 = mergeSort(arr.slice(middle));
    return merge(arr1, arr2);
}