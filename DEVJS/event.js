// const div = document.getElementById('my_div');
// const clearbtn = document.getElementById('clearbtn');
// const result = document.getElementById('result');

// div.addEventListener('click', (event) => {
//   result.innerHTML += '<div>click</div>';
// });

// div.addEventListener('mousedown', (event) => {
//   result.innerHTML += '<div>mousdown</div>';
// });

// div.addEventListener('mouseup', (event) => {
//   result.innerHTML += '<div>mouseup</div>';
// });

// clearbtn.addEventListener('click', (event) => {
//   result.innerHTML = "";
// })

// function sayHi(name) {
//   console.log(`hi ${name}`)
// }

const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log('button clicked 1');
})

button.addEventListener('click', function() {
  console.log('button clicked 2');
})