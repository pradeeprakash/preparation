/**
 * Sliding window
 * https://leetcode.com/problems/maximum-average-subarray-i/
 *
 * Find Averages of Sub Arrays
 *
 *  */

function findAvgOfSubArray(array, k) {
  const length = array.length;
  let result = [];
  let sum = 0;
  if (length) {
    for (let i = 0; i < k; i++) {
      sum = sum + array[i];
    }
    result.push(sum);
    let i = 0;
    for (j = k; j < length; j++) {
      sum = sum + array[j] - array[i];
      result.push(sum);
      i++;
    }
  }
  return result;
}

console.log(findAvgOfSubArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
