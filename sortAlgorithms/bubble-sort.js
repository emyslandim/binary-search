// Create an unsorted array
const v = [1, 9, 8, 7, 3, 2];

/**
 * Sorts an array using the Bubble Sort algorithm.
 * @param {number[]} v - The array to be sorted.
 * @return {number[]} - The array sorted in ascending order.
 */

function bubbleSort(v) {
    let n = v.length;
    let sorted = true; // Assume the array is sorted initially

    // Continue looping through the array until it is sorted
    for (let i = 0; i < n; i++) {
        
        // Compare adjacent elements
       // Compare elements up to n - i - 1 because the last i elements are sorted
        for (let j = 0; j < n - i - 1; j++) {
            if (v[j] > v[j + 1]) {
                // Swap elements if they are in the wrong order
                [v[j], v[j + 1]] = [v[j + 1], v[j]];
                sorted = false; // Array is not sorted yet
            }
        }
        
        // If no elements were swapped during this pass, the array is sorted
        if (sorted) break;
    }

    return v;
}

console.log(bubbleSort(v));
