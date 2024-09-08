/* 
 Problem: Given a sorted list of numbers and a target number, use binary search to find the first and last occurrence of the target number. 
 If the number is not present, return [-1, -1].
*/

// Create a list of numbers from 1 to 8
const numberList = Array.from({ length: 4 }, (_, i) => i + 1);

function findFirstAndLastOccurrence(arr, target) {
  // Function to find the first occurrence 
  function findFirst() {
    let low = 0;
    let high = arr.length - 1;
    let firstIndex = -1;

    while (low <= high) {
      const middle = Math.floor((low + high) / 2);
      const guess = arr[middle];

      if (guess === target) {
        firstIndex = middle; // find the target, continue to the left 
        high = middle - 1;
      } else if (guess < target) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }

    return firstIndex;
  }

  // Function to find the last occurrence
  function findLast() {
    let low = 0;
    let high = arr.length - 1;
    let lastIndex = -1;

    while (low <= high) {
      const middle = Math.floor((low + high) / 2);
      const guess = arr[middle];

      if (guess === target) {
        lastIndex = middle; // Find the target, continue to the right
        low = middle + 1;
      } else if (guess < target) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }

    return lastIndex;
  }

  // Separated calls to find the first and last occurrence 
  const firstIndex = findFirst();
  const lastIndex = findLast();

  // Return the finded indexes or [-1, -1] if has no result
  return [firstIndex, lastIndex];
}

const result = findFirstAndLastOccurrence(numberList, 5);

console.log(result);
