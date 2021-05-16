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
    // 初始化两个数组栈，用来存放已经遍历过的链表结点
    let l1Stack = [];
    let l2Stack = [];
    while (l1 !== null) {
      l1Stack.push(l1.val);
      l1 = l1.next;
    }
    while (l2 !== null) {
      l2Stack.push(l2.val);
      l2 = l2.next;
    }
    // 初始进位为 0
    let carry = 0;
    // 设置初始的后继结点为 null,循环中每次求和以后都会续上之前的后继结点
    let nextSumNode = null;
    while (l1Stack.length > 0 && l2Stack.length > 0) {
      let sum = l1Stack.pop() + l2Stack.pop() + carry;
      if (sum > 9) {
        carry = 1;
        sum = sum % 10;
      } else {
        carry = 0;
      }
      let sumNode = new ListNode(sum, nextSumNode);
      nextSumNode = sumNode;
    }
    while (l1Stack.length > 0) {
      let sum = l1Stack.pop() + carry;
      if (sum > 9) {
        carry = 1;
        sum = sum % 10;
      } else {
        carry = 0;
      }
      let sumNode = new ListNode(sum, nextSumNode);
      nextSumNode = sumNode;    
    }
    while (l2Stack.length > 0) {
      let sum = l2Stack.pop() + carry;
      if (sum > 9) {
        carry = 1;
        sum = sum % 10;
      } else {
        carry = 0;
      }
      let sumNode = new ListNode(sum, nextSumNode);
      nextSumNode = sumNode;    
    }
    if (carry === 1) {
      let sumNode = new ListNode(1, nextSumNode);
      nextSumNode = sumNode;
    }
    return nextSumNode;
  };