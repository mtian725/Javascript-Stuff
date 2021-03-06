// This file will hold all the functions
// Functions are a part of CMSC330 FALL2019 Project 7 part 1 and 2

const guass = num => {
  if (num < 0) {
    return -1;
  }
  else {
    let sum = 0;
    while (num > 0) {
      sum += num;
      num--;
    }
    return sum;
  }
};

const in_range = (arr, lb, ub) => { //lb - lower bound ; ub - upper bound
  let counter = 0;
  for( let i = 0; i < arr.length; i++){
    if (arr[i] >= lb && arr[i] <= ub) {
      counter += 1;
    }
  }
  return counter;
};

const subset = (set, target) => {
  for (let i = 0; i < target.length; i++) {
    for (let j = 0; i < set.length; j++) {
      if (target[i] === set[j]) {
        break
      }
      if (j === set.length) {
        return false;
      }
    }
  }
  return true;
};

const mean = arr => {
  if (arr.length === 0) {
    return null;
  }
  else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum/arr.length;
  }
};

const to_decimal = arr => {
  let dec = 0;
  for (let i = 0; i < arr.length; i++) {
    dec += Math.pow(2,i) * arr[arr.length - 1 - i];
  }
  return dec;
};

const factorize = num => { // can assume that the input will always be >= 2
  let factor = 2;
  const arr = [];
  while (num !== 1) {
    if (num % factor === 0) {
      arr.push(factor);
      num /= factor;
    }
    else {
      factor += 1;
    }
  }
  return arr;
};

const rotate = arr => {
  const front = arr.shift();
  arr.push(front);
  return arr;
};

const substr = (s, target) => {
  if (target === "") {
    return true;
  }
  else {
    for (let i = 0; i < s.length - target.length; i++) {
      if (s[i] === target[0]) {
        for (let j = 1; j < target.length; j++){
          if (s[i+j] !== target[j]) {
            break
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

export { guass, in_range, subset, mean, to_decimal, factorize, rotate, substr };
