/**
 * Reverses a string using recursion.
 * The function takes the last character of the string and recursively reverses the remaining characters.
 *
 * Algorithm:
 * - Base case: Empty string returns empty string
 * - Recursive case: Take the last character and concatenate with the reversed substring (minus last character)
 *
 * @param {string} str - The string to reverse
 * @returns {string} - The reversed string
 *
 * Time Complexity: O(n^2) due to string slicing and concatenation in each recursive call
 * Space Complexity: O(n) due to the recursion call stack
 *
 * Example:
 * reverseString("hello") => "olleh"
 * reverseString("a") => "a"
 * reverseString("") => ""
 */
function reverseString(str) {
    // Base case: empty string or single character string is already "reversed"
    if (str.length === 0) {
        return '';
    }

    // Recursive case: take last character and prepend it to the reversal of the rest
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}


