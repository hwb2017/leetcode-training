/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let indexMap = new Map();
    for (let list of lists) {
        if (list) {
            indexMap.set(list, list);
        }
    }
    let dummyHead = new ListNode(-1, null);
    let currentNode = dummyHead;
    while (indexMap.size > 0) {
        let minNode = new ListNode(10 ** 4 + 1, null);
        let minList;
        for (let kv of indexMap) {
            if (kv[1].val < minNode.val) {
                minNode = kv[1];
                minList = kv[0];
            }
        }
        currentNode.next = minNode;
        currentNode = currentNode.next;
        indexMap.set(minList, minNode.next);
        if (minNode.next === null) {
            indexMap.delete(minList);
        }
    }
    return dummyHead.next;
};