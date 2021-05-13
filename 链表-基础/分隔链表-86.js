/* 我的题解 */
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
  const geDummyHead = new ListNode(-201, null);
  
  let currentNode = dummyHead;
  let currentGENode = geDummyHead;
  // junctionNode 用于记录两个链表连接出的结点，也就是第一条链表的最后一个结点
  let junctionNode = null;
  while (currentNode !== null) {
    nextNode = currentNode.next;
    // 如果满足大于等于x的条件，则前当前的结点单独挂到 ge 链表的末尾
    if (nextNode !== null && nextNode.val >= x) {
      currentNode.next = currentNode.next.next;
      copyNode = new ListNode(nextNode.val, null);
      currentGENode.next = copyNode;
      currentGENode = currentGENode.next;
    } else {
      if (currentNode.next === null) {
        junctionNode = currentNode;
      }
      currentNode = currentNode.next;
    }
    // console.log(currentNode !== null ? currentNode.val : null, dummyHead.next, geDummyHead.next);
  }
  
  // 合并两个链表
  junctionNode.next = geDummyHead.next;
  return dummyHead.next;
};

/* 优秀题解 */
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
    let small = new ListNode(0);
    let large = new ListNode(0);
    const smallHead = small, largeHead = large;
    while(head!=null) {
        if(head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }
    large.next = null;
    small.next = largeHead.next;
    return smallHead.next;
};