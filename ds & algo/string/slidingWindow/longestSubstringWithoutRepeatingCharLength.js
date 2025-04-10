// Problem: Return the length of the longest substring without repeating characters.
// Algorithm: Sliding Window + Set
function longestSubstringLength(str) {
  try {
    let start = 0;
    let end = 0;
    let set = new Set();
    let max = Math.min(str.length, 1);

    while (end < str.length) {
      while (set.has(str[end])) {
        set.delete(str[start]);
        start++;
      }

      set.add(str[end]);
      max = Math.max(max, end - start + 1); // max comparing to window size ( end - start+1 )
      end++;
    }

    return max;
  } catch (err) {
    console.log("Error in longestSubstringLength", err);
  }
}

console.log(longestSubstringLength("pwwkew"));
console.log(longestSubstringLength("bbbbb"));
console.log(longestSubstringLength("abcabcbb"));
