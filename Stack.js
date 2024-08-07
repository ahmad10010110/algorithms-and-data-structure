class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return this.size++;
  }

  pop() {
    // Check if the stack is empty
    if (!this.first) return null;

    // Remove the top element (first node)
    const removedNode = this.first;

    // Update the first pointer to the next node
    this.first = this.first.next;

    // Handle the case of removing the last element
    if (!this.first) {
      this.last = null; // Set both first and last to null if the stack becomes empty
    }

    this.size--;
    return removedNode.value;
  }
}
