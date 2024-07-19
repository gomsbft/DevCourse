function names() {
  console.log('my');
  console.log('name');
}

names();

//매개 변수
function f(x, y) {
  return x * y;
}

console.log(f(5, 10));

//콜백 함수
function callTen(callback) {
  for(let i = 0; i < 10; i++) {
    callback();
  }
}

callTen(function() {
  console.log('함수 호출 할꺼야!!');
});

