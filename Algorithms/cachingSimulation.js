// caching in javascript (memoizing)
let number1 = [
  82, 14, 47, 9, 63, 22, 55, 31, 89, 4, 76, 12, 95, 38, 50, 67, 19, 8, 42, 71,
  33, 59, 2, 88, 15, 91, 26, 60, 44, 73, 5, 99, 18, 52, 36, 81, 10, 64, 27, 49,
  93, 21, 57, 7, 78, 30, 85, 13, 66, 40,
];
let number2 = [
  7, 14, 29, 3, 58, 91, 12, 45, 76, 34, 2, 88, 19, 63, 27, 54, 101, 39, 6, 72,
  15, 84, 23, 67, 9, 120, 31, 48, 95, 11, 60, 4, 83, 26, 99, 18, 41, 73, 5, 110,
  36, 57, 92, 21, 68, 13, 79, 24, 52, 8,
];

const operations = (summationNumber) => {
  let cache = {};
  return function (input) {
    if (input in cache) {
      console.log("from cache:");
      return cache[input];
    } else {
      cache[input] = input + summationNumber;
      return `long time calculation:${cache[input]}`;
    }
  };
};

let output = operations(10);
for (number in number1) {
  console.log(output(number));
}
for (number in number2) {
  console.log(output(number));
}
