/**
 * https://leetcode.com/problems/longest-consecutive-sequence
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let numSet = new Set(nums);
  let max = 1;
  let count = 1;
  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      while (numSet.has(currentNum + 1)) {
        count++;
        currentNum++;
      }
      max = Math.max(max, count);
      count = 1;
    }
  }
  return max;
};

// Input: nums = [100,4,200,1,3,2]
// Output: 4

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
