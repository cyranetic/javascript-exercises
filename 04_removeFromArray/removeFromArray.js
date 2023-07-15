const removeFromArray = function (array, ...args) {
  //set up variable for final array that starts as original array
  let finalArray = array;
  //loop through rest parameter arguments (an array)
  for (let i = 0; i < args.length; i++) {
    //find out if argument matches array element; we need a nested loop bc we are comparing 2 arrays
    for (let j = 0; j < array.length; j++) {
      if (args[i] === array[j]) {
        //remove the array element that matches
        finalArray.splice(j, 1);
      }
      //if nothing matches, do nothing
    }
  }
  return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
