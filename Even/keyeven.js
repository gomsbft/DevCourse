"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea');
  const h1 = document.querySelector('h1');

  textarea.addEventListener('keyup', (e) => {
    const length = textarea.value.length;
    h1.textContent = `글자 수: ${length}`
  })
})