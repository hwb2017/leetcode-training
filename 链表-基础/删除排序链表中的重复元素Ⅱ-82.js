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
    if (head === null || head.next === null) {
      return head; 
    }
    let dummyHead = new ListNode(-1, head);
    // removeHeadPrev 指向可能要删除的重复结点的前驱结点，当确定当前结点不重复后切换
    let removeHeadPrev = dummyHead;
    // 当前可能要删除的重复结点的值
    let currentVal = head.val;
    let currentNode = head.next;
    // 设置初始的前驱结点
    let prevNode = head;
    while (true) {
      if (currentNode === null || currentNode.val > currentVal) {
        // 当removeHeadPrev.next，也就是可能要删除的重复结点的第一个结点，它不等于首次不重复元素的前驱结点的话，说明前驱结点的值已经有重复了
        if (removeHeadPrev.next !== prevNode) {
          // 裁剪重复元素
          removeHeadPrev.next = currentNode;
        } else {
          // 当首次出现不重复元素且不需要裁剪时，切换removeHeadPrev  
          removeHeadPrev = prevNode;
        }
        if (currentNode) {
          currentVal = currentNode.val;
        }
      }
      prevNode = currentNode;
      if (currentNode) {
        currentNode = currentNode.next;
      } else {
        break;
      }
    }
  //   console.log(dummyHead.next);
    return dummyHead.next;
  };