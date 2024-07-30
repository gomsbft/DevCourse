"use strict";

const me = [1, 2, 3, 4, 5];

console.log(me);

let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620];
console.log(carSales);

//새로운 배열 생성
let carSales2 = new Array(300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620);
console.log(carSales2);

//기존 배열 복사해서 새로운 배열 만들기 (얕은 복사), 원래 배열에 영향을 미치지 않음
let copy = Array.from(carSales);
console.log(copy);

let concat = [0, carSales, 300, 500];
console.log(concat);