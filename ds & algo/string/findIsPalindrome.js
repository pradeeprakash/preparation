function findIsPalindrome(s = "") {
  s = s.toLowerCase();
  let j = 0;
  for (let i = s.length - 1; i >= s.length / 2; ) {
    if (s[i].charCodeAt() < 97 || s[i].charCodeAt() > 122 || s[i] === "") {
      i--;
      continue;
    } else if (
      s[j].charCodeAt() < 97 ||
      s[j].charCodeAt() > 122 ||
      s[j] === ""
    ) {
      j++;
      continue;
    }
    if (s[i] !== s[j]) {
      return false;
    }
    j++;
    i--;
  }
  return true;
}

console.log(findIsPalindrome("A man, a plan, a canal: Panama"));
console.log(findIsPalindrome("race a car"));
console.log(findIsPalindrome(" "));
