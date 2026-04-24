# Binary Search Tree

This folder contains a Binary Search Tree (BST) implementation in `BinarySearchTree.js`.

## Overview

A Binary Search Tree is a tree-based data structure where each node has at most two children. The left subtree of a node contains values less than the node's value, and the right subtree contains values greater than or equal to the node's value.

## File

- `BinarySearchTree.js` - Implementation of a Binary Search Tree with insert and lookup operations.

## Node Structure

Each tree node contains:
- `val`: the stored value
- `left`: reference to the left child node
- `right`: reference to the right child node

Example node structure:
```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
```

## Operations

### insert(val)
Inserts a new value into the BST.
- If the tree is empty, the new node becomes the root.
- Otherwise, traverse from the root:
  - go left when `val < current.val`
  - go right when `val >= current.val`
- Insert the new node when an empty child position is found.

### lookup(val)
Searches for a node with the specified value.
- Starts at the root and traverses down the tree.
- Compares the target value with the current node.
- Moves left or right based on the comparison.
- Returns the matching node or `null` if not found.

## Example Usage

```javascript
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);

const result = tree.lookup(6);
console.log(result ? result.val : 'Not found');
```

## Time Complexity

- `insert`: O(h)
- `lookup`: O(h)

Where `h` is the height of the tree. In a balanced BST, this is O(log n), and in the worst case it can degrade to O(n).

## Notes

- The current implementation handles insertion and lookup.
- A complete BST implementation may also support node removal, traversal methods, and tree balancing.
