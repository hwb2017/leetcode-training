/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {  
    // 记录链表长度
    let count = 0;
    let currentNode = head;
    let prevNode= null;
    while (currentNode !== null) {
      let copyNode = new ListNode(currentNode.val, prevNode);
      prevNode = copyNode;
      currentNode = currentNode.next;
      count++;
    }
    let reversedHead = prevNode;
    let originalHead = head;
    // 记录当前是否要在原链表继续遍历，true时在原链表遍历，false时在反转链表遍历
    let originFlag = true;
    let dummyHead = new ListNode(-1, null);
    while (count > 0) {
      if (originFlag) {
        dummyHead.next = originalHead;
        originalHead = originalHead.next;
      } else {
        dummyHead.next = reversedHead;
        reversedHead = reversedHead.next;
      }
      dummyHead = dummyHead.next;
      count--;
      originFlag = !originFlag;
    }
    // 截去剩余部分
    dummyHead.next = null;
  };