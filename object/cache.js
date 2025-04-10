class Cache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cacheMap = new Map();
    this.ordering = [];
  }

  get(key) {
    if (this.cacheMap.has(key)) {
      // Update ordering (move recently used to end)
      this.ordering = this.ordering.filter((item) => item !== key);
      this.ordering.push(key);
      return this.cacheMap.get(key);
    }
    return undefined;
  }

  put(key, value) {
    if (this.cacheMap.size >= this.capacity) {
      // Evict least recently used item
      const lruKey = this.ordering.shift();
      this.cacheMap.delete(lruKey);
    }
    // Add new item
    this.cacheMap.set(key, value);
    this.ordering.push(key);
  }
}

// Example usage:
const cache = new Cache(2);
cache.put(1, "One");
cache.put(2, "Two");
console.log(cache.get(1)); // Output: 'One'
cache.put(3, "Three");
console.log(cache.get(2)); // Output: undefined (since it was the least recently used)
