// Problem: Return true if s and t are anagrams.
// Algorithm: Hash Map (Frequency Counting)

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (let char of s) map[char] = (map[char] || 0) + 1;
  for (let char of t) {
    if (!map[char]) return false;
    map[char]--;
  }
  return true;
}
