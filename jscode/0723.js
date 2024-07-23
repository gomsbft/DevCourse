"use strict";

//상수 const
const pi = 3.141592;
const r = 10;

//반지름으로 원의 둘레 구하기
console.log(2 * pi * r);

//반지름으로 원의 넓이 구하기
console.log(pi * r * r);

//변수 let
let pis = 3.14;
pis = 3.141592;

let rs = 10;

console.log (2 * pis * rs);

// 증감 연산자

let number = 10;

console.log(++number);
console.log(number++);
console.log(number--);
console.log(--number);

number++
number++
console.log(number);
console.log(number);
number--
number--
console.log(number);

//자료형 변환
const rawinput = prompt('inch 단위의 숫자를 입력해 주세요.');

const inch = Number(rawinput);
const cm = inch * 2.54;

console.log(`${inch}inch는 ${cm}cm 입니다.`);

//swithch 조건문

const input = Number(prompt('숫자를 입력하세요.','숫자'));

switch (input % 2) {
  case 0:
    console.log('짝수입니다');
    break
  case 1:
    console.log('홀수입니다');
    break
  default:
    console.log('숫자가 아닙니다');
    break
}
// ? 조건문 (3항연산자)
const result = (input >= 10) ? '10이상의 숫자입니다' : '10보다 작은 숫자입니다';
console.log(result)