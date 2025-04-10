if (!Promise.race) {
  Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        throw new TypeError("Argument must be an array");
      }

      for (let promise of promises) {
        Promise.resolve(promise).then(resolve, reject);
      }
    });
  };
}
