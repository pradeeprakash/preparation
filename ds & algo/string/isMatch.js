var isMatch = function (s, p) {
  let i = 0;
  let j = 0;
  let startIdx = -1;
  let matchIdx = 0;

  while (i < s.length) {
    if (j < p.length && (s[i] === p[j] || p[j] === "?")) {
      i++;
      j++;
    } else if (p[j] === "*") {
      startIdx = j++;
      matchIdx = i;
    } else if (j < p.length && startIdx !== -1) {
      j = startIdx + 1;
      i = matchIdx + 1;
      matchIdx = i;
    } else {
      return false;
    }
  }
  while (j < p.length && p[j] === "*") j++;
  return j === p.length;
};
// console.log(isMatch("aa", "a")); // Output: false
// console.log(isMatch("aa", "*")); // Output: true
// console.log(isMatch("cb", "?a")); // Output: false
console.log(isMatch("adceab", "ad*ab*****a")); // Output: true
// console.log(isMatch("acdcb", "a*c?b")); // Output: false
