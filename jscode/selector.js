"use strict";

document.addEventListener('DOMContentLoaded',() => {
  //요소 읽어 들임
  const header = document.querySelector('h1');

  const imgs = document.querySelector('img');

  //텍스트, 스타일 변경
  header.textContent = 'HERMES'
  header.style.color = '#FFA048'
  header.style.backgroundColor = 'black'
  header.style.padding = '20px'
  header.style.width = '150px'
  imgs.style.width = '100px'
})