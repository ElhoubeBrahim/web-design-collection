// List of all subfolders in pages folder
const projects = ['meeting_room', 'blog_design', 'restaurant_website']

document.body.onload = () => {
  init_document()
}

/**
 * Init document body
 */
function init_document() {
  let marginTop = document.querySelector('header.page-header').clientHeight

  document.body.style.paddingTop = marginTop + 'px'
  document.querySelector('iframe#view').style.top = marginTop + 'px'
  document.querySelector('iframe#view').style.height = `calc(100% - ${marginTop}px)`
}

/**
 * Init index form and generate projects
 */
function init() {
  let id = new URLSearchParams(location.search).get('id') - 1
  let dir = projects[id] || null

  init_index()

  if (dir === null) {
    generate_projcts()
  } else {
    view_page(dir)
  }
}

/**
 * Set the max index to number of projects
 * And init index input to 0
 */
function init_index() {
  // Get index input
  let inputIndexEl = document.querySelector('header.page-header .navigation .index input')
  // Get max index element
  let maxIndexEl = document.querySelector('header.page-header .navigation .index span')
  // Set elements
  maxIndexEl.innerHTML = projects.length
  inputIndexEl.value = ''
}

/**
 * Generate projects from 'projects' constante
 */
function generate_projcts() {
  // Get pages container
  let pagesEL = document.querySelector('main.home-page .pages')

  // If there is no project to show
  if (projects.length == 0) {
    // Remove index navigation element
    document.querySelector('header.page-header .navigation').remove()
    // Show no content box
    pagesEL.appendChild(get_no_content_html())
    return
  }

  // Loop through all projects
  projects.forEach(project => {
    // Generate project
    pagesEL.appendChild(get_project_html(project))
  })
}

/**
 * Search projects and display results
 */
function get_search_results() {
  // Get HTML elements - pages conteiner + search input
  let pagesEL = document.querySelector('main.home-page .pages')
  let input = document.querySelector('main.home-page .search input')
  // Init regex pattern
  let pattern = input.value.split('').map((x) => {
    return `(?=.*${x})`
  }).join('')
  // Get results by filtring projects with regex
  let results = projects.filter((project) => {
    let regex = new RegExp(pattern, 'gi')
    return regex.test(project.replaceAll('_', ' '))
  })

  // Empty pages container
  pagesEL.innerHTML = ''

  // If there is no result
  if (results.length == 0) {
    // Generate no content box
    pagesEL.appendChild(get_no_content_html())
    return
  }

  // Else
  // Show reults
  results.forEach(result => {
    pagesEL.appendChild(get_project_html(result))
  })
}

/**
 * Generate project - page HTML
 * 
 * @param {string} dir 
 * @returns HTML Object
 */
function get_project_html(dir) {
  // Create page container
  let page = document.createElement('div')
  page.classList.add('page')

  // Create thumbnail image element
  let thumbnail = document.createElement('div')
  thumbnail.classList.add('thumbnail')
  thumbnail.innerHTML = `<img src="pages/${dir}/thumbnail.svg" alt="${dir}">`

  // Create page title element
  let title = document.createElement('div')
  title.classList.add('title')

  let span = document.createElement('span')
  span.innerText = dir.charAt(0).toUpperCase() + dir.slice(1).replaceAll('_', ' ')
  span.setAttribute('onclick', `view_page('${dir}')`)
  title.appendChild(span)

  // Append thumbnail and title to the page container
  page.appendChild(thumbnail)
  page.appendChild(title)

  // Return generated Element
  return page
}

/**
 * Generate no content box HTML
 * 
 * @returns HTML Object
 */
function get_no_content_html() {
  let el = document.createElement('div')
  el.classList.add('no-content')
  el.innerText = 'Sorry! We can\'t find what you\'re looking for'
  return el
}

/**
 * View selected project on a frame
 * 
 * @param {string} dir
 */
function view_page(dir) {
  // If dir is '/'
  if (dir == '/') {
    // Go to the home page
    location.href = '/web-design-collection'
    return
  }

  // Get and remove the home page
  let home = document.querySelector('main.home-page')
  if (home) home.remove()
  // Get and show index navigation form
  let navigation = document.querySelector('header.page-header .navigation')
  navigation.style.display = 'flex'
  // Get and remove the brand element
  let brand = document.querySelector('header.page-header .brand')
  if (brand) brand.remove()
  // Get and show Go back link
  let goBackLink = document.querySelector('header.page-header .go-back')
  goBackLink.style.display = 'block'
  // Show the selected page in the frame
  let frame = document.querySelector('iframe#view')
  frame.src = `pages/${dir}`
  frame.hidden = false
  // Set the index to the current page's index
  set_index((projects.indexOf(dir) + 1).toString())
  // Init body
  init_document()
}

/**
 * Go to the next project
 */
function next() {
  // Get index input
  let input = document.querySelector('header.page-header .navigation .index input')
  // Get value of current index
  let i = parseInt(input.value)
  if (input.value == '') i = 0
  // Increment index
  set_index((i + 1).toString())
  i = parseInt(input.value)
  // View the next page
  view_page(projects[i - 1] || '/')
}

/**
 * Go to the previous project
 */
function prev() {
  // Get index input
  let input = document.querySelector('header.page-header .navigation .index input')
  // Get value of current index
  let i = parseInt(input.value)
  if (input.value == '') i = 0
  // Decrement index
  set_index((i - 1).toString())
  i = parseInt(input.value)
  // View the previous page
  view_page(projects[i - 1] || '/')
}

/**
 * Set the index input to the given index
 * 
 * @param {integer} i 
 */
function set_index(i) {
  // Get the index input
  let input = document.querySelector('header.page-header .navigation .index input')
  // If the entered char is numeric
  if (i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57) {
    // Transform string i to integer
    i = parseInt(i)

    // If i is out of range
    if (i > projects.length) {
      i = 1
    }

    // If i is out of range
    if (i <= 0) {
      i = projects.length
    }

    // Set input value to i
    input.value = i
  } else {
    // Empty input
    input.value = ''
  }
}

/**
 * Get page on enter is pressed via index input
 * 
 * @param {Event} event 
 */
function get_page(event) {
  // Get index input
  let input = document.querySelector('header.page-header .navigation .index input')
  // Get the input value
  let i = parseInt(input.value)
  // If the pressed key was Enter
  if (event.keyCode === 13) {
    // View Project with the current index
    view_page(projects[i - 1] || '/')
    // Unfocus the index input
    input.blur()
  }
}