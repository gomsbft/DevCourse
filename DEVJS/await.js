// async function sayHello() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("안녕"), 1000)
//   })
// }
// async function display() {
//   try {
//     let result = await sayHello();
//     console.log(result);
//   } catch(e) {
//     console.log(e);
//   }
// }

// display();

//순차적 프로미스처럼 만들기
// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       [
//         {name: 'Kim', email: 'Kim@naver.com'},
//         {name: 'Lee', email: 'Lee@naver.com'},
//         {name: 'Park', email: 'Park@naver.com'},
//       ]
//     }, 2000);
//   });
// }
// function findUser(users, name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(users.find(user => user.name === name))
//     }, 1000)
//   })
// }
// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(user.email);
//     }, 1000)
//   })
// }
// async function getUserEmail(name) {
//   let users = await getUser();
//   let user = await findUser(users, name);
//   let email = await getEmail(user)
//   return email;
// }
// async function displayUserEmail() {
//   let email = await getUserEmail("Kim");
//   console.log(email);
// }
// displayUserEmail();

//제너레이터와 프로미스
// const myPromise = () => new Promise((resolve) => {
//   resolve("value is");
// })

// function* gen() {
//   let result = "";
//   yield myPromise().then(data => {result = data});
//   yield result + '1';
// }

// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1);

// val1.value.then(() => {
//   console.log(asyncFunc.next());
// })

/////////////
async function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout = 1000) {
  let next = from;
  while(next <= to) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => resolve(next), timeout);
      next += interval;
    })
  }
}
(async() => {
  let seq = asyncSequence(2, 10 ,2);
  for await (let value of seq) {
    console.log(value);
  }
})();