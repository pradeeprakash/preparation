// Problem: Return the max depth of the tree.
// Type: Tree DFS
// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
