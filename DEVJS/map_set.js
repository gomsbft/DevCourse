"use strict";

// const set = new Set();
// console.log(set);

// const set1 = new Set([1, 2, 3, 3]);
// console.log(set1);

// const uniq = array => [...new Set(array)];
// console.log(uniq([2, 1, 2, 3, 4, 5, 4]));

// set 갯수 확인 
// const {size} = new Set([1, 2, 3, 3]);
// console.log(size);

//set 요소 추가
// const set = new Set();
// set.add(1).add(2);
// console.log(set);

//특정 요소가 있는지 확인
// const set = new Set([1, 2, 3]);
// console.log(set.has(5));

//특정 요소 제거
// set.delete(2);
// console.log(set);

//전체 삭제
// set.clear();
// console.log(set);

//for of, forEach() 사용
// let odds = new Set([1, 3, 5, 7, 9]);
// let sum = 0;
// for(let i of odds) {
//   sum += i;
// }
// console.log(sum);

// let product = 1;
// odds.forEach(o => product *= o);
// console.log(product);

// const userIDs = [101, 102, 101, 103, 102];
// const uniqueUserIDs = new Set(userIDs);
// uniqueUserIDs.forEach(userID => {
//   console.log(`ID: ${userID}`);
// })

// const tags = ['JavaScript', 'CSS', 'HTML', 'HTML'];
// const uniqueTags = new Set(tags);
// uniqueTags.forEach(tag => {
//   console.log(`tag: ${tag}`);
// })

//스프레드 문법 배열해체 할당
// const set = new Set([1, 2, 3]);
// console.log([...set]);
// const [a, ...rest] = set;
// console.log(a, rest);

//합집합, 교집합, 차집합
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 3, 2]);
// let union = new Set([...set1, ...set2]);
// let intersection = new Set([...set1].filter(a => set2.has(a)));
// console.log(intersection);
// let difference = new Set([...set1].filter(a => !set2.has(a)));
// console.log(difference);

