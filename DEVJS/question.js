// const number = [20, 37, -21, 32, -2];
// const num = number.filter(v => v > 30);
// console.log(num.join(','));

// const numbers = [20, 37, -21, 32, -2];
// document.write(numbers[1] + ',');
// document.write(numbers[3]);

// let scores = [67, 82, 97, 100, 92];

// for(let i = 0; i < scores.length; i++) {
//   console.log(scores[i]);
// }

// for(let i of scores) {
//   console.log(i);
// }

// const tel = ['010', '1234', '5678'];
// let a = tel.join('-');
// console.log(a);

// const colors = ['빨강', '노랑', '파랑', '주황'];
// let a = colors.shift();
// let b = colors + '/';
// let c = b.push(...a);
// console.log(c);

// 3명의 학생 4 과목 성적의 합계와 평균을 구하라
// const scores = [[83, 90, 70, 87], [87, 93, 62, 83], [98, 90, 77, 97]];

// let sum, average;
// let text = '';
// for(let i = 0; i < 3; i++) {
//   sun = 0;
//   for(let j = 0; j < 4; j++) {
//     sum += scores[i][j];
//   }
//   average = sum / 4;
//   text += i + '번째 학생의 합계: ' + sum + ', 평균: ' + average;
// }

// console.log(text);

//배열을 이용하여 성적의 합계와 평균을 구하시오

const mathScores = [90, 85, 70, 86, 97];
let sum = 0;
for(let i = 0; i < mathScores.length; i++) {
  sum += mathScores[i];
}

console.log('성적 합계: ' + sum);
console.log('성적 평균: ' + sum / 5);