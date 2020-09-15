const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArray = arr.slice(1, arr.length);
  return newArray.length;
};

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), 2);

