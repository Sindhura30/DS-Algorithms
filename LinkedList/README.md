# Linked List Data Structures

This folder contains implementations of two fundamental linked list data structures: singly linked lists and doubly linked lists.

## Overview

Linked lists are dynamic data structures where elements are stored in nodes that contain both data and references (pointers) to other nodes. Unlike arrays, linked lists don't require contiguous memory allocation and can grow or shrink dynamically.

## Files

- `LinkedList.js` - Implementation of a singly linked list
- `../DoublyLinkedList.js` - Implementation of a doubly linked list

## Singly Linked List (`LinkedList.js`)

A singly linked list is a linear data structure where each node contains:
- **Data**: The value stored in the node
- **Next Pointer**: Reference to the next node in the sequence

### Key Characteristics:
- **Unidirectional**: Can only traverse in one direction (forward)
- **Memory Efficient**: Each node only stores one pointer
- **Head**: Points to the first node
- **Tail**: Points to the last node

### Operations:
- **append(val)**: Add a new node at the end of the list
- **prepend(val)**: Add a new node at the beginning of the list
- **insert(index, val)**: Insert a new node at a specific position
- **remove(index)**: Remove a node at a specific position

### Time Complexity:
- **Access**: O(n) - Must traverse from head to find element
- **Search**: O(n) - Linear search through nodes
- **Insert/Delete at beginning**: O(1) - Direct head manipulation
- **Insert/Delete at end**: O(1) - Direct tail manipulation
- **Insert/Delete in middle**: O(n) - Find position first, then manipulate

## Doubly Linked List (`DoublyLinkedList.js`)

A doubly linked list is an extension of the singly linked list where each node contains:
- **Data**: The value stored in the node
- **Next Pointer**: Reference to the next node in the sequence
- **Previous Pointer**: Reference to the previous node in the sequence

### Key Characteristics:
- **Bidirectional**: Can traverse in both directions (forward and backward)
- **More Memory**: Each node stores two pointers
- **Head**: Points to the first node (prev = null)
- **Tail**: Points to the last node (next = null)

### Operations:
- **append(val)**: Add a new node at the end of the list
- **prepend(val)**: Add a new node at the beginning of the list
- **insert(index, val)**: Insert a new node at a specific position
- **remove(index)**: Remove a node at a specific position

### Time Complexity:
- **Access**: O(n) - Must traverse from head or tail to find element
- **Search**: O(n) - Linear search through nodes
- **Insert/Delete at beginning**: O(1) - Direct head manipulation
- **Insert/Delete at end**: O(1) - Direct tail manipulation
- **Insert/Delete in middle**: O(n) - Find position first, then manipulate

## Node Structure

### Singly Linked List Node:
```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
```

### Doubly Linked List Node:
```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
```

## Usage Examples

### Creating and Using a Singly Linked List:
```javascript
const list = new LinkedList(10); // Create list with initial value
list.append(20);     // Add to end: [10] -> [20]
list.prepend(5);     // Add to beginning: [5] -> [10] -> [20]
list.insert(1, 15);  // Insert at index 1: [5] -> [15] -> [10] -> [20]
list.remove(2);      // Remove at index 2: [5] -> [15] -> [20]
```

### Creating and Using a Doubly Linked List:
```javascript
const list = new DoublyLinkedList(10); // Create list with initial value
list.append(20);     // Add to end: [10] <-> [20]
list.prepend(5);     // Add to beginning: [5] <-> [10] <-> [20]
list.insert(1, 15);  // Insert at index 1: [5] <-> [15] <-> [10] <-> [20]
list.remove(2);      // Remove at index 2: [5] <-> [15] <-> [20]
```

## Advantages and Disadvantages

### Singly Linked List:
**Advantages:**
- Simple implementation
- Memory efficient (one pointer per node)
- Easy to implement stack-like behavior

**Disadvantages:**
- Cannot traverse backwards
- More complex to reverse the list
- Cannot efficiently delete a node with only its reference

### Doubly Linked List:
**Advantages:**
- Bidirectional traversal
- Can efficiently delete a node with only its reference
- Easier to implement operations like reversal

**Disadvantages:**
- More memory usage (two pointers per node)
- Slightly more complex implementation
- Extra overhead when inserting/deleting nodes

## Common Use Cases

- **Singly Linked Lists**: Implementing stacks, queues, hash tables (separate chaining)
- **Doubly Linked Lists**: Browser history, undo/redo functionality, LRU caches, music playlist navigation

## Edge Cases Handled

Both implementations handle:
- Empty list operations
- Single node operations
- Boundary index operations (0, length-1)
- Invalid index operations (negative, out of bounds)
- Proper pointer maintenance during insertions and deletions