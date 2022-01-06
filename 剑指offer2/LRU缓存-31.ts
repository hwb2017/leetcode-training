class DoublyLinkedListNode {
  key: number
  val: number
  prev: DoublyLinkedListNode | null
  next: DoublyLinkedListNode | null
  constructor(key: number, val: number, prev?: DoublyLinkedListNode | null, next?: DoublyLinkedListNode | null) {
    this.key = key
    this.val = val
    this.prev = prev === undefined ? null : prev
    this.next = next === undefined ? null : next
  }
  // print() {
  //   const result: number[] = []
  //   let currentNode: DoublyLinkedListNode = this
  //   while (currentNode !== null) {
  //     result.push(currentNode.val)
  //     currentNode = currentNode.next
  //   }
  //   return result
  // }
}

class LRUCache {
  dummyHead: DoublyLinkedListNode
  dummyTail: DoublyLinkedListNode
  nodeMap: Map<number, DoublyLinkedListNode>
  size: number
  capacity: number
  constructor(capacity: number) {
    this.capacity = capacity
    this.size = 0
    this.nodeMap = new Map<number, DoublyLinkedListNode>()
    this.dummyHead = new DoublyLinkedListNode(-1, -1)
    this.dummyTail = new DoublyLinkedListNode(-1, -1)
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get(key: number): number {
    if (this.nodeMap.has(key)) {
      const currentNode = this.nodeMap.get(key)
      const value = currentNode.val
      const prevNode = currentNode.prev
      // 拆出当前结点
      prevNode.next = currentNode.next
      currentNode.next.prev = prevNode
      // 插入头结点位置
      currentNode.next = this.dummyHead.next
      this.dummyHead.next.prev = currentNode
      this.dummyHead.next = currentNode
      currentNode.prev = this.dummyHead
      // console.log(this.dummyHead.print())
      return value
    } else {
      // console.log('Not Found')
      return -1
    }
  }

  put(key: number, value: number): void {
    if (this.nodeMap.has(key)) {
      const currentNode = this.nodeMap.get(key)
      currentNode.val = value
      this.get(key)
    } else {
      if (this.size === this.capacity) {
        // 删除尾结点
        let delNode = this.dummyTail.prev
        delNode.prev.next = this.dummyTail
        this.dummyTail.prev = delNode.prev
        this.nodeMap.delete(delNode.key)
        delNode = null
        this.size--
      }
      // 新结点插入头结点位置
      const newNode = new DoublyLinkedListNode(key, value, this.dummyHead, this.dummyHead.next)
      this.dummyHead.next.prev = newNode
      this.dummyHead.next = newNode
      this.nodeMap.set(key, newNode)
      this.size++
    }
    // console.log(this.dummyHead.print())
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */