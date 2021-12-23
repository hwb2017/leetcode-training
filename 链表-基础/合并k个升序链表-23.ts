class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

const merge2Lists = (l1: ListNode, l2: ListNode): ListNode => {
  const dummyHead = new ListNode(-1)
  let cur = dummyHead
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  while (l1 !== null) {
    cur.next = l1
    l1 = l1.next
    cur = cur.next
  }
  while (l2 !== null) {
    cur.next = l2
    l2 = l2.next
    cur = cur.next
  }
  return dummyHead.next
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null
  while (lists.length > 1) {
    let _lists = lists.reduce<ListNode[]>((a, b, idx) => {
      if (idx%2 === 1) {
        const lastList = a.pop()
        const merged = merge2Lists(lastList, b)
        a.push(merged)
      } else {
        a.push(b)
      }
      return a
    }, [])
    lists = _lists
  }
  return lists[0]
}