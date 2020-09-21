const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if(arr1.length != arr2.length){
    console.log(arr1.length);
    console.log(arr2.length);
    return false;
  } 
  for(let i = 0; i < arr1.length; i++) { 
    if(arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};



const eqObjects = function(obj1, obj2) {
  let match = false;
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } 
  for (let key of obj1Keys) {
    console.log(obj1Keys);
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
   


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); 

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); 
// console.log(eqObjects(cd, dc));
// assertEqual(false, true);
const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertEqual(eqObjects(cd, cd2), false)); 

module.exports = eqObjects;