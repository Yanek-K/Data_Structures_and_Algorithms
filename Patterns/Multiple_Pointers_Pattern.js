// Time Complexity O(n)
// Space Complexity O(1)

// *** ARRAY MUST BE SORTED *** //

// Ex.1 Find out if two values in an array sum to zero

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//console.log(sumZero([-10, -8, -4, -2, 1, 3, 8, 11]));

// Ex.2 Count unique values in an array

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 7, 8, 8, 8, 8]));
