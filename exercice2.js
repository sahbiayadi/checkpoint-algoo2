/**
 * Implementation of Insertion Sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - Sorted array.
 */
function insertionSort(arr) {
    // Iterate through each element starting from the second one
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let current = arr[i];
        // Initialize a variable j to iterate backwards from i-1
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }

    // Return the sorted array
    return arr;
}

// Example usage:
const arrayToSort = [12, 11, 13, 5, 6];
console.log("Original Array:", arrayToSort);
console.log("Sorted Array:", insertionSort(arrayToSort));