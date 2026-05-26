/**
 * Merge Sort Algorithm
 * 
 * Divides the array into halves recursively until each subarray has one element,
 * then merges the subarrays back together in sorted order.
 * 
 * Time Complexity: O(n log n) in all cases
 * Space Complexity: O(n)
 * 
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array
 */
function MergeSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the midpoint to divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    
    // Recursively sort the left half
    const left = MergeSort(arr.slice(0, mid));
    
    // Recursively sort the right half
    const right = MergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

/**
 * Merges two sorted arrays into a single sorted array
 * 
 * @param {number[]} left - Left sorted subarray
 * @param {number[]} right - Right sorted subarray
 * @returns {number[]} - Merged sorted array
 */
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and add the smaller one to result
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from left or right (one will be empty)
    return [...result, ...left.slice(i), ...right.slice(j)];
}       