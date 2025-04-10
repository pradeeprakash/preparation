var twoSum = function (nums, target) {
  let map = new Map();
  let i = 0;
  let diff = 0;
  while (i < nums.length) {
    diff = target - nums[i];
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(diff, i);
    }
    i++;
  }
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (Math.abs(nums[i] + nums[j]) === target) {
  //       return [i, j];
  //     }
  //   }
  // }
};

console.log(twoSum([-1, -2, -3, -4, -5], -8));
