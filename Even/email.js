"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const p = document.querySelector('p');
  const isEmail = (value) => {
    //골뱅이를 가지고 있다 && 골뱅이 뒤에 점이 있다
    return (value.indexOf('@') >1) && (value.split('@')[1].indexOf('.') > 1)
  }
  input.addEventListener('keyup'), (e) => {
    const value = e.currentTarget.value;
    if(isEmail(value)) {
      p.style.color = 'green'
      p.textContent = `이메일 형식입니다: ${value}`}
      else {
        p.style.color = 'red'
        p.textContent = `이메일 형식이 아닙니다: ${value}`}
    }
  })
