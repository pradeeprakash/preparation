/**
 * https://leetcode.com/problems/valid-parentheses/description/
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */
let conf = {
  ")": "(",
  "]": "[",
  "}": "{",
};

function isValidParentheses(str) {
  let isValid = true;
  const len = str.length;
  let obj = {};
  if (len) {
    for (i = 0; i < len; i++) {
      if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
        if (obj[str[i]]) {
          obj[str[i]] = obj[str[i]] + 1;
        } else {
          obj[str[i]] = 1;
        }
      } else {
        if (obj[conf[str[i]]]) {
          obj[conf[str[i]]] = obj[conf[str[i]]] - 1;
        } else {
          isValid = false;
          break;
        }
      }
    }
  }
  console.log("obj", obj);

  return isValid;
}

console.log(isValidParentheses("}(()){}[]}"));
