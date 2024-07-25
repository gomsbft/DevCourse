"use strict";

function test() {
  try {
    console.log('A 위치입니다.')
    throw "예외 강제 발생"
  } catch (exception) {
    console.log('B 위치입니다.')
    return
  }
  console.log('C의 위치 입니다.')
}

test()