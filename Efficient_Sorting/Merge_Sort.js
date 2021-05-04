// Created in 1948 by Jonathan Van Neuman

// Time Complexity O(n log n) -- ** BEST, AVERAGE, AND WORST ** --
// Space Complexity O(n)

// Function for Merging Arrays

function merge(arr1, arr2) {
  let final = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      final.push(arr1[i]);
      i++;
    } else {
      final.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    final.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    final.push(arr2[j]);
    j++;
  }
  return final;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 2, 3, 7, 10, 11, 4, 5, 6, 8, 9]));
