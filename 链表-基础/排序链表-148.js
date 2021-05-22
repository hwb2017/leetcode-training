/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
  if (head === null) {
      return null;
  }
  //采用自底向上归并的方法
  let currentNode = head;
  let listLength = null;
  let headQueue = [];
  // 先遍历一遍链表，给每个结点加上dummyHead并入队列，方便后续归并操作
  while (currentNode !== null) {
    let nextNode = currentNode.next;
    currentNode.next = null;
    let dummyHead = new ListNode(-1, currentNode);
    headQueue.push(dummyHead);
    listLength += 1;
    currentNode = nextNode;
  }

  // 设置初始的归并后链表的最大长度为2，每次循环后翻倍。当 mergedLength >= 2 * listLength 时跳出循环
  let mergedLength = 2;
  while (mergedLength < 2*listLength) {
    let tempHeadQueue = [];
    while (headQueue.length > 0) {
      tempHeadQueue.push(pop2AndMerge(headQueue));
    }
    headQueue = tempHeadQueue;
    mergedLength *= 2
  }
  return headQueue[0].next;
};

const pop2AndMerge = (queue) => {
  // dummyHead 作为合并后的链表虚拟头结点
  let dummyHead = new ListNode(-1, null);
  h1 = queue.shift();
  h2 = queue.shift();
  if (h2 === undefined) {
    return h1;
  }
  h1Node = h1.next;
  h2Node = h2.next;
  currentNode = dummyHead;
  while (h1Node !== null && h2Node !== null) {
    if (h1Node.val < h2Node.val) {
      currentNode.next = h1Node;
      h1Node = h1Node.next;
    } else {
      currentNode.next = h2Node;
      h2Node = h2Node.next;
    }
    currentNode = currentNode.next;
  }
  while (h1Node !== null) {
    currentNode.next = h1Node;
    h1Node = h1Node.next;
    currentNode = currentNode.next;
  }
  while (h2Node !== null) {
    currentNode.next = h2Node;
    h2Node = h2Node.next;
    currentNode = currentNode.next;
  }
  return dummyHead;
}