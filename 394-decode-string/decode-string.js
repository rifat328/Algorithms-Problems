/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
const stack = [];
  for (const char of s) {
    if(char !== "]"){
        stack.push(char)
        continue
    }
    let newString=''
    let currentChar= stack.pop();
    while(currentChar !== "["){
        newString = currentChar + newString // to orginize the order right a, b => normally ba but if we follow this then => ab
        currentChar= stack.pop()
    }
    let number = ''
    currentChar= stack.pop()
    while( !Number.isNaN(Number(currentChar))){
        number = currentChar + number
        currentChar= stack.pop()
    }
    stack.push(currentChar) // bec we need that that char in order to properly calculate which we previously removed to prgress our while loop
    stack.push(newString.repeat(Number(number)))
  }

  return stack.join('');
};
