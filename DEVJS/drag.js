const item = document.querySelector(".item");

// item.addEventListener("dragstart", (e) => {
//   console.log("드래그 시작");
// })

// item.addEventListener("drag", (e) => {
//   console.log("드래그 하면 나옴");
// })

const container = document.querySelector(".container");
container.addEventListener("dragenter", (e) => {
  console.log('1번 박스 영역에 최초 진입');
})
container.addEventListener("dragleave", (e) => {
  console.log("1번 박스 영역 떠나면 출력!");
})
container.addEventListener("dragover", (e) => {
  console.log('1번 박스에 있음');
  e.preventDefault();
})
container.addEventListener("drop", (e) => {
  console.log('1번 박스 영역에 드롭');
})


const container2 = document.querySelector(".container2");
container2.addEventListener("dragenter", (e) => {
  console.log('2번 박스 영역에 최초 진입');
})
container2.addEventListener("dragleave", (e) => {
  console.log("2번 박스 영역 떠나면 출력!");
})
container2.addEventListener("dragover", (e) => {
  console.log('2번 박스에 있음');
  e.preventDefault();
})
container2.addEventListener("drop", (e) => {
  console.log('2번 박스 영역에 드롭');
})
