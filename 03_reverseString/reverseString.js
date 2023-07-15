const reverseString = function (string) {
  //there are no string reverse methods, so set up array to hold characters we want to reverse using reverse array method
  let stringArray = [];
  //add each character of string to array
  for (let i = 0; i < string.length; i++) {
    stringArray.push(string.charAt(i));
  }
  //reverse the array
  stringArray = stringArray.reverse();
  //concatenate array elements into a string
  let reversedString = stringArray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
