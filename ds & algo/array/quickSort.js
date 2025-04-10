function quickSort(array) {
  if (array.length <= 1) return array;
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// Example Usage
const array = [3, 2, 1, 5, 6, 4];
console.log(quickSort(array)); // Output: [1, 2, 3, 4, 5, 6]
