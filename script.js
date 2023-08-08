// script.js
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
