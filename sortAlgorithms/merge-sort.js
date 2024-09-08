/**
 * Merge Sort implementation in JavaScript.
 * @param {number[]} array - The array to be sorted.
 * @return {number[]} - The sorted array.
 */
function mergeSort(array) {
    if (array.length <= 1) {
        return array; // Base case: a list of zero or one element is already sorted
    }

    // Divide the array into two halves
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merge two sorted arrays into a single sorted array.
 * @param {number[]} left - The first sorted array.
 * @param {number[]} right - The second sorted array.
 * @return {number[]} - The merged sorted array.
 */
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and push the smaller one into the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in the left array, add them to the result
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // If there are remaining elements in the right array, add them to the result
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage
const array = [4, 3, 2, 1];
console.log(mergeSort(array)); // Output: [1, 2, 3, 4]
