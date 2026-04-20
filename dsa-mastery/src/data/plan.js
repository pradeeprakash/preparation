export const PHASES = [
  {
    id: 1,
    title: "Rewire Your Brain",
    subtitle: "Weeks 1–2 · The Foundation Reset",
    color: "#22d3ee",
    icon: "🧠",
    philosophy:
      "Before solving problems, FAANG engineers build mental models. You don't memorize — you VISUALIZE. Every data structure is a physical object. Every algorithm is a movie playing in your head.",
    methodology: [
      "🎬 VISUALIZE before you code — draw it, animate it in your head",
      "📐 Name the PATTERN before writing a single line",
      "⏱ Write Time & Space complexity FIRST, code SECOND",
      "🧪 List edge cases BEFORE your solution",
    ],
    weeks: [
      {
        week: 1,
        title: "Arrays & Strings — The Muscle Memory",
        mentalModel:
          "🧠 MENTAL MODEL: Array = a row of numbered lockers. You can open any locker instantly by number (O(1)). Inserting in the middle means sliding everything over (O(n)). String = a frozen array of characters — you can read but can't change letters in-place.",
        dailyPlan: [
          { day: "Day 1", task: "Two Sum — HashMap lookup pattern", problem: "LC #1", difficulty: "Easy", pattern: "Hash Map", tip: "Visualize: walking down lockers, checking if complement exists in your notebook" },
          { day: "Day 2", task: "Valid Anagram + Group Anagrams", problem: "LC #242, #49", difficulty: "Easy/Med", pattern: "Frequency Count", tip: "Visualize: sorting letters like alphabetizing a bookshelf" },
          { day: "Day 3", task: "Two Pointer: Container With Most Water", problem: "LC #11", difficulty: "Medium", pattern: "Two Pointer", tip: "Visualize: two walls closing in, measuring water between them" },
          { day: "Day 4", task: "Sliding Window: Best Time to Buy & Sell Stock", problem: "LC #121", difficulty: "Easy", pattern: "Sliding Window", tip: "Visualize: a window sliding across a stock chart, tracking the dip" },
          { day: "Day 5", task: "Sliding Window: Longest Substring Without Repeating", problem: "LC #3", difficulty: "Medium", pattern: "Sliding Window", tip: "Visualize: stretching a rubber band until it snaps (duplicate), then shrinking from left" },
          { day: "Day 6", task: "Prefix Sum: Product Except Self (O(1) space!)", problem: "LC #238", difficulty: "Medium", pattern: "Prefix/Suffix", tip: "Visualize: two trains — one scans left→right, one right→left, each leaving products behind" },
          { day: "Day 7", task: "⚡ REVIEW DAY: Redo any problem you struggled with. Write the 3-line header from memory", problem: "Review", difficulty: "—", pattern: "All", tip: "If you can't write the approach in 30 sec without code, you haven't learned it" },
        ],
      },
      {
        week: 2,
        title: "Stack & Queue — The Gatekeepers",
        mentalModel:
          "🧠 MENTAL MODEL: Stack = a stack of plates at a buffet. You can only touch the TOP plate (LIFO). Queue = a line at a movie theater. First person in line goes first (FIFO). Monotonic Stack = a bouncer who kicks out anyone shorter than the new person joining.",
        dailyPlan: [
          { day: "Day 1", task: "Valid Parentheses — THE stack problem (fix your broken solution!)", problem: "LC #20", difficulty: "Easy", pattern: "Stack", tip: "Visualize: opening brackets are PUSHED as plates. Closing brackets must MATCH the top plate." },
          { day: "Day 2", task: "Min Stack — design with O(1) getMin", problem: "LC #155", difficulty: "Medium", pattern: "Auxiliary Stack", tip: "Visualize: two stacks side by side — main stack + a 'minimum tracker' stack" },
          { day: "Day 3", task: "Daily Temperatures — monotonic stack intro", problem: "LC #739", difficulty: "Medium", pattern: "Monotonic Stack", tip: "Visualize: people standing in line by height. Shorter people get popped when a taller person arrives." },
          { day: "Day 4", task: "Next Greater Element I & II", problem: "LC #496, #503", difficulty: "Easy/Med", pattern: "Monotonic Stack", tip: "Same bouncer analogy. Circular version = go around the line twice." },
          { day: "Day 5", task: "Evaluate Reverse Polish Notation", problem: "LC #150", difficulty: "Medium", pattern: "Stack", tip: "Visualize: a calculator. Numbers pile up. Operator grabs top two, computes, pushes result." },
          { day: "Day 6", task: "Largest Rectangle in Histogram", problem: "LC #84", difficulty: "Hard", pattern: "Monotonic Stack", tip: "The HARDEST stack problem. Visualize: bars of a histogram — stack tracks potential left boundaries." },
          { day: "Day 7", task: "⚡ REVIEW: Can you explain monotonic stack to a 10-year-old?", problem: "Review", difficulty: "—", pattern: "All", tip: "Draw the stack state at each step for Daily Temperatures. Physically. On paper." },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Build the Engine",
    subtitle: "Weeks 3–5 · Core Algorithms",
    color: "#a78bfa",
    icon: "⚙️",
    philosophy:
      "This is where most candidates plateau. The difference between mid-tier and FAANG is: can you see WHY an algorithm works, not just HOW. Every algorithm is a strategy for exploring a space.",
    methodology: [
      "🌳 Trees & Graphs: Always ask 'What order do I visit nodes?'",
      "🔍 Binary Search: Not just sorted arrays — any monotonic decision space",
      "🧮 Think in LEVELS (BFS) vs PATHS (DFS)",
      "📊 Draw the recursion tree for every recursive solution",
    ],
    weeks: [
      {
        week: 3,
        title: "Binary Search — The Precision Tool",
        mentalModel:
          "🧠 MENTAL MODEL: Binary Search = a game of \"higher or lower\" with a sorted deck. But also: ANY time you have a YES/NO boundary in a sorted space, binary search finds it. Koko's bananas, ship capacity, split array — these are all \"binary search on the answer.\"",
        dailyPlan: [
          { day: "Day 1", task: "Classic Binary Search + Search Insert Position", problem: "LC #704, #35", difficulty: "Easy", pattern: "Vanilla BS", tip: "Nail the template: while(lo <= hi), mid = lo + Math.floor((hi-lo)/2)" },
          { day: "Day 2", task: "Search in Rotated Sorted Array (you have this — optimize)", problem: "LC #33", difficulty: "Medium", pattern: "Modified BS", tip: "Visualize: the sorted array is 'broken' into two sorted halves. Which half is mid in?" },
          { day: "Day 3", task: "Find Minimum in Rotated Sorted Array", problem: "LC #153", difficulty: "Medium", pattern: "Modified BS", tip: "Visualize: a V-shape. Binary search for the bottom of the V." },
          { day: "Day 4", task: "Koko Eating Bananas (you have this — review)", problem: "LC #875", difficulty: "Medium", pattern: "BS on Answer", tip: "You got this right before! Review: the answer space is [1, max(piles)]. BS finds the sweet spot." },
          { day: "Day 5", task: "Search a 2D Matrix + Search a 2D Matrix II", problem: "LC #74, #240", difficulty: "Medium", pattern: "BS / Staircase", tip: "Matrix as a flattened sorted array (I) vs staircase search from top-right (II)" },
          { day: "Day 6", task: "Time Based Key-Value Store", problem: "LC #981", difficulty: "Medium", pattern: "BS on Timestamps", tip: "Design + binary search. Closest timestamp ≤ target." },
          { day: "Day 7", task: "⚡ REVIEW: Write the 3 binary search templates from memory", problem: "Review", difficulty: "—", pattern: "All", tip: "Template 1: exact match. Template 2: leftmost. Template 3: BS on answer." },
        ],
      },
      {
        week: 4,
        title: "Trees — Think Recursively, Verify Visually",
        mentalModel:
          "🧠 MENTAL MODEL: Tree = a family tree. Every node has ONE parent (except root) and 0–2 children. Traversals are just \"when do I process myself?\" PRE = process, then kids. IN = left kid, process, right kid. POST = both kids first, then process. 90% of tree problems: \"What info do I need FROM my children to answer for myself?\"",
        dailyPlan: [
          { day: "Day 1", task: "Invert Binary Tree + Max Depth", problem: "LC #226, #104", difficulty: "Easy", pattern: "DFS Recursion", tip: "Invert: swap children at every node. Depth: 1 + max(left, right). Both are 3-line solutions." },
          { day: "Day 2", task: "Diameter of Binary Tree (FIX your O(n²) version!)", problem: "LC #543", difficulty: "Easy", pattern: "Post-order + Closure", tip: "KEY INSIGHT: height() returns height BUT updates diameter as a side effect. Single pass." },
          { day: "Day 3", task: "Validate BST + Lowest Common Ancestor", problem: "LC #98, #236", difficulty: "Medium", pattern: "DFS with bounds / Post-order", tip: "BST validation: pass min/max bounds down. LCA: if both sides return non-null, current node is LCA." },
          { day: "Day 4", task: "Binary Tree Level Order Traversal + Right Side View", problem: "LC #102, #199", difficulty: "Medium", pattern: "BFS", tip: "Visualize: processing the tree floor-by-floor, left to right. Right side view = last node per floor." },
          { day: "Day 5", task: "Construct Tree from Preorder + Inorder", problem: "LC #105", difficulty: "Medium", pattern: "Divide & Conquer", tip: "Preorder[0] = root. Find it in inorder → everything left is left subtree, right is right subtree." },
          { day: "Day 6", task: "Serialize/Deserialize Binary Tree", problem: "LC #297", difficulty: "Hard", pattern: "Preorder + Null markers", tip: "Visualize: preorder traversal, writing 'N' for nulls. Deserialize by reading left-to-right." },
          { day: "Day 7", task: "Binary Tree Maximum Path Sum", problem: "LC #124", difficulty: "Hard", pattern: "Post-order + Global max", tip: "At each node: max single path through me = me + max(left, right, 0). Update global with me+left+right." },
        ],
      },
      {
        week: 5,
        title: "Graphs — Maps, Mazes & Networks",
        mentalModel:
          "🧠 MENTAL MODEL: Graph = a city map. Nodes are intersections, edges are roads. BFS = sending a wave of water from a point (finds shortest path in unweighted). DFS = sending one explorer who goes as deep as possible before backtracking. Topological Sort = \"what order do I take courses if some have prerequisites?\"",
        dailyPlan: [
          { day: "Day 1", task: "Number of Islands (fix your typo!) + Clone Graph", problem: "LC #200, #133", difficulty: "Medium", pattern: "DFS/BFS on Grid", tip: "Islands: flood-fill (DFS) sinking land. Clone: DFS with a visited map (old→new)." },
          { day: "Day 2", task: "Course Schedule I & II — Topological Sort", problem: "LC #207, #210", difficulty: "Medium", pattern: "Topo Sort (Kahn's BFS)", tip: "Visualize: courses with arrows. Remove courses with 0 prereqs, repeat. If stuck = cycle." },
          { day: "Day 3", task: "Pacific Atlantic Water Flow", problem: "LC #417", difficulty: "Medium", pattern: "Multi-source DFS", tip: "Reverse thinking: start from ocean edges, flow UPHILL. Intersection of both sets = answer." },
          { day: "Day 4", task: "Network Delay Time — Dijkstra's Algorithm", problem: "LC #743", difficulty: "Medium", pattern: "Dijkstra (Min-Heap)", tip: "Visualize: spreading a ripple from source. Always expand the nearest unvisited node." },
          { day: "Day 5", task: "Redundant Connection — Union-Find", problem: "LC #684", difficulty: "Medium", pattern: "Union-Find", tip: "Visualize: groups of people. Each edge merges two groups. If already same group → redundant!" },
          { day: "Day 6", task: "Word Ladder", problem: "LC #127", difficulty: "Hard", pattern: "BFS Shortest Path", tip: "Each word is a node. Edge exists if 1 letter differs. BFS from start → end." },
          { day: "Day 7", task: "⚡ REVIEW: Draw BFS vs DFS vs Dijkstra vs Topo Sort from memory", problem: "Review", difficulty: "—", pattern: "All", tip: "You should be able to explain when to use each in ONE sentence." },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Conquer the Boss Levels",
    subtitle: "Weeks 6–9 · DP, Heap, Tries, Intervals",
    color: "#f472b6",
    icon: "🐉",
    philosophy:
      "DP is NOT memorization of 50 solutions. It's ONE skill: \"Can I express this problem in terms of smaller versions of itself?\" Every DP problem is a RECURSION problem first. Memoize second. Tabulate third. Optimize space fourth.",
    methodology: [
      "🔄 ALWAYS start with brute-force recursion. ALWAYS.",
      "📝 Add a cache → that's memoization. You're done for most interviews.",
      "📊 Flip it to a table → that's tabulation. Bonus points.",
      "🗜 Can you use only 1 or 2 rows? → Space optimization. FAANG gold.",
    ],
    weeks: [
      {
        week: 6,
        title: "DP Part 1 — 1D Problems (Your #1 Gap)",
        mentalModel:
          "🧠 MENTAL MODEL: DP = climbing a staircase where each step's cost depends on previous steps. You're building answers from the ground up. 1D DP = one row of building blocks, each depending on blocks before it. Draw the dependency arrows!",
        dailyPlan: [
          { day: "Day 1", task: "Climbing Stairs + House Robber I — the gentlest DP intro", problem: "LC #70, #198", difficulty: "Easy", pattern: "1D DP", tip: "Climbing: dp[i] = dp[i-1] + dp[i-2]. House Robber: dp[i] = max(dp[i-1], dp[i-2] + nums[i]). DRAW IT." },
          { day: "Day 2", task: "House Robber II (circular) + Coin Change", problem: "LC #213, #322", difficulty: "Medium", pattern: "1D DP", tip: "Robber II: run Robber I twice (skip first, skip last). Coin Change: dp[amount] = min coins to make amount." },
          { day: "Day 3", task: "Longest Increasing Subsequence", problem: "LC #300", difficulty: "Medium", pattern: "1D DP / Patience Sort", tip: "dp[i] = length of LIS ending at i. For each i, check all j < i. O(n²) first, then learn O(n log n)." },
          { day: "Day 4", task: "Word Break", problem: "LC #139", difficulty: "Medium", pattern: "1D DP", tip: "dp[i] = can s[0..i] be segmented? Try every word: if dp[i - word.length] is true AND substring matches → true." },
          { day: "Day 5", task: "Decode Ways + Partition Equal Subset Sum", problem: "LC #91, #416", difficulty: "Medium", pattern: "1D DP / 0-1 Knapsack", tip: "Partition = 0/1 knapsack where target = sum/2. dp[j] = can I make sum j with available numbers?" },
          { day: "Day 6", task: "Target Sum — the DP perspective of backtracking", problem: "LC #494", difficulty: "Medium", pattern: "DP / Backtracking", tip: "Brute force: try +/- for each number. DP: subset sum where P - N = target → P = (sum + target) / 2." },
          { day: "Day 7", task: "⚡ REVIEW: Write recursion → memo → tabulation for Coin Change from scratch", problem: "Review", difficulty: "—", pattern: "All", tip: "If you can do all 3 versions of Coin Change in 15 min, you understand DP." },
        ],
      },
      {
        week: 7,
        title: "DP Part 2 — 2D Problems & Strings",
        mentalModel:
          "🧠 MENTAL MODEL: 2D DP = filling a grid where each cell depends on neighbors (usually top, left, or diagonal). String DP = \"what's the best answer for s[0..i] vs t[0..j]?\" Draw the grid. Fill it. See the pattern.",
        dailyPlan: [
          { day: "Day 1", task: "Unique Paths + Min Path Sum (REDO as real DP!)", problem: "LC #62, #64", difficulty: "Medium", pattern: "2D Grid DP", tip: "Unique Paths: dp[i][j] = dp[i-1][j] + dp[i][j-1]. Min Path Sum: dp[i][j] = grid[i][j] + min(top, left)." },
          { day: "Day 2", task: "Longest Common Subsequence", problem: "LC #1143", difficulty: "Medium", pattern: "2D String DP", tip: "dp[i][j] = LCS of s1[0..i], s2[0..j]. Match → diagonal+1. No match → max(top, left). DRAW THE GRID." },
          { day: "Day 3", task: "Edit Distance — the ultimate string DP", problem: "LC #72", difficulty: "Medium", pattern: "2D String DP", tip: "3 operations = 3 neighbors in the grid: insert(left), delete(top), replace(diagonal). Min of three +1." },
          { day: "Day 4", task: "Longest Palindromic Subsequence", problem: "LC #516", difficulty: "Medium", pattern: "2D DP / LCS variant", tip: "LPS(s) = LCS(s, reverse(s)). Or: dp[i][j] = longest palindrome in s[i..j]." },
          { day: "Day 5", task: "0/1 Knapsack (not on LC but essential) + Coin Change II", problem: "LC #518", difficulty: "Medium", pattern: "Knapsack DP", tip: "Knapsack: for each item, include or exclude. Coin Change II: order doesn't matter = combinations." },
          { day: "Day 6", task: "Interleaving String", problem: "LC #97", difficulty: "Medium", pattern: "2D DP", tip: "dp[i][j] = can s1[0..i] + s2[0..j] form s3[0..i+j]? Check if s3[i+j-1] matches s1[i-1] or s2[j-1]." },
          { day: "Day 7", task: "⚡ REVIEW: Draw the DP grid for Edit Distance('kitten','sitting') by hand", problem: "Review", difficulty: "—", pattern: "All", tip: "If you can fill this grid correctly on paper, you own 2D string DP." },
        ],
      },
      {
        week: 8,
        title: "Heap, Trie & Intervals",
        mentalModel:
          "🧠 MENTAL MODEL: Heap = a priority checkout lane. The most important person always goes first. Trie = an autocomplete tree. Each edge is a letter, paths spell words. Intervals = events on a timeline. Sorting by start time lets you process them left-to-right.",
        dailyPlan: [
          { day: "Day 1", task: "Kth Largest Element + Top K Frequent Elements", problem: "LC #215, #347", difficulty: "Medium", pattern: "Heap / QuickSelect", tip: "Min-heap of size K: push, if size > K pop. What remains = K largest." },
          { day: "Day 2", task: "Merge K Sorted Lists + Find Median from Data Stream", problem: "LC #23, #295", difficulty: "Hard", pattern: "Heap", tip: "Merge K: min-heap of K list heads. Median: two heaps (max-heap for left half, min-heap for right)." },
          { day: "Day 3", task: "Implement Trie + Design Add and Search Words", problem: "LC #208, #211", difficulty: "Medium", pattern: "Trie", tip: "Each node = {children: {}, isEnd: bool}. Insert/Search = walk character by character." },
          { day: "Day 4", task: "Word Search II", problem: "LC #212", difficulty: "Hard", pattern: "Trie + Backtracking", tip: "Build trie from words. DFS on board, following trie edges. Prune dead branches." },
          { day: "Day 5", task: "Merge Intervals + Insert Interval", problem: "LC #56, #57", difficulty: "Medium", pattern: "Intervals", tip: "Sort by start. Merge overlapping. Insert: find position, merge neighbors." },
          { day: "Day 6", task: "Meeting Rooms II + Non-Overlapping Intervals", problem: "LC #253, #435", difficulty: "Medium", pattern: "Intervals + Heap/Greedy", tip: "Meeting Rooms II: min-heap of end times = concurrent rooms needed." },
          { day: "Day 7", task: "⚡ REVIEW: Implement a MinHeap class from scratch in JS", problem: "Review", difficulty: "—", pattern: "All", tip: "You built one before! Can you do it in 10 min now? bubbleUp, sinkDown, insert, extract." },
        ],
      },
      {
        week: 9,
        title: "Backtracking & Advanced Patterns",
        mentalModel:
          "🧠 MENTAL MODEL: Backtracking = exploring a maze. At each fork, try one path. If dead end, UNDO your last step (backtrack) and try the next fork. The recursion tree IS the maze.",
        dailyPlan: [
          { day: "Day 1", task: "Subsets + Subsets II (with duplicates)", problem: "LC #78, #90", difficulty: "Medium", pattern: "Backtracking", tip: "You have subsets. Now handle duplicates: sort first, skip if nums[i] === nums[i-1] and !used." },
          { day: "Day 2", task: "Combination Sum I & II", problem: "LC #39, #40", difficulty: "Medium", pattern: "Backtracking", tip: "I: unlimited use, start from same index. II: each once, sort + skip dups." },
          { day: "Day 3", task: "Palindrome Partitioning", problem: "LC #131", difficulty: "Medium", pattern: "Backtracking", tip: "At each position: try every possible palindrome prefix. If palindrome, recurse on remainder." },
          { day: "Day 4", task: "N-Queens", problem: "LC #51", difficulty: "Hard", pattern: "Backtracking", tip: "Place queens row by row. Track columns + diagonals with sets. Classic interview showpiece." },
          { day: "Day 5", task: "Sliding Window Maximum", problem: "LC #239", difficulty: "Hard", pattern: "Monotonic Deque", tip: "Deque = double-ended queue. Maintain decreasing order. Front = current window max." },
          { day: "Day 6", task: "LRU Cache (CLEAN UP your version!)", problem: "LC #146", difficulty: "Medium", pattern: "Design: HashMap + DLL", tip: "One clean implementation. HashMap for O(1) lookup, DLL for O(1) reorder." },
          { day: "Day 7", task: "⚡ FULL REVIEW: Pick your 3 weakest problems this phase. Redo them cold.", problem: "Review", difficulty: "—", pattern: "All", tip: "Cold = no looking at old code. Timer set. This is your real level." },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Battle Mode",
    subtitle: "Weeks 10–12 · Mock Interviews & Mastery",
    color: "#34d399",
    icon: "⚔️",
    philosophy:
      "The gap between \"solved it at home\" and \"solved it in 35 minutes while explaining to a stranger\" is MASSIVE. This phase is about performing under pressure.",
    methodology: [
      "⏱ Every problem: 5 min clarify → 10 min plan → 20 min code → 5 min test",
      "🎤 Talk out loud the ENTIRE time. Silence = rejection.",
      "❓ Ask clarifying questions BEFORE coding. Always.",
      "🔄 3 mocks/week minimum (Pramp, Interviewing.io, or peer)",
    ],
    weeks: [
      {
        week: 10,
        title: "Mock Week 1 — Easy/Medium Combos",
        mentalModel:
          "🧠 INTERVIEW FRAMEWORK: (1) Repeat the problem. (2) Ask 2-3 clarifying questions. (3) State brute force + complexity. (4) Propose optimal approach. (5) Get interviewer OK. (6) Code. (7) Dry run with example. (8) Edge cases.",
        dailyPlan: [
          { day: "Day 1", task: "Mock: Two Sum + LRU Cache (30 min each)", problem: "Mock", difficulty: "E+M", pattern: "Mixed", tip: "Practice the full interview framework. Time yourself strictly." },
          { day: "Day 2", task: "Weak spot drill: pick 2 DP problems, solve under 25 min each", problem: "DP Review", difficulty: "Medium", pattern: "DP", tip: "No notes. No hints. Pure recall." },
          { day: "Day 3", task: "Mock: Valid Parentheses + Course Schedule", problem: "Mock", difficulty: "E+M", pattern: "Stack + Graph", tip: "Can you explain your approach in plain English before coding?" },
          { day: "Day 4", task: "System pattern review: HashMap + DLL (LRU), Two heaps (Median)", problem: "Design", difficulty: "Medium", pattern: "Design", tip: "These design patterns appear in 20% of FAANG interviews." },
          { day: "Day 5", task: "Mock: Merge Intervals + Word Break", problem: "Mock", difficulty: "M+M", pattern: "Intervals + DP", tip: "Focus on clean communication. Say 'I think this is an interval merging problem because...'" },
          { day: "Day 6", task: "Revisit 3 problems you got wrong this week. Analyze WHY.", problem: "Reflection", difficulty: "—", pattern: "All", tip: "Write down: what pattern did I miss? What should my first instinct have been?" },
          { day: "Day 7", task: "REST DAY. Go outside.", problem: "—", difficulty: "—", pattern: "—", tip: "Burnout kills performance. Rest is part of the strategy." },
        ],
      },
      {
        week: 11,
        title: "Mock Week 2 — Medium/Hard Combos",
        mentalModel:
          "🧠 HARD PROBLEM STRATEGY: If stuck for > 3 min, say \"I'm considering a few approaches.\" Then: (1) What data structure gives me the access pattern I need? (2) Have I seen a simpler version of this? (3) Can I solve a smaller case by hand?",
        dailyPlan: [
          { day: "Day 1", task: "Mock: Longest Palindromic Substring + Binary Tree Max Path Sum", problem: "Mock", difficulty: "M+H", pattern: "String + Tree", tip: "The hard problem tests composure. Talk through your thinking even when stuck." },
          { day: "Day 2", task: "Random LC medium, no topic filter. Identify pattern in < 3 min.", problem: "Random", difficulty: "Medium", pattern: "Pattern ID", tip: "The REAL test: can you identify the pattern without being told the category?" },
          { day: "Day 3", task: "Mock: Word Search II + Network Delay Time", problem: "Mock", difficulty: "H+M", pattern: "Trie + Graph", tip: "Hard + medium combo = real FAANG screen format." },
          { day: "Day 4", task: "2 random mediums, 25 min each, with full explanation", problem: "Random", difficulty: "Medium", pattern: "Mixed", tip: "Record yourself explaining. Listen back. Are you clear and structured?" },
          { day: "Day 5", task: "Mock: Largest Rectangle in Histogram + Edit Distance", problem: "Mock", difficulty: "H+M", pattern: "Stack + DP", tip: "These two are the 'final exam' of their categories." },
          { day: "Day 6", task: "Full review of every problem you've solved. Make a cheat sheet of patterns.", problem: "Review", difficulty: "—", pattern: "All", tip: "1 page. Every pattern. When to use it. One example problem. This is your pre-interview glance." },
          { day: "Day 7", task: "REST DAY.", problem: "—", difficulty: "—", pattern: "—", tip: "You're almost there." },
        ],
      },
      {
        week: 12,
        title: "Final Week — Simulate Real Interviews",
        mentalModel:
          "🧠 GAME DAY: You're not learning anymore. You're PERFORMING. Trust your preparation. The goal is clean execution, clear communication, and calm under pressure.",
        dailyPlan: [
          { day: "Day 1", task: "Full mock interview: 2 problems, 45 min, with a real person", problem: "Full Mock", difficulty: "M+H", pattern: "Mixed", tip: "Use Pramp or Interviewing.io. Get feedback on communication, not just correctness." },
          { day: "Day 2", task: "Review feedback. Drill the pattern you failed.", problem: "Targeted", difficulty: "Varies", pattern: "Weakness", tip: "Don't practice what you're good at. Practice what you failed." },
          { day: "Day 3", task: "Full mock interview: 2 problems, 45 min", problem: "Full Mock", difficulty: "M+H", pattern: "Mixed", tip: "Treat this like the real thing. Dress code. Quiet room. Timer." },
          { day: "Day 4", task: "Light review: skim your 1-page cheat sheet. Do 1 easy problem as warm-up.", problem: "Light", difficulty: "Easy", pattern: "Warm-up", tip: "Don't cram. Trust your 11 weeks of work." },
          { day: "Day 5", task: "Final full mock: 2 problems, 45 min. Your best performance.", problem: "Full Mock", difficulty: "M+H", pattern: "Mixed", tip: "This is your dress rehearsal. Leave nothing on the table." },
          { day: "Day 6", task: "Rest + organize your cheat sheet + review your strongest patterns", problem: "Rest", difficulty: "—", pattern: "—", tip: "Confidence comes from preparation. You've done the work." },
          { day: "Day 7", task: "🎯 YOU'RE READY. Apply. Interview. Ship.", problem: "—", difficulty: "—", pattern: "—", tip: "Remember: they're looking for someone who THINKS clearly, not someone who memorizes." },
        ],
      },
    ],
  },
];

export const TOTAL_DAYS = PHASES.reduce(
  (sum, p) => sum + p.weeks.reduce((ws, w) => ws + w.dailyPlan.length, 0),
  0,
);

export function getDayByGlobalIndex(idx) {
  let cur = 0;
  for (const phase of PHASES) {
    for (const week of phase.weeks) {
      if (idx < cur + week.dailyPlan.length) {
        const dayIdx = idx - cur;
        return { phase, week, day: week.dailyPlan[dayIdx], weekNum: week.week, dayIdx };
      }
      cur += week.dailyPlan.length;
    }
  }
  return null;
}

export function dayKey(weekNum, dayIdx) {
  return `${weekNum}-${dayIdx}`;
}
