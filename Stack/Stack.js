/**
 * Stack class implements a Last-In-First-Out (LIFO) data structure using an array
 * Provides methods for pushing, popping, and peeking at elements
 */
class Stack {
    /**
     * Constructor to initialize an empty Stack
     */
    constructor() {
        this.stack = [];
        this.length = 0;
    }

    /**
     * Returns the value of the top element without removing it
     * @returns {*} - The value of the top element, or undefined if stack is empty
     */
    peek() {
        return this.stack[this.length - 1];
    }

    /**
     * Adds a new element to the top of the stack
     * @param {*} val - The value to push onto the stack
     * @returns {Stack} - Returns the Stack instance for method chaining
     */
    push(val) {
        this.stack.push(val);
        this.length++;
        return this;
    }

    /**
     * Removes and returns the top element from the stack
     * @returns {Stack} - Returns the Stack instance for method chaining
     */
    pop() {
        if (this.length > 0) {
            this.stack.pop();
            this.length--;
        }
        return this;
    }
}
