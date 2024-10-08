document.addEventListener('DOMContentLoaded', () => {
  let 현재값
  let 변환상수 = 10
  const select = document.querySelector('select')
  const input = document.querySelector('input')
  const span = document.querySelector('span')
  const calculate = () => {
    span.textContent = (현재값 * 변환상수).toFixed(2)
  }
  select.addEventListener('change', (event) => {
    const options = event.currentTarget.options
    const index = event.currentTarget.options.selectedIndex
    변환상수 = Number(options[index].value)
    calculate()
  })
  input.addEventListener('keyup', (event) => {
    현재값 = Number(event.currentTarget.value)
    calculate()
 })
})
    