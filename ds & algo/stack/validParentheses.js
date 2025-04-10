// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char); // Push open brackets onto the stack
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false; // Invalid if no matching open bracket
      }
    }
  }

  return stack.length === 0; // Valid if no unmatched open brackets remain
}
