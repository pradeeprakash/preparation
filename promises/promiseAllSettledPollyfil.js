if (!Promise.allSettled) {
  Promise.allSettled = function (promises) {
    return new Promise((resolve) => {
      if (!Array.isArray(promises)) {
        throw new TypeError("Argument must be an array");
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
            results[index] = { status: "fulfilled", value };
          })
          .catch((reason) => {
            results[index] = { status: "rejected", reason };
          })
          .finally(() => {
            completed++;
            if (completed === total) {
              resolve(results);
            }
          });
      });
    });
  };
}

const p1 = Promise.resolve(1);
const p2 = Promise.reject("Error occurred");
const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.allSettled([p1, p2, p3]).then(console.log);
