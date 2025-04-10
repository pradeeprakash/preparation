/**
 * https://leetcode.com/problems/contiguous-array/description/
 * @param {Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.} arr 
 * @returns 
 */

function findMaxLength(arr) {
  let sumMap = new Map();
  let length = arr.length;
  let maxLength = 0;
  let sum = 0;

  for (i = 0; i < length; i++) {
    sum = sum + (arr[i] === 0 ? -1 : 1);
    if (sum === 0) maxLength = i + 1;
    else if (sumMap.has(sum)) {
      maxLength = Math.max(maxLength, i - sumMap.get(sum));
    } else {
      sumMap.set(sum, i);
    }
  }
  return maxLength;
}
console.log(findMaxLength([0, 1])); // Output: 2
console.log(findMaxLength([0, 1, 0])); // Output: 2
