'use strict';

var _app = require('./app.js');

var equal = function equal(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      return true;
    }
  }
};

// Test guass

// note this is ES6+ syntax
console.log('Testing guass');
console.log((0, _app.guass)(0) === 0, (0, _app.guass)(3) === 6, (0, _app.guass)(10) === 55, (0, _app.guass)(-17) === -1);
console.log();

// Test in_range
console.log('Testing in_range');
console.log((0, _app.in_range)([1, 2, 3], 2, 4) === 2, (0, _app.in_range)([1, 2, 3], 4, 7) === 0);
console.log();

// Testing subset
console.log('Testing subset');
console.log((0, _app.subset)([1, 2, 3, 4, 5], [1, 5, 2]) === true, (0, _app.subset)([1, 2, 3, 4, 5], [1, 2, 7]) === false, (0, _app.subset)(['a', 'b', 'c'], []) === true);
console.log();

// Testing mean
console.log('Testing mean');
console.log((0, _app.mean)([2.0, 4.0, 9.0]) === 5.0, (0, _app.mean)([]) === null);
console.log();

// Testing to_decimal
console.log('Testing to_decimal');
console.log((0, _app.to_decimal)([1, 0, 0]) === 4, (0, _app.to_decimal)([1, 1, 1, 1]) === 15);
console.log();

// Testing factorize
console.log('Testing factorize');
console.log(equal((0, _app.factorize)(5), [5]), equal((0, _app.factorize)(12), [2, 2, 3]));
console.log();

// Testing rotate
console.log('Testing rotate');
console.log(equal((0, _app.rotate)([1, 2, 3, 4]), [2, 3, 4, 1]), equal((0, _app.rotate)([6, 7, 8, 5]), [7, 8, 5, 6]));
console.log();

// Testing substr
console.log('Testing substr');
console.log((0, _app.substr)("rustacean", "ace") === true, (0, _app.substr)("rustacean", "rcn") === false, (0, _app.substr)("rustacean", "") === true);
console.log();

// Testing longest_sequence
console.log('Testing longest_sequence');
console.log();
console.log();

// Testing enqueue
console.log('Testing enqueue');
console.log();
console.log();

// Testing dequeue
console.log('Testing dequeue');
console.log();
console.log();

// Testing peek
console.log('Testing peek');
console.log();
console.log();