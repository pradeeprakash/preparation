function numIslands(grid) {
  const rows = grid.length,
    cols = grid[0].length;
  let count = 0;

  const bfs = (r, c) => {
    const queue = [[r, c]];
    grid[r][c] = "0";

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let [dx, dy] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const nx = x + dx,
          ny = y + dy;
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < rows &&
          ny < cols &&
          grid[nx][ny] === "1"
        ) {
          queue.push([nx, ny]);
          grid[nx][ny] = "0";
        }
      }
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        bfs(r, c);
        count++;
      }
    }
  }

  return count;
}
