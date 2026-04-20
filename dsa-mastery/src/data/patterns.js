export const PATTERN_CLUES = [
  { clue: '"Find pair/triplet that sums to X" or sorted input', pattern: "Two Pointer", color: "#22d3ee", emoji: "👆", examples: "Two Sum II, 3Sum, Container With Most Water" },
  { clue: '"Longest/shortest substring with condition" or contiguous subarray', pattern: "Sliding Window", color: "#a78bfa", emoji: "🪟", examples: "Longest Substring, Min Window Substring, Max Consecutive Ones III" },
  { clue: '"Find position in sorted" or "minimize maximum / maximize minimum"', pattern: "Binary Search", color: "#34d399", emoji: "🔍", examples: "Search Rotated Array, Koko Bananas, Capacity to Ship" },
  { clue: '"Next greater/smaller" or "matching brackets" or "undo last"', pattern: "Stack", color: "#fbbf24", emoji: "📚", examples: "Valid Parentheses, Daily Temperatures, Largest Rectangle" },
  { clue: '"Shortest path unweighted" or "level by level" or "minimum steps"', pattern: "BFS", color: "#f472b6", emoji: "🌊", examples: "Rotting Oranges, Word Ladder, Shortest Path in Grid" },
  { clue: '"All combinations/permutations" or "explore all paths"', pattern: "DFS / Backtracking", color: "#f97316", emoji: "🔙", examples: "Subsets, Permutations, N-Queens, Combination Sum" },
  { clue: '"How many ways" or "min/max cost" with overlapping choices', pattern: "Dynamic Programming", color: "#ef4444", emoji: "🧱", examples: "Climbing Stairs, Coin Change, Edit Distance, LCS" },
  { clue: '"Merge overlapping" or "schedule/timeline conflicts"', pattern: "Intervals", color: "#06b6d4", emoji: "📅", examples: "Merge Intervals, Meeting Rooms II, Insert Interval" },
  { clue: '"Top K" or "K-th largest/smallest" or "streaming median"', pattern: "Heap / Priority Queue", color: "#8b5cf6", emoji: "⛰", examples: "Top K Frequent, Merge K Lists, Find Median Stream" },
  { clue: '"Prefix matching" or "autocomplete" or "word dictionary"', pattern: "Trie", color: "#10b981", emoji: "🌳", examples: "Implement Trie, Word Search II, Add and Search Word" },
  { clue: '"Connected components" or "group merging" or "cycle in undirected"', pattern: "Union-Find", color: "#ec4899", emoji: "🤝", examples: "Redundant Connection, Accounts Merge, Graph Valid Tree" },
  { clue: '"Prerequisites/dependencies" or "ordering with constraints"', pattern: "Topological Sort", color: "#14b8a6", emoji: "📋", examples: "Course Schedule I & II, Alien Dictionary" },
];

export const DIFFICULTY_COLORS = {
  Easy: "#34d399",
  Medium: "#fbbf24",
  Hard: "#f87171",
  "Easy/Med": "#a78bfa",
  "E+M": "#a78bfa",
  "M+M": "#fbbf24",
  "M+H": "#f472b6",
  "H+M": "#f472b6",
  "—": "#64748b",
  Varies: "#64748b",
};
