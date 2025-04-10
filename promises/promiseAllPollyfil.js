if (!Promise.all) {
  Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
      }

      let results = [];
      let completed = 0;
      const total = promises.length;

      if (total === 0) {
        return resolve([]);
      }

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = value;
            completed++;

            if (completed === total) {
              resolve(results);
            }
          })
          .catch(reject);
      });
    });
  };
}

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(console.log).catch(console.error);
// Output (after 1s): [1, 2, 3]
