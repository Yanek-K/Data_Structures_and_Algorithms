// Time Complexity O(?)
// Space Complexity O(?)

// Ex.1 Given an array and a second value, find the max sum in the array with the second value's length

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(
  maxSubarraySum([1, 6, 3, 1, 3, 6, 8, 8, 8, 5, 2, 2, 1, 4, 4, 5, 9, 9], 4)
);
