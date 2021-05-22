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
 var rotateRight = function(head, k) {
    if (head === null) {
      return null;
    }
    // 设置镜像链表的虚拟头结点，镜像链表是原链表的深度拷贝
    let copyDummyHead = new ListNode(-1, null);
    let currentNode = head;
    let copyNode = copyDummyHead;
    // 记录前驱结点，最后一个前驱结点即尾结点
    let prevNode = null;
    let length = 0;
    while (currentNode !== null) {
      copyNode.next = new ListNode(currentNode.val, null);
      copyNode = copyNode.next;
      prevNode = currentNode;
      currentNode = currentNode.next;
      length++;
    }
    // k对链表长度取余运算后，即得到等价的最新轮转次数
    let reducedK = k % length;
    // 如果轮转次数等价于 0 次，直接返回原链表
    if (reducedK === 0) {
      return head;
    }
    // 在尾结点后续上镜像链表，此时的链表有两组一样的值，暂且称为双倍链表
    prevNode.next =copyDummyHead.next;
    // 画图可得，头尾指针实际要移动的次数为 length - reducedK
    let move = length - reducedK;
    // 设置两个指针，分别指向要从双倍链表中截取链表段的头结点和尾结点的初始值
    let begin = head;
    let end = head;
    while (length > 1) {
      end = end.next;
      length--;
    }
    while (move > 0) {
      begin = begin.next;
      end = end.next;
      move--;
    }
    // 尾指针后面的链表直接截去
    end.next = null;
    return begin;
  };
  