/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    let obstacleList = obstacleGrid.reduce((a,b) => a.concat(b))
    let pathCount = new Array(m*n).fill(0)
    pathCount[0] = obstacleList[0] === 1 ? 0 : 1

    for (let i = 1; i < m*n; i++) {
        let up = null;
        let left = null;
        if (i-n >= 0) {
            up = pathCount[i-n]
        }
        if ((i-1)%n != n-1) {
            left = pathCount[i-1]
        }
        if (obstacleList[i] === 1) {
          pathCount[i] = 0
        } else if (left === null || obstacleList[i-1] === 1) {
            pathCount[i] = up
        } else if (up === null || obstacleList[i-n] === 1) {
            pathCount[i] = left
        } else {
            pathCount[i] = left + up
        }
    }
    // console.log(pathCount)
    return pathCount.pop()
};