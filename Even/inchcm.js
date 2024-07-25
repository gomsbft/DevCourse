"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const button = document.querySelector('button');
  const p = document.querySelector('p');

  button.addEventListener('click', () => {
    //입력을 숫자로 변환
    const inch = Number(input.value);
    if(isNaN(inch)) {
      p.textContent = '숫자를 입력해주세요.'
      return
    }
    //변환 해서 출력
    const cm = inch * 2.54;
    p.textContent = `${cm} cm`
  })
})