'use strict';

var _app = require('./app.js');

// Test guass
console.log('Testing guass');
// note this is ES6+ syntax

console.log((0, _app.guass)(0) === 0, (0, _app.guass)(3) === 6, (0, _app.guass)(10) === 55, (0, _app.guass)(-17) === -1);
console.log();