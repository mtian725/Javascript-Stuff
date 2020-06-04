"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This file will hold all the functions
// Functions are a part of CMSC330 FALL2019 Project 7 part 1 and 2

var guass = function guass(num) {
  if (num < 0) {
    return -1;
  } else {
    var sum = 0;
    while (num > 0) {
      sum += num;
      num--;
    }
    return sum;
  }
};

var in_range = function in_range() {};

var subset = function subset() {};

var mean = function mean() {};

var to_decimal = function to_decimal() {};

var factorize = function factorize() {};

var rotate = function rotate() {};

var substr = function substr() {};

var longest_sequence = function longest_sequence() {};

var enqueue = function enqueue() {};

var dequeue = function dequeue() {};

var peek = function peek() {};

exports.guass = guass;
exports.in_range = in_range;
exports.subset = subset;
exports.mean = mean;
exports.to_decimal = to_decimal;
exports.factorize = factorize;
exports.rotate = rotate;
exports.substr = substr;
exports.longest_sequence = longest_sequence;
exports.enqueue = enqueue;
exports.dequeue = dequeue;
exports.peek = peek;