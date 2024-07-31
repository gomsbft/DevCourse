"use strict";

// function* generate() {
//   console.log("제너레이터 실행");
//   console.log("1생성");
//   yield 1;
//   console.log("2생성");
//   yield 2;
//   console.log("3생성");
//   yield 3;
// }

// let gen = generate();
// let result = gen.next();
// while(!result.done) {
//   console.log(result.value);
//   result = gen.next();
// }

// for(let ge of gen) {
//   console.log(gen)
// }

// let iterator = gen[Symbol.iterator]();
// console.log(iterator);

// function* sequence(from = 0, to = Infinity, interval = 1) {
//   let next = from;
//   while(next <= to) {
//     yield next;
//     next += interval;
//   }
// }
// let evenSeq = sequence(2, 10, 2);
// for(let seq of evenSeq) {
//   console.log(seq);
// }

//[Symbol.iterator]() 메서드를 제너레이터 메서드로 구현
class Sequence {
  constructor(from = 0, to = Infinity, interval = 1) {
    this.from = from;
    this.to = to;
    this.interval =interval;
  }
  *[Symbol.iterator]() {
    let num = this.from;
    while(num <= this.to) {
      yield num;
      num += this.interval;
    }
  }
}

let evenNumbers = new Sequence(2, 10, 2);
// for(const num of evenNumbers) {
//   console.log(num);
// }

function* generateIterables(...iterables) {
  for(let iterable of iterables) {
     for(let itme of iterable) {
      yield itme;
     }
  }
}