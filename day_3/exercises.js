// Ex 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

// Ex. 1.1
assert.strictEqual(sum(4, 5), 9);
// Ex. 1.2
assert.strictEqual(sum(0, 0), 0);
// Ex 1.3 & Ex 1.4
assert.strictEqual(sum(4, "5"), 0);

// Ex. 2
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Ex. 2.1
assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); //uso deepStrictEqual pq esse array é um objeto.
// Ex. 2.2 & 2.3
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// Ex. 2.4
assert.deepStrictEqual(myRemove([1, 2, 3, 4],5), [1, 2, 3, 4])

//  Ex. 3
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// Ex. 3.1
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// Ex. 3.2
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
//  Ex 3.3
const myList = [1, 2, 3, 4];
myRemoveWithoutCopy(myList,2);
assert.strictEqual(myList.length, 3)
// Ex. 3.4
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4])