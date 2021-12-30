class NumMatrix {
  matrix: number[][]
  prefixSum: number[][]
  constructor(matrix: number[][]) {
    this.matrix = matrix
    this.prefixSum = Array.from({ length: matrix.length }, () => [])
    for (let i = 0; i < matrix.length; i++) {
      let sum = 0
      for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j]
        this.prefixSum[i].push(sum)
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let count = 0
    for (let r = row1; r <= row2; r++) {
      let rowCount = this.prefixSum[r][col2] - this.prefixSum[r][col1] + this.matrix[r][col1]
      count += rowCount
    }
    return count
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */