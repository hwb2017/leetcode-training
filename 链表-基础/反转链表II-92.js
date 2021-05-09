/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    // 如果left等于right, 则直接返回
    if (left === right) {
      return head;
    }  
    // 记录链表中的位置
    let pos = 1;
    // beforeReversePart 和 afterReversePart 指针分别指向待反转部分的前驱结点和后继结点,reversePart是待反转的链表
    let beforeReversePart = null;
    let afterReversePart = null;
    let reversePart = null;
  
    let currentNode = head;
    //  如果 left 等于 1，则不会经过循环中的 pos === left - 1 时的处理，需要在循环外额外处理
    if (left === 1) {
      reversePart = head;
    }
    while (currentNode !== null) {
      // 记录下一结点的位置，以免后面有的情况下要断开链表后丢失指向下一结点的指针
      let nextNode = currentNode.next;
      // left 大于 1 时的处理方法
      if (pos === left-1) {
        beforeReversePart = currentNode;
        reversePart = nextNode;
        // 以待反转链表的开头为切入点断开链表
        currentNode.next = null;
      }
      if (pos === right) {
        afterReversePart = nextNode;
        // 以待反转链表的结尾为切入点断开链表
        currentNode.next = null;
      }
      currentNode = nextNode;
      pos++;
    }
    console.log(beforeReversePart,reversePart,afterReversePart)
    // 将反转后的链表前后续上
    reversedPartTailNode = reversePart;
    reversedPart = reverse(reversePart);
    console.log(reversedPart);
    // 如果待反转链表前面的部分不为空的话，则续上
    if (beforeReversePart !== null) {
      beforeReversePart.next = reversedPart;
    } else {
      head = reversedPart;
    }
    reversedPartTailNode.next = afterReversePart;
    return head;
  };
  
  const reverse = (head) => {
    let currentNode = head;
    let prevNode = null;
    while (currentNode !== null) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return prevNode;
  }