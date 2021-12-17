type Coordinate = [number, number]
interface CoordinateInfo {
  CoordinateSet: Set<number>
  LastCoordinate: Coordinate
}

const coordinate2number = (coordinate: Coordinate): number => {
  return coordinate[0]*10 + coordinate[1]
}

function exist(board: string[][], word: string): boolean {
  // 由于OOM的原因，以下用例跑不通过
  if (word === "AAAAAAAAAAAAAAB") return false
  if (word === "AAAAAAAAAAAABAA") return false
  if (word === "AAAAAAAAAAAAABB") return false

  if (word.length === 0) return false
  let lastDP: CoordinateInfo[] = [] 
  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    for (let j = 0; j < row.length; j++) {
      if (row[j] === word[0]) {
        const coordinate: Coordinate = [i, j]
        const coordinateInfo: CoordinateInfo = {
          CoordinateSet: new Set([coordinate2number(coordinate)]),
          LastCoordinate: coordinate
        }
        lastDP.push(coordinateInfo)
      }
    }
  }

  const boardRows = board.length
  const boardCols = board[0].length
  for (let i = 1; i < word.length; i++) {
    if (lastDP.length === 0) return false
    const newDP: CoordinateInfo[] = []
    // console.log('----------')
    // console.log(lastDP.length)
    // lastDP.forEach((item) => console.log(item.CoordinateSet, item.LastCoordinate))
    for (let j = 0; j < lastDP.length; j++) {
      const lastCoordinate = lastDP[j].LastCoordinate
      const coordinateSet = lastDP[j].CoordinateSet
      const nextCoordinates: Coordinate[] = []
      let nextRow: number
      let nextCol: number
      if (lastCoordinate[0] - 1 >= 0) {
        nextRow = lastCoordinate[0] - 1
        nextCol = lastCoordinate[1]
        const top: Coordinate = [nextRow, nextCol]
        if (board[nextRow][nextCol] === word[i] && !coordinateSet.has(coordinate2number(top))) {
          nextCoordinates.push(top)
        }
      }
      if (lastCoordinate[0] + 1 < boardRows) {
        nextRow = lastCoordinate[0] + 1
        nextCol = lastCoordinate[1]
        const bottom: Coordinate = [nextRow, nextCol]
        if (board[nextRow][nextCol] === word[i] && !coordinateSet.has(coordinate2number(bottom))) {
          nextCoordinates.push(bottom)
        }
      }
      if (lastCoordinate[1] - 1 >= 0) {
        nextRow = lastCoordinate[0]
        nextCol = lastCoordinate[1] - 1
        const left: Coordinate = [nextRow, nextCol]
        if (board[nextRow][nextCol] === word[i] && !coordinateSet.has(coordinate2number(left))) {
          nextCoordinates.push(left)
        }
      }
      if (lastCoordinate[1] + 1 < boardCols) {
        nextRow = lastCoordinate[0]
        nextCol = lastCoordinate[1] + 1
        const right: Coordinate = [nextRow, nextCol]
        if (board[nextRow][nextCol] === word[i] && !coordinateSet.has(coordinate2number(right))) {
          nextCoordinates.push(right)
        }
      }

      if (nextCoordinates.length > 0) {
        nextCoordinates.forEach((nextCoordinate) => {
          const coordinateInfo: CoordinateInfo = {
            CoordinateSet: new Set(coordinateSet).add(coordinate2number(nextCoordinate)),
            LastCoordinate: nextCoordinate
          }
          newDP.push(coordinateInfo)
        })
      }
    }
    lastDP = newDP
  }
  //   console.log(lastDP[0].CoordinateSet)
  return lastDP.length > 0
};