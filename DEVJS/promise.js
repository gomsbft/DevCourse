// let success = true;

// function getUser() {
//   return new Promise((resolve, reject) => {
//     if(success) {
//       setTimeout(() => {
//         resolve(
//           [
//             {name: "Kim", email: "Kim@naver.com"},
//             {name: "Lee", email: "Lee@naver.com"},
//             {name: "Han", email: "Han@naver.com"}
//           ]
//         )
//       }, 1000);
//     }else {
//       reject('실패')
//     }
  
//   })
// }

// let promise = getUser();
// promise
//   .then(users => users.find(user => user.name === "Kim"))
//   .then(users => console.log(users))
//   .catch(error => console.log(error))
//   .finally(() => console.log('작업 완료')); 

//병렬 promise
// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject('실패'), 3000));

// const promises = [p1, p2, p3];

// Promise.allSettled(promises)
//   .then(result => {
//     const fulResult = result.filter(result => result.status == "fulfilled")
//     .map(result => result.value);
//     const total = fulResult.reduce((sum, value) => sum + value, 0);
//     console.log(`결과 : ${fulResult}`);
//     console.log(`합계 : ${total}`);
//   })
  
// 순차
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve(
       [
         {name: "Kim", email: "Kim@naver.com"},
         {name: "Lee", email: "Lee@naver.com"},
         {name: "Han", email: "Han@naver.com"}
       ]
     )
    }, 2000);
  })
}

function findUser(users) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.find(user => user.name === "Kim"))
    }, 1000);
  })
}

function getEmail(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user.email)
    }, 3000)
  })
}

getUser()
  .then(findUser)
  .then(getEmail)
  .then(console.log)