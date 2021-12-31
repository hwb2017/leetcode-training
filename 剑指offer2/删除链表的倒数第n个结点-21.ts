class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let size = 0
  const dummyHead = new ListNode(-1)
  dummyHead.next = head
  let slow = head
  let slowPrev = dummyHead
  while (head !== null) {
    size++
    head = head.next
    if (size > n) {
      slow = slow.next
      slowPrev = slowPrev.next
    }
  }
  if (size >= n) {
    slowPrev.next = slow.next
  }
  return dummyHead.next
};