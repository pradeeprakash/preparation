// https://leetcode.com/problems/rotting-oranges/description/
// Problem: Find the minimum minutes until all oranges rot.
// Type: Grid BFS with time levels

function orangesRotting(grid) {
  const queue = [],
    rows = grid.length,
    cols = grid[0].length;
  let fresh = 0,
    minutes = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      if (grid[r][c] === 1) fresh++;
    }
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length && fresh > 0) {
    let size = queue.length;
    while (size--) {
      const [x, y] = queue.shift();
      for (let [dx, dy] of dirs) {
        const nx = x + dx,
          ny = y + dy;
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < rows &&
          ny < cols &&
          grid[nx][ny] === 1
        ) {
          grid[nx][ny] = 2;
          fresh--;
          queue.push([nx, ny]);
        }
      }
    }
    minutes++;
  }

  return fresh === 0 ? minutes : -1;
}
