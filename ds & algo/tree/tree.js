function Tree(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//       1
//   2       3
// 4   5   6    7

let tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
tree.left.left = new Tree(4);
tree.left.right = new Tree(5);
tree.right.left = new Tree(6);
tree.right.right = new Tree(7);

// inOrder(tree); // 4 2 5 1 6 3 7
// preOrder(tree); // 1 2 4 5 3 6 7
postOrder(tree); // 4 5 2 6 7 3 1

function inOrder(root) {
  if (root === null) return;
  // LMR
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}

function preOrder(root) {
  if (root === null) return;
  // MLR
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

function postOrder(root) {
  if (root === null) return;
  // LRM
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}
