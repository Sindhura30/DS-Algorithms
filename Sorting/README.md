# Sorting Algorithms

This folder contains implementations of six sorting algorithms in JavaScript, including both comparison-based and non-comparison-based approaches.

## Overview

Sorting algorithms rearrange the elements of an array into a defined order, typically ascending or descending. The implementations here each sort in place and demonstrate how different algorithmic strategies compare in terms of performance.

## Files

- `BubbleSort.js` - Repeatedly compares and swaps adjacent elements until the array is sorted.
- `InsertionSort.js` - Builds a sorted region by inserting each next element into its correct position.
- `SelectionSort.js` - Selects the smallest element from the unsorted portion and swaps it into place.
- `MergeSort.js` - Divides the array into halves recursively, then merges them back in sorted order.
- `QuickSort.js` - Selects a pivot and partitions the array, then recursively sorts the partitions.
- `RadixSort.js` - Sorts numbers by processing individual digits from least to most significant.

## Algorithms

### Bubble Sort
- Works by repeatedly swapping adjacent elements when they are in the wrong order.
- Best for teaching and small arrays.
- Time Complexity: **O(n²)** worst/average/best
- Space Complexity: **O(1)**

#### Pseudocode
```text
for i from 0 to n-1
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
  curr = arr[i]
  j = i - 1
  while j >= 0 and arr[j] > curr
    arr[j+1] = arr[j]
    j = j - 1
  arr[j+1] = curr
```

### Selection Sort
- Finds the minimum element from the unsorted portion and swaps it with the first unsorted element.
- Performs a fixed number of comparisons regardless of input order.
- Time Complexity: **O(n²)** worst/average/best
- Space Complexity: **O(1)**

#### Pseudocode
```text
for i from 0 to n-1
  minIndex = i
  for j from i+1 to n-1
    if arr[j] < arr[minIndex]
      minIndex = j
  if minIndex != i
    swap arr[i] and arr[minIndex]
```

### Merge Sort
- Divides the array into halves recursively until each subarray has one element, then merges them back in sorted order.
- Uses a divide-and-conquer strategy with excellent performance on large datasets.
- Time Complexity: **O(n log n)** worst/average/best
- Space Complexity: **O(n)**

#### Pseudocode
```text
function mergeSort(arr)
  if arr.length <= 1
    return arr
  mid = floor(arr.length / 2)
  left = mergeSort(arr[0...mid])
  right = mergeSort(arr[mid...end])
  return merge(left, right)

function merge(left, right)
  result = []
  i = 0, j = 0
  while i < left.length and j < right.length
    if left[i] < right[j]
      result.push(left[i])
      i++
    else
      result.push(right[j])
      j++
  return result + remaining elements from left + remaining elements from right
```

### Quick Sort
- Selects a pivot element and partitions the array into elements smaller and larger than the pivot.
- Recursively sorts both partitions using a divide-and-conquer approach.
- Works well in practice and is often faster than Merge Sort due to better cache locality.
- Time Complexity: **O(n log n)** average, **O(n²)** worst case
- Space Complexity: **O(log n)** due to recursive call stack

#### Pseudocode
```text
function quickSort(arr)
  if arr.length <= 1
    return arr
  pivot = arr[last element]
  left = []
  right = []
  for each element in arr (except pivot)
    if element < pivot
      add element to left
    else
      add element to right
  return quickSort(left) + [pivot] + quickSort(right)
```

### Radix Sort
- A non-comparative sorting algorithm that sorts numbers by processing individual digits.
- Processes digits from least significant (ones place) to most significant, using counting sort as a subroutine.
- Efficient for sorting large numbers of integers with a limited range of values.
- Time Complexity: **O(d × (n + k))** where d = number of digits, n = number of elements, k = digit range (0-9)
- Space Complexity: **O(n + k)**

#### Pseudocode
```text
function radixSort(arr)
  maxNum = findMax(arr)
  for exp = 1; maxNum / exp > 0; exp *= 10
    countingSort(arr, exp)
  return arr

function countingSort(arr, exp)
  output = array of size n
  count = array of 10 zeros
  for each element in arr
    digit = (element / exp) % 10
    count[digit]++
  for i from 1 to 9
    count[i] += count[i-1]
  for each element from end to start
    digit = (element / exp) % 10
    output[count[digit] - 1] = element
    count[digit]--
  copy output back to arr
```

## Usage

Each algorithm file exports a sorting function that takes an array and returns the sorted array. Example usage:

```javascript
const arr = [5, 2, 9, 1, 5, 6];
const sorted = insertionSort(arr);
console.log(sorted); // [1, 2, 5, 5, 6, 9]
```

## Notes

- **Comparison-based sorts** (Bubble, Insertion, Selection, Merge, Quick) compare elements to determine their order. They have a theoretical lower bound of O(n log n).
- **Non-comparison sorts** (Radix) process the structure of the data directly. Radix Sort is linear in nature but works best with integers with a limited number of digits.
- **Bubble Sort, Insertion Sort, and Selection Sort** are valuable for learning fundamental algorithmic concepts but are inefficient for large datasets.
- **Merge Sort and Quick Sort** are efficient for larger datasets with O(n log n) performance. Quick Sort is generally preferred in practice due to better cache locality and lower space usage.
- **Radix Sort** is specialized for sorting integers and can be faster than comparison-based sorts when the number of digits is small relative to n log n.
- **In-place sorts** (Bubble, Insertion, Selection) use only O(1) extra space, while **out-of-place sorts** (Merge, Quick, Radix) require additional space for working arrays.
