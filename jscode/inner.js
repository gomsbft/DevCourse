"use strict";

document.addEventListener('DOMContentLoaded',() => {
  const a = document.querySelector('#a');
  const b = document.querySelector('#b');

  a.textContent = '<h1>textContent 속성</h1>'
  b.innerHTML = '<h1>inHTML 속성</h1>'
})