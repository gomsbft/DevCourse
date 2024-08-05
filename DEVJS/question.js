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

//1초 후에 "A"를, 2초 후에 "B"를 반환하는 두개의 Promise를 생성하고  두Promise가 모두 완료 된 후에 "완료!"를 출력

// function a() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("A"))
//     }, 1000)
//   })
// }

// function b() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("B"))
//     }, 2000)
//   })
// }

// a()
//   .then(b)
//   .finally(console.log("완료!"));

//풀이

// const promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("A");
//   }, 1000)
// })

// const promiseB = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("B");
//   }, 2000)
// })

// let promises = [promiseA, promiseB];
// Promise.all(promises).then((result) => {
//   console.log("완료", result);
// })

//1초 후에 숫자 5를 반환하는 promise와 1.5초 후에 그 숫자에 10을 곱한 값을 반환하는 promise를 작성하세요
//만약 5를 반환하는 promise가 실패하면 "에러!"를 출력하세요

// function num() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5)
//     }, 1000)
//   })
// }

// function renum(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout((num) => {
//       resolve(num * 10)
//     }, 1500)
//   })
// }

// num()
//  .then(renum)
//  .catch(console.log("실패!"))
 //나는 실패...

 //풀이
// let success = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(success) {
//       resolve(5);
//     }else {
//       reject("에러");
//     }
//   }, 1000)
// });

// promise.then(
//   num => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(num * 10);
//       }, 1500);
//     })
//   }
// )
// .then(result => {
//   console.log(result);
// })
// .catch(error => {
//   console.log(error);
// })

//제너레이터를 사용하여 여러 비동기 작업을 순차적으로 실행하는 함수를 작성하세요 
//각 작업은 2초 후에 완료 된다고 가정하고 작업으 완료 될때마다 그 결과를 출력해야 합니다
//제너레이터는 작업이 완료 될때마다 다음 작업을 실행해야 합니다
// async function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout = 2000) {
//   let next = from;
//   while(next <= to) {
//     yield new Promise((resolve, reject) => {
//       setTimeout(() => resolve(next), timeout);
//     })
//     yield new Promise((resolve, reject) => {
//       setTimeout(() => resolve(next), timeout);
//     })
//     next += interval;
//   }
// }
// (async() => {
//   let seq = asyncSequence(2, 10 ,2);
//   for await (let value of seq) {
//     console.log(value);
//   }
// })();

//풀이
// function* taskGen() {
//   yield new Promise((resolve, reject) => setTimeout(() => resolve("1완료"), 2000));
//   yield new Promise((resolve, reject) => setTimeout(() => resolve("2완료"), 2000));
//   yield new Promise((resolve, reject) => setTimeout(() => resolve("3완료"), 2000));
// }

// const tasksDisplay = async () => {
//   const tasks = taskGen();
//   for(let task of tasks) {
//     const result = await task;
//     console.log(result);
//   }
// }
// tasksDisplay();

//사용자의 정보를 가져오는 비동기 함수를 작성하고, 이를 어싱크,어웨이를 사용하여 호출

// const users = {
//   1: {name: "Kim", age: 25},
//   2: {name: "Lee", age: 30},
//   3: {name: "jung", age: 35}
// }

// async function say(users) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(users), 1000)
//   })
// }
// async function display() {
//   try {
//     let result = await say();
//     console.log(result);
//   } catch(e) {
//     console.log(e);
//   }
// }
// 실패

//풀이

// function userData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const users = {
//         1: {name: "Kim", age: 25},
//         2: {name: "Lee", age: 30},
//         3: {name: "jung", age: 35}
//       }
//       const user = users[userId];
//       if(user) {
//         resolve(user);
//       }else {
//         reject("사용자를 찾을 수 없음");
//       }
//     }, 1000);
//   })
// }

// async function getUser(userId) {
//   try{
//     const userDataGet = await userData(userId);
//     console.log(`${userDataGet.name}, ${userDataGet.age}`);
//   }catch(e) {
//     console.log(e);
//   }
// }

// getUser(4);

//Book 이라는 생성자 함수를 만들고 프로토타입을 이용하여 프로퍼티를 추가하세요
//(title, author, price) /생성할 프로토타입 예) 출판일, 페이지 수

// function Book(title, author, price) {
//   this.title = title,
//   this.author = author,
//   this.price = price
// }

// Book.prototype.year = "1994";
// Book.prototype.page = 360;

// const book = new Book('코딩', '너무', '어려워');
// console.log(book);

//person이라는 클래스를 만들고
//"안녕하세요. 제 이름은 {이름}이고, 나이는{나이}살 입니다. 라는 문자열을 반환하시오"

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`)
//   }
// }

// const me = new Person('jiwon', 30);
// me.sayHi();

//풀이
// class Preson {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   text() {
//     return `안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`
//   }
// }
// const person1 = new Preson('jiwon', 30);
// console.log(person1.text());

//calculator라는 클래스 또는 생성자 함수를 작성하고 정적 메서드를 추가하여 숫자를 더하고 빼는 기능을 구현하시오
// class Calaculator {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   static sum(num1, num2) {
//     return num1 + num2;
//   }
//   static mi(num1, num2) {
//     return num1 - num2;
//   }
// }
// const result = new Calaculator(10, 5);
// console.log(Calaculator.sum(10, 5));
// console.log(Calaculator.mi(10, 5));

//풀이
//class 이용
// class Calaculator {
//   static add(a, b) {
//     return a + b;
//   }
//   static sub(a, b) {
//     return a - b;
//   }
// }

// console.log(Calaculator.add(1, 3));
// console.log(Calaculator.sub(1, 3));

//생성자함수 이용
// function Calaculator() {}
//   Calaculator.add = function(a, b) {
//     return a + b;
//   }
//   Calaculator.sub = function(a, b) {
//     return a - b;
//   }

// console.log(Calaculator.add(2, 5));
// console.log(Calaculator.sub(2, 5));

//다음 객체 Car를 스프레드 연산자를 사용하여 복사하고, model을 "전기차" 로 수정한 새로운 객체 newCar를 
//생성하는 코드를 작성
const car = { brand: "현대", model: "아이오닉", year: 2023};
const newCar = {...car, model: "전기차"};
console.log(newCar);

//다음 두 배열 array1과 array2를 스프레드 연산자를 사용하여 하나의 배열로 합친 후
// 중복된 값을 제거한 배열을 출력하는 코드를 작성하세요
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const sumArray =[...array1, ...array2];
const array4 = [...new Set(sumArray)];
console.log(array4);