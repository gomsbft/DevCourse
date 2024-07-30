// const number = [20, 37, -21, 32, -2];
// const num = number.filter(v => v > 30);
// console.log(num.join(','));

// const numbers = [20, 37, -21, 32, -2];
// document.write(numbers[1] + ',');
// document.write(numbers[3]);

let scores = [67, 82, 97, 100, 92];

for(let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

for(let i of scores) {
  console.log(i);
}