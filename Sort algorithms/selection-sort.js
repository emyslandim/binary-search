// Create an unsorted array
const v = [1, 9, 8, 7, 3, 2];

/**
 * Sorts an array using the Selection Sort algorithm.
 * @param {number[]} v - The array to be sorted.
 * @return {number[]} - The array sorted in ascending order.
 */
function selectionSort(v) {
  // Iterate through the array to find the smallest value in each iteration
  for (let i = 0; i < v.length; i++) {
    // Traverse the subarray to the right of index `i` to find the smallest element
    for (let j = i + 1; j < v.length; j++) {
      // If a smaller value than the current `v[i]` is found, swap the values
      if (v[j] < v[i]) {
        [v[i], v[j]] = [v[j], v[i]];
      }
    }
  }

  return v;
}

console.log(selectionSort(v));
