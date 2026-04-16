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
 * LinkedList class manages a singly linked list data structure
 * Provides methods for adding, removing, and manipulating nodes
 */
class LinkedList {
    /**
     * Constructor to initialize a new LinkedList with an initial value
     * @param {*} val - The value for the first node (head) in the list
     */
    constructor(val) {
        this.head = new Node(val);
        this.tail = this.head;
        this.length = 1;
    }
    /**
     * Appends a new node with the given value to the end of the list
     * @param {*} val - The value to append to the list
     * @returns {LinkedList} - Returns the LinkedList instance for method chaining
     */
    append(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    /**
     * Prepends a new node with the given value to the beginning of the list
     * @param {*} val - The value to prepend to the list
     * @returns {LinkedList} - Returns the LinkedList instance for method chaining
     */
    prepend(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    /**
     * Inserts a new node with the given value at the specified index
     * @param {number} index - The position at which to insert the value (0-based indexing)
     * @param {*} val - The value to insert at the specified index
     * @returns {LinkedList} - Returns the LinkedList instance for method chaining
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
        while(currentNode){
            if (i === index - 1) {
                let temp = currentNode.next;
                currentNode.next = newNode;
                newNode.next = temp;
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
     * @returns {LinkedList} - Returns the LinkedList instance for method chaining
     */
    remove(index) {
        if (index < 0 || index >= this.length) {
            return this;
        }
        
        let currentNode = this.head;
        
        if (index === 0) {
            this.head = currentNode.next;
            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;
            return this;
        }
        
        let i = 0;
        while(currentNode){
            if (i === index - 1) {
                if (currentNode.next === this.tail) {
                    this.tail = currentNode;
                }
                currentNode.next = currentNode.next.next;
                this.length--;
                break;
            }
            i++;
            currentNode = currentNode.next;
        }
       return this;
    }

    reverse() {
        if (!this.head || !this.head.next) {
            return this;
        }

        let prev = null;
        let current = this.head;
        this.tail = current; // After reversal, the original head will become the tail

        while (current) {
            let nextNode = current.next; // Store the next node
            current.next = prev; // Reverse the link
            prev = current; // Move prev to current
            current = nextNode; // Move to the next node
        }

        this.head = prev; // After the loop, prev will be the new head
        return this;
    }       
}