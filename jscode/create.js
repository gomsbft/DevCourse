"use strict";

document.addEventListener('DOMContentLoaded', () => {
  //문서 객체 생성
  const header = document.createElement('h1');

  header.textContent = '문서 객체 동적'
  header.setAttribute('data-custom', '사용자 정의 속성')
  header.style.color = 'orange'
  header.style.backgroundColor = 'blue'

  document.body.appendChild(header)
})