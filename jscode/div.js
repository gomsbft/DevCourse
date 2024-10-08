"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('body > div');

  divs.forEach((div, index) => {
    console.log(div, index);
    const val = index * 10
    div.style.height = `10px`
    div.style.backgroundColor = `rgba(${val}, ${val}, ${val})`
  })
})