/**
 * 1) 单链表的插入、删除、查找操作；
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = new Node('head');
  }
  // 根据value查找节点
  findByValue(value) {
    let currentNode = this.head.next;
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    console.log(currentNode);
    return currentNode === null ? -1 : currentNode;
  }
  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let currentNode = this.head.next;
    let currentIndex = 0;
    while (currentNode !== null && currentNode < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    console.log(currentNode);
    return currentNode === null ? -1 : currentNode;
  }
  // 向链表末尾追加节点
  append(newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  // 指定元素向后插入
  insert(newValue, value) {
    const currentNode = this.findByValue(value);
    if (currentNode === -1) {
      console.log('未找到插入位置');
      return
    }
    const newNode = new Node(newValue);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  // 根据值删除
  remove(value) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) {
      console.log('未找到元素');
      return
    }
    const prevNode = currentNode;
    prevNode.next = prevNode.next.next;
  }
  // 遍历显示所有节点
  display() {
    let currentNode = this.head.next; // 忽略头指针的值
    while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
  }
}