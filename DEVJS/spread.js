// function foo(...rest) {
//   console.log(rest);
// }

// foo(...[1, 2, 3]);

// let arr3 = [1, 4];
// let arr4 = [2, 3];
// arr3.splice(1, 0, arr4);
// console.log(arr3);

// const origin = [1, 2];
// const copy = [...origin];
// console.log(copy);
// console.log(copy === origin);

// const obj = {x: 1, y: 2};
// const copy = {...obj};
// console.log(copy);
// console.log(obj === copy);

// const mer = {x: 1, y: 2, ...{a: 3, b: 4}};
// console.log(mer);

// const mer = Object.assign({}, {x: 1, y: 2}, {y: 10, x: 3});
// console.log(mer);

// const merg = {...{x: 1, y: 2}, ...{y: 10, x: 3}};
// console.log(merg);

// const mer = {...{x: 1, y: 2}, ...{y: 3, x: 3}};
// console.log(mer);

// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one, two, three);

// const [a, b] = [1, 2];
// console.log(a, b);

// const [c, d] = [1];
// console.log(c, d);

const user = {firstName: "jiwon", lastName: "Han"};
const {lastName, firstName} = user;
console.log(firstName, lastName);