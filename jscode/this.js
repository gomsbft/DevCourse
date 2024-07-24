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