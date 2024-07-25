"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('select');
  const p = document.querySelector('p');

  select.addEventListener('change', (e) => {
    const options = e.currentTarget.options
    const list = [];
    for (const option of options) {
      if(option.selected) {
        list.push(option.textContent)
      }
    }
    p.textContent = `선택: ${list.join(',')}`
  })
})