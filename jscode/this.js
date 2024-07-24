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