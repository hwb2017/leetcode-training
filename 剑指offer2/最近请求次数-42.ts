class RecentCounter {
  queue: number[]
  constructor() {
    this.queue = []
  }

  ping(t: number): number {
    this.queue.push(t)
    const minBoundary = t - 3000
    while (true) {
      const item = this.queue[0]
      if (item < minBoundary) {
        this.queue.shift()
      } else {
        break
      }
    }
    return this.queue.length
  }
}