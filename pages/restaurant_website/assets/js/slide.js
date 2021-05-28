let slides = document.querySelectorAll('main.home-page .testimonials .content .box')
let width = slides[0].clientWidth

let currentSlide = 0
let length = slides.length - 1

slides.forEach((slide, i) => {
  slide.style.left = width * i + 'px'
})

function next() {
  currentSlide = (currentSlide >= length) ? 0 : currentSlide + 1
  slide()
}

function prev() {
  currentSlide = (currentSlide <= 0) ? length : currentSlide - 1
  slide()
}

function slide() {
  let activeSlide = document.querySelector('main.home-page .testimonials .content .box.active')
  activeSlide.classList.remove('active')

  slides[currentSlide].classList.add('active')

  slides.forEach((slide, i) => {
    slide.style.left = width * (i - currentSlide) + 'px'
  })
}