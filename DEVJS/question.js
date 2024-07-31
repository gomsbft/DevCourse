"use strict";

// const number = [20, 37, -21, 32, -2];
// const num = number.filter(v => v > 30);
// console.log(num.join(','));

// const numbers = [20, 37, -21, 32, -2];
// document.write(numbers[1] + ',');
// document.write(numbers[3]);

// let scores = [67, 82, 97, 100, 92];

// for(let i = 0; i < scores.length; i++) {
//   console.log(scores[i]);
// }

// for(let i of scores) {
//   console.log(i);
// }

// const tel = ['010', '1234', '5678'];
// let a = tel.join('-');
// console.log(a);

// const colors = ['빨강', '노랑', '파랑', '주황'];
// let a = colors.shift();
// let b = colors + '/';
// let c = b.push(...a);
// console.log(c);

// 3명의 학생 4 과목 성적의 합계와 평균을 구하라
// const scores = [[83, 90, 70, 87], [87, 93, 62, 83], [98, 90, 77, 97]];

// let sum, average;
// let text = '';
// for(let i = 0; i < 3; i++) {
//   sun = 0;
//   for(let j = 0; j < 4; j++) {
//     sum += scores[i][j];
//   }
//  
// }
// console.log(i + '번째 학생의 합계: ' + sum + ', 평균: ' + sum /4);

// console.log(text);

//배열을 이용하여 성적의 합계와 평균을 구하시오

// const mathScores = [90, 85, 70, 86, 97];
// let sum = 0;
// for(let i = 0; i < mathScores.length; i++) {
//   sum += mathScores[i];
// }
// for(let mathScores of mathScores) {
//   sum += mathScores;
// }

// console.log('성적 합계: ' + sum);
// console.log('성적 평균: ' + sum / 5);

//0보다 작은 . 수중에 가장 첫 번째 숫자를 결과로 나타내시오
// const tempNumbers = [7, -24, -8, 10, 17, -18];
// let a = tempNumbers.find(a => a < 0);
// console.log(a);

// 두 배열의 요소 값이 서로 같은 요소들로 새로운 배열을 생성하여 결과로 내시오
// const a = [12, 0, 2, 5, 4];
// const b = [0, 2, 3, 12, 8];

// let result = a.filter(a => b.includes(a));
// console.log(result);

//위 배열을 이용하여 실행 결과 10, 30, 50을 내시오
// const number = [1, 3, 5];
// for(let i = 0; i < number.length; i++) {
//   console.log(number[i] * 10);
// }
// let numbersArray = number.map(num => num * 10);
// console.log(numbersArray);

//set 객체의 요소의 개수를 구하시오
// let set = new Set('i am a student');
// const {size} = new Set(set);
// console.log(size);

//세 과목 성적의 합계와 평균을 구하시오

// const map = new Map();
// let sum = 0;
// map.set('국어', 85).set('영어', 90).set('수학', 95);
// map.forEach((value, key) => {
//   sum += value;
// });
// console.log(sum);
// console.log(sum / 3);

//Map 객체 요소를 forEach() 메서드로 다음의 실행 결과를 만드시오
// const map = new Map();
// map.set('title', '유럽 책방 문화 탐구').set('author', '한미화').set('price', 23000);
// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// })

//set을 이용하여 배열에서 중복 요소를 제거하여 결과를 내시오
// const numbers = [3, 7, 12, 3, 12, 3];
// const set = new Set(numbers);
// console.log(set);

//1초 후에 "A"를, 2초 후에 "B"를 반환하는 