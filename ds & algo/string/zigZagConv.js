/**
 * 
 * 
 * 
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let result = new Array(numRows).fill("");
  let j = 0;
  let currRow = 0;
  let isForward = true;
  for (let char of s) {
    result[currRow] += char;
    if (currRow == numRows - 1) {
      isForward = false;
    }
    if (currRow === 0) {
      isForward = true;
    }

    if (isForward) {
      currRow++;
    } else {
      currRow--;
    }
  }
  return result.join("");
};
