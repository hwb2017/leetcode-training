/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let res1 = findPath(root, p, true)
    // console.log(res1.map(item => [item.val,item.visited]))
    let res2 = findPath(root, q)
    // console.log(res2.map(item => [item.val,item.visited]))
    for (let i = res2.length-1; i >= 0; i--) {
        if (res2[i].visited) return res2[i]
    }
    // for (let i = res1.length-1; i >= 0; i--) {
    //     if (findPath(res1[i], q).length > 0) return res1[i]
    // }
    // return null
};

const findPath = (root, p, mark = false) => {
    if (root === null) return []
    if (root.val === p.val) {
        if (mark) root.visited = true
        return [root]
    }
    let leftRes = findPath(root.left, p, mark)
    if (leftRes.length > 0) {
        if (mark) root.visited = true
        leftRes.unshift(root)
        return leftRes
    }
    let rightRes = findPath(root.right, p, mark)
    if (rightRes.length > 0) {
        if (mark) root.visited = true
        rightRes.unshift(root)
        return rightRes
    }
    return []
}