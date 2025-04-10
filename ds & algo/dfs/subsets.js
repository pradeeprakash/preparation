// Problem: Return all subsets (power set).
// Type: DFS + Backtracking

// https://leetcode.com/problems/subsets/description/

function subsets(nums) {
  const result = [];
  const dfs = (i, path) => {
    result.push([...path]);
    for (let j = i; j < nums.length; j++) {
      path.push(nums[j]);
      dfs(j + 1, path);
      path.pop();
    }
  };
  dfs(0, []);
  return result;
}
