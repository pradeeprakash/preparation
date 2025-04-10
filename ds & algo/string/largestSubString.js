function findLongestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  const charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    if (charIndexMap[char] !== undefined) {
      start = Math.max(charIndexMap[char] + 1, start);
    }
    maxLength = Math.max(maxLength, end - start + 1);
    charIndexMap[char] = end;
  }

  return maxLength;
}

// Example usage:
console.log(findLongestSubstring("abcabcbb")); // Output: 3
console.log(findLongestSubstring("bbbbb")); // Output: 1
console.log(findLongestSubstring("pwwkew")); // Output: 3
