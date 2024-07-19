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