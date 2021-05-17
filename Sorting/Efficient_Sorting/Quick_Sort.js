// Time Complexity
// -- ** Worst Case (array is already sorted) ** -- O(n^2)
// This is because pivot is set at 0 in our example

// -- ** Average ** -- O(n log n)

// Space Complexity O(log n)

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivotIdx = pivot(arr, left, right);
  if (left < right) {
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([30, 3, 51, 5, 6, 2, 4, 8, 9, 10]));
