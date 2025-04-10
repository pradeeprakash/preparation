class Singleton {
  // Private property to hold the single instance
  static #instance;

  // Private constructor
  constructor() {
    if (Singleton.#instance) {
      throw new Error("Use Singleton.getInstance() to access the instance.");
    }
    Singleton.#instance = this;
  }

  // Static method to get the instance
  static getInstance() {
    if (!Singleton.#instance) {
      new Singleton(); // Create a new instance if it doesn't exist
    }
    return Singleton.#instance;
  }

  someMethod() {
    console.log("Method called on Singleton instance");
  }
}

module.exports = Singleton;
