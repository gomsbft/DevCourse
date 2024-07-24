"use strict";

//HTML 태그를 쉽게 만들 수 있는 콜백 함수 선언
const h1 = (text) => `<h1>${text}</h1>`;

document.body.innerHTML += h1('1번째 script 태그');