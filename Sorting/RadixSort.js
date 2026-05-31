/**
 * Radix Sort Algorithm
 * 
 * A non-comparative sorting algorithm that sorts numbers by processing individual digits.
 * Works by sorting the array based on each digit position, starting from the least significant
 * digit (ones place) to the most significant digit (highest place value).
 * Uses counting sort as a stable subroutine for sorting by each digit.
 * 
 * Time Complexity: O(d * (n + k)) where d = number of digits, n = number of elements, k = range of digits (0-9)
 * Space Complexity: O(n + k)
 * 
 * @param {number[]} arr - The array of non-negative integers to be sorted
 * @returns {number[]} - The sorted array
 */
function RadixSort(arr) {
    /**
     * Helper function to find the maximum number in the array
     * Used to determine how many times we need to sort by digit position
     */
    const getMax = (arr) => {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    };

    /**
     * Counting Sort subroutine that sorts the array based on a specific digit position
     * This is a stable sort, which is crucial for Radix Sort to work correctly
     * 
     * @param {number[]} arr - Array to sort
     * @param {number} exp - The current digit position (1 for ones, 10 for tens, 100 for hundreds, etc.)
     */
    const countingSort = (arr, exp) => {
        // Create output array to store sorted elements
        const output = new Array(arr.length).fill(0);
        
        // Count array to store frequency of each digit (0-9)
        const count = new Array(10).fill(0);

        // Count occurrences of each digit at the current exp position
        for (let i = 0; i < arr.length; i++) {
            // Extract the digit at the current position
            const digit = Math.floor(arr[i] / exp) % 10;
            count[digit]++;
        }

        // Modify count[i] to contain the cumulative count
        // This tells us the ending position of each digit group in the output array
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        // Build the output array by placing elements in their correct sorted positions
        // Loop from right to left to maintain stability (preserve relative order of equal elements)
        for (let i = arr.length - 1; i >= 0; i--) {
            const digit = Math.floor(arr[i] / exp) % 10;
            // Place the element in its correct position
            output[count[digit] - 1] = arr[i];
            // Decrease the count for this digit
            count[digit]--;
        }

        // Copy the sorted output back to the original array
        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    };

    // Find the maximum number to determine number of digits
    const maxNum = getMax(arr);
    
    // Process each digit position (ones, tens, hundreds, etc.)
    // Continue while there are digits left to process
    for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
        // Sort array by the current digit position using counting sort
        countingSort(arr, exp);
    }

    return arr;
}       