class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedString = "";
    for (let string of strs) {
      encodedString += `${string.length}#${string}`;
    }

    return encodedString;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let list = [];
    let left = 0;
    while (left < str.length) {
      let j = left;
      while (str[j] !== "#") {
        j++;
      }
      let MetadataNumber = parseInt(str.slice(left, j));

      left = j + 1;
      let stringValue = str.slice(left, left + MetadataNumber);
      list.push(stringValue);
      left += MetadataNumber;
    }
    return list;
  }
}

let abc = new Solution();
let encodedString = abc.encode(["abc", "bcd"]);
let decodedString = abc.decode(encodedString);
console.log(decodedString);
