/**
 * Node class represents a single node in a doubly linked list
 * Each node contains a value and pointers to both the next and previous nodes
 */
class Node {
    /**
     * Constructor to initialize a new Node
     * @param {*} val - The value to be stored in the node
     */
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
/**
 * DoublyLinkedList class manages a doubly linked list data structure
 * Provides methods for adding, removing, and manipulating nodes with bidirectional traversal
 */
class DoublyLinkedList {
    /**
     * Constructor to initialize a new DoublyLinkedList with an initial value
     * @param {*} val - The value for the first node (head) in the list
     */
    constructor(val) {
        this.head = new Node(val);
        this.head.prev = null; // Head node has no previous node
        this.tail = this.head;
        this.length = 1;
    }
    /**
     * Appends a new node with the given value to the end of the list
     * @param {*} val - The value to append to the list
     * @returns {DoublyLinkedList} - Returns the DoublyLinkedList instance for method chaining
     */
    append(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.head.prev = null; // Head node has no previous node
            this.tail = newNode;
            this.length++;
            return this;
        }
        let temp = this.tail;
        this.tail.next = newNode;
        newNode.prev = temp;
        this.tail = newNode;
        this.length++;
        return this;
    }
    /**
     * Prepends a new node with the given value to the beginning of the list
     * @param {*} val - The value to prepend to the list
     * @returns {DoublyLinkedList} - Returns the DoublyLinkedList instance for method chaining
     */
    prepend(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.head.prev = null; // Head node has no previous node
            this.tail = newNode;
            this.length++;
            return this;
        }
        let temp = this.head;
        newNode.next = this.head;
        temp.prev = newNode;
        this.head = newNode;
        this.head.prev = null; // New head has no previous node
        this.length++;
        return this;
    }
    /**
     * Inserts a new node with the given value at the specified index
     * @param {number} index - The position at which to insert the value (0-based indexing)
     * @param {*} val - The value to insert at the specified index
     * @returns {DoublyLinkedList} - Returns the DoublyLinkedList instance for method chaining
     */
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return this;
        }

        if (index === 0) {
            this.prepend(val);
            return this;
        }

        if (index === this.length) {
            this.append(val);
            return this;
        }

        let newNode = new Node(val);
        let currentNode = this.head;
        let i = 0;
        while (currentNode) {
            if (i === index - 1) {
                let temp = currentNode.next;
                currentNode.next = newNode;
                newNode.next = temp;
                newNode.prev = currentNode;
                if (temp) {
                    temp.prev = newNode; // Update the prev pointer of the node that comes after
                }
                this.length++;
                break;
            }
            i++;
            currentNode = currentNode.next;
        }
        return this;
    }
    /**
     * Removes the node at the specified index from the list
     * @param {number} index - The position of the node to remove (0-based indexing)
     * @returns {DoublyLinkedList} - Returns the DoublyLinkedList instance for method chaining
     */
    remove(index) {
        if (index < 0 || index >= this.length) {
            return this;
        }

        let currentNode = this.head;

        if (index === 0) {
            this.head = currentNode.next;
            if (this.head) {
                this.head.prev = null; // New head has no previous node
            }
            if (this.length === 1) {
                this.tail = null; // List is now empty
            }
            this.length--;
            return this;
        }

        let i = 0;
        while (currentNode) {
            if (i === index - 1) {
                let nodeToRemove = currentNode.next;
                if (nodeToRemove) {
                    currentNode.next = nodeToRemove.next;
                    if (nodeToRemove.next) {
                        nodeToRemove.next.prev = currentNode; // Update prev pointer of the next node
                    } else {
                        this.tail = currentNode; // Removed node was the tail
                    }
                }
                this.length--;
                break;
            }
            i++;
            currentNode = currentNode.next;
        }
        return this;
    }
}
