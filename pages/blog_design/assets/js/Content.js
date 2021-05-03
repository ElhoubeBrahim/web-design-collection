/**
 * Content class is used to rander
 * selected article content
 */
class Content {

  /**
   * Content constructor
   * 
   * @param {object} article 
   * @param {object} container 
   */
  constructor(article = {}, container) {
    // Get the given article
    this.article = article
    // Render article content
    this.render(container)
  }

  /**
   * Render article content
   * 
   * @param {object} parent 
   */
  render = (parent) => {
    // Get article picture element
    let picture = this.get_picture()

    // Get article title element
    let title = document.createElement('div')
    title.classList.add('title')
    title.innerText = this.article.title

    // Get article info - author + date
    let info = this.get_info()
    // Get article full content
    let content = this.get_content()

    // Append created element to the content container
    parent.appendChild(picture)
    parent.appendChild(title)
    parent.appendChild(info)
    parent.appendChild(document.createElement('hr'))
    parent.appendChild(content)
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
   * Get article info
   * author + date
   * 
   * @returns object
   */
  get_info = () => {
    // Create the info container
    let info = document.createElement('div')
    info.classList.add('info')

    // Get article author and date
    let author = this.get_author()
    let date = this.get_date()

    // Append elements the info container
    info.appendChild(author)
    info.appendChild(date)

    // Return created elements
    return info
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
   * Get article content
   * 
   * @returns object
   */
  get_content = () => {
    // Create content container
    let content = document.createElement('div')
    content.classList.add('content')

    // Create dummy content
    content.innerHTML = `<p>${this.article.content}</p>`
    content.innerHTML += `<div class="header">Why this is cool ?</div>`
    content.innerHTML += `<p>${this.article.content}</p>`

    // Return created content
    return content
  }
}