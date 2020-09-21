//compares the first element of an array to an expected value
const assertEqual = require('./assertEqual');

const head = function (arr) {
  let element = arr.shift();
  return element;
};

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;