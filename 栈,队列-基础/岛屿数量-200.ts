type Coordinate = [number, number]

const getNextIslands = (visited: Set<string>, grid: string[][], island: Coordinate): Coordinate[] => {
    const _results: Coordinate[] = [
        [island[0], island[1]-1],
        [island[0], island[1]+1],
        [island[0]-1, island[1]],
        [island[0]+1, island[1]],
    ]
    const results = _results.filter(item => {
        if (item[0] >=0
          && item[0] < grid.length
          && item[1] >= 0
          && item[1] < grid[0].length) {
              if (grid[item[0]][item[1]] === "1" && !visited.has(item.join(','))) {
                  return true
              }
          }
        return false
    })
    return results
}

function numIslands(grid: string[][]): number {
    if (grid.length === 0) return 0
    const gridRows = grid.length
    const gridCols = grid[0].length
    const queue: Coordinate[] = []
    const visited = new Set<string>()
    let count = 0
    for (let i = 0; i < gridRows; i++) {
        for (let j = 0; j < gridCols; j++) {
            if (grid[i][j] === "1") {
                if (visited.has([i,j].join(','))) {
                    continue
                }
                count++
                visited.add([i, j].join(','))
                queue.push([i, j])
                while (queue.length > 0) {
                    const island = queue.shift()
                    getNextIslands(visited, grid, island).forEach(
                    item => {
                        visited.add(item.join(','))
                        queue.push(item)
                    })
                }
            }
        }
    }
    return count
};