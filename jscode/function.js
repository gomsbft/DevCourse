"use strict";

//매개변수, 리턴
function f(x) {
  return x * x
}

console.log(f(3));

function sumAll(a, b) {
  let output = 0;
  for(let i = a; i <= b; i++) {
    output += i;
  }
  return output
}

console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`);
console.log(`1부터 500까지의 합: ${sumAll(1, 500)}`);