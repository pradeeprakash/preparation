//Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function findMajority(numbers) {
  const length = numbers.length;
  let result = 0;
  let setMap = new Map();
  if (length) {
    result = numbers[0];
    numbers.forEach((num) => {
      if (setMap.has(num)) {
        setMap.set(num, setMap.get(num) + 1);
        if (setMap.get(num) >= length / 2) {
          result = num;
        }
      } else {
        setMap.set(num, 1);
      }
      console.log(setMap);
    });
  }
  return result;
}

const nums = [3];
console.log(findMajority(nums));
