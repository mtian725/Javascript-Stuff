
// note this is ES6+ syntax
import { guass, in_range, subset, mean, to_decimal, factorize, rotate, substr,
  longest_sequence, enqueue, dequeue, peek } from './app.js';

// Test guass
console.log('Testing guass');
console.log(
  guass(0) === 0, guass(3) === 6, guass(10) === 55, guass(-17) === -1
);
console.log();
