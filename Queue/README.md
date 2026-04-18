# Queue Data Structures

This folder contains two implementations of the Queue data structure: one using linked lists and one using arrays.

## Overview

A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Elements are added at the rear (enqueue) and removed from the front (dequeue). Think of it like a line at a store - the first person to arrive is the first to be served.

## Files

- `Queue.js` - Linked list-based queue implementation
- `Queue_Stack.js` - Array-based queue implementation

## Linked List-Based Queue (`Queue.js`)

This implementation uses a singly linked list where the head represents the front of the queue and the tail represents the rear.

### Key Characteristics:
- **Dynamic Memory**: Each element uses exactly the memory it needs
- **No Resizing**: No array resizing overhead or wasted space
- **Pointer-Based**: Uses node references for linking elements
- **Memory Efficient**: No overallocation like arrays

### Operations:
- **enqueue(val)**: Add new node at tail (rear of queue)
- **dequeue()**: Remove node from head (front of queue)
- **peek()**: Return node at head without removing it

### Time Complexity:
- **Enqueue**: O(1)
- **Dequeue**: O(1)
- **Peek**: O(1)

### Space Complexity:
- **O(n)** where n is the number of elements

## Array-Based Queue (`Queue_Stack.js`)

This implementation uses a JavaScript array to store queue elements. Elements are added to the end and removed from the beginning.

### Key Characteristics:
- **Contiguous Memory**: Elements stored in continuous memory locations
- **Dynamic Array**: JavaScript arrays resize automatically
- **Simple Implementation**: Leverages native array methods
- **Cache Friendly**: Better cache locality than linked lists

### Operations:
- **enqueue(val)**: Add element to end of array using `push()`
- **dequeue()**: Remove element from beginning of array using `shift()`
- **peek()**: Return first element without removing it

### Time Complexity:
- **Enqueue**: O(1) amortized
- **Dequeue**: O(n) - `shift()` requires moving all elements
- **Peek**: O(1)

### Space Complexity:
- **O(n)** where n is the number of elements

## Node Structure (Linked List Implementation)

```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
```

## Usage Examples

### Linked List-Based Queue:
```javascript
const queue = new Queue();
queue.enqueue(10);    // Queue: 10 -> null
queue.enqueue(20);    // Queue: 10 -> 20 -> null
queue.enqueue(30);    // Queue: 10 -> 20 -> 30 -> null
console.log(queue.peek().val);  // 10
queue.dequeue();      // Queue: 20 -> 30 -> null
console.log(queue.peek().val);  // 20
```

### Array-Based Queue:
```javascript
const queue = new Queue();
queue.enqueue(10);    // Queue: [10]
queue.enqueue(20);    // Queue: [10, 20]
queue.enqueue(30);    // Queue: [10, 20, 30]
console.log(queue.peek());  // 10
queue.dequeue();      // Queue: [20, 30]
console.log(queue.peek());  // 20
```

## Advantages and Disadvantages

### Linked List-Based Queue:
**Advantages:**
- Memory efficient (no overallocation)
- Consistent O(1) operations
- Dynamic size with no predefined limits
- Good for memory-constrained environments

**Disadvantages:**
- Extra memory per element (next pointer)
- No random access to elements
- Slightly more complex implementation
- Potential for memory fragmentation

### Array-Based Queue:
**Advantages:**
- Simple and intuitive implementation
- Fast enqueue operations
- Good cache locality
- Built-in array methods available

**Disadvantages:**
- Dequeue is O(n) due to element shifting
- Potential memory waste from overallocation
- Less efficient for frequent dequeue operations
- Fixed-size limitations in some languages

## Common Use Cases

- **Task Scheduling**: Operating systems use queues for process scheduling
- **Print Queues**: Printers process jobs in FIFO order
- **Breadth-First Search**: Algorithm implementation in graphs/trees
- **Message Queues**: Asynchronous communication between systems
- **Event Handling**: GUI events processed in order received
- **CPU Scheduling**: Round-robin scheduling algorithms
- **Network Buffers**: Packet queuing in network routers

## Implementation Notes

### Linked List-Based:
- **Pointers**: `first` points to front, `last` points to rear
- **Enqueue**: Create new node, link to current `last`, update `last`
- **Dequeue**: Move `first` to next node, handle empty queue case
- **Peek**: Return `first` node (contains the value)

### Array-Based:
- **Array Methods**: Uses `push()` for enqueue, `shift()` for dequeue
- **Performance Issue**: `shift()` is O(n) because it moves all elements
- **Alternative**: Could use a circular buffer for O(1) dequeue
- **Peek**: Returns `queue[0]` (first element)

## Edge Cases Handled

Both implementations handle:
- Empty queue operations (dequeue/peek on empty queue)
- Single element operations
- Large number of elements
- Method chaining support

## Performance Comparison

| Operation | Linked List | Array-Based |
|-----------|-------------|-------------|
| Enqueue   | O(1)        | O(1) avg    |
| Dequeue   | O(1)        | O(n)        |
| Peek      | O(1)        | O(1)        |
| Memory    | Lower overhead | Higher overhead |
| Access    | Sequential   | Random access |

## Optimization Note

The array-based implementation has O(n) dequeue performance due to JavaScript's `shift()` operation. For better performance, consider implementing a circular queue or using a data structure that supports efficient front removal.

Choose linked list-based for frequent dequeue operations and array-based for simplicity or when enqueue operations dominate. For production use with many dequeue operations, consider a more sophisticated implementation like a circular buffer.