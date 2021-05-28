document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.loader').classList.add('hide')
  }, 1000)

  setTimeout(() => {
    document.querySelector('.loader').remove()
  }, 1500)
})

document.addEventListener('scroll', () => {
  let btn = document.querySelector('.scroll-to-top')
  if (window.scrollY > 300) {
    btn.classList.add('show')
  } else {
    btn.classList.remove('show')
  }
})

document.querySelector('.scroll-to-top').onclick = () => {
  window.scrollTo(0, 0)
}

function generate_products() {
  let container = document.querySelector('main.products-page .container')

  products.forEach(product => {
    container.appendChild(generate_product_html(product))
  })
}

function generate_product_html(product) {
  let container = document.createElement('div')
  container.classList.add('product')

  let picture = document.createElement('div')
  picture.classList.add('picture')
  picture.innerHTML = '<div class="order"><a href="#">order</a></div>'

  let image = document.createElement('img')
  image.src = `assets/images/products/${product.picture}`

  let info = document.createElement('div')
  info.classList.add('info')

  let rate = document.createElement('div')
  rate.classList.add('rate')
  rate.innerHTML = `<i class="ri-star-fill"></i><span>${product.rating}</span>`

  let price = document.createElement('div')
  price.classList.add('rate')
  price.innerHTML = `<i>$</i><span>${product.price}</span>`

  picture.appendChild(image)
  info.appendChild(rate)
  info.appendChild(price)
  container.appendChild(picture)
  container.appendChild(info)

  return container
}

function generate_members() {
  let container = document.querySelector('main.team-page .container')

  team.forEach(member => {
    container.appendChild(generate_member_html(member))
  })
}

function generate_member_html(member) {
  let container = document.createElement('div')
  container.classList.add('member')

  let picture = document.createElement('div')
  picture.classList.add('picture')

  let image = document.createElement('img')
  image.src = `assets/images/team/${member.picture}`

  let name = document.createElement('div')
  name.classList.add('name')
  name.innerText = member.name

  picture.appendChild(image)
  container.appendChild(picture)
  container.appendChild(name)

  return container
}

function generate_testimonials() {
  let container = document.querySelector('main.home-page .testimonials .container .content')

  testimonials.forEach(testimonial => {
    container.appendChild(generate_testimonial_html(testimonial))
  })

  container.querySelector('.box').classList.add('active')
}

function generate_testimonial_html(testimonial) {
  let container = document.createElement('div')
  container.classList.add('box')

  let info = document.createElement('div')
  info.classList.add('info')

  let picture = document.createElement('div')
  picture.classList.add('picture')

  let image = document.createElement('img')
  image.src = `assets/images/users/${testimonial.picture}`

  let name = document.createElement('div')
  name.classList.add('name')
  name.innerText = testimonial.name

  let quote = document.createElement('div')
  quote.classList.add('quote')
  quote.innerText = testimonial.quote

  picture.appendChild(image)
  info.appendChild(picture)
  info.appendChild(name)
  container.appendChild(info)
  container.appendChild(quote)

  return container
}