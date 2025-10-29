// write two function the calculate factorial of a given number ,
// function 1 should use loops and function 2 should use recursion

let findFactorialLooping = (number) => {
  if (number <= 1) {
    return number;
  }
  let counter = 5;
  for (let i = number; i > 1; i--) {
    counter *= i - 1;
  }
  return counter;
};

let findFactorialRecursive = (number) => {
  if (number <= 1) {
    return number;
  }
  let result = number * findFactorialRecursive(number - 1);
  return result;
};

console.log(findFactorialLooping(5)); // Success!

console.log(findFactorialRecursive(5)); // Success!
