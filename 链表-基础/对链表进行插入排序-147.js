var insertionSortList = function(head) {
  // 设置sortedHead指针作为已排序链表的头结点
  let sortedHead = new ListNode(-1, null);
  let currentNode = head;
  while (currentNode !== null) {
    let nextNode = currentNode.next;
    // 将当前结点与后续链表的连接断开
    currentNode.next = null;
    insertToSortedList(sortedHead, currentNode);
    currentNode = nextNode;
  }
  return sortedHead.next;
};

const insertToSortedList = (head, node) => {
  if (head.next === null) {
    head.next = node;
    return
  }
  let currentNode = head.next;
  let prevNode = head;
  while (currentNode !== null) {
    let nextNode = currentNode.next;
    if (node.val < currentNode.val) {
      prevNode.next = node;
      node.next = currentNode;
      return 
    }
    prevNode = currentNode;
    currentNode = nextNode;
  }
  // 如果循环中都没有插入，则在链表末尾插入
  prevNode.next = node;
}