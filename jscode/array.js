"use strict";

// 배열에 추가

const todos = ['우유구매', '업무메일 확인', '필라테스 수업']

todos.push('저녁 식사 준비하기');

todos.push('피아노 연습하기')

console.log(todos);

//배열에서 요소 삭제 

todos.splice(2, 1);

console.log(todos);

//요소 인덱스 확인

let indexCheck = todos.indexOf('우유구매');

console.log(indexCheck);

//없는 요소에 대한 출력

let indexNoCheck = todos.indexOf('필라테스 수업');

console.log(indexNoCheck);

//특정 위치 요소 추가

todos.splice(1, 0, '코딩 공부하기');

console.log(todos);

for(let i = 0; i < todos.length; i++) {
  console.log(`${i}번째 할 일: ${todos[i]}`);
}
