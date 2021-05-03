// Fiw the bottom part of header on scroll
window.onscroll = () => {
  // get the website header
  let header = document.querySelector('header.website-header')
  // Get the Y scroll position
  let scroll = window.scrollY

  // If the top part of the header is not visible
  if (scroll > 78) {
    // Fix the header
    header.classList.add('fixed')
    // Add margin to the body
    document.body.style.marginTop = 100 + 'px'
  } else { // If not
    // Unfix the header
    header.classList.remove('fixed')
    // remove body's margin
    document.body.style.marginTop = 0
  }
}

// Hide dropdowns on click outside
window.onclick = (e) => {
  // If the clicked element is not in the dropdown
  if (e.target.closest('.dropdown') === null) {
    // Get the dropdown
    let dropdown = document.querySelector('.dropdown')

    // If it exists
    if (dropdown) {
      // Get the dropdown list
      let dropdownList = dropdown.querySelector('ul.dropdown-list')

      // If the dropdown list is visible
      if (dropdownList.classList.contains('show')) {
        // Hide it
        toggle_dropdown(dropdown.querySelector('button.toggler'))
      }
    }
  }

  // If the clicked element is not in the share list container
  if (e.target.closest('.share') === null) {
    // Get the share list container
    let share = document.querySelector('.share')

    // If it exists
    if (share) {
      // Get the share list
      let shareList = share.querySelector('ul.share-list')

      // If the share list is visible
      if (shareList.classList.contains('show')) {
        // Hide it
        toggle_share_menu(share.querySelector('button.toggler'))
      }
    }
  }
}

/**
 * Toggle dropdown visibility
 * 
 * @param {object} el 
 */
function toggle_dropdown(el) {
  // Toggle active class in the dropdown toggler button
  el.classList.toggle('active')
  // Toggle dropdown visibility
  el.parentElement.querySelector('ul.dropdown-list').classList.toggle('show')
}

/**
 * Toggle share list visibility
 *
 * @param {object} el
 */
function toggle_share_menu(el) {
  // Toggle share list visibility
  el.parentElement.querySelector('ul.share-list').classList.toggle('show')
}

/**
 * Generate popular articles in the home page
 */
function load_popular_articles() {
  // Get popular articles container
  let container = document.querySelector('main.home-page .popular-articles .articles')
  // Shuffle articles randomly
  articles.sort(() => .5 - Math.random())

  // Show the first 3 random articles
  for (let i = 0; i < 3; i++) {
    new Article(articles[i], container)
  }
}

/**
 * Generate last articles in the home page
 */
function load_last_articles() {
  // Get last articles container
  let container = document.querySelector('main.home-page .last-articles .articles')
  // Sort articles according to their dates
  articles.sort((a, b) => {
    let d1 = new Date(a.date).getTime()
    let d2 = new Date(b.date).getTime()

    return (d1 > d2) ? -1 : ((d2 > d1) ? 1 : 0)
  })

  // Generate those articles
  for (let i = 0; i < 3; i++) {
    new Article(articles[i], container)
  }
}

/**
 * Generate all articles in the articles page
 */
function load_articles() {
  // Get articles container
  let container = document.querySelector('main.articles-page .articles')
  // Shuffle articles randomly
  articles.sort(() => .5 - Math.random())

  // Loop through all articls
  articles.forEach(article => {
    // Render them
    new Article(article, container, 'v2')
  })
}

/**
 * Load signle article content
 */
function load_content() {
  // Get the article id from url
  let id = parseInt(location.hash.substr(1))
  // Get the target article
  let targetArticle = articles[id - 1]
  // If the id is not invalid
  if (typeof targetArticle == "undefined") {
    // Redirect to articles page
    location.assign('/articles.html')
    // Stop execution
    return
  }

  // Edit the page title
  document.title = `My Blog | ${targetArticle.title}`
  // Get article content container
  let articlesContainer = document.querySelector('main.article-page .article-content')
  // Render article content
  new Content(targetArticle, articlesContainer)
}

/**
 * Display quotes randomly in the home page
 */
function display_quote() {
  // Get quote container
  let quote = document.querySelector('main.home-page .intro blockquote')
  // Get owner container
  let owner = document.querySelector('main.home-page .intro span')
  // Get random index
  let i = Math.floor(Math.random() * quotes.length)

  // Show the choosen quote
  quote.innerHTML = quotes[i].quote
  owner.innerHTML = '—' + quotes[i].owner
}