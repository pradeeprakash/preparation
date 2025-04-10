/**
 * Throttle promises execution based on the maxLimit.
 *
 * @param {Array<Function>} promiseFns - An array of functions that return promises.
 * @param {number} maxLimit - The maximum number of promises to run concurrently.
 * @returns {Promise<Array>} - A promise that resolves when all the promises are done.
 */
async function throttlePromises(promiseFns, maxLimit) {
  const results = []; // Store results from promises
  let index = 0; // Keep track of current index

  // Helper function to process a single chunk of promises
  const processChunk = async () => {
    // Create a chunk of promises to run concurrently based on maxLimit
    const chunk = promiseFns.slice(index, index + maxLimit).map((fn) => fn());
    index += maxLimit;

    // Wait for all promises in the chunk to complete
    const chunkResults = await Promise.all(chunk);
    results.push(...chunkResults);

    // If there are still remaining promises, process the next chunk
    if (index < promiseFns.length) {
      await processChunk();
    }
  };

  // Start processing the first chunk
  await processChunk();

  return results;
}

// Example usage:

// Sample promise-returning functions
const createPromise = (i, delay) => () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Promise ${i} resolved after ${delay}ms`);
      resolve(i);
    }, delay);
  });

// Create an array of 10 promises with different delays
const promises = [
  createPromise(1, 1000),
  createPromise(2, 500),
  createPromise(3, 200),
  createPromise(4, 400),
  createPromise(5, 300),
  createPromise(6, 600),
  createPromise(7, 700),
  createPromise(8, 100),
  createPromise(9, 800),
  createPromise(10, 900),
];

// Run promises in batches of 3
throttlePromises(promises, 3)
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((err) => {
    console.error("Error occurred:", err);
  });
