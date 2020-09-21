const swapper = function (key1, object1, key2, object2) {
  console.log('Swap!');
  let ob1temp = 0;
  // get keys objects using object.keys
  ob1temp = object1[key1];
  // will output array of object keys
  object1[key1] = object2[key2];
  object2[key2] = ob1temp;
  //
  console.log('object1: ', object1);
  console.log('object2: ', object2);
};
// swapper('a', { a: 1, b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
// swapper('b', { a: 8, b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12 });
// swapper('c', { a: 1, b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });

module.exports = swapper;