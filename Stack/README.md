# Stack Data Structures

This folder contains two implementations of the Stack data structure: one using arrays and one using linked lists.

## Overview

A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Elements are added and removed from the same end, called the "top" of the stack. Think of it like a stack of plates - you add plates to the top and remove plates from the top.

## Files

- `Stack.js` - Array-based stack implementation
- `Stack_LL.js` - Linked list-based stack implementation

## Array-Based Stack (`Stack.js`)

This implementation uses a JavaScript array to store stack elements. Arrays provide efficient random access and built-in methods for stack operations.

### Key Characteristics:
- **Dynamic Array**: Uses JavaScript's built-in array with dynamic resizing
- **Fast Operations**: Push and pop are O(1) on average
- **Memory Overhead**: Arrays may overallocate memory for future growth
- **Simple Implementation**: Leverages native array methods

### Operations:
- **push(val)**: Add element to top of stack
- **pop()**: Remove and return top element
- **peek()**: Return top element without removing it

### Time Complexity:
- **Push**: O(1) amortized
- **Pop**: O(1)
- **Peek**: O(1)

### Space Complexity:
- **O(n)** where n is the number of elements

## Linked List-Based Stack (`Stack_LL.js`)

This implementation uses a singly linked list where the head of the list serves as the top of the stack.

### Key Characteristics:
- **Dynamic Memory**: Each element uses exactly the memory it needs
- **No Resizing**: No array resizing overhead
- **Pointer-Based**: Uses node references for linking elements
- **Memory Efficient**: No wasted space from array overallocation

### Operations:
- **push(val)**: Add new node at head (top of stack)
- **pop()**: Remove head node
- **peek()**: Return value of head node

### Time Complexity:
- **Push**: O(1)
- **Pop**: O(1)
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

### Array-Based Stack:
```javascript
const stack = new Stack();
stack.push(10);    // Stack: [10]
stack.push(20);    // Stack: [10, 20]
stack.push(30);    // Stack: [10, 20, 30]
console.log(stack.peek());  // 30
stack.pop();       // Stack: [10, 20], returns stack
console.log(stack.peek());  // 20
```

### Linked List-Based Stack:
```javascript
const stack = new Stack();
stack.push(10);    // Stack: 10 -> null
stack.push(20);    // Stack: 20 -> 10 -> null
stack.push(30);    // Stack: 30 -> 20 -> 10 -> null
console.log(stack.peek());  // 30
stack.pop();       // Stack: 20 -> 10 -> null, returns stack
console.log(stack.peek());  // 20
```

## Advantages and Disadvantages

### Array-Based Stack:
**Advantages:**
- Simple and intuitive implementation
- Fast access to any element (though not needed for stack)
- Good cache locality
- Built-in array methods

**Disadvantages:**
- Potential memory waste from overallocation
- Fixed-size arrays in some languages (not JavaScript)
- Less memory efficient for sparse data

### Linked List-Based Stack:
**Advantages:**
- Memory efficient (no overallocation)
- Dynamic size with no predefined limits
- No resizing operations needed
- Good for systems with limited memory

**Disadvantages:**
- Extra memory per element (next pointer)
- No random access to elements
- Slightly more complex implementation
- Potential for memory fragmentation

## Common Use Cases

- **Function Call Stack**: Programming language runtime uses stacks for function calls
- **Expression Evaluation**: Converting infix to postfix notation
- **Undo/Redo Operations**: Text editors and applications
- **Browser History**: Back/forward navigation
- **Syntax Parsing**: Compilers use stacks for parsing expressions
- **Depth-First Search**: Algorithm implementation in graphs/trees

## Implementation Notes

### Array-Based:
- Uses `Array.push()` and `Array.pop()` for O(1) operations
- Maintains separate `length` property for consistency
- `peek()` accesses the last element: `this.stack[this.length - 1]`

### Linked List-Based:
- Head of list is always the top of stack
- Push: Create new node, point to current head, update head
- Pop: Move head to next node
- Peek: Return head node's value

## Edge Cases Handled

Both implementations handle:
- Empty stack operations (pop/peek on empty stack)
- Single element operations
- Large number of elements
- Method chaining support

## Performance Comparison

| Operation | Array-Based | Linked List-Based |
|-----------|-------------|-------------------|
| Push      | O(1) avg    | O(1)             |
| Pop       | O(1)        | O(1)             |
| Peek      | O(1)        | O(1)             |
| Memory    | Higher overhead | Lower overhead   |
| Access    | Random access | Sequential only  |

Choose array-based for simplicity and linked list-based for memory efficiency or when working with constrained environments.