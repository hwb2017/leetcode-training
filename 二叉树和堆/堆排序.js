class Heap {
  constructor(arr = [], order = 'asc') {
    this.heap = [null].concat(arr)
    if (!['asc','desc'].includes(order)) {
        throw new Error('order only support asc or desc')
    }
    this.order = order
    for (i = Math.floor(arr.length/2); i > 0; i--) {
      this.downwardHeapify(i)
    }
  }
  downwardHeapify(i) {
    const swap = (a,b) => {
        let temp = a
        a = b
        b = temp
    }
    while(2*i < this.heap.length) {
      let nextIndex
      if (this.order === 'asc') {
        nextIndex = 2*i+1 > this.heap.length && this.heap[2*i+1] > this.heap[2*i] ? 2*i : 2*i+1
        swap(this.heap(i), this.heap(nextIndex))
      } else {
        nextIndex = 2*i+1 > this.heap.length && this.heap[2*i+1] < this.heap[2*i] ? 2*i : 2*i+1
        swap(this.heap(i), this.heap(nextIndex))
      }
      i = nextIndex
    }
  }
}

function heapTest() {
  const h = new Heap([1,2,3])
}

heapTest()