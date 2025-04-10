// Problem: Return all permutations of an array.
// Type: Backtracking DFS
// https://leetcode.com/problems/permutations/description/

function permute(nums) {
  const result = [];
  const dfs = (path, used) => {
    if (path.length === nums.length) return result.push([...path]);
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      dfs(path, used);
      path.pop();
      used[i] = false;
    }
  };
  dfs([], []);
  return result;
}
