// Find Minimum in Rotated Sorted Array

function findMin(nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
}

// Example usage:
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([11, 13, 15, 17])); // Output: 11
