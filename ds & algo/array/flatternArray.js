function flattenArray(array, level = 1) {
  if (level < 1) return array; // If level is less than 1, return the array as-is.

  return array.reduce((acc, item) => {
    if (Array.isArray(item) && level > 0) {
      // Recursively flatten the array if the item is an array and level > 0.
      acc.push(...flattenArray(item, level - 1));
    } else {
      acc.push(item); // Push non-array elements directly.
    }
    return acc;
  }, []);
}

// Example Usage:
const nestedArray = [1, [2, [3, [4, [5]]]]];

console.log(flattenArray(nestedArray, 1)); // [1, 2, [3, [4, [5]]]]
console.log(flattenArray(nestedArray, 2)); // [1, 2, 3, [4, [5]]]
console.log(flattenArray(nestedArray, 3)); // [1, 2, 3, 4, [5]]
console.log(flattenArray(nestedArray, 4)); // [1, 2, 3, 4, 5]
console.log(flattenArray(nestedArray, 0)); // [1, [2, [3, [4, [5]]]]]

const f = (array, level) => {
  if (level < 1) return array;

  return array.reduce((acc, item) => {
    if (Array.isArray(array) && level > 0) {
      acc.push(...f(item, level - 1));
    } else {
      acc.push(item);
    }
  }, []);
};
