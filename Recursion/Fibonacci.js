/**
 * Calculates the Fibonacci number at the given index using an iterative approach.
 * The Fibonacci sequence starts with 0 and 1, and each next number is the sum of the previous two.
 *
 * @param {number} num - The index of the Fibonacci number (non-negative integer)
 * @returns {number|null} - The Fibonacci number, or null for invalid input
 */
function fibIterative(num) {
    if (!Number.isInteger(num) || num < 0) {
        return null; // Factorial is not defined for negative numbers or non-integers
    }

    if (num === 0) return 0;
    if (num === 1) return 1;

    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= num; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

/**
 * Calculates the Fibonacci number at the given index using recursion.
 * This implementation follows the mathematical definition of Fibonacci directly.
 *
 * @param {number} num - The index of the Fibonacci number (non-negative integer)
 * @returns {number|null} - The Fibonacci number, or null for invalid input
 */
function fibRecursive(num) {
    if (!Number.isInteger(num) || num < 0) {
        return null; // Invalid input: Fibonacci is defined for non-negative integers only.
    }

    if (num === 0) return 0;
    if (num === 1) return 1;

    return fibRecursive(num - 1) + fibRecursive(num - 2);
}

/**
 * Comparison of iterative vs recursive Fibonacci implementations.
 *
 * Iterative approach:
 * - Uses a simple loop and two accumulator variables (`prev` and `curr`).
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 * - Best for production use and large `n` because it avoids recursion overhead and stack limits.
 *
 * Recursive approach (naive):
 * - Follows the mathematical definition: F(n) = F(n-1) + F(n-2).
 * - Time complexity: O(2^n) for the naive recursive implementation (exponential).
 * - Space complexity: O(n) due to recursion call stack.
 * - Very inefficient for moderate/large `n` without memoization.
 */
function fibComparison() {
    return {
        iterative: {
            time: 'O(n)',
            space: 'O(1)',
            notes: 'Iterative is efficient and safe for large n.',
        },
        recursive_naive: {
            time: 'O(2^n)',
            space: 'O(n)',
            notes: 'Naive recursion has exponential time; use memoization to optimize.',
        }
    };
}


