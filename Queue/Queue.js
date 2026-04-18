/**
 * Node represents a single entry in the queue.
 * Each node stores a value and a reference to the next node.
 */
class Node {
    /**
     * @param {*} val - The value to store in the queue node
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Queue class implements a First-In-First-Out (FIFO) data structure using a linked list.
 * Elements are added at the tail and removed from the head.
 */
class Queue {
    constructor() {
        this.first = null; // Points to the front of the queue
        this.last = null;  // Points to the end of the queue
        this.length = 0;   // Number of elements in the queue
    }

    /**
     * Returns the node at the front of the queue without removing it.
     * @returns {Node|null} - The first node, or null if the queue is empty
     */
    peek() {
        return this.first;
    }

    /**
     * Adds a new value to the end of the queue.
     * @param {*} val - The value to enqueue
     * @returns {Queue} - Returns the Queue instance for chaining
     */
    enqueue(val) {
        const node = new Node(val);

        if (this.last) {
            this.last.next = node;
            this.last = node;
        } else {
            this.first = node;
            this.last = node;
        }

        this.length++;
        return this;
    }

    /**
     * Removes the node at the front of the queue.
     * @returns {Queue} - Returns the Queue instance for chaining
     */
    dequeue() {
        if (!this.first) {
            return this;
        }

        if (this.first === this.last) {
            this.last = null; // Queue becomes empty
        }

        this.first = this.first.next;
        this.length--;

        

        return this;
    }
}
