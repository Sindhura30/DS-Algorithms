/**
 * Sorts an array of numbers in ascending order using selection sort.
 * Selection sort repeatedly selects the minimum element from the unsorted
 * portion and moves it to the end of the sorted portion.
 *
 * @param {number[]} arr - The array to sort (modified in place)
 * @returns {number[]} - The same array sorted in ascending order
 *
 * Example:
 * const sorted = selectionSort([64, 25, 12, 22, 11]);
 * console.log(sorted); // [11, 12, 22, 25, 64]
 */
function selectionSort(arr) {
    const len = arr.length;

    // Move the boundary of the unsorted subarray one by one
    for (let i = 0; i < len; i++) {
        // Assume the current position holds the minimum
        let minIndex = i;

        // Find the index of the minimum element in the rest of the array
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}
