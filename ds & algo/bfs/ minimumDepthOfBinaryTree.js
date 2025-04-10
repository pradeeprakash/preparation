// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
// Problem: Find the shortest path from root to leaf.
// Type: Tree BFS (shortest path)

function minDepth(root) {
  if (!root) return 0;
  const queue = [[root, 1]];

  while (queue.length) {
    const [node, depth] = queue.shift();
    if (!node.left && !node.right) return depth;
    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
}
