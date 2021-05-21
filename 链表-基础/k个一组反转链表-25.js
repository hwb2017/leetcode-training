/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k === 1) {
    return head
  }
  let dummyHead = new ListNode(-1, head);
  // kGroupPrev指向每k个一组元素的前驱结点
  let kGroupPrev = dummyHead;
  // 记录每k个一组元素内的结点下标，从1开始(代码中从0开始加)
  let kGroupIndex = 0;
  let currentNode = dummyHead.next;

  while (currentNode !== null) {
    kGroupIndex++;
    let nextNode = currentNode.next;
    if (kGroupIndex === k) {
      kGroupIndex = 0;
      // 断开待反转链表与后续链表的联系
      currentNode.next = null;
      let { tail } = reverseLinkedList(kGroupPrev);
      // 将反转后的链表与后续链表续上
      tail.next = nextNode;
      kGroupPrev = tail;
    }
    currentNode = nextNode;
  }
//   console.log(dummyHead.next);
  return dummyHead.next;
};

const reverseLinkedList = (head) => {
  let tailNode = head.next;

  let currentNode = head.next;
  let prevNode = null;
  while (currentNode !== null) {
    let nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  head.next = prevNode;
  return {
    'head': head,
    'tail': tailNode
  };
}