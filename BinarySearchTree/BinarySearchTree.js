/**
 * Node represents a single entry in the binary search tree.
 * Each node stores a value and maintains references to its left and right children.
 */
class Node {
    /**
     * @param {*} val - The value to store in this node
     */
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * BinarySearchTree implements a binary search tree (BST).
 * Values in the left subtree are less than the parent node,
 * and values in the right subtree are greater than or equal to the parent node.
 */
class BinarySearchTree {
    constructor() {
        this.root = null; // The root node of the BST
    }

    /**
     * Inserts a new value into the tree.
     * @param {*} val - The value to insert
     * @returns {BinarySearchTree} - Returns the BST instance for chaining
     */
    insert(val) {
        const newNode = new Node(val);

        // If the tree is empty, set the new node as the root.
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        // Otherwise, traverse the tree to find the correct insertion point.
        let currentNode = this.root;
        while (true) {
            if (val < currentNode.val) {
                // Go left if the new value is smaller than current node.
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                // Go right if the new value is greater than or equal to current node.
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    /**
     * Finds a node by value in the tree.
     * @param {*} val - The value to lookup
     * @returns {Node|null} - The found node, or null if not found
     */
    lookup(val) {
        if (!this.root) {
            return null;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (val === currentNode.val) {
                return currentNode;
            }
            currentNode = val < currentNode.val ? currentNode.left : currentNode.right;
        }

        return null; // Value not found in the tree
    }

    /**
     * Attempts to remove a node by value from the tree.
     * @param {*} val - The value to remove
     * @returns {Node|null} - Placeholder return, currently returns null for missing values
     */
    remove(val) {
        // If the tree is empty, there is nothing to remove.
        if (!this.root) {
            return null;
        }

        // Start traversal from the root.
        let currentNode = this.root;

        while (currentNode) {
            // Compare the target value to the current node value.
            if (val === currentNode.val) {
                // When the node is found, choose one of its children to continue.
                // (This implementation currently does not perform the full removal process.)
                currentNode = currentNode.left ? currentNode.left : currentNode.right;
            } else {
                // Traverse left or right depending on how the value compares.
                currentNode = val < currentNode.val ? currentNode.left : currentNode.right;
            }
        }

        return null; // Value not found in the tree or removal logic incomplete
    }

}