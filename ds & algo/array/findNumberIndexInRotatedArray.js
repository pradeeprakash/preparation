var search = function (array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // Found the target
    }

    // Determine which side is sorted
    if (array[left] <= array[mid]) {
      // Left side is sorted
      if (array[left] <= target && target < array[mid]) {
        right = mid - 1; // Target is in the left sorted portion
      } else {
        left = mid + 1; // Target is in the unsorted portion
      }
    } else {
      // Right side is sorted
      if (array[mid] < target && target <= array[right]) {
        left = mid + 1; // Target is in the right sorted portion
      } else {
        right = mid - 1; // Target is in the unsorted portion
      }
    }
  }

  return -1; // Target not found
};
