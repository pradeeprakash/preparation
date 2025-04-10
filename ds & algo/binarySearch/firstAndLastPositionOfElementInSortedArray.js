// Problem: Find the first and last occurrence of a target value.

function searchRange(nums, target) {
  const findIndex = (leftBias) => {
    let left = 0,
      right = nums.length - 1,
      index = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) left = mid + 1;
      else if (nums[mid] > target) right = mid - 1;
      else {
        index = mid;
        if (leftBias) right = mid - 1;
        else left = mid + 1;
      }
    }
    return index;
  };

  return [findIndex(true), findIndex(false)];
}
