function permute(nums: number[]): number[][] {
  const result: number[][] = []
  const bt = (candidates: number[], arrange: number[]) => {
    candidates.forEach(candidate => {
      const _arrange = [...arrange]
      _arrange.push(candidate)
      if (_arrange.length === nums.length) {
        result.push(_arrange)
        return
      }
      const _candidates = candidates.filter(item => item !== candidate)
      bt(_candidates, _arrange)
    })
  }
  bt(nums, [])
  return result
};