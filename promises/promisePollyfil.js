class MyPromise {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("Executor must be a function");
    }

    // Promise states
    this.state = "PENDING"; // "PENDING", "FULFILLED", "REJECTED"
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    // Resolve function
    const resolve = (value) => {
      if (this.state === "PENDING") {
        this.state = "FULFILLED";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    // Reject function
    const reject = (reason) => {
      if (this.state === "PENDING") {
        this.state = "REJECTED";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    // Execute the executor function
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === "FULFILLED") {
        try {
          const result = onFulfilled ? onFulfilled(this.value) : this.value;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }

      if (this.state === "REJECTED") {
        try {
          const result = onRejected ? onRejected(this.reason) : this.reason;
          reject(result);
        } catch (error) {
          reject(error);
        }
      }

      if (this.state === "PENDING") {
        this.onFulfilledCallbacks.push((value) => {
          try {
            const result = onFulfilled ? onFulfilled(value) : value;
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });

        this.onRejectedCallbacks.push((reason) => {
          try {
            const result = onRejected ? onRejected(reason) : reason;
            reject(result);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let resolvedCount = 0;
      const results = new Array(promises.length);

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise)
          .then((value) => {
            results[index] = value;
            resolvedCount += 1;
            if (resolvedCount === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      });
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        MyPromise.resolve(promise).then(resolve).catch(reject);
      });
    });
  }
}
