/*=============== SHOW MENU ===============*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');

    // When scroll is greater than 80px, add the 'scroll-header' class
    if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

// Attach the function to the 'scroll' event
window.addEventListener('scroll', scrollHeader);


/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    // When scroll is greater than 350px, add the 'show-scroll' class
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

// Attach the function to the 'scroll' event
window.addEventListener('scroll', scrollUp);

/*==================== ABOUT TABS ====================*/

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Get the target ID from data-target
        const targetId = tab.dataset.target;
        const target = document.getElementById(targetId);

        if (target) { // Ensure target exists
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

   if(contactName.value === '' ||
    contactEmail.value === '' ||
    contactSubject.value === '' ||
    contactMessage.value === '')
    {
        //show message
        errorMessage.textContent = 'Write all input fields'
    }
    else{
       emailjs.sendForm('service_a2nnelt', 
        'template_gd4tggk',
         '#contact-form' , 
         '5I_SuY-Ea3y0nK36T'
        ).then(() => {
            //show message and adding color, window + dot to open emoji
        errorMessage.classList.add('color-first');
        errorMessage.textContent = 'Message sent ✔️';

        //remove message after 5 second

        setTimeout(()=> {
            errorMessage.textContent='';
        }, 5000);
        },(error) => {
            alert('OOPs! SOMETHING WENT WRONG...',error);
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

//Extra

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-menu").classList.toggle("active");
  });

  //From GPT

  
  

