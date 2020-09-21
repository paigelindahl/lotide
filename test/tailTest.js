// tests my tail function

const tail = require('../tail.js');
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns '2' for ['Hello', 'Lighthouse', Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), 2);
  });
  it("returns '4' for ['Hello', 'this', 'is', 'a', 'test']", () => {
    assert.strictEqual(tail(["Hello", "this", "is", "a", "test"]), 4);
  });
});


