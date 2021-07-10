class Heap {
  constructor(arr = [], order = 'asc') {
    this.heap = [null].concat(arr)
    if (!['asc','desc'].includes(order)) {
        throw new Error('order only support asc or desc')
    }
    this.order = order
    for (let i = Math.floor(arr.length/2); i > 0; i--) {
      this.downwardHeapify(i)
    }
  }
  _swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp    
  } 
  upwardHeapify(heap = this.heap) {
    let i = heap.length - 1
    while (i >= 2) {
      let nextIndex = Math.floor(i/2)
      if (this.order === 'asc') {
        if (heap[i] >= heap[nextIndex]) break
        this._swap(heap, i, nextIndex)
      } else {
        if (heap[i] <= heap[nextIndex]) break
        this._swap(heap, i, nextIndex)
      }
      i = nextIndex
    }
  }
  downwardHeapify(i = 1, heap = this.heap) {
    while(2*i < heap.length) {
      let nextIndex
      if (this.order === 'asc') {
        nextIndex = 2*i+1 > (heap.length-1) || heap[2*i+1] > heap[2*i] ? 2*i : 2*i+1
        if (heap[i] < heap[nextIndex]) break
        this._swap(heap, i, nextIndex)
      } else {
        nextIndex = 2*i+1 > (heap.length-1) || heap[2*i+1] < heap[2*i] ? 2*i : 2*i+1
        if (heap[i] > heap[nextIndex]) break
        this._swap(heap, i, nextIndex)
      }
      i = nextIndex
    }
  }
  removeTop(heap = this.heap) {
    if (heap.length <= 1) return
    let top = heap[1]
    let item = heap.pop()
    if (heap.length === 1) return top
    heap[1] = item
    this.downwardHeapify(1, heap)
    return top
  }
  sort() {
    const res = []
    let copyHeap = [...this.heap]
    while (copyHeap.length > 1) {
      let item = this.removeTop(copyHeap)
      res.push(item)
    }
    return res
  }
  insert(val) {
    this.heap.push(val)
    this.upwardHeapify()
  }
}

function heapTest() {
  const h1 = new Heap([5,7,3,1,19,20,0,2])
  const h2 = new Heap([5,7,3,1,19,20,0,2], 'desc')
  // console.log(h1.heap)
  // console.log(h2.heap)
  // h1.removeTop()
  console.log(h1.heap)
  console.log(h1.sort())
  h1.insert(1)
  console.log(h1.heap)
}

heapTest()