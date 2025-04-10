/* 
Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr.

If there're duplicates in arr, count them seperately.

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

*/

function countElements(arr) {
  const numSet = new Set(arr);
  let count = 0;

  for (let num of arr) {
    if (numSet.has(num + 1)) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countElements([1, 2, 3])); // Output: 2
