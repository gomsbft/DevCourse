// 문제 1 apple 단어 포함 여부 확인
let a = "I love Apple pie and apple juice";
let b = /apple/ig;
let result1 = a.match(b);

document.getElementById("show").innerHTML = result1;

//문제 2 모든 대문자 찾기
let c = "Hello World! This is a Test String";
let d = /[A-Z]/g
let result2 = c.match(d);

document.getElementById("show").innerHTML = result2;

//문제 3 "1 10 100 2000 30000" 결과 100, 200, 300이 나오도록 정규식으로 작성
let e = "1 10 100 2000 30000";
let f = /\d{3}/g
let result3 = e.match(f);
document.getElementById("show").innerHTML = result3;

//문제 4 How do you do 의 결과가 o, d, o, o, d, o가 나오도록 정규식 작성
let g = "How do you do";
let h = /[do]/g
let result4 = g.match(h);
document.getElementById("show").innerHTML = result4;

//문제5 89139012349 가 9,9,0,9 가 실행 되도록 하시오
let i = "89139012349";
let j = /[^1-8]/g
let result5 = i.match(j);
document.getElementById("show").innerHTML = result5;

//문제6 A가 최소 1번 최되 2번 반복되는 문자를 구하세요
let k = "A AA B BB Aa Bb AAA";
let l = /A{2, }/g
let result6 = k.match(l);
document.getElementById("show").innerHTML = result6;

//문제 7 한번 이상 연속되는 숫자 출력
let m = "AA BB 12 345";
let n = /[0-9]+/g
let result7 = m.match(n);
document.getElementById("show").innerHTML = result7;