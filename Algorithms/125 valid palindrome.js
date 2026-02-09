var isPalindrome = function (s) {
  let newString = s.toUpperCase().replace(/[^A-Z0-9]/g, "");
  let left = 0;
  let right = newString.length - 1;
  while (left < right) {
    if (newString[left] !== newString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";
let output = isPalindrome(s);
console.log(output);
