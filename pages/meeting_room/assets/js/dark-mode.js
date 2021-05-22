/**
 * On document loaded
 */
window.onload = function () {
  // Get default mode
  let mode = localStorage.getItem('mode') || 'dark'
  // Enable choosen mode
  enable_mode(mode)
}

/**
 * Toggle mode on toggler is clicked
 */
function toggle_mode() {
  // Get Default mode
  let mode = localStorage.getItem('mode')

  // If it is light
  if (mode === 'light') {
    // Enable dark mode
    enable_mode('dark')
    // Store current mode
    localStorage.setItem('mode', 'dark')
  } else {
    // Else
    // Enable light mode
    enable_mode('light')
    // Store current mode
    localStorage.setItem('mode', 'light')
  }

}

/**
 * Enable choosen mode
 * 
 * @param {string} mode 
 */
function enable_mode(mode) {
  // Get toggler icon
  let icon = document.querySelector('main.app .presentation .tools .mode')

  // If it is light
  if (mode === 'light') {
    // Enable light mode
    document.body.classList.add('light')
    // Toggle icon symbol
    icon.classList.add('ri-moon-line')
    icon.classList.remove('ri-sun-line')
  } else {
    // Else
    // Enable dark mode
    document.body.classList.remove('light')
    // Toggle icon symbol
    icon.classList.add('ri-sun-line')
    icon.classList.remove('ri-moon-line')
  }
}