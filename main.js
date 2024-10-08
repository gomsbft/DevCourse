import _ from "lodash"
import cube from "./modules.js"
// console.log(cube(2, 4));

import * as R from "./modules.js"
import myData from "./myData.json"
import axios from "axios"

// console.log(myData);
// const user = {
//   name: "mini",
//   age: 20,
//   emails: [
//     "123@naver.com",
//     "kim@hanmail.net"
//   ]
// }
// console.log(user);
// const str = JSON.stringify(user);
// console.log(str);
// const obj = JSON.parse(str);
// console.log(obj);

// localStorage.setItem('user', JSON.stringify(user));
// console.log(localStorage.getItem('user'));
// console.log(JSON.parse(localStorage.getItem('user')));
// const str = localStorage.getItem('user');
// const obj = JSON.parse(str);
// obj.age = 22;
// console.log(obj);
// localStorage.setItem('user', JSON.stringify(obj));

// console.log(R.arrs);
// console.log(R.getName());

// const user = {
//   name: "mini",
//   age : 30,
//   email: ["123@naver.com"]
// }
// const copyUser = user;
// console.log(copyUser === user);

// user.age = 20
// console.log(user);
// console.log(copyUser);

// const copyUser = Object.assign({}, user);
// console.log(user === copyUser);

// user.age = 20
// console.log(user);
// console.log(copyUser);

// const copyUser = {...user}
// console.log(copyUser === user);

// user.age = 20
// console.log(user);
// console.log(copyUser);

// user.email.push("han@naver.com")
// console.log(user.email === copyUser.email)

// console.log(user);
// console.log(copyUser);

// const copyUser = _.cloneDeep(user);
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// user.email.push('kim@naver.com');
// console.log(user.email === copyUser.email);

// const userA = [
//   {userID: '1', name: 'mini'},
//   {userID: '2', name: 'big'}
// ]
// const userB = [
//   {userID: '3', name: 'han'},
//   {userID: '4', name: 'kim'}
// ]

// const userC = userA.concat(userB);
// console.log(userC);
// console.log(_.uniqBy(userC, 'userID'));

// const userD = _.unionBy(userA, userB, "userID");
// console.log(userD)

// const users = [
//   {userId: '1', name: 'mini'},
//   {userId: '2', name: 'big'},
//   {userId: '3', name: 'kim'},
//   {userId: '4', name: 'han'}
// ]

// const foundUser = _.find(users, {name: 'han'});
// console.log(foundUser);
// const foundUserIndex = _.findIndex(users, {name: 'han'});
// console.log(foundUserIndex);
// _.remove(users, {name: 'mini'});
// console.log(users);

// let array = [1, 2, 3, 4];
// let evens = _.remove(array, function(n) {
//   return n % 2 === 0
// })
// console.log(array);
// console.log(evens);

// let myFriend = [
//   {name: 'kim', active: false},
//   {name: 'Lee', active: false}
// ]

// console.log(_.every(myFriend, {name: 'kim', active: false}));
// console.log(_.every(myFriend, ['active', false]));
// console.log(_.every(myFriend, 'active'));

// let mySister = [
//   {name: 'kim', age: 22, city: 'seoul'},
//   {name: 'Lee', age: 22, city: 'Daegu'},
//   {name: 'Lee', age: 24, city: 'Busan'},
//   {name: 'Park', age: 25, city: 'seoul'}
// ]
// console.log(_.filter(mySister, {age: 22, name: 'kim'}));
// console.log(_.filter(mySister, sister => sister.age === 22));

function getMovies(title) {
  axios
  .get(`http://www.omdbapi.com/?apikey=7035c60c&s=${title}`)
  .then((response) => {
    console.log(response);
    const results = document.getElementById('results');

    if(response.data.Search && response.data.Search.length > 0) {
      const movies = response.data.Search.slice(1, 10);
      movies.forEach((movie) => {
        const movieEl = document.createElement('div'); 
        const h1El = document.createElement('h1');
        const imgEl = document.createElement('img');
        const typeEl = document.createElement("p");
        const yearEl = document.createElement("p");

        h1El.textContent = movie.Title;
        imgEl.src = movie.Poster;
        yearEl.textContent = movie.Year;
        typeEl.textContent = movie.Type;

        movieEl.appendChild(h1El);
        movieEl.appendChild(imgEl);
        movieEl.appendChild(yearEl);
        movieEl.appendChild(typeEl);
        results.appendChild(movieEl);
      })
    }else {

    }
  })
}
getMovies();

//자전거 지도 만들기
// const API_KEY = "70544d6945675652"
// async function getData() {
//   const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/bikeList/1/10/`
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

// getData();