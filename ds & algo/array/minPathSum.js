function minPathSum(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 && j === 0) {
        continue; // Skip the top-left cell, as it doesn't have a left or top neighbor
      }

      if (i - 1 >= 0 && j - 1 >= 0) {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      } else if (i - 1 >= 0) {
        grid[i][j] += grid[i - 1][j];
      } else if (j - 1 >= 0) {
        grid[i][j] += grid[i][j - 1];
      }
    }
  }

  return grid[rows - 1][cols - 1];
}

// Example usage:
const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(minPathSum(grid)); // Output: 7

// Example 1:
const grid1 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.log(minPathSum(grid1)); // Output: 7

// Example 2:
const grid2 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(minPathSum(grid2)); // Output: 12

// Example 3: Empty grid
const grid3 = [];
console.log(minPathSum(grid3)); // Output: 0

// Example 4: Single cell grid
const grid4 = [[5]];
console.log(minPathSum(grid4)); // Output: 5

// Example 5: Grid with equal values
const grid5 = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2],
];
console.log(minPathSum(grid5)); // Output: 10

// function minPathSum(grid) {
//   if (!grid || grid.length === 0 || grid[0].length === 0) {
//     return 0;
//   }

//   const rows = grid.length;
//   const cols = grid[0].length;

//   // Create a 2D array to store minimum path sums
//   const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

//   // Initialize the first cell in the dp array
//   dp[0][0] = grid[0][0];

//   // Initialize the first row and first column of dp array
//   for (let i = 1; i < rows; i++) {
//     dp[i][0] = dp[i - 1][0] + grid[i][0];
//   }

//   for (let j = 1; j < cols; j++) {
//     dp[0][j] = dp[0][j - 1] + grid[0][j];
//   }

//   // Fill in the rest of the dp array
//   for (let i = 1; i < rows; i++) {
//     for (let j = 1; j < cols; j++) {
//       dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
//     }
//   }

//   // The bottom-right cell of the dp array contains the minimum path sum
//   return dp[rows - 1][cols - 1];
// }

// // Example usage:
// const grid = [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1],
// ];

// console.log(minPathSum(grid)); // Output: 7
