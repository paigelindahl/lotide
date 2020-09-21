const eqObjects = function(obj1, obj2) {
  let match = false;
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } 
  for (let key of obj1Keys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if(eqArrays(obj1[key], obj2[key])) {
        match = true;
      } else {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
      return false; } else {
      match = true;
     } 
  }
  }
  return match;
};
   

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    console.log(`Example label: ${inspect(expected)}`);
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  

console.log(assertObjectsEqual(eqObjects({ a: '1', b: 2 }, { b: 2, a: '1' }), true));

module.exports = assertObjectsEqual;