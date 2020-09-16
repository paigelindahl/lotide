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

const middle = function (arr){
  let newArray = [];
    if (arr.length === 1) {
      newArray = [];
    } else if (arr.length === 2) {
      newArray = [];
    } else if (arr.length % 2 !== 0) {
      newArray.push(arr[Math.floor(arr.length/2)]);
    } else {
      newArray.push(arr[(arr.length/2)-1], arr[arr.length/2]);
    }
  
  return newArray;
}


assertArraysEqual(middle(["1", "2"]), ["3", "4"]);

