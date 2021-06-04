/**
 * 1) 基于链表实现的栈
 * 2）基于链表实现的队列
 * 3）循环队列
 */

class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

class LinkedStack {
  constructor() {
    this.top = null;
  }
  push(val) {
    const element = new ListNode(val, null);
    if (this.top) {
      // 栈顶元素作为头结点，方便后续取出
      element.next = this.top;
      this.top = element;
    } else {
      this.top = element;
    }
  }
  pop() {
    if (this.top) {
      let value = this.top.val;
      this.top = this.top.next;
      return value;
    } else {
      return -1;
    }
  }
  display() {
    let ret = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      ret.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return ret;
  }
}

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val) {
    const element = new ListNode(val, null);
    if (this.head) {
      this.tail.next = element;
      this.tail = this.tail.next;
    } else {
      this.head = element;
      this.tail = this.head;
    }
  }
  dequeue() {
    if (this.head) {
      let value = this.head.val;
      this.head = this.head.next;
      return value;
    } else {
      return -1;
    }
  }
  display() {
    let ret = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      ret.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return ret;
  }
}

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
  // 生成同来保存数据长度为K的数据结构
  this.list = Array(k)
  // 队首指针
  this.front = 0
  // 队尾指针
  this.rear = 0
  // 队列的长度
  this.max = k
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  // 首先判断是否队列为满的状态
  if(this.isFull()){
      return false 
  } else {
      this.list[this.rear] = value
      // 尾指针循环
      this.rear = (this.rear + 1) % this.max
      return true
  }
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (!this.isEmpty()){
      this.list[this.front] = ''
      this.front = (this.front + 1) % this.max
      return true
  } 
  return false
  
  
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty()){
      return -1
  }
  return this.list[this.front]
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty()){
      return -1
  }
  let rear = this.rear - 1
  return this.list[rear < 0 ? this.max - 1 : rear]
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.front === this.rear && !this.list[this.front]
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.front === this.rear && !!this.list[this.front]
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/