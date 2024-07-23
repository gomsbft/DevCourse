"use strict";

/* star 1번
let star = "";

for(let i = 0; i < 5; i++) {
  star += '*';
}

console.log(star); */

/* star 2번
for(let i = 0; i < 5; i++) {
  console.log('*');
} */

/* star 4번

let star = "";

for(let i = 0; i < 5; i++) {
  star += '*';

  console.log(star);
} */



let star = '';

for(let i = 1; i < 15; i++) {
  for(let j = 15; j > i; j--) {
    star += ''
  }
  for(let k = 0; k < 2 * i - 1; k++) {
    star += '*'
  }
  star += '\n'
}

console.log(star);