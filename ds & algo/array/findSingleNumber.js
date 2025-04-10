/**  Given a non-empty array of integers num, every element appears twice except for one. Find that single one.

 You must implement a solution with a linear runtime complexity and use only constant extra space.

 Example 1:

 Input: num = [2,2,1]
 Output: 1
 Example 2:

 Input: num = [4,1,2,1,2]
 Output: 4
 Example 3:

 Input: num = [1]
 Output: 1
*/

function findSingleNumber(arr = []) {
  return arr.reduce((t, a) => t ^ a);
}

console.log(findSingleNumber([4, 1, 2, 1, 2, 4, 6]));

function singleNumber(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return set.values().next().value;
}

function singleNumber1(nums) {
  const uniqueSum = [...new Set(nums)].reduce((sum, num) => sum + num, 0);
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  return 2 * uniqueSum - totalSum;
}
