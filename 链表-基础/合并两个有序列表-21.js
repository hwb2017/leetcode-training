/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let mergeHead = new ListNode(-1, null);
    let curNode = mergeHead;
    while (l1 !== null && l2 !== null) {
      if (l1.val >= l2.val) {
        curNode.next = l2;
        l2 = l2.next;
      } else {
        curNode.next = l1;
        l1 = l1.next;
      }
      curNode = curNode.next;
    }
    while (l1 !== null) {
      curNode.next = l1;
      l1 = l1.next;
      curNode = curNode.next;
    }
    while (l2 !== null) {
      curNode.next = l2;
      l2 = l2.next;
      curNode = curNode.next;
    }  
    return mergeHead.next;
  };