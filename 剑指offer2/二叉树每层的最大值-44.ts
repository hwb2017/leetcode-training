class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function largestValues(root: TreeNode | null): number[] {
  if (root === null) return []
  let layer = 0
  let nodesQueue = [root]
  const result: number[] = []
  while (nodesQueue.length > 0) {
    let max = -Infinity
    const tempNodesQueue: TreeNode[] = []
    while (nodesQueue.length > 0) {
      let node = nodesQueue.shift()
      max = Math.max(max, node.val)
      if (node.left !== null) {
        tempNodesQueue.push(node.left)
      }
      if (node.right !== null) {
        tempNodesQueue.push(node.right)
      }
    }
    result[layer] = max
    layer++
    nodesQueue = tempNodesQueue
  }
  return result
};