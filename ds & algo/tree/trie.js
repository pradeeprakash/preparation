class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie
  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.isEndOfWord = true;
  }

  // Search if a word exists in the trie
  search(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return node.isEndOfWord;
  }

  // Check if any word in the trie starts with the given prefix
  startsWith(prefix) {
    let node = this.root;

    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return true;
  }
}

// Example usage:

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
console.log(trie.startsWith("app")); // Output: true

trie.insert("app");
console.log(trie.search("app")); // Output: true
