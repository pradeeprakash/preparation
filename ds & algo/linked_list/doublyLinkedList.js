class Node {
  constructor(value) {
    this.val = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addNodeToHead(newNode) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  addNodeToTail(newNode) {
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.tail;
      this.tail.prev = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  getSize() {
    console.log("this.size", this.size);
    return this.size;
  }
}

const d = DoublyLinkedList();

d.addNodeToHead(new Node(1));
d.getSize();
