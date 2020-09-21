
const eqArrays = function (arr1, arr2) {
  if(arr1.length != arr2.length){
    return false;
  } 
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('match');
  } else {
    console.log('no match');
  }
};
let finalArray = [];
const without = function (arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        finalArray = arr1.slice(0, i).concat(arr1.slice(i+1, arr1.length));
      }
    }
  }
  return finalArray;
};

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

module.exports = without;

