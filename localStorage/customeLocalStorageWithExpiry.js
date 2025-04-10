const customLocalStorage = {
  // Internal key for storing the expiration index
  EXPIRY_INDEX_KEY: "__expiryIndex",

  // Set an item with an expiry time (in milliseconds)
  setItem: function (key, value, expiryTimeInMs) {
    const now = new Date().getTime();
    const expiry = now + expiryTimeInMs;

    // Save the actual value along with the expiry time
    const item = {
      value: value,
      expiry: expiry,
    };
    localStorage.setItem(key, JSON.stringify(item));

    // Update the expiry index
    this._updateExpiryIndex(key, expiry);
  },

  // Get an item and check if it is expired
  getItem: function (key) {
    this._cleanupExpiredKeys(); // Clean up expired keys when accessing any key

    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date().getTime();

    // Check if the item has expired
    if (now > item.expiry) {
      localStorage.removeItem(key); // Remove expired item
      this._removeFromExpiryIndex(key);
      return null;
    }

    return item.value;
  },

  // Remove an item manually
  removeItem: function (key) {
    localStorage.removeItem(key);
    this._removeFromExpiryIndex(key); // Also remove it from the expiry index
  },

  // Clear all customLocalStorage items
  clear: function () {
    localStorage.clear();
  },

  // Private method to update the expiry index
  _updateExpiryIndex: function (key, expiry) {
    const index = JSON.parse(
      localStorage.getItem(this.EXPIRY_INDEX_KEY) || "{}"
    );
    index[key] = expiry;
    localStorage.setItem(this.EXPIRY_INDEX_KEY, JSON.stringify(index));
  },

  // Private method to remove a key from the expiry index
  _removeFromExpiryIndex: function (key) {
    const index = JSON.parse(
      localStorage.getItem(this.EXPIRY_INDEX_KEY) || "{}"
    );
    delete index[key];
    localStorage.setItem(this.EXPIRY_INDEX_KEY, JSON.stringify(index));
  },

  // Private method to clean up expired keys
  _cleanupExpiredKeys: function () {
    const index = JSON.parse(
      localStorage.getItem(this.EXPIRY_INDEX_KEY) || "{}"
    );
    const now = new Date().getTime();

    for (const key in index) {
      if (now > index[key]) {
        // Remove expired key from localStorage and expiry index
        localStorage.removeItem(key);
        delete index[key];
      }
    }

    // Update the expiry index after cleanup
    localStorage.setItem(this.EXPIRY_INDEX_KEY, JSON.stringify(index));
  },
};

// Example usage:

// Set an item with a 5 second expiry (5000 milliseconds)
customLocalStorage.setItem("testKey", "testValue", 5000);

// Retrieve the item after some time
setTimeout(() => {
  const value = customLocalStorage.getItem("testKey");
  if (value) {
    console.log("Key is still valid, value:", value);
  } else {
    console.log("Key has expired or does not exist.");
  }
}, 6000); // Try to get the value after 6 seconds (should be expired)
