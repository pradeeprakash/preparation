class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function to calculate height of a binary tree
function height(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

// Function to calculate diameter of a binary tree
function diameterOfBinaryTree(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);

  // Diameter may or may not pass through the root
  return Math.max(
    leftHeight + rightHeight,
    Math.max(leftDiameter, rightDiameter)
  );
}

// Example usage:

// Construct a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Diameter of the binary tree:", diameterOfBinaryTree(root));
