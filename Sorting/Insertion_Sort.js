function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > val; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = val;
  }
  return arr;
}

console.log(insertionSort([2, 5, 1, 7, 8, 3, 64, 34, 75, 57, 84, 23]));
