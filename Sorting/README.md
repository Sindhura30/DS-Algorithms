# Sorting Algorithms

This folder contains implementations of three simple comparison-based sorting algorithms in JavaScript.

## Overview

Sorting algorithms rearrange the elements of an array into a defined order, typically ascending or descending. The implementations here each sort in place and demonstrate how different algorithmic strategies compare in terms of performance.

## Files

- `BubbleSort.js` - Repeatedly compares and swaps adjacent elements until the array is sorted.
- `InsertionSort.js` - Builds a sorted region by inserting each next element into its correct position.
- `SelectionSort.js` - Selects the smallest element from the unsorted portion and swaps it into place.

## Algorithms

### Bubble Sort
- Works by repeatedly swapping adjacent elements when they are in the wrong order.
- Best for teaching and small arrays.
- Time Complexity: **O(n²)** worst/average/best
- Space Complexity: **O(1)**

#### Pseudocode
```text
for i from 0 to n-2
  for j from 0 to n-i-2
    if arr[j] > arr[j+1]
      swap arr[j] and arr[j+1]
```

### Insertion Sort
- Builds the sorted portion of the array one element at a time.
- Efficient for arrays that are already mostly sorted.
- Time Complexity: **O(n²)** worst/average, **O(n)** best
- Space Complexity: **O(1)**

#### Pseudocode
```text
for i from 1 to n-1
  key = arr[i]
  j = i - 1
  while j >= 0 and arr[j] > key
    arr[j+1] = arr[j]
    j = j - 1
  arr[j+1] = key
```

### Selection Sort
- Finds the minimum element from the unsorted portion and swaps it with the first unsorted element.
- Performs a fixed number of comparisons regardless of input order.
- Time Complexity: **O(n²)** worst/average/best
- Space Complexity: **O(1)**

#### Pseudocode
```text
for i from 0 to n-2
  minIndex = i
  for j from i+1 to n-1
    if arr[j] < arr[minIndex]
      minIndex = j
  swap arr[i] and arr[minIndex]
```

## Usage

Each algorithm file exports a sorting function that takes an array and returns the sorted array. Example usage:

```javascript
const arr = [5, 2, 9, 1, 5, 6];
const sorted = insertionSort(arr);
console.log(sorted); // [1, 2, 5, 5, 6, 9]
```

## Notes

- These sorting algorithms are not the most efficient for large datasets, but they are valuable for learning fundamental algorithmic concepts.
- All implementations sort the array in place, so the input array is modified.
