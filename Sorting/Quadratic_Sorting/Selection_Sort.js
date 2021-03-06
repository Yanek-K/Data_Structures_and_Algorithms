// Time Complexity O(n^2)
// Space Complexity O(1)

// Going through array, select the minimum and swap it into the beginning of the array

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([4, 2, 1, 5, 3, 2, 1, 5, 6, 9, 22]));
