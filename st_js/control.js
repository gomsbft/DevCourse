// 이벤트를 연결합니다.
window.onload = function () {
  // 변수를 선언합니다.
  let output = '';
  for (let i = 0; i < 10; i++) {
      output += '<h1>Header - ' + i + '</h1>';
  }
  
  // 문서 객체 내부의 글자를 변경합니다.
  document.body.innerHTML = output;
  // innerHTML 속성을 사용합니다.
  // document.body.innerHTML = output;
};