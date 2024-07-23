"use strict";

const myScore = Number(prompt('성적을 입력해 주세요', '0~100'));

if(myScore > 90) {
  console.log('네이버 취업');
}else if(myScore > 70 && myScore <= 90) {
  console.log('쿠팡 취업');
}else if(myScore > 50 && myScore <= 70) {
  console.log('라인 취업');
}else if(myScore > 30 && myScore <= 10) {
  console.log('스타트업 취업');
}else {
  console.log('조금 더 공부하세요');
}
