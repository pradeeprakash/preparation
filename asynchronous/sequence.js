function sequence(asyncFunctions) {
  return asyncFunctions.reduce((promiseChain, asyncFunc) => {
    return promiseChain.then((results) =>
      asyncFunc().then((result) => [...results, result])
    );
  }, Promise.resolve([]));
}

// Example usage:
const asyncFunc1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const asyncFunc2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 500));
const asyncFunc3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 200));

sequence([asyncFunc1, asyncFunc2, asyncFunc3]).then((results) =>
  console.log(results)
); // Output: [1, 2, 3]
