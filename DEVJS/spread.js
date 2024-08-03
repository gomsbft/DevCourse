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

// const user = {firstName: "jiwon", lastName: "Han"};
// const {lastName, firstName} = user;
// console.log(firstName, lastName);

// function printTodo({content, completed}) {
//   console.log(`할일 ${content}는 ${completed ? '완료' : '미완료'} 상태입니다.`);
// }
// printTodo({id: 1, content: "HTML", completed: true});

// const user = {
//   name: "Han",
//   address: {
//     zipCode: "12312",
//     city: "Seoul"
//   }
// }
// const {address: { city }} = user;
// console.log(city);

// 객체 person을 만들고 name과 age를 구조 분해 할당하여 변수 userName과 userAge에 각각 저장한 후
// 두변수를 활용하여 아래와 같은 형식의 문자열을 출력하는 코드를 작성하시오

const person = {name: 'jiwon', age: 30};
const {name: userName, age: userAge} = person;
console.log(`이름: ${userName} 나이: ${userAge}`);