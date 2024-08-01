"use strict";

// let div = document.querySelector("div");
// console.log(div);
// function changeContent() {
//   console.log('click');
//   div.outerHTML = "<h1>DOM API</h1><p>선수 조건: 없음</p>"
// }

// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele => {ele.style.color = 'red';});

// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach(elems => {elems.style.color = "bule"});

// const apple = document.getElementsByClassName('fruit apple');
// [...apple].forEach(elem => {elem.style.color = 'orange'});

// const boxEl = document.querySelector('.box');
// boxEl.addEventListener('click', function() {
//   console.log('click');
//   boxEl.classList.toggle('active');
// })

// const boxEls = document.querySelectorAll('.box');
// boxEls.forEach(function(boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`);
// })

const fruits = document.getElementById('fruits');

function activate({target}) {
  // if(!target.matches('#fruits > li')) return;
  [...fruits.children].forEach(fruit => {
    fruit.classList.toggle('active', fruit === target)
  })
}
document.getElementById('apple').onclick = activate;
document.getElementById('banana').onclick = activate;
document.getElementById('cherry').onclick = activate;
// fruit.onclick = activate;
