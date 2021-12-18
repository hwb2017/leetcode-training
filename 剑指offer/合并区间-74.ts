function merge(intervals: number[][]): number[][] {
  const sortedIntervals = intervals.sort((prev, next) => {
    return prev[0] === next[0] ? prev[1] - next[1] : prev[0] - next[0]
  })
  const result = sortedIntervals.reduce<number[][]>((acc, val) => {
    if (acc.length === 0) {
      acc.push(val)
      return acc
    }
    const [prevLeft, prevRight] = acc[acc.length-1]
    const [left, right] = val
    if (prevRight < left) {
      acc.push(val)
    } else if (prevRight >= left && prevRight <= right) {
      acc[acc.length-1] = [prevLeft, right]
    }
    return acc
  }, [])
  return result
};