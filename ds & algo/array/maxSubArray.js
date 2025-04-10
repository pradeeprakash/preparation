var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let maxSum = nums[0];
  let tempSum = nums[0];
  let tempArray = [];
  let maxArray = [];
  for (let i = 1; i < nums.length; i++) {
    if (tempSum + nums[i] > nums[i]) {
      tempSum = tempSum + nums[i];
      tempArray.push(nums[i]);
    } else {
      tempSum = nums[i];
      tempArray = [nums[i]];
    }
    if (tempSum > maxSum) {
      maxSum = tempSum;
      maxArray = [...tempArray];
    }
  }

  return [maxSum, ...maxArray];
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
