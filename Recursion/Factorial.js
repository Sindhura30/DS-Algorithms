/**
 * Calculates factorial using an iterative approach.
 * Factorial is defined for non-negative integers only:
 * 0! = 1, 1! = 1, n! = n * (n - 1)! for n > 1.
 *
 * @param {number} num - The non-negative integer to compute factorial for
 * @returns {number|null} - The factorial of num, or null for invalid input
 */
function factorialIterative(num) {
    if (!Number.isInteger(num) || num < 0) {
        return null; // Factorial is not defined for negative numbers or non-integers
    }

    let factorial = 1;
    while (num > 1) {
        factorial *= num;
        num -= 1;
    }
    return factorial;
}

/**
 * Calculates factorial using recursion.
 * The recursion stops at the base case num === 0 or num === 1.
 *
 * @param {number} num - The non-negative integer to compute factorial for
 * @returns {number|null} - The factorial of num, or null for invalid input
 */
function factorialRecursive(num) {
    if (!Number.isInteger(num) || num < 0) {
        return null; // Guard against invalid input
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    return num * factorialRecursive(num - 1);
}

/**
 * Comparison of the two approaches:
 *
 * Iterative approach:
 * - Uses a simple loop and a single accumulator variable
 * - Avoids call stack overhead
 * - Better for large inputs because it does not risk stack overflow
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 *
 * Recursive approach:
 * - Uses the call stack to compute factorial by reducing the problem size
 * - Cleaner and more expressive for mathematical definitions
 * - Can hit call stack limits for large inputs
 * - Time complexity: O(n)
 * - Space complexity: O(n) due to recursion stack
 */
function factorialComparison() {
    return {
        iterative: {
            time: 'O(n)',
            space: 'O(1)',
            notes: 'Best for large inputs and production use.',
        },
        recursive: {
            time: 'O(n)',
            space: 'O(n)',
            notes: 'More natural for recursion but can overflow on large inputs.',
        },
    };
}