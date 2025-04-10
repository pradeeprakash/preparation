// Problem: Return values of nodes level by level.
// Type: Tree BFS
// Pattern: Queue + Level tracking

// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

function levelOrder(root) {
  if (!root) return [];
  const queue = [root],
    result = [];

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}
