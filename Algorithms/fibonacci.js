// write two function the calculate factorial of a given number ,
// function 1 should use Iterative Approach  and function 2 should use recursion

let findFibonacciIterative = (number) => {
  if (number <= 1) return number;
  // so, when number is 0 or 1 then its number value 0 and 1 . so we can ignore these 2 cheks
  // so we can start from 2 , to 5 (if input is 5)
  let a = 0,
    b = 1;
  for (let i = 2; i <= number; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

let findFibonacciRecursive = (number) => {
  if (number <= 1) return number;
  return (
    findFibonacciRecursive(number - 1) + findFibonacciRecursive(number - 2)
  );

  //  fib(5)
  //  ├── fib(4)
  //  │    ├── fib(3)
  //  │    │    ├── fib(2)
  //  │    │    │    ├── fib(1) → 1
  //  │    │    │    └── fib(0) → 0
  //  │    │    └── fib(1) → 1
  //  │    └── fib(2)
  //  │         ├── fib(1) → 1
  //  │         └── fib(0) → 0
  //  └── fib(3)
  //       ├── fib(2)
  //       │    ├── fib(1) → 1
  //       │    └── fib(0) → 0
  //       └── fib(1) → 1
};

let findFibonacciMemoization = () => {
  let cache = {};
  return function fib(number) {
    if (number in cache) {
      return cache[number];
    } else {
      if (number < 2) {
        return number;
      } else {
        cache[number] = fib(number - 1) + fib(number - 2);
        return cache[number];
      }
    }
  };
};

console.log(findFibonacciIterative(43)); // ✅ Pass O(N)

console.log(findFibonacciRecursive(43)); // ✅ Pass O(2 ^ N)
let memoization = findFibonacciMemoization();
console.log(memoization(43)); //Pass O(N)
