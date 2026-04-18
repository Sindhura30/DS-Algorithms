/**
 * Queue class implements a First-In-First-Out (FIFO) data structure using an array
 * Elements are added to the end and removed from the front
 */
class Queue {
    /**
     * Constructor to initialize an empty Queue
     */
    constructor() {
        this.queue = [];
        this.length = 0;
    }

    /**
     * Returns the value of the front element without removing it
     * @returns {*} - The value of the front element, or undefined if queue is empty
     */
    peek() {
        return this.queue[0];
    }

    /**
     * Adds a new element to the end of the queue
     * @param {*} val - The value to enqueue
     * @returns {Queue} - Returns the Queue instance for method chaining
     */
    enqueue(val) {
        this.queue.push(val);
        this.length++;
        return this;
    }

    /**
     * Removes and returns the front element from the queue
     * @returns {Queue} - Returns the Queue instance for method chaining
     */
    dequeue() {
        if (this.length > 0) {
            this.queue.shift();
            this.length--;
        }
        return this;
    }
}
