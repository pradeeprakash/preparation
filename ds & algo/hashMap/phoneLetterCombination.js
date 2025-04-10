// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

/**
 * @param {string} digits
 * @return {string[]}
 */

const phoneLetterMap = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let output = [];
  let combination = "";
  backTracking(combination, digits);

  function backTracking(combination, digits) {
    if (digits.length === 0) {
      return output.push(combination);
    } else {
      for (let char of phoneLetterMap[digits[0]]) {
        backTracking(combination + char, digits.slice(1));
      }
    }
  }

  return output;
};
