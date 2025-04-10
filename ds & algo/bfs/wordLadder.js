// Problem: Find shortest transformation steps using word mutations.
// Type: Graph BFS
// https://leetcode.com/problems/word-ladder/description/

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];
  while (queue.length) {
    const [word, level] = queue.shift();
    if (word === endWord) return level;

    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const nextWord =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (wordSet.has(nextWord)) {
          queue.push([nextWord, level + 1]);
          wordSet.delete(nextWord);
        }
      }
    }
  }

  return 0;
}
