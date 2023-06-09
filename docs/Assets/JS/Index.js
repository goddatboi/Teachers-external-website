// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// MENU SHOW
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
// Validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ADD BLUR TO HEADER
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// SHOW SCROLL UP
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// EMAIL JS
const guestbookForm = document.getElementById('guestbook-form'),
      guestbookMessage = document.getElementById('guestbook-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_e08zg9d', 'template_s1176ps', '#guestbook-form', 'swd1SRD6EaMmNiesa', 'wcymxhzsrzzcngha')
        .then(() => {
            // Show sent message
            guestbookMessage.textContent = "Сообщение успешно отправлено ✅"

            // Remove mtssage after five seconds
            setTimeout(() => {
                guestbookMessage.textContent = ''
            }, 5000)

            // Clear input fields
            guestbookForm.reset()

        }, () => {
            // Show error message
            guestbookMessage.textContent = "Сообщение не было отправлено (Ошибка сервера) ❌"
        })
}

guestbookForm.addEventListener('submit', sendEmail)