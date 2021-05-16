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
 var addTwoNumbers = function(l1, l2) {
    let sumHead = new ListNode(-1, null);
    let sumNode = sumHead;
    // 初始化初始的加法进位为 0
    let carry = 0;
    while (l1 !== null && l2 !== null) {
      let sum = l1.val + l2.val + carry;
      if (sum > 9) {
        carry = 1;
        sum = sum % 10;
      } else {
        carry = 0;
      }
      sumNode.next = new ListNode(sum, null);
      sumNode = sumNode.next;
      l1 = l1.next;
      l2 = l2.next;
    }
    if (l1 !== null) {
      while (l1 !== null) {
        let sum = l1.val + carry;
        if (sum > 9) {
          carry = 1;
          sum = sum % 10;
        } else {
          carry = 0;
        }
        sumNode.next = new ListNode(sum, null);
        sumNode = sumNode.next;
        l1 = l1.next;
      }
    }
    if (l2 !== null) {
      while (l2 !== null) {
        let sum = l2.val + carry;
        if (sum > 9) {
          carry = 1;
          sum = sum % 10;
        } else {
          carry = 0;
        }
        sumNode.next = new ListNode(sum, null);
        sumNode = sumNode.next;
        l2 = l2.next;      
      }
    }
    if (carry === 1) {
      sumNode.next = new ListNode(1, null);
    }  
    return sumHead.next;
  };