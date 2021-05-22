/**
 * Toggle dropdown visibility
 * 
 * @param {string} id 
 */
function toggle_dropdown(id) {
  // Get the target dropdown
  let dropdown = document.getElementById(id)
  // If exists
  if (dropdown) {
    // Toggle visibility
    dropdown.classList.toggle('show')
  }
}

// Add click event to the whole document
// Hide dropdown on click outside
document.addEventListener('click', function (event) {
  // If the clicked element was not a dropdown
  if (event.target.closest('.dropdown') == null) {
    // Get all dropdowns
    let dropdowns = document.querySelectorAll('.dropdown')
    // Loop through all them
    dropdowns.forEach((dropdown) => {
      // If it is visible
      if (dropdown && dropdown.classList.contains('show')) {
        // Hide it
        dropdown.classList.remove('show')
      }
    })
  }
})