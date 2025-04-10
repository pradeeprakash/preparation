/**
 * https://leetcode.com/problems/number-of-islands/description/
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */
function numberOfIslands(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  let islandsCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  function dsf(row, col) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === "0"
    ) {
      return;
    }
    grid[row][col] = "0";

    dsf(row - 1, col); // Top
    dsf(row + 1, col); // Down
    dsf(row, col - 1); // Left
    dsf(row, col + 1); // Right
  }

  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        islandsCount++;
        dsf(i, j);
      }
    }
  }
  return islandsCount;
}
const input = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "1"],
];
console.log(numberOfIslands(input));
