function multiplesOf3and5(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

// multiplesOf3and5(1000);

function fiboEvenSum(n) {
  let a = 1;
  let b = 2;
  let sum = b;

  while (b <= n) {
    let temp = a;
    a = b;
    b = temp + a;

    if (b % 2 === 0) {
      sum += b;
    }
  }
  console.log(sum);
}

// fiboEvenSum(100);

function largestPrimeFactor(number) {
  if (isPrime(number)) return number;
  let largest = 1;

  for (let i = 1; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0 && isPrime(i)) {
      largest = i;
    }
  }
  return largest;
}

function isPrime(number) {
  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(largestPrimeFactor(121));

function largestPalindromeProduct(n) {
  let result = +Array(n).fill(9).join("");
  let palindromes = [];

  for (let i = result; i >= 1; i--) {
    for (let j = result; j >= 1; j--) {
      const mult = i * j;
      if (isPalindrome(mult)) {
        palindromes.push(mult);
      }
    }
  }
  return Math.max(...palindromes);
}

//console.log(largestPalindromeProduct(3));

function isPalindrome(num) {
  return num.toString() === num.toString().split("").reverse().join("");
}

//console.log(isPalindrome(101));

// find the length of n
// take the length and get that number of 9s
// multiply the number and check if it is the same reversed
// if yes, return the number
// if not, reduce one of the numbers by 1 and repeat multiplication and reverse check

function smallestMult(n) {
  let start = 1;
  for (let i = 0; i < n; i++) {
    if (start % i !== 0) {
      start++;
    } else {
      return start;
    }
  }
}

console.log(smallestMult(5));
// push all the numbers that are <= n into an array
// check to see if
