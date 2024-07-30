"use strict";

// const me = [1, 2, 3, 4, 5];

// console.log(me);

let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620];
// console.log(carSales);

// //새로운 배열 생성
// let carSales2 = new Array(300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620);
// console.log(carSales2);

//기존 배열 복사해서 새로운 배열 만들기 (얕은 복사), 원래 배열에 영향을 미치지 않음
// let copy = Array.from(carSales);
// console.log(copy);

// let concat = [0, carSales, 300, 500];
// console.log(concat);

// let numbers = [..."0123456789"];
// console.log(numbers);

// //배열 요소 접근

// let may = carSales[4];
// console.log(may);

// let june = carSales["5"];
// console.log(june);

// //배열 새로운 요소 추가
// carSales[12] = -50;
// console.log(carSales);

//길이를 알 수 있는 속성
// let a = [1, 2, 3, 4, 5];
// let len = a.length;
// console.log(len);
// a.length = 0;
// console.log(a);

//배열의 각 요소에서 값을 풀어 한번에 여러 변수에 저장하는 구조 해체 대입
// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] = carSales;
// console.log(jan, fab, mar);
// console.log(rest);

//배열 요소 접근
//for of문
// let sum = 0;
// for(let sale of carSales) {
//   sum += sale;
// }
// let average = sum / carSales.length;
// // 소수점 자리수 지정
// let roundedAverage = average.toFixed(2)
// console.log(roundedAverage);

// let sum = 0;
// for (let [index, sale] of carSales.entries()) {
//   if(index % 2 === 0) {
//     sum += sale;
//   }
// }
// let average = sum / (carSales.length / 2);
// console.log(average);

// let list = [4, 5, 6];
// for in은 인덱스 반환
// for(let i in list) {
//   console.log(i);
// }

// for(let i of list) {
//   console.log(i);
// }

//일반 객체는 이터러블이 아니여서 에러
// const car = {
//   maker : 'Kia',
//   color : 'bule',
//   year : '2024'
// }

// for(let prop in car) {
//   console.log(prop);
// }

let sum = 0;
carSales.forEach(sale => {sum += sale;});
let average = sum / carSales.length;
console.log(average);

carSales.forEach((sale, index, array) => {array[index] = sale + 50});
console.log(carSales);