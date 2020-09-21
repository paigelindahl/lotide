//function compares two arrays to see if they are equivalent 

const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('✅✅✅Assertion passed. You have a match.');
  } else {
    console.log('🛑🛑🛑Assertion failed. No match.');
  }
};

module.exports = assertArraysEqual;


