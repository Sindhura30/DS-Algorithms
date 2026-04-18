/**
 * Node class represents a single node in the linked list
 * Each node contains a value and a pointer to the next node
 */
class Node {
    /**
     * Constructor to initialize a new Node
     * @param {*} val - The value to be stored in the node
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * Stack class implements a Last-In-First-Out (LIFO) data structure using a linked list
 * Provides methods for pushing, popping, and peeking at elements
 */
class Stack {
    /**
     * Constructor to initialize an empty Stack
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Returns the value of the top element without removing it
     * @returns {*} - The value of the top element, or undefined if stack is empty
     */
    peek() {
        return this.head?.val;
    }

    /**
     * Adds a new element to the top of the stack
     * @param {*} val - The value to push onto the stack
     * @returns {Stack} - Returns the Stack instance for method chaining
     */
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {    
            let headNode = this.head;
            node.next = headNode;
            this.head = node;
        }
        this.length++;
        return this;
    }

    /**
     * Removes and returns the top element from the stack
     * @returns {Stack} - Returns the Stack instance for method chaining
     */
    pop() {
        if (this.head) {
            this.head = this.head.next;
            this.length--;
        }
        return this;
    }
}