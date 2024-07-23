"use strict";

let id;

setTimeout(() => {
  console.log('1초 후에 실행 됩니다')
}, 1 * 1000)

let count = 0
id = setInterval(() => {
  console.log(`1초마다 실행 됩니다(${count}번째)`)
  count++
}, 1 * 1000);

setTimeout(() => {
  console.log('타이머를 종료합니다')
  clearInterval(id)
}, 5 * 1000)

