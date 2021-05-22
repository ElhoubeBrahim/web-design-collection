/**
 * Toggle microphone status
 * 
 * @param {object} el 
 */
function toggle_mic(el) {
  // Set classes
  let on = 'ri-mic-line'
  let off = 'ri-mic-off-line'

  // Toggle icon classes
  toggle_classes(el, on, off)
}

/**
 * Toggle camera status
 *
 * @param {object} el
 */
function toggle_camera(el) {
  // Set classes
  let on = 'ri-vidicon-line'
  let off = 'ri-camera-off-line'

  // Toggle icon classes
  toggle_classes(el, on, off)
}

/**
 * Toggle sound status
 *
 * @param {object} el
 */
function mute(el) {
  // Set classes
  let on = 'ri-volume-up-line'
  let off = 'ri-volume-mute-line'

  // Toggle icon classes
  toggle_classes(el, on, off)
}

/**
 * Toggle icon classes on element
 * 
 * @param {object} el 
 * @param {string} on 
 * @param {string} off 
 */
function toggle_classes(el, on, off) {
  // Get icon element
  let icon = el.querySelector('i')

  // Toggle icon classes
  if (icon.classList.contains(on)) {
    icon.classList.add(off)
    icon.classList.remove(on)
  } else {
    icon.classList.add(on)
    icon.classList.remove(off)
  }
}

/**
 * Open presentation in fullscreen mode
 */
function fullscreen() {
  let view = document.querySelector('main.app .presentation .content')
  view.requestFullscreen()
}

/**
 * Scroll element to bottom
 * 
 * @param {string} id 
 */
function scroll_down(id) {
  let el = document.getElementById(id)
  el.scrollTo(0, el.scrollHeight)
}

/**
 * Toggle the sidebar on small screens
 */
function toggle_sidebar() {
  document.querySelector('main.app .presentation').classList.toggle('hide')
  document.querySelector('main.app aside.sidebar').classList.toggle('show')
}