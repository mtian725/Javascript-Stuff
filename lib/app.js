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

var in_range = function in_range(arr, lb, ub) {
  //lb - lower bound ; ub - upper bound
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= lb && arr[i] <= ub) {
      counter += 1;
    }
  }
  return counter;
};

var subset = function subset(set, target) {
  for (var i = 0; i < target.length; i++) {
    for (var j = 0; i < set.length; j++) {
      if (target[i] === set[j]) {
        break;
      }
      if (j === set.length) {
        return false;
      }
    }
  }
  return true;
};

var mean = function mean(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
};

var to_decimal = function to_decimal(arr) {
  var dec = 0;
  for (var i = 0; i < arr.length; i++) {
    dec += Math.pow(2, i) * arr[arr.length - 1 - i];
  }
  return dec;
};

var factorize = function factorize(num) {
  // can assume that the input will always be >= 2
  var factor = 2;
  var arr = [];
  while (num !== 1) {
    if (num % factor === 0) {
      arr.push(factor);
      num /= factor;
    } else {
      factor += 1;
    }
  }
  return arr;
};

var rotate = function rotate(arr) {
  var front = arr.shift();
  arr.push(front);
  return arr;
};

var substr = function substr(s, target) {
  if (target === "") {
    return true;
  } else {
    for (var i = 0; i < s.length - target.length; i++) {
      if (s[i] === target[0]) {
        for (var j = 1; j < target.length; j++) {
          if (s[i + j] !== target[j]) {
            break;
          }
          if (j === target.length - 1) {
            return true;
          }
        }
      }
    }
    return false;
  }
};

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