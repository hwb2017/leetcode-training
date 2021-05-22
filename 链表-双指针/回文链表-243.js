/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if (head === null || head.next === null) {
      return true;
    }
    //记录链表的长度
    let length = 1;
    //设置快慢指针，寻找链表中点
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast) {
        length += 2;
      } else {
        length += 1;
      }
    }
  //   console.log(length);
    let reversedHead = null;
    // 根据链表长度判断待反转链表的头结点选取
    if (length % 2 === 1) {
      reversedHead = slow.next;
    } else {
      reversedHead = slow;
    }
    reversedHead = reverseList(reversedHead);
  //   console.log(reversedHead);
    while (reversedHead !== null) {
      // console.log(`${head.val} vs ${reversedHead.val}`)
      if (head.val !== reversedHead.val) {
        return false;
      }
      reversedHead = reversedHead.next;
      head = head.next;
    }
    return true;
  };
  
  const reverseList = (head) => {
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