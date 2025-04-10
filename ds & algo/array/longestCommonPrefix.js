// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let temp = prefix;
    prefix = "";
    if (temp === "") {
      return "";
    }
    let n = Math.min(temp.length, strs[i].length);
    for (let j = 0; j < n; j++) {
      if (temp[j] === strs[i][j]) {
        prefix += temp[j];
      } else {
        break;
      }
    }
  }

  return prefix;
};
