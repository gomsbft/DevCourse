"use strict";

document.addEventListener('DOMContentLoaded', () => {
  //문서 객체 추출
  const output = document.querySelector('#output');
  const radios = document.querySelectorAll('[name=pet]');
  
  //모든 라디오 버튼
  radios.forEach((radio) => {
    //이벤트 연결
    radio.addEventListener('change', (e) => {
      const current = e.currentTarget
      if(current.checked) {
        output.textContent = `좋아하는 애완동물은 ${current.value}이시군요!`
      }
    })
  })
})