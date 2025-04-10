/**
https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let zeroIndex = null;
  let canJump = true;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (!Number.isNaN(zeroIndex) && !canJump) {
      if (nums[i] + i > zeroIndex) {
        canJump = true;
      }
    }
    if (nums[i] === 0 && canJump) {
      zeroIndex = i;
      canJump = false;
    }
  }
  return canJump;
};
