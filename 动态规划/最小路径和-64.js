/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let up = grid[i-1] === undefined ? null : grid[i-1][j]
            let left = grid[i][j-1] === undefined ? null : grid[i][j-1]
            if (up === null && left === null) {
                grid[i][j] = grid[i][j]
            } else if (up === null) {
                grid[i][j] += left
            } else if (left === null) {
                grid[i][j] += up
            } else {
                grid[i][j] += Math.min(left, up)
            }
        }
    }
    return grid.pop().pop()
};