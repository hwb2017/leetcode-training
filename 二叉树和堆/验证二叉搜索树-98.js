/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    if (root === null) {
        return true
    }
    if (root.left === null && root.right === null) {
        return true
    }
    let RightLeast = rightLeast(root)
    let LeftMost = leftMost(root)   
    if (root.left === null) {
        if (RightLeast > root.val) {
            return isValidBST(root.right)
        } else {
            return false
        }
    }
    if (root.right === null) {
        if (LeftMost < root.val) {
            return isValidBST(root.left)
        } else {
            return false
        }
    }
    if (LeftMost < root.val && RightLeast > root.val) {
        return isValidBST(root.left) && isValidBST(root.right)   
    }
    return false
};

const rightLeast = (root) => {
    if (root === null) return null
    if (root.right === null) return root.val
    let current = root.right
    while(current.left !== null) {
        current = current.left
    }
    return current.val
}

const leftMost = (root) => {
    if (root === null) return null
    if (root.left === null) return root.val
    let current = root.left
    while(current.right !== null) {
        current = current.right
    }
    return current.val
}