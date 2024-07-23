"use strict";

//매개변수, 리턴
function f(x) {
  return x * x
}

console.log(f(3));

// a부터 b까지 더하는 함수 만들기

function sumAll(a, b) {
  let output = 0;
  for(let i = a; i <= b; i++) {
    output += i;
  }
  return output
}

console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`);
console.log(`1부터 500까지의 합: ${sumAll(1, 500)}`);

//최솟값

const testArray = [3, 6, 9, 125, 2, 100]

testArray.sort(function (a, b) {
  return a- b
}) 

console.log(testArray);
console.log(testArray[0]);

function earnings(name, wage=9860, hours=40) {
  console.log(`#${name} 님의 급여 정보`);
  console.log(`-시급: ${wage}원`);
  console.log(`-근무 시간: ${hours}시간`);
  console.log(`-급여: ${wage * hours}원`);
}

earnings('구름');
earnings('별', 10000);
earnings('하늘', 15000, 50);

//콜백함수, forEach()

let numbers = [273, 52, 103, 32, 57];

numbers.forEach(function(value, index, array) {
  console.log(`${index}번째 요소: ${value}`)
})

// map

numbers = numbers.map(function(value, index, array) {
  return value * value
})

numbers.forEach(console.log);

//filter

let nums =[0, 1, 2, 3, 4, 5]
const evenNums = nums.filter(function(value) {
  return value % 2 == 0
})

console.log(`원래 배열: ${nums}`);
console.log(`짝수만 추출: ${evenNums}`);

//화살표 함수

nums.filter((value) => value % 2 == 0).map((value) => value * value).forEach((value) => console.log(value))