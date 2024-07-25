"use strict";

document.addEventListener('DOMContentLoaded', () => {
  //별 초기 설정
  const star = document.querySelector('h1');
  star.style.position = 'absolute';

  //별 이동 출력 기능
  let [x, y] = [0, 0];
  const block = 20;
  const print = () => {
    star.style.left = `${x * block}px`
    star.style.top = `${y * block}px`
  };

  print()

  // 별 이동 기능
  const [left, up, right, down] = [37, 38, 39, 40];
  document.body.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case left:
        x -= 1
        break
      case up:
        y -= 1
        break
      case right:
        x += 1
        break
      case down:
        y += 1
        break
    }
    print()
  })
})