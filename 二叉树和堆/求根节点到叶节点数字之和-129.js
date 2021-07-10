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
 * @return {number}
 */
 var sumNumbers = function(root) {
    let nums = _sumNumbers(root)
    // console.log(nums)
    return nums.reduce((a,b) => +a+(+b))
};

const _sumNumbers = (root) => {
    if (root === null) return []
    if (root.left === null && root.right === null) {
        // console.log(root.val)
        return [root.val.toString()]
    }
    let leftNums = _sumNumbers(root.left)
    let rightNums = _sumNumbers(root.right)
    let nums = []
    if (leftNums.length > 0) {
        leftNums.map(num => nums.push(root.val.toString()+num))
    }
    if (rightNums.length > 0) {
        rightNums.map(num => nums.push(root.val.toString()+num))
    }
    return nums
};