const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array);
// Expected output: Array [1, 100000, 21, 30, 4]

const array2 = [1, 30, 4, 21, 100000];
array2.sort((a, b) => a - b); // this type of inner function in sort method called comparfn , a,b first and 2nd element
console.log(array2);
/*
It should return a number where:

A negative value indicates that a should come before b.
A positive value indicates that a should come after b.
Zero or NaN indicates that a and b are considered equal.

To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.

If omitted, the array elements are converted to strings, 
then sorted according to each character's Unicode code point value. */

// Expected output: Array [ 1, 30, 4, 21, 100000 ]

const months2 = ["March", "Jan", "Feb", "Dec"];
months2.sort((a, b) => a.localeCompare(b));
console.log(months2);

/*
✅ What localeCompare() does:

localeCompare() is a string method that compares two strings according to the lexicographical order (dictionary order) based on the current locale (language + region).

It returns:

-1 → if the reference string comes before the compared string

0 → if they are equal

1 → if it comes after

Example:

"apple".localeCompare("banana"); // -1
"banana".localeCompare("apple"); // 1
"apple".localeCompare("apple");  // 0

*/

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);
console.log(items);
// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(items);
