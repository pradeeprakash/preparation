function moveZeros(arr) {
  let nonZeroIndex = 0;

  // Traverse the array, move non-zero elements to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // Swap non-zero element with the current nonZeroIndex
      [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
      nonZeroIndex++;
    }
    console.log("arr", arr[i], arr);
  }

  // At this point, all non-zero elements are at the front, and zeros are at the end
  return arr;
}

// Example usage:
const arr = [0, 1, 0, 0, 3, 12];
console.log(moveZeros(arr)); // Output: [1, 3, 12, 0, 0]
