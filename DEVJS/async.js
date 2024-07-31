// let sayHello = async () => "안녕"

const { reject } = require("async");

// sayHello()
// .then(console.log);

// class
// class Greeter {
//   async sayHello() {
//     return "안녕"
//   }
// }

// const greeter = new Greeter();
// greeter.sayHello()
// .then(console.log);

//promise 객체 반환

async function sayHello() {
  return Promise.resolve("안녕");
}
sayHello()
.then(console.log);

async function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("안녕"))
  })
}
sayHello()
.then(console.log);
