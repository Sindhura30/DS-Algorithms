# Recursion

This folder contains implementations demonstrating the recursion pattern in JavaScript. Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller subproblems.

## Files

- `Factorial.js` - Recursive and iterative factorial calculations
- `Fibonacci.js` - Recursive and iterative Fibonacci sequence generation
- `ReverseString.js` - String reversal using recursion

## What is Recursion?

Recursion occurs when a function calls itself to solve a smaller version of the same problem. Every recursive solution requires:

1. **Base Case**: A condition that stops the recursion and returns a value
2. **Recursive Case**: The function calls itself with a simpler/smaller input

### Example:
```javascript
function countdown(n) {
    if (n === 0) {           // Base case
        console.log("Done");
        return;
    }
    console.log(n);
    countdown(n - 1);        // Recursive case
}
```

## When to Use Recursion

### Ideal Use Cases:
1. **Tree/Graph Traversal**: DFS, tree searches, DOM traversal
2. **Divide-and-Conquer Problems**: Merge sort, quicksort, binary search
3. **Backtracking**: Sudoku solver, N-queens problem, maze solving
4. **Mathematical Definitions**: Factorial, Fibonacci (naturally recursive)
5. **Naturally Recursive Structures**: Working with nested/recursive data structures

### Example Problems:
- Traversing nested arrays or objects
- Finding all combinations or permutations
- Evaluating mathematical expressions
- Implementing search algorithms

## Advantages of Recursion

1. **Cleaner Code**: Recursive solutions are often more intuitive and readable for naturally recursive problems
2. **Matches Problem Structure**: Problems like tree traversal are easier to express recursively
3. **Less State Management**: No need to manually manage loops and counters
4. **Natural for Divide-and-Conquer**: Inherently suited for problems that break into smaller identical subproblems
5. **Elegant Solutions**: For some problems (e.g., backtracking), recursion is more elegant than iteration

## Disadvantages of Recursion

1. **Stack Overflow Risk**: Deep recursion can exceed the call stack limit, causing crashes
2. **Slower Performance**: Function call overhead and stack management slow execution
3. **Higher Memory Usage**: Each recursive call uses stack memory
4. **Debugging Difficulty**: Stack traces become complex with many recursive calls
5. **Inefficiency for Simple Tasks**: Overkill for problems that are trivial with loops
6. **Exponential Time Complexity**: Naive recursion can lead to exponential time (e.g., Fibonacci without memoization)

## Recursion vs Iteration

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| Code Clarity | More intuitive for complex structures | Better for simple sequential tasks |
| Memory | O(n) call stack overhead | O(1) constant memory |
| Performance | Slower (function call overhead) | Faster |
| Stack Risk | Yes (stack overflow possible) | No |
| Time Complexity | Can be exponential without optimization | Generally linear |
| Code Length | Often shorter | Often longer |

### Conversion Example:

**Recursive:**
```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

**Iterative:**
```javascript
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

## Optimization Techniques

### 1. Memoization (Caching Results)
Cache results of function calls to avoid redundant calculations:

```javascript
const memo = {};
function fibonacci(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
}
```

### 2. Tail Recursion
Arrange the recursive call as the last operation to enable compiler optimizations:

```javascript
function factorialTail(n, acc = 1) {
    if (n <= 1) return acc;
    return factorialTail(n - 1, n * acc);
}
```

### 3. Dynamic Programming
Use a table to build solutions bottom-up instead of top-down recursion.

## Common Recursion Patterns

### 1. Linear Recursion
One recursive call per function:
```javascript
function sum(arr, i = 0) {
    if (i === arr.length) return 0;
    return arr[i] + sum(arr, i + 1);
}
```

### 2. Binary Recursion
Two recursive calls per function:
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### 3. Multiple Recursion
More than two recursive calls:
```javascript
function allPermutations(arr) {
    if (arr.length <= 1) return [arr];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const perms = allPermutations(remaining);
        for (let perm of perms) {
            result.push([current, ...perm]);
        }
    }
    return result;
}
```

## Best Practices

1. **Always Define a Base Case**: Prevent infinite loops and stack overflow
2. **Make Progress Toward Base Case**: Each recursive call should move closer to the base case
3. **Use Memoization**: Cache results for problems with overlapping subproblems
4. **Consider Stack Depth**: Be aware of how deep recursion might go
5. **Test Edge Cases**: Empty inputs, single elements, and boundary conditions
6. **Consider Iterative Alternatives**: For performance-critical code, iteration may be better
7. **Add Input Validation**: Check for null/undefined and invalid inputs

## Common Pitfalls

1. **No Base Case**: Leads to infinite recursion and stack overflow
2. **Inefficient Naive Recursion**: Fibonacci without memoization recalculates values many times
3. **Deep Recursion**: Can exceed stack limits for large inputs
4. **Unnecessary Recursion**: Using recursion for simple loops hurts performance
5. **Not Passing Updated Values**: Forgetting to pass modified parameters leads to incorrect results

## Complexity Analysis

### Common Recursion Complexities:

- **Factorial**: O(n) time, O(n) space
- **Fibonacci (naive)**: O(2^n) time, O(n) space
- **Fibonacci (memoized)**: O(n) time, O(n) space
- **Binary Search**: O(log n) time, O(log n) space
- **Merge Sort**: O(n log n) time, O(n) space
- **Tree Traversal**: O(n) time, O(h) space (h = height)

## When to Avoid Recursion

1. You need extreme performance optimization
2. Stack depth could be very large (use iteration instead)
3. The problem is naturally sequential with no overlapping subproblems
4. Memory is severely constrained
5. Simple loops solve the problem more efficiently

## Conclusion

Recursion is a powerful technique that solves certain problems elegantly. However, it's not a silver bullet. Always consider:
- **Code clarity**: Does recursion make this clearer?
- **Performance**: Will recursion be efficient enough?
- **Safety**: Can we hit stack limits?
- **Alternatives**: Would iteration be simpler?

Choose recursion when it makes the code more intuitive and maintainable, and when performance and stack constraints aren't critical factors.