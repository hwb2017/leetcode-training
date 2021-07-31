/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 更快、更简洁的方法，从矩阵的右上角看，这就是一个BST(二分搜索树)，然后就是常规操作了

 var findNumberIn2DArray = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false
    let targetRowIdx = [];
    let targetColIdx = [];
    let n = matrix.length;
    let m = matrix[0].length;
    
    for (let i = 0; i < n; i++) {
        let res = (target - matrix[i][0])*(target - matrix[i][m-1])
        if (res === 0) return true
        if (res < 0) {
            targetRowIdx.push(i)
        }
    }

    for (let i = 0; i < m; i++) {
        let res = (target - matrix[0][i])*(target - matrix[n-1][i])
        if (res === 0) return true
        if (res < 0) {
            targetColIdx.push(i)
        }
    }

    // console.log(targetRowIdx)
    // console.log(targetColIdx)
    for (let r of targetRowIdx) {
        for (let c of targetColIdx) {
            if (target === matrix[r][c]) return true
        }
    }
    return false
};