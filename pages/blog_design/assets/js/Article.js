/**
 * Article class is used to manage and rander 
 * a box for a given article data
 */
class Article {

  /**
   * Article constructor
   * 
   * @param {object} article 
   * @param {object} container 
   * @param {string} version 
   */
  constructor(article = {}, container, version = 'v1') {
    // Get current article
    this.article = article
    // If the card is v2
    if (version === 'v2') {
      // Render v2 card for articles page
      this.render_v2(container)
    } else {
      // Render v1 card for home page
      this.render_v1(container)
    }
  }

  /**
   * Render the v1 box for home page articles
   * 
   * @param {object} parent 
   */
  render_v1 = (parent) => {
    // Create article card container
    let article = document.createElement('div')
    article.classList.add('article-v1')

    // Get article info container - Picture + author + category
    let info = this.get_v1_info()

    // Get article title element
    let title = this.get_title('article-title')

    // Append children to the article container
    article.appendChild(info)
    article.appendChild(title)

    // If the parent container exists
    if (typeof parent != "undefined") {
      // Add the final article card to it
      parent.appendChild(article)
    }
  }

  /**
   * Render the v2 box for articles page listing
   * 
   * @param {object} parent 
   */
  render_v2 = (parent) => {
    // Create article card container
    let article = document.createElement('div')
    article.classList.add('article-v2')

    // Get article picture element
    let picture = this.get_v2_picture()
    // Get article data element - Author + title + excerpt
    let data = this.get_v2_data()

    // Append children to the article container
    article.appendChild(picture)
    article.appendChild(data)

    // If the parent container exists
    if (typeof parent != "undefined") {
      // Add the final article card to it
      parent.appendChild(article)
    }
  }

  /**
   * Render info for v1 card
   * picture + author + category
   * 
   * @returns object
   */
  get_v1_info = () => {
    // Create info container element
    let info = document.createElement('div')
    info.classList.add('info')

    // Create category element
    let category = document.createElement('div')
    category.classList.add('category')
    category.innerHTML = `<a href="#">${this.article.category}</a>`


    // Get article picture and author
    let picture = this.get_picture()
    let author = this.get_author()

    // Append children to the info container
    info.appendChild(category)
    info.appendChild(picture)
    info.appendChild(author)

    // Return generated info element
    return info
  }

  /**
   * Render picture for v2 card
   * picture + category
   * 
   * @returns object
   */
  get_v2_picture = () => {
    // Get picture for article
    let picture = this.get_picture()

    // Create category element
    let category = document.createElement('div')
    category.classList.add('category')
    category.innerHTML = `<a href="#">${this.article.category}</a>`

    // Append children for the picture element
    picture.appendChild(category)

    // Return generated picture element
    return picture
  }

  /**
   * Render data for v2 card
   * title + author + date + excerpt
   * 
   * @returns object
   */
  get_v2_data = () => {
    // Create the data element container
    let data = document.createElement('div')
    data.classList.add('data')

    // Get article title
    let title = this.get_title('title')

    // Create info - author + date - container
    let info = document.createElement('div')
    info.classList.add('info')

    // Get article author and date
    let author = this.get_author()
    let date = this.get_date()

    // Append children to the info container
    info.appendChild(author)
    info.appendChild(date)

    // Create article excerpt element
    let excerpt = document.createElement('div')
    excerpt.classList.add('excerpt')
    excerpt.innerHTML = `${this.article.content.substr(0, 100)}`
    excerpt.innerHTML += ` <a href="article.html#${this.article.id}" class="more">read more</a>`

    // Get the share button
    let share = this.get_share_list()

    // Append children to the data container
    data.appendChild(title)
    data.appendChild(info)
    data.appendChild(excerpt)
    data.appendChild(share)

    // Return generated data element
    return data
  }

  /**
   * Get article picture
   * 
   * @returns object
   */
  get_picture = () => {
    // Create the picture container element
    let picture = document.createElement('div')
    picture.classList.add('picture')

    // Create the image element
    let image = document.createElement('img')
    image.src = `assets/images/articles/${this.article.picture}`
    image.alt = this.article.title

    // Append image to the picture element
    picture.appendChild(image)

    // Return created picture
    return picture
  }

  /**
   * Get article author
   * 
   * @returns object
   */
  get_author = () => {
    // Get the author of article from users database
    let user = users[this.article.user - 1]

    // Create author container
    let author = document.createElement('div')
    author.classList.add('author')

    // Create author avatar container
    let avatar = document.createElement('div')
    avatar.classList.add('avatar')

    // Create author avatar image
    let image = document.createElement('img')
    image.src = `assets/images/users/${user.avatar}`

    // Create author name container
    let username = document.createElement('div')
    username.classList.add('username')
    username.innerText = user.name

    // Append children to their parents
    avatar.appendChild(image)
    author.appendChild(avatar)
    author.appendChild(username)

    // Return created element
    return author
  }

  /**
   * Get article date
   * 
   * @returns object
   */
  get_date = () => {
    // Create date container element
    let date = document.createElement('div')
    date.classList.add('date')

    // Create the date icon
    let icon = document.createElement('i')
    icon.classList.add('ri-time-line')

    // Create the date span
    let span = document.createElement('span')
    span.innerText = this.article.date

    // Append elements to the date container
    date.appendChild(icon)
    date.appendChild(span)

    // Return created element
    return date
  }

  /**
   * Get article title
   * 
   * @param {string} className 
   * @returns object
   */
  get_title = (className) => {
    // Create the article title element
    let title = document.createElement('div')
    title.classList.add(className)
    title.innerHTML = `<a href="article.html#${this.article.id}">${this.article.title}</a>`

    // Return created element
    return title
  }

  /**
   * Get article share button
   * 
   * @returns object
   */
  get_share_list = () => {
    // Create the share list container
    let share = document.createElement('div')
    share.classList.add('share')

    // Create the share button to toggle share list
    let toggler = document.createElement('button')
    toggler.classList.add('toggler')
    toggler.setAttribute('onclick', 'toggle_share_menu(this)')
    toggler.innerHTML = '<i class="ri-share-forward-line"></i>'

    // Create menu for avaliable social media
    let menu = document.createElement('ul')
    menu.classList.add('share-list')

    // Set allowed social media to share
    let accounts = ['facebook', 'twitter']

    // Loop throgh allowed social media
    accounts.forEach(account => {
      // Create list item for each one
      let item = document.createElement('li')
      let link = document.createElement('a')
      link.href = `http://${account}.com`
      let icon = document.createElement('i')
      icon.classList.add(`ri-${account}-line`)

      // Append the created item to the social media menu
      link.appendChild(icon)
      item.appendChild(link)
      menu.appendChild(item)
    })

    // Append created elements to the share list container
    share.appendChild(toggler)
    share.appendChild(menu)

    // Return created element
    return share
  }
}