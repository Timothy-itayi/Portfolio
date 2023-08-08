// index.html
document.addEventListener('DOMContentLoaded', function () {
  const blogButton = document.querySelector('.animated-button.blog')
  const resumeButton = document.querySelector('.animated-button.resume')

  blogButton.addEventListener('click', () => {
    blogButton.classList.toggle('bg-blue-500')
    blogButton.classList.toggle('hover:bg-blue-600')
  })

  resumeButton.addEventListener('click', () => {
    resumeButton.classList.toggle('bg-green-500')
    resumeButton.classList.toggle('hover:bg-green-600')
  })
})

//contact.html
// Get the elements
const contactButton = document.getElementById('contact-button')
const contactDropdown = document.getElementById('contact-dropdown')

// Add click event listener to the contact button
contactButton.addEventListener('click', () => {
  contactDropdown.classList.toggle('hidden')
})
//DropDown.addEventListener for Projects in nav bar
document.addEventListener('DOMContentLoaded', function () {
  const projectsButton = document.getElementById('projects-button')
  const projectsDropdown = document.getElementById('projects-dropdown')

  projectsButton.addEventListener('click', function () {
    projectsDropdown.classList.toggle('hidden')
  })
})
