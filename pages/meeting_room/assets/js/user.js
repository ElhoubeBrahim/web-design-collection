/**
 * Generate participents list
 */
function generate_users() {
  // Set number of participents in the tab header
  document.querySelector('main.app .sidebar .tabulation .tab-header .header:first-child span').innerText = `(${users.length})`
  // Get participents area
  let usersArea = document.querySelector('main.app .sidebar .tabulation .tab-content .tab.participents .users')

  // Loop through participents
  users.forEach(user => {
    // Generate participent HTML
    usersArea.appendChild(generate_user_html(user))
  })
}

/**
 * Get signle participent HTML
 * 
 * @param {object} user 
 * @returns object
 */
function generate_user_html(user) {
  // User container
  let container = document.createElement('div')
  container.classList.add('user')
  container.setAttribute('onclick', `view_user(${user.id})`)

  // User info container
  let info = document.createElement('div')
  info.classList.add('info')

  // User avatar
  let avatar = document.createElement('div')
  avatar.classList.add('avatar')
  let image = document.createElement('img')
  image.src = `assets/images/users/${user.avatar}`
  avatar.appendChild(image)

  // Add avatar and user name to user info container
  info.appendChild(avatar)
  info.innerHTML += `<span>${user.name}</span>`

  // User micro and camera status container
  let status = document.createElement('ul')
  status.classList.add('status')
  status.innerHTML +=
    (user.micro) ? '<li><i class="ri-mic-line"></i></li>' : '<li><i class="ri-mic-off-line"></i></li>'
  status.innerHTML +=
    (user.camera) ? '<li><i class="ri-vidicon-line"></i></li>' : '<li><i class="ri-camera-off-line"></i></li>'

  // Add user data to the user container
  container.appendChild(info)
  container.appendChild(status)

  // Return generated HTML
  return container
}

/**
 * View participent screen
 * 
 * @param {string} id 
 */
function view_user(id) {
  // Get user data
  let user = users[id - 1] || user[0]
  // Get HTML elements
  let viewArea = document.querySelector('main.app .presentation .content')
  let userInfo = viewArea.querySelector('.info')
  let viewImage = viewArea.querySelector('.image img')

  // Change user info on the presentation area
  userInfo.querySelector('.user .avatar img').src = `assets/images/users/${user.avatar}`
  userInfo.querySelector('.user span').textContent = user.name

  // Change user micro and camera status on the presentation area
  let status = userInfo.querySelector('ul.status')
  status.innerHTML =
    (user.micro) ? '<li><i class="ri-mic-line"></i></li>' : '<li><i class="ri-mic-off-line"></i></li>'
  status.innerHTML +=
    (user.camera) ? '<li><i class="ri-vidicon-line"></i></li>' : '<li><i class="ri-camera-off-line"></i></li>'

  // Set image view to the user screen
  viewImage.src =
    (user.view) ? `assets/images/views/${user.view}` : `assets/images/users/${user.avatar}`
  // Toggle the sidebar on small screens
  toggle_sidebar()
}