"use strict";

// let arr = [1, 2, 3, 4, 5];

// let iterator = arr[Symbol.iterator]();

// console.log(iterator);
// let result = iterator.next();
// console.log(result);

// while(!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }

// let copy = [...iterator];
// console.log(copy);

class Sequence {
  constructor(from = 0, to = Infinity, interval = 1) {
    this.from = from;
    this.to = to;
    this.interval = interval
  }
  [Symbol.iterator]() {
    let next = this.from;
    return {
      next: () => {
        if(next <= this.to) {
          let result = {value: next, done: false};
          next += this.interval;
          return result;
        }
        return{value: undefined, done: true};
      }
    }
  }
}
let evenNumbers = new Sequence(2, 10, 2);
let iterator = evenNumbers[Symbol.iterator]();
let result = iterator.next();
console.log(result);

while(!result.done) {
  console.log(result.value);
  result = iterator.next();
}

for(let num of evenNumbers) {
  if(num > 7) {
    break;
  }
  console.log(num);
}