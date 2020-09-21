//compares the first element of an array to an expected value
const assertEqual = require('./assertEqual');

const head = function (arr) {
  let element = arr.shift();
  return element;
};

module.exports = head;