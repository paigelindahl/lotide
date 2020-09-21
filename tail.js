//tail function looks at an array without its head element and compares
// the length to another value assertEqual function

const assertEqual = require('./assertEqual')

const tail = function(arr) {
  let newArray = arr.slice(1, arr.length);
  return newArray.length;
};

module.exports = tail;



