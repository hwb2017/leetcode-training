/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let pathCount = new Array(m*n).fill(0)
    pathCount[0] = 1
    for (let i = 1; i < m*n; i++) {
        let up = null;
        let left = null;
        if (i-n >= 0) {
            up = pathCount[i-n]
        }
        if ((i-1)%n != n-1) {
            left = pathCount[i-1]
        }
        if (left === null) {
            pathCount[i] = up
        } else if (up === null) {
            pathCount[i] = left
        } else {
            pathCount[i] = left + up
        }
    }
    // console.log(pathCount)
    return pathCount.pop()
};