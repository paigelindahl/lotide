//function returns the middle element of an odd length array 
//and the middle two elements for an even lengthed array. 
//If the array is only one or two elements long it returns
//an empty array.

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (arr){
  let newArray = [];
    if (arr.length === 1) {
      newArray = [];
    } else if (arr.length === 2) {
      newArray = [];
    } else if (arr.length % 2 !== 0) {
      newArray.push(arr[Math.floor(arr.length/2)]);
    } else {
      newArray.push(arr[(arr.length/2)-1], arr[arr.length/2]);
    }
  
  return newArray;
}

module.exports = middle;
