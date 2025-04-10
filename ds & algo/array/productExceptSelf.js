/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 */

function productExceptSelf(nums) {
  const n = nums.length;

  // Initialize two arrays to store products of prefixes and suffixes
  const prefixProducts = new Array(n).fill(1);
  const suffixProducts = new Array(n).fill(1);

  // Calculate prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    prefixProducts[i] = prefix;
    prefix *= nums[i];
  }

  // Calculate suffix products
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    suffixProducts[i] = suffix;
    suffix *= nums[i];
  }

  // Calculate the final result
  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = prefixProducts[i] * suffixProducts[i];
  }

  return result;
}

// Example usage:
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result);
