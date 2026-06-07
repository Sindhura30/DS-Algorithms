/**
 * Linear Search
 *
 * Scans the array from left to right and returns the index of the first
 * occurrence of `num`. If the value is not found, returns `null`.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {any[]} arr - The array to search (works with any element types)
 * @param {any} num - The value to search for
 * @returns {number|null} - Index of first match or null if not found
 *
 * Edge cases / notes:
 * - Empty array: returns null.
 * - Multiple occurrences: returns the first (lowest) index where the element appears.
 * - Uses strict equality (`===`) for comparison. That means `NaN` will never
 *   be considered equal to `NaN` and objects/arrays are compared by reference.
 * - If you need custom comparison (e.g., deep equality), pass a comparator
 *   or modify the function accordingly.
 */
function LinearSearch(arr, num) {
    const len = arr.length;

    // Fast path: empty array
    if (len === 0) return null;

    // Iterate through the array and return the first matching index
    for (let i = 0; i < len; i++) {
        if (arr[i] === num) {
            return i; // found
        }
    }

    // Not found
    return null;
}
