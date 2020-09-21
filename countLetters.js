const countOnly = require("./countOnly");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (str) {
  let finalResult = {};
  for (let letters of str){
    if(letters === ' ') {
      continue;
    } 
    if(finalResult[letters]) {
      finalResult[letters] += 1;
    } else {
      finalResult[letters] = 1;
    }
  }
  console.log(finalResult);
  return finalResult;
};

const arg = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
// assertEqual(countLetters('lighthouse in the house'), arg);

module.exports = countLetters;
