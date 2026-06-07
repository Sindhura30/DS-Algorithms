/**
 * Binary Search
 *
 * Searches for `num` in a sorted array by repeatedly dividing the search range
 * in half. Returns the index of the target if found, otherwise returns null.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr - Sorted array to search
 * @param {number} num - Value to search for
 * @returns {number|null} - Index of target or null if not found
 *
 * Edge cases:
 * - Empty array returns null.
 * - The array must be sorted for binary search to work correctly.
 * - If the target appears multiple times, the first found index is returned.
 */
function BinarySearch(arr, num) {
    const len = arr.length;

    // Empty array edge case
    if (len === 0) {
        return null;
    }

    // Search window boundaries
    let left = 0;
    let right = len - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // If the middle element is the target, return its index
        if (arr[mid] === num) {
            return mid;
        }

        // If target is smaller, continue search in the left half
        if (arr[mid] > num) {
            right = mid - 1;
        } else {
            // If target is larger, continue search in the right half
            left = mid + 1;
        }
    }

    // Target was not found
    return null;
}

