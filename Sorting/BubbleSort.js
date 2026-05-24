/**
 * Sorts an array of numbers in ascending order using bubble sort.
 * Bubble sort repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order.
 *
 * @param {number[]} arr - The array to sort
 * @returns {number[]} - The same array sorted in ascending order
 *
 * Example:
 * const sorted = bubbleSort([5, 3, 8, 1]);
 * console.log(sorted); // [1, 3, 5, 8]
 */
function bubbleSort(arr) {
    let len = arr.length;

    // Outer loop controls the number of passes over the array.
    for (let i = 0; i < len; i++) {
        // Inner loop compares adjacent elements and swaps them if necessary.
        // The upper bound is reduced by i because the last i elements are already sorted.
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

