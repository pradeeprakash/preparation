class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // Maximum size of the cache
    this.cache = new Map(); // Hash map to store key-node pairs
    this.head = {}; // Dummy head of the doubly linked list
    this.tail = {}; // Dummy tail of the doubly linked list
    this.head.next = this.tail; // Initialize the list as empty
    this.tail.prev = this.head;
  }

  // Helper function to remove a node from the linked list
  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // Helper function to add a node to the front (most recently used) of the list
  _addNode(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.cache.has(key)) return -1; // Key not found

    // Move the accessed node to the front of the list
    const node = this.cache.get(key);
    this._removeNode(node);
    this._addNode(node);

    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Update the value and move the node to the front
      const node = this.cache.get(key);
      node.value = value;
      this._removeNode(node);
      this._addNode(node);
    } else {
      if (this.cache.size >= this.capacity) {
        // Evict the least recently used node (at the tail)
        const lru = this.tail.prev;
        this._removeNode(lru);
        this.cache.delete(lru.key);
      }

      // Add the new node to the front of the list
      const newNode = { key, value };
      this._addNode(newNode);
      this.cache.set(key, newNode);
    }
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // Maximum size of the cache
    this.cache = new Map(); // Map to store key-value pairs
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1; // Key not found
    }

    // If key exists, remove it and reinsert it to mark it as recently used
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Remove the existing key to update its order
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict the least recently used key (first key in the map)
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }

    // Insert the key-value pair into the cache
    this.cache.set(key, value);
  }
}
