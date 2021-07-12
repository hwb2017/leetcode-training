/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    const minPathSum = (triangle, depth, lastPathSum) => {
        if (depth === triangle.length) return lastPathSum
        let pathSum = []
        let t = triangle[depth]
        let len = t.length
        for (let i = 0; i < len; i++) {
            let leftPathSum = lastPathSum[i-1] === undefined ? null : lastPathSum[i-1]+t[i]
            let rightPahtSum = lastPathSum[i] === undefined ? null : lastPathSum[i]+t[i]
            if (leftPathSum === null && rightPahtSum === null) {
                pathSum[i] = t[i]
            } else if (leftPathSum === null) {          
                pathSum[i] = rightPahtSum
            } else if (rightPahtSum === null) {
                pathSum[i] = leftPathSum
            } else {
                pathSum[i] = Math.min(leftPathSum, rightPahtSum)
            }
        }
        // console.log(pathSum)
        return minPathSum(triangle, depth+1, pathSum)
    }
    let res = minPathSum(triangle, 0, [])
    return Math.min(...res)
};