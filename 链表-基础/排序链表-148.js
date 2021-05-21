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
  //采用自底向上归并的方法
  let currentNode = head;
  let listLength = null;
  let headQueue = [];
  // 先遍历一遍链表，给每个结点加上dummyHead并入队列，方便后续归并操作
  while (currentNode !== null) {
    let dummyHead = new ListNode(-1, currentNode);
    headQueue.push(dummyHead);
    listLength += 1;
    currentNode = currentNode.next;
  }

  // 设置初始的归并后链表的最大长度为2，每次循环后翻倍。当 mergedLength >= 2 * listLength 时跳出循环
  let mergedLength = 2;
  while (mergedLength < 2*listLength) {
    let tempHeadQueue = [];
    while (headQueue.length > 0) {
      tempHeadQueue.push(popAndMerge(headQueue));
    }
    headQueue = tempHeadQueue;
    mergedLength *= 2
  }
  return head;
};