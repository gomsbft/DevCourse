"use strict";

/* star 1번
let star = "";

for(let i = 0; i < 5; i++) {
  star += '*';
}

console.log(star); 
*/

/* star 2번
let star = '';
for(let i = 0; i < 5; i++) {
  star += ('*' + '\n');
} 
console.log(star);
*/

/* star 3번
let star = '';
for(let i = 0; i < 5; i++) {
  for(let j = 0; j < i - 1; j++) {
    star += ('*****' + '\n');
  }
}
console.log(star);
*/

/* star 4번
let star = "";

for(let i = 0; i < 5; i++) {
  star += '*';

  console.log(star);
} 
*/

/* star 5번
let star = "";
for(let i = 0; i < 5; i++) {
  for(let j = 5; j > i; j--) {
    star += '*';
  }
  star += '\n'
}
console.log(star);
*/

/* star 6번
let star = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    star += " ";
  }
  for (let k = 1; k <= i; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
*/

/*star 7번
let star = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    star += ' '
  }
  for(let k = 5; k >= i+ 1; k--) {
    star += '*'
  }
  star += '\n'
}

console.log(star);
*/

/* star 8번
let star = "";

for(let i = 1; i < 5 * 2; i += 2) { //열에 대한 지정
  for(let j = 1; j < ((5 * 2) - i) / 2 ; j++) {
    star += " "; // 공백 설정
  }
  for( let l = 1; l <= i; l++){
    star += "*"; // *찍기 설정
  }
  for(let k = 1; k < ((5 * 2) - i) / 2; k++) {
    star += " "; //공백 설정
  }
  star += "\n"; //줄바꿈 설정
}
console.log(star);
*/

//star 9번
let star = '';

for(let i = 0; i < 5; i++) {
  for(let j = 1; j <= i + 1; j++) {
    star += ' '
  }
  for(let k = 7; k > (2 * i); k--) {
    star += '*'
  }
  star += '\n'
}

console.log(star)


/* star 10번
let star = '';
for(let i = 0; i < 5; i++) {
  for(let j = 4; j > i; j--) {
    star += ' '
  }
  for(let k = 1; k <= (2 * i) + 1; k++) {
    star += '*'
  }

  for(let l = 4; l < 0; l--) {
    star += ' '
  }
  star += '\n'
}

for(let i = 0; i < 4; i++) {
  for(let j = 1; j <= i + 1; j++) {
    star += ' '
  }
  for(let k = 7; k > (2 * i); k--) {
    star += '*'
  }
  star += '\n'
}

console.log(star);
*/