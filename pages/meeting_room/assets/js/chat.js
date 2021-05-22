/**
 * Generate chat content
 */
function generate_chat() {
  // Set number of chating users on the tab header
  document.querySelector('main.app .sidebar .tabulation .tab-header .header:last-child span').innerText = `(${chat.length})`
  // Get chat area = Where to render messages
  let chatArea = document.querySelector('main.app .sidebar .tabulation .tab-content .tab.chat')

  // Loop through messages
  chat.forEach(msg => {
    // Generate message
    chatArea.appendChild(generate_chat_html(msg))
  })

  // Scroll to bottom
  scroll_down('chat')
}

/**
 * Generate signle message chat html
 * 
 * @param {object} msg 
 * @returns object
 */
function generate_chat_html(msg) {
  // Get user
  let user = users[msg.user - 1]

  // Message container
  let container = document.createElement('div')
  container.classList.add('box')

  // Message info container
  let info = document.createElement('div')
  info.classList.add('info')

  // User info container
  let userInfo = document.createElement('div')
  userInfo.classList.add('user')

  // User avatar element
  let avatar = document.createElement('div')
  avatar.classList.add('avatar')
  let image = document.createElement('img')
  image.src = `assets/images/users/${user.avatar}`
  avatar.appendChild(image)

  // Add avatar and user name to user info container
  userInfo.appendChild(avatar)
  userInfo.innerHTML += `<div class="username">${user.name}</div>`

  // Create message sent time element
  let time = document.createElement('div')
  time.classList.add('time')
  time.innerText = msg.time

  // Add message info to the info container
  info.appendChild(userInfo)
  info.appendChild(time)

  // Message content container
  let body = document.createElement('div')
  body.classList.add('body')

  // Loop throgh message segments
  msg.content.forEach(part => {
    // Create message paragraph element
    let para = document.createElement('span')
    para.classList.add('para')
    para.innerText = part

    // Append the part to the message body
    body.appendChild(para)
  })

  // Append info and content to the message container
  container.appendChild(info)
  container.appendChild(body)

  // Return rendered message
  return container
}

// Last user who sent a message
let lastUser = chat[chat.length - 1].user
// Last sent message
let lastMessage = chat[chat.length - 1].content

/**
 * Send a test message
 * 
 * @param {Event} event 
 */
function send_message(event = null) {
  // Get message input element
  let input = document.querySelector('main.app .sidebar .message .input input')
  // Get message value
  let content = input.value

  // If the user pressed enter or click on the send button
  // If the content is not empty
  if ((event === null || event.key === 'Enter') && content != '') {
    // Create message object
    let msg = {
      id: chat.length + 1,
      user: Math.floor(Math.random() * users.length) + 1,
      content: [content],
      time: `${new Date().getHours()}:${new Date().getMinutes()}`
    }

    // Get chat area element
    let chatArea = document.querySelector('main.app .sidebar .tabulation .tab-content .tab.chat')

    // If the user sent a message twice
    if (msg.user == lastUser) {
      // Remove his last message
      chatArea.removeChild(chatArea.lastChild)
      // Append last sent message to the current message
      msg.content = lastMessage.concat(msg.content)
    }

    // Generate chat message
    chatArea.appendChild(generate_chat_html(msg))
    // Open chat tab
    open_tab(document.querySelector('main.app .sidebar .tabulation .tab-header .header:last-child'), 'chat')
    // Scroll to bottom
    scroll_down('chat')
    // Empty message input
    input.value = ''

    // Init last sent message info
    lastUser = msg.user
    lastMessage = msg.content
  }
}