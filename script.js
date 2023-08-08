document.addEventListener('DOMContentLoaded', function () {
  // Dropdown functionality for projects
  const projectsButton = document.getElementById('projects-button')
  const projectsDropdown = document.getElementById('projects-dropdown')
  const projectLinks = projectsDropdown.getElementsByTagName('a')

  projectsButton.addEventListener('click', function () {
    console.log('Projects button clicked')
    projectsDropdown.classList.toggle('hidden')
  })

  // Add event listeners to project links
  for (let i = 0; i < projectLinks.length; i++) {
    projectLinks[i].addEventListener('click', function (event) {
      projectsDropdown.classList.add('hidden') // Hide the dropdown
      console.log('Project link clicked:', this.getAttribute('href'))
    })
  }

  // Dropdown functionality for contact
  const contactButton = document.getElementById('contact-button')
  const contactDropdown = document.getElementById('contact-dropdown')

  contactButton.addEventListener('click', function () {
    contactDropdown.classList.toggle('hidden')
  })
})

console.log('Script is running')
