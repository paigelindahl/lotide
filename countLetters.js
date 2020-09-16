/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};*/

const countLetters = function (str) {
  let finalResult = {};
  for (let letters of str){
    if(finalResult[letters]) {
      finalResult[letters] += 1;
    } else {
      finalResult[letters] = 1;
    }
  }
  return finalResult;
}

console.log(countLetters('lighthouse'));