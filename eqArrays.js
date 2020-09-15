const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  let arrLength;
  if((arrLength = arr1.length) != arr2.length){
    return false;
  } 
  for(let i = 0; i < arrLength; i ++) {
    if(arr1[i] !== arr2[i]) return false;
  }return true;
  
};
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
