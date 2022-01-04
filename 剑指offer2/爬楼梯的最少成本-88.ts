function minCostClimbingStairs(cost: number[]): number {
  const len = cost.length
  let last2Step = cost[0]
  let lastStep = cost[1]
  for (let i = 2; i < len; i++) {
    const temp = Math.min(lastStep, last2Step)+cost[i]
    last2Step = lastStep
    lastStep = temp
  }
  return Math.min(lastStep, last2Step)
};