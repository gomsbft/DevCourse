document.addEventListener('DOMContentLoaded', () => {
  let status = false;

  const checkbox = document.querySelector('input');
  checkbox.addEventListener('change', (e) => {
    status = e.currentTarget.checked
  })

  const link = document.querySelector('a');
  link.addEventListener('click', (e) => {
    if(!status) {
      e.preventDefault
    }
  })
})