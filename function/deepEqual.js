const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
};

// Example:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(obj1, obj2)); // true

const obj3 = { a: 1, b: { c: 3 } };
console.log(deepEqual(obj1, obj3)); // false

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true; // Checks all Primitive types

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) return false;

  return obj1Keys.every((key) => deepEqual(obj1[key] === obj2[key]));
}
