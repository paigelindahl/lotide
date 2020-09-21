
const eqArrays = function (arr1, arr2) {
  if(arr1.length != arr2.length){
    return false;
  } 
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('match');
  } else {
    console.log('no match');
  }
}

const flatten = function (arr) {
  if (Array.isArray(arr)) { 
    let flattened = arr.reduce(function(a, b) {
      return a.concat(b);
    }, []);
    return flattened;
  }
};






assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) ;

module.exports = flatten; 