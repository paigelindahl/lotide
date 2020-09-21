const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    if (sentence[i] === ' ') {
      continue;
    }
    if(results[sentence[i]]) {
      let oldArray = results[sentence[i]];
      results[sentence[i]] = [...oldArray, i];
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

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
};

// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;






