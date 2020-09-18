const assertEqual = function(actual, expected) {
  console.log(actual);
  console.log(expected);
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (obj, callback) {
  const objArray = Object.keys(obj);
  for (let item of objArray){
    if (callback(obj[item])) {
      return item;
    }
  }
};




console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"));
