"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('h1');
  const print = (e) => {
    let output = "";
    output += `alt: ${e.altKey}<br>`
    output += `ctrl: ${e.ctrlKey}<br>`
    output += `shift: ${e.shiftKey}<br>`
    output += `code: ${typeof(e.code) !== 'undefined' ? e.code : e.keyCode}<br>` //e.code가 있으면 e.code 출력
    h1.innerHTML = output
  }

  document.addEventListener('keydown', print)
  document.addEventListener('keyup', print)

})