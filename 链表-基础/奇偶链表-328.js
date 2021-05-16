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
 var oddEvenList = function(head) {
    // 初始化奇数索引链表和偶数索引链表的头结点
    let evenHead = new ListNode(-1, null);
    let even = evenHead;
    let oddHead = new ListNode(-1, null);
    let odd = oddHead;
    
    let curNode = head;
    let index = 0;
    while (curNode !== null) {
      if (index % 2 === 0) {
        even.next = curNode;
        even = even.next;
      } else {
        odd.next = curNode;
        odd = odd.next;
      }
      curNode = curNode.next;
      index++;
    }
    odd.next = null;
    even.next = oddHead.next;
    return evenHead.next
  };