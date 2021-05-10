/**
 * 1) 单链表的插入、删除、查找操作；
 * 2）单链表反转
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
  // 反转单链表
  reverse() {
    // head节点即哨兵，作用就是使所有链表，包括空链表的头节点不为null，并使对单链表的插入、删除操作不需要区分是否为空表或是否在第一个位置进行，
    // 从而与其他位置的插入、删除操作一致，降低编码复杂度
    // 所以反转链表的时候不需要带上头节点
    let currentNode = this.head.next;
    // 第一个节点的前驱结点让其指向 null, 因为头节点不参与链表反转
    let prevNode = null;

    while (currentNode !== null) {
      // 每个循环中不断进行 currentNode, nextNode 和 prevNode 三个指针的赋值，
      // 其中currentNode 和 prevNode 在赋值前就被引用了，因此这两个变量需要在循环体外赋初始值
      // 先保留下一结点的指针，避免指针丢失
      let nextNode = currentNode.next;
      // 这一步真正实现指针反转，指向前驱节点
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    // 最后给反转后的链表戴上头结点，这里最后一个currentNode为null，最后一个prevNode才指向第一个结点，因此选 prevNode 来赋值
    this.head.next = prevNode;
  }
  // 环的检测，快慢指针法
  checkCircle() {
    let fast = this.head.next;
    let slow = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (show === fast) return true;
    } 
    return false;
  } 
  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
    // 先判断是否是环链表
    if (this.checkCircle) return false;
    let pos = 1;
    this.reverse()
    let currentNode = this.head.next;
    while (currentNode !== null && pos < index) {
      currentNode = currentNode++
      pos++;
    }
    if (currentNode === null) {
      console.log('该结点不存在');
      return false;
    }
    this.remove(currentNode.value);
    this.reverse();
  }
  // 求链表的中间结点
  findMiddleNode() {
    // 忽略头结点
    let fast = this.head.next;
    let slow = this.head.next;
    while (fast.next != null && fast.next.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow);
    return slow;
  }
}

const mergeSortedLists = (listA, listB) => {
  if (!listA) {
    return listB
  }
  if (!listB) {
    return listA
  }
  let resultList = new Node('head');
  while (a !== null && b !== null) {
    if (a.value < b.value) {
      resultList.next = a;
      a = a.next;
    } else {
      resultList.next = b;
      b = b.next;
    }
    resultList = resultList.next;
  }
  // 如果链表a或链表b还有剩余结点，则接到合并后的链表的后面
  if (a !== null) {
    resultList.next = a;
  } else {
    resultList.next = b;
  }
  return resultList;
}