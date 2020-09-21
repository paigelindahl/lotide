// tests my tail function

const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), 2);
assertEqual(tail(["Hello", "this", "is", "a", "test"]), 4);