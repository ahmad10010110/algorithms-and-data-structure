class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // Create a new node
    const newNode = new Node(val);

    // If the list is empty, set both head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, update the tail's next pointer and set the new node's prev
      this.tail.next = newNode;
      newNode.prev = this.tail;
      // Update the tail to the new node
      this.tail = newNode;
    }

    this.length++;
    return this; // Allow for method chaining
  }

  pop() {
    // Check if the list is empty
    if (!this.head) return undefined;

    // Remove the tail node
    const removedNode = this.tail;

    // If there's only one node, set both head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update the new tail's prev pointer to null
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    return removedNode.val;
  }

  shift() {
    // Check if the list is empty
    if (!this.head) return undefined;

    // Remove the head node
    const removedNode = this.head;

    // If there's only one node, set both head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update the new head's prev pointer to null
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
    return removedNode.val;
  }

  unshift(val) {
    // Create a new node
    const newNode = new Node(val);

    // If the list is empty, set both head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, update the head's prev pointer and set the new node's next
      this.head.prev = newNode;
      newNode.next = this.head;
      // Update the head to the new node
      this.head = newNode;
    }

    this.length++;
    return this; // Allow for method chaining
  }

  get(index) {
    // Check if the index is out of bounds
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let count = 0;

    // Traverse the list until reaching the target index
    while (count < index && current) {
      current = current.next;
      count++;
    }

    // Check if the index was valid (reached the end without exceeding length)
    return current ? current.val : null;
  }

  set(index, val) {
    // Check if the index is out of bounds
    if (index < 0 || index >= this.length) return false;

    const foundNode = this.get(index);
    if (!foundNode) return false;

    foundNode.val = val;
    return true;
  }

  insert(index, val) {
    // Handle out-of-bounds cases
    if (index < 0) index = 0;
    if (index > this.length) index = this.length;

    // Create a new node
    const newNode = new Node(val);

    // If the list is empty, set both head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (index === 0) {
      // Insert at the beginning
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (index === this.length) {
      // Insert at the end (same as push)
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      // Insert in the middle
      const previousNode = this.get(index - 1);
      const nextNode = previousNode.next;
      newNode.prev = previousNode;
      newNode.next = nextNode;
      previousNode.next = newNode;
      nextNode.prev = newNode;
    }
}

  this.length++;
  return this; // Allow for method chaining
}
