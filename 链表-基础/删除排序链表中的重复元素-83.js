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
var deleteDuplicates = function(head) {
  if (head === null) {
    return head;
  }
  let currentNode = head.next;
  let prevNode = head;
  while (currentNode !== null) {
    if (prevNode.val === currentNode.val) {
      prevNode.next = currentNode.next;
    } else {
      prevNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  return head;
};