"use strict";

const pet = {
  name: '구름',
  eat: function(food) {
    console.log(this.name + '은/는 ' + food + '을/를 먹습니다.');
  }
}

pet.eat('밥');

const student = {};
student.이름 = '한지원'
student.장래희망 = '개발자'
student.취미 = '육아'

console.log(JSON.stringify(student, null, 2));

const test = {
  a: function() {
    console.log(this);
  },
  b:() =>{
    console.log(this);
  }
}

test.a();
test.b();

String.prototype.contain = function(data) {
  return this.indexOf(data) >= 0
}

Array.prototype.contain = function(data) {
  return this.indexOf(data) >= 0
}

const a = '안녕하세요'
console.log('안녕 in 안녕하세요:', a.contain('안녕'))
console.log('없는데 in 안녕하세요:', a.contain('없는데'))

const b = [273, 32, 103, 57, 52]
console.log('273 in [273, 32, 103, 57,  52]:', b.contain(273))
console.log('0 in [273, 32, 103, 57, 52]:', b.contain(0))

//JSON 객체
//자료 생성
const testData = [{
  name: "혼자 공부하는 파이썬",
  price: 18000,
  publisher: "한빛미디어"
}, {
  name: "HTML5 웹 프로그래밍 입문",
  price: 26000,
  publisher: "한빛아카데미"
}]
// 자료 JSON으로 변환
console.log(JSON.stringify(testData));
console.log(JSON.stringify(testData, null, 2));

const json = JSON.stringify(testData);
console.log(json);

//JSON 문자열을 다시 자바스크립트 객체로 변환
console.log(JSON.parse(json));

//Math.random() 메소드
const num = Math.random()

console.log('#랜덤한 숫자');
console.log('0-1 사이의 랜덤한 숫자:', num);
console.log('');

console.log('#랜덤한 숫자 범위 확대');
console.log('0~10 사이의 랜덤한 숫자:', num * 10);
console.log('0~50 사이의 랜덤한 숫자:', num * 50);

console.log('# 랜덤한 숫자 범위 이동');
console.log('-5~5 사이의 랜덤한 숫자:', num * 10 - 5); 
console.log('-25~25 사이의 랜덤한 숫자:', num * 50 - 25); 
console.log('');
 
console.log('# 랜덤한 정수 숫자');
console.log('-5~5 사이의 랜덤한 정수 숫자:', Math.floor(num * 10 - 5)); 
console.log('-25~25 사이의 랜덤한 정수 숫자:', Math.floor(num * 50 - 25)); 