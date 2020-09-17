const words = ["ground", "control", "to", "major", "tom"];

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
    console.log('it\s a match');
  } else {
    console.log('no match');
  }
}


const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
}

console.log(assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]));
