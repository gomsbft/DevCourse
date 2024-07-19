console.log(1 + 1);
console.log(2 * 2);
console.log(5 - 2);
console.log(8 % 2);
console.log(8 / 2);
console.log('hello world');
console.log("hello world");
console.log('"hello world"');
console.log("'hello world'"); 
console.log('가나다' + '라마바' + '사아자' + '차카타' + '파하');
console.log(20 < 10);
console.log(20 > 10);
console.log(20 === 20);
const pi = 3.14159265;
console.log(pi);
let radius = 10;
console.log(2 * radius * pi);
// 조건문 if
if(5 > 3) {
  console.log('정답입니다.');
}

//날짜, 시간 가져오기
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();
let hours = date.getHours();
let mminutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(date);
console.log(year);

//오전, 오후 구분하기
if(hours < 12) {
  console.log('오전입니다');
} else if(hours >= 12) {
  console.log('오후입니다');
}

//if, else if, else
if(hours < 6 && hours > 1) {
  console.log('잠을 자렴..');
}else if(hours >= 6 && hours < 18) {
  console.log('공부해라');
}else {
  console.log('쉬어라');
}

//성적 확인
let a = 95;
if(a > 90) {
  console.log('A');
}else if(a <= 90 && a > 80) {
  console.log('B');
}else if(a <= 80 && a > 70) {
  console.log('C');
}else {
  console.log('D');
}

//month 사용 조건문 
if(3 <= month && month <= 5) {
  console.log('봄봄봄');
}else if(6 <= month && month <= 8) {
  console.log('습한여름');
}else if(9 <= month && month <= 11) {
  console.log('가을');
}else {
  console.log('눈이 펑펑 겨울');
}

//반복문
//for문
let num = [1, 2, 3]
for (let i = 0; i < num.length; i++) {
  console.log(i + '번째 출력: ' + num[i]);
}
//while문
let j = 0;
let koean = ['가', '나', '다'];
while (j < koean.length) {
  console.log(j + '번째 출력: ' + koean[j]);

  j++;
}

let start = new Date().getTime();
let count = 0;
while (start + 1000 > new Date().getTime()) {
  count++;
}

console.log(count + '만큼 반복했습니다.');

//배열 출력
let array = [123, '문자', true, { }, {}, [32, 10]];
console.log(array);

//index 지정해서 출력
console.log(array[0]);
let names = ['지', '한', '원'];
names[3] = '94';
console.log(names[3]);
console.log(names[1]);
console.log(names[0]);
console.log(names[2]);

//배열의 요소 갯수
console.log(names.length);