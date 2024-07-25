"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const p = document.querySelector('p');
  const input = document.querySelector('input');
  const button = document.querySelector('button');

  button.style.color = '#faab23'
  input.style.backgroundColor = '#FAD89E'
  p.style.color = '#7774b6'


  const saveValue = localStorage.getItem('input');
  if(saveValue) {
    input.value = saveValue;
    p.textContent = `마지막 값: ${saveValue}`
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