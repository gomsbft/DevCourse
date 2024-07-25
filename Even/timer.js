document.addEventListener('DOMContentLoaded', () => {
  let [timer, timerld] = [0, 0]
  const h1 = document.querySelector('h1');
  const checkbox = document.querySelector('input');

  checkbox.addEventListener('change', (e) => {
    if(e.currentTarget.checked) {
      //체크 상태
      timerld = setInterval(() => {
        timer += 1
        h1.textContent = `${timer}초`
      }, 1000)
    }else {
      //체크 해제 상태
      clearInterval(timerld)
    }
  })
}) 