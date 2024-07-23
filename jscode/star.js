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

/* star 3번
for(let i = 0; i < 5; i++) {
  for(let j = 0; j < i - 1; j++) {
    console.log('*****')
  }
}
*/


/* star 4번

let star = "";

for(let i = 0; i < 5; i++) {
  star += '*';

  console.log(star);
} */

let star = "";
for(let i = 0; i < 5; i++) {
  for(let j = 5; j > i; j--) {
    star += '*';
  }
  star += '\n'
}
console.log(star);

/* star 8번
let line = 5;
let result = "";

for (let i = 1; i < line * 2; i += 2) { //열에 대한 지정
  for (let j = 1; j < ((line * 2) - i) / 2 ; j++) {
    result += " "; // 공백 설정
  }
  for( let l = 1; l <= i; l++){
    result += "*"; // *찍기 설정
  }
  for (let k = 1; k < ((line * 2) - i) / 2; k++) {
    result += " "; //공백 설정
  }
  result += "\n"; //줄바꿈 설정
}
console.log(result);
*/