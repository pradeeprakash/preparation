// Problem: Deep clone a graph (undirected).
//  Type: Graph DFS
// https://leetcode.com/problems/clone-graph/description/

function cloneGraph(node) {
  const map = new Map();
  const dfs = (n) => {
    if (!n) return null;
    if (map.has(n)) return map.get(n);

    const clone = { val: n.val, neighbors: [] };
    map.set(n, clone);

    for (let neighbor of n.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };
  return dfs(node);
}
