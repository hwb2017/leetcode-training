/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */

 const reverseList = (head: ListNode | null): ListNode | null => {
  let prev = null
  let current = head
  while (current != null) {
    let nextNode = current.next
    current.next = prev
    prev = current
    current = nextNode
  }
  return prev
}

function reorderList(head: ListNode | null): void {
  if (head.next === null) return
  let slow = head
  let fast = head
  let slowPrev: ListNode | null = null
  while (fast != null && fast.next !== null) {
    slowPrev = slow
    slow = slow.next
    fast = fast.next.next
  }
  let reversed = reverseList(slow)
  slowPrev.next = null
  let ordered = head

  const dummyHead = new ListNode(-1)
  let current = dummyHead
  let flag = true
  while (ordered !== null && reversed !== null) {
    if (flag) {
      current.next = ordered
      ordered = ordered.next
    } else {
      current.next = reversed
      reversed = reversed.next
    }
    flag = !flag
    current = current.next
  }
  while (ordered !== null) {
    current.next = ordered
    ordered = ordered.next
    current = current.next
  }
  while (reversed !== null) {
    current.next = reversed
    reversed = reversed.next
    current = current.next
  }  
};