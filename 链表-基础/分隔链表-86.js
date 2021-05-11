/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  // 构造新的头结点作为哨兵，所有小于x的结点都保留到这条链上
  const dummyHead = new ListNode(-201, head);
  // 初始化一个链表，所有大于或等于x的结点都会从原来的链表上脱离，移动到这个链表上
  let geHead = null;
  
  let currentNode = dummyHead;
  while (currentNode !== null) {
    let nextNode = currentNode.next;
    if (nextNode.val >= x) {
      currentNode.next = nextNode.next;
    }
  }
  return dummyHead.next;
};