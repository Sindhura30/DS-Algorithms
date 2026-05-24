/**
 * Insertion Sort Algorithm
 * 
 * Sorts an array by iteratively building a sorted portion by inserting elements
 * from the unsorted portion one at a time into their correct position.
 * 
 * Time Complexity: O(n²) worst/average case, O(n) best case
 * Space Complexity: O(1) - sorts in place
 * 
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array
 */
function insertionSort(arr) {
    const len = arr.length;

    // Start from the second element (index 1) since a single element is already sorted
    for (let i = 1; i < len; i++) {
        // Current element to be inserted into the sorted portion
        let curr = arr[i];
        
        // Index of the last element in the sorted portion
        let j = i - 1;

        // Shift all elements greater than curr one position to the right
        // This creates space to insert the curr in its correct position
        while (j >= 0 && arr[j] > curr) {
            // Shift element to the right
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element at its correct position in the sorted portion
        arr[j + 1] = curr;
    }
    
    return arr;
}