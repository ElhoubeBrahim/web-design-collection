/**
 * Open tabulation tab content on header clicked
 * 
 * @param {object} h 
 * @param {string} id 
 */
function open_tab(h, id) {
  // Get showed tabs
  let showed = document.querySelectorAll('.tabulation .tab-content .tab.show')
  // Get active headers
  let active = document.querySelectorAll('.tabulation .tab-header .header.active')
  // Get target tab
  let content = document.getElementById(id)

  // Hide showen tabs
  showed.forEach(el => {
    el.classList.remove('show')
  })

  // Desactivate active header
  active.forEach(el => {
    el.classList.remove('active')
  })

  // Show target tab
  h.classList.add('active')
  content.classList.add('show')
}