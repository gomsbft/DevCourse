"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const p = document.querySelector('p');
  const input = document.querySelector('input');
  const button = document.querySelector('button');

  const saveValue = localStorage.getItem('input');
  if(saveValue) {
    input.value = saveValue;
    p.textContent = `이전 실행 때의 마지막 값: ${saveValue}`
  }

  input.addEventListener('keyup', (e) => {
    const value = e.currentTarget.value;
    localStorage.setItem('input', value)
  })

  button.addEventListener('click', (e) => {
    localStorage.clear()
    input.value = ''
  })
})