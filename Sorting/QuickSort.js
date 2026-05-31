/**
 * Quick Sort Algorithm
 * 
 * Uses a divide-and-conquer strategy by selecting a pivot element and partitioning
 * the array into elements less than and greater than the pivot, then recursively
 * sorting each partition.
 * 
 * Time Complexity: O(n log n) average, O(n²) worst case
 * Space Complexity: O(log n) due to recursive call stack
 * 
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} - The sorted array
 */
function QuickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Select the last element as the pivot
    const pivot = arr[arr.length - 1];
    
    // Arrays to hold elements smaller and larger than the pivot
    const left = [];   // Elements less than pivot
    const right = [];  // Elements greater than or equal to pivot

    // Partition: compare each element (except pivot) with pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            // Add to left partition
            left.push(arr[i]);
        } else {
            // Add to right partition
            right.push(arr[i]);
        }
    }

    // Recursively sort both partitions and combine: [sorted left] + [pivot] + [sorted right]
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}
