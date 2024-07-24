"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const rects = document.querySelectorAll('.rect');

  rects.forEach((rect, index) => {
    const width = (index + 1) * 100;
    const src = `http://loremflickr.com/${width}/100`;
    // src 속성에 값을 지정
    rect.setAttribute('src', src);
  })
})