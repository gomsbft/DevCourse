"use strict";

// let div = document.querySelector("div");
// console.log(div);
// function changeContent() {}
//   console.log('click');
//   div.outerHTML = "<h1>DOM API</h1><p>선수 조건: 없음</p>"
// }

// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele => {ele.style.color = 'red';});

// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach(elems => {elems.style.color = "bule"});

// const apple = document.getElementsByClassName('fruit apple');
// [...apple].forEach(elem => {elem.style.color = 'orange');

// const boxEl = document.querySelector('.box');
// boxEl.addEventListener('click', function() {
//   console.log('click');
//   boxEl.classList.toggle('active');
// })

// const boxEls = document.querySelectorAll('.box');
// boxEls.forEach(function(boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`);
// })

// const fruits = document.getElementById('fruits');

// function activate({target}) {
  // if(!target.matches('#fruits > li')) return;
//   [...fruits.children].forEach(fruit => {
//     fruit.classList.toggle('active', fruit === target)
//   })
// }
// document.getElementById('apple').onclick = activate;
// document.getElementById('banana').onclick = activate;
// document.getElementById('cherry').onclick = activate;
// fruits.onclick = activate;


// const buttons = document.querySelectorAll(".check");
// buttons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     button.classList.toggle('active');
//   })
// })

const box = document.querySelector(".box");
const init = {x: 0, y: 0};
const offset = {x: 0, y: 0};

const move = e => {
  offset.x = e.clientX - init.x;
  offset.y = e.clientY - init.y;
  box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`
};

// box.addEventListener('mousedown', e => {
//   init.x = e.clientX - offset.x;
//   init.y = e.clientY - offset.y;

//   document.addEventListener('mousemove', move);
// });

// document.addEventListener('mouseup', () => {
//   document.removeEventListener('mousemove', move);
// });

box.addEventListener('click', e => {
  init.x = e.clientX - offset.x;
  init.y = e.clientY - offset.y;

  document.addEventListener('mousemove', move)
})
