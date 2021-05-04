// Only one of our sort examples that is not a COMPARISON sort
// Based on the size of the number being encoded in the number of digits
// I.e. 10 is greater than 8 because 10 has two digits

// Time Complexity O(nk) -- Some argue this is O(n log n)
// If k are all unique, because of the way computers store numbers, k is much larger than we expect
// However, others argue that if we look at it this way, all the other algorithms are larger than we expect also...

// Space Complexity O(n + k)

// ** Helper Methods ** //

// Returns the digit in num at the given place
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Returns the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Returns the number of digits in the largest number in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// ** Radix Sort ** //
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([1, 6, 235, 35, 352, 523, 53, 5, 235]));
