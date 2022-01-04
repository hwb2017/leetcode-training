class RandomizedSet {
  list: number[]
  map: Map<number, number>
  constructor() {
    this.list = []
    this.map = new Map()
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false
    } else {
      this.list.push(val)
      this.map.set(val, this.list.length-1)
      return true
    }
  }

  remove(val: number): boolean {
    if (this.map.has(val)) {
      const delIdx = this.map.get(val)
      const len = this.list.length
      const temp = this.list[len-1]
      this.list[len-1] = this.list[delIdx]
      this.list[delIdx] = temp
      if (delIdx !== len-1) {
        this.map.set(this.list[delIdx], delIdx)
      }
      this.map.delete(val)
      this.list.pop()
      return true
    } else {
      return false
    }
  }

  getRandom(): number {
    const randomIdx = Math.floor(Math.random()*this.list.length)
    return this.list[randomIdx]
  }
}

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/