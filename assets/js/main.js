/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav--toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Get the target ID from data-target
        const targetSelector = tab.dataset.target; // includes #
        const target = document.querySelector(targetSelector);

        if (target) {
            // Remove 'tab__active' from all tab contents
            tabContents.forEach((tabContent) => {
                tabContent.classList.remove("tab__active");
            });

            // Add 'tab__active' to the clicked tab content
            target.classList.add("tab__active");

            // Remove 'tab__active' from all buttons
            tabs.forEach((tab) => {
                tab.classList.remove("tab__active");
            });

            // Add 'tab__active' to clicked button
            tab.classList.add("tab__active");
        }
    });
});

/*=============== CONTACT FORM =============== */

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === '') {
        //show message
        errorMessage.textContent = 'Write all input fields'
    }
    else {
        emailjs.sendForm('service_a2nnelt',
            'template_gd4tggk',
            '#contact-form',
            '5I_SuY-Ea3y0nK36T'
        ).then(() => {
            //show message and adding color, window + dot to open emoji
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message sent ✔️';

            //remove message after 5 second

            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('OOPs! SOMETHING WENT WRONG... \n' + JSON.stringify(error));
        }
        );

        //clear input fields

        contactName.value = '';

        contactEmail.value = '';

        contactSubject.value = '';

        contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

/*==================== PORTFOLIO MODAL ====================*/
function openWeatherModal() {
    document.getElementById("weatherModal").style.display = "block";
}

function closeWeatherModal() {
    document.getElementById("weatherModal").style.display = "none";
}

/*==================== NBDA DETAILS TOGGLE ====================*/
function openNBDA() {
    document.getElementById("nbdaModal").style.display = "block";
}

function closeNBDA() {
    document.getElementById("nbdaModal").style.display = "none";
}

/*==================== AMAR BARI DETAIL TOGGLE ====================*/
function openAmarBari() {
    document.getElementById("amarBariModal").style.display = "block";
}

function closeAmarBari() {
    document.getElementById("amarBariModal").style.display = "none";
}





