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

// const button = document.querySelector('button');

// const handleClick = () => console.log('button click');

// button.onclick = handleClick;

// button.removeEventListener('click', handleClick);

// button.onclick  = 'null';


// button.addEventListener('click', function add() {
//   console.log('click!');
//   button.removeEventListener('click', add);
// });


// const handleClick = () => console.log('button Click');

// button.addEventListener('click', handleClick);

// button.removeEventListener('click', handleClick);


// button.addEventListener('click', function() {
//   console.log('button clicked 1');
// })

// button.addEventListener('click', function() {
//   console.log('button clicked 2');
// })


const msg = document.querySelector('.message');

function showCoords(e) {
  msg.textContent = `clientX ${e.clientX}, clientY: ${e.clientY}`
}
// document.onclick = showCoords;