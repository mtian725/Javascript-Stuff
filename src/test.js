
// note this is ES6+ syntax
import { guass, in_range, subset, mean, to_decimal, factorize, rotate, substr,
  longest_sequence, enqueue, dequeue, peek } from './app.js';

// Test guass
console.log('Testing guass');
console.log(
  guass(0) === 0, guass(3) === 6, guass(10) === 55, guass(-17) === -1
);
console.log();

// Test in_range
console.log('Testing in_range');
console.log(
  in_range([1,2,3], 2, 4) === 2, in_range([1,2,3], 4, 7) === 0
);
console.log();

// Testing subset
console.log('Testing subset');
console.log(
  subset([1,2,3,4,5], [1,5,2]) === true, subset([1,2,3,4,5], [1,2,7]) === false,
  subset(['a','b','c'],[]) === true
);
console.log();

// Testing mean
console.log('Testing mean');
console.log(
  mean([2.0,4.0,9.0]) === 5.0, mean([]) === null
);
console.log(mean([]));
console.log();

// Testing to_decimal
console.log('Testing to_decimal');
console.log(
  to_decimal([1,0,0]) === 4, to_decimal([1,1,1,1]) === 15
);
console.log(to_decimal([1,0,0]));
console.log();

// Testing factorize
console.log('Testing factorize');
console.log(

);
console.log();

// Testing rotate
console.log('Testing rotate');
console.log(

);
console.log();

// Testing substr
console.log('Testing substr');
console.log(

);
console.log();

// Testing longest_sequence
console.log('Testing longest_sequence');
console.log(

);
console.log();

// Testing enqueue
console.log('Testing enqueue');
console.log(

);
console.log();

// Testing dequeue
console.log('Testing dequeue');
console.log(

);
console.log();

// Testing peek
console.log('Testing peek');
console.log(

);
console.log();
