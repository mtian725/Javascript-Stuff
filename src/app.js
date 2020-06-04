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
  if (target === []) {
    return true;
  }
  else {
    for (let i = 0; i < set.length - target.length; i++) {
      if (set[i] === target[0]) {
        for (let j = 0; j < target.length; j++){
          if (set[i+j] !== target[j]) {
            break
          }
          if (j === target.length) {
            return true
          }
        }
      }
    }
    return false;
  }
};

const mean = () => {

};

const to_decimal = () => {

};

const factorize = () => {

};

const rotate = () => {

};

const substr = () => {

};

const longest_sequence = () => {

};

const enqueue = () => {

};

const dequeue = () => {

};

const peek = () => {

};

export { guass, in_range, subset, mean, to_decimal, factorize, rotate, substr,
  longest_sequence, enqueue, dequeue, peek };
