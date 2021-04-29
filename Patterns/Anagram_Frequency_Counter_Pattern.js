// Time Complexity = O(n)
// Space Complexity = O(n)
// console.log(true);

function validAnagram(str1, str2) {
  let object1 = {};
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    object1[letter] ? (object1[letter] += 1) : (object1[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!object1[letter]) {
      return false;
    } else {
      object1[letter] -= 1;
    }
  }
  return true;
  console.log("true");
}

console.log(validAnagram("tarr", "rrat"));
