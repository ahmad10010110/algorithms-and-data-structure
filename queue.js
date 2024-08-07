class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  dequeue() {
    // Check if the queue is empty
    if (!this.first) return null; // Return null if empty

    const removedNode = this.first;
    // Update the first pointer to the next element
    this.first = this.first.next;

    // Handle the case of removing the last element
    if (!this.first) {
      this.last = null; // Set both first and last to null if the queue becomes empty
    }

    this.size--;
    return removedNode.value; // Return the value of the removed element
  }
}
