const navbar = document.querySelector('.navbar')

const scrollToSection = (event) => {
  event.preventDefault()

  const to = document.querySelector(event.target.getAttribute('href')).offsetTop

  window.scroll({
    top: to - navbar.clientHeight,
    behavior: 'smooth'
  })
}


document.querySelectorAll('.navbar .navbar__link a')
  .forEach(item => item.addEventListener('click', scrollToSection))


window.addEventListener('scroll', e => {
  if (window.scrollY > window.innerHeight - 200) {
    navbar.classList.add('scrolled')
  }
  if (window.scrollY < window.innerHeight - 200){
    navbar.classList.remove('scrolled')
  }
})

document.querySelector('.mobile-menu-activator')
  .addEventListener('click', e => {
    e.preventDefault()

    e.target.classList.toggle('active')

    const mobileNav = document.querySelector('.navbar__links')
    mobileNav.classList.toggle('active')
  })
