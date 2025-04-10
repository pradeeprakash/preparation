// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Problem: Return the longest palindrome substring.
// Algorithm: Expand Around Center (O(n²))

var longestPalindrome = function (s) {
  let maxLeft = 0;
  let maxRight = 0;

  for (let i = 0; i < s.length; i++) {
    checkMaxPali(i, i);
    checkMaxPali(i, i + 1);
  }

  function checkMaxPali(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    left++;
    right--;
    if (maxRight - maxLeft < right - left) {
      maxRight = right;
      maxLeft = left;
    }
  }

  return s.substring(maxLeft, maxRight + 1);
};
