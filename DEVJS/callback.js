"use strict";
// function callback() {
//   console.log('콜백 함수 호출');
// }
// setTimeout(callback, 1000);
// console.log('작업 수행');

// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       {name: 'Kim', email: 'Kim@naver.com'},
//       {name: 'Lee', email: 'Lee@naver.com'},
//       {name: 'Park', email: 'Park@naver.com'},
//     ]);
//   }, 1000)
// }
// function findUser(name, callback) {
//   getUsers (users => {
//     const user = users.find(user => user.name === name);
//     callback(user.email);
//   });
// }

// let user = findUser("Kim", user => {
//   console.log(user);
// });

let greeting = document.querySelector('#greeting');
greeting.addEventListener("click", sayHello);
function sayHello() {
  console.log("안녕하세요");
}
