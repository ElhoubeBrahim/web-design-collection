document.addEventListener('click', (event) => {
  let dropdown = event.target.closest('.dropdown')
  if (!dropdown) {
    document.querySelector('.dropdown').classList.remove('active')
  }
})

function toggle(el) {
  el.parentElement.classList.toggle('active')
}