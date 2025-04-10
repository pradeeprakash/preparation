// Problem: Given the root of a binary tree and an integer targetSum,
// return true if the tree has a root-to-leaf path such that adding up all the values along the
// path equals targetSum.

// A leaf is a node with no children.
// Type: Tree DFS
// https://leetcode.com/problems/path-sum/description/

function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
