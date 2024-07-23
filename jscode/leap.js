"use strict";

const year = Number(prompt('년도를 입력해주세요'));

if(year % 4 == 0 && year % 100 !== 0) {
  console.log(`${year}년은 윤년입니다.`);
}else if(year % 400 == 0) {
  console.log(`${year}년은 윤년입니다.`);
}else {
  console.log(`${year}년은 윤년이 아닙니다.`);
}