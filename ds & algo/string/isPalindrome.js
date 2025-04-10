var isPalindrome = function (s) {
  let cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = cleanedStr.length - 1;
  while (right > left) {
    if (cleanedStr[right] !== cleanedStr[left]) {
      return false;
    }
    right--;
    left++;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
