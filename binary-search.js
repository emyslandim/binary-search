// Create a list of numbers from 1 to 8
const numberList = Array.from({ length: 8 }, (_, i) => i + 1);

/**
 * Performs a binary search on a sorted array.
 * @param {number[]} arr - The sorted array to search.
 * @param {number} target - The number to find in the array.
 * @return {number | null} - The found number or null if not found.
 */
function binarySearch(arr, target) {
    let low = 0;               // Starting index of the array
    let high = arr.length - 1; // Ending index of the array

    while (low <= high) {
        const mid = Math.floor((low + high) / 2); // Middle index of the current range
        const guess = arr[mid]; // Middle value of the current range

        if (guess < target) {
            low = mid + 1; // Adjust the search range to the right half
        } else if (guess > target) {
            high = mid - 1; // Adjust the search range to the left half
        } else {
            return guess; // Target found
        }
    }

    return null; // Target not found
}

// Perform the search
const result = binarySearch(numberList, 5); // Searching for the number 5

// Log the result
console.log(result); // Should log 5 if found, or null if not found

// Additional Notes:
// The maximum number of comparisons required for binary search is given by the base-2 logarithm of the number of elements.
// For a list of 8 elements, the maximum number of comparisons needed is log2(8), which equals 3.
// This means that in the worst-case scenario, binary search will require at most 3 comparisons to find the target number or determine that it is not present.
// In this example, searching for the number 5, which is located in the middle of the list, demonstrates the worst-case scenario with 3 comparisons.
