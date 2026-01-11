/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== ABOUT TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('tab__active')
        })
        if (target) target.classList.add('tab__active')

        tabs.forEach(tab => {
            tab.classList.remove('tab__active')
        })
        tab.classList.add('tab__active')
    })
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link')
            } else {
                navLink.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== MODAL LOGIC ===============*/
function openNBDA() {
    document.getElementById('nbdaModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeNBDA() {
    document.getElementById('nbdaModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openAmarBari() {
    document.getElementById('amarBariModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAmarBari() {
    document.getElementById('amarBariModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openWeatherModal() {
    document.getElementById('weatherModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeWeatherModal() {
    document.getElementById('weatherModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
    const modals = [
        document.getElementById('nbdaModal'),
        document.getElementById('amarBariModal'),
        document.getElementById('weatherModal')
    ];
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    });
}

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message')

const sendEmail = (e) => {
    e.preventDefault()

    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
        errorMessage.textContent = 'Write all the input fields 📩'
    } else {
        // Preserving emailjs integration
        if (typeof emailjs !== 'undefined') {
            emailjs.sendForm('service_a2nnelt', 'template_gd4tggk', '#contact-form', '5I_SuY-Ea3y0nK36T')
                .then(() => {
                    errorMessage.classList.add('color-first');
                    errorMessage.textContent = 'Message sent ✅';
                    setTimeout(() => { errorMessage.textContent = ''; }, 5000);
                    contactForm.reset();
                }, (error) => {
                    alert('OOPs! SOMETHING WENT WRONG... \n' + JSON.stringify(error));
                });
        } else {
            // Mock success if emailjs is missing for testing
            errorMessage.style.color = 'var(--first-color)'
            errorMessage.textContent = 'Message sent (Mock) ✅'
            setTimeout(() => { errorMessage.textContent = ''; }, 5000);
            contactForm.reset();
        }
    }
}
if (contactForm) {
    contactForm.addEventListener('submit', sendEmail)
}

/*=============== NEURAL CIRCUITRY ANIMATION ===============*/
class NeuralBackground {
    constructor() {
        this.canvas = document.getElementById('scifi-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.hexChars = '0123456789ABCDEF';
        this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
        this.pulse = { x: 0, y: 0, active: false, radius: 0 };

        this.resize();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        const count = window.innerWidth < 768 ? 20 : 40;
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                hex: '0x' + this.hexChars[Math.floor(Math.random() * 16)] + this.hexChars[Math.floor(Math.random() * 16)],
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.4 + 0.1,
                size: Math.random() * 12 + 10
            });
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.targetX = e.clientX;
            this.mouse.targetY = e.clientY;
        });
        window.addEventListener('mousedown', (e) => {
            this.pulse.x = e.clientX;
            this.pulse.y = e.clientY;
            this.pulse.active = true;
            this.pulse.radius = 0;
        });
    }

    draw3DGrid() {
        this.ctx.lineWidth = 1;
        const horizon = this.height * 0.4;
        const tiltX = (this.mouse.x - this.width / 2) * 0.03;
        const tiltY = (this.mouse.y - this.height / 2) * 0.03;

        // Perspective lines
        for (let i = -10; i <= 20; i++) {
            const startX = (this.width / 10) * i + tiltX;
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(70, 130, 180, ${0.1 * (1 - Math.abs(i - 5) / 10)})`;
            this.ctx.moveTo(startX, this.height);
            this.ctx.lineTo(this.width / 2 + (startX - this.width / 2) * 0.2, horizon);
            this.ctx.stroke();
        }

        // Depth lines
        for (let i = 0; i < 10; i++) {
            const y = horizon + (this.height - horizon) * Math.pow(i / 10, 2) + tiltY;
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(70, 130, 180, ${0.1 * (i / 10)})`;
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.width, y);
            this.ctx.stroke();
        }
    }

    drawNeuralTraces() {
        this.ctx.lineWidth = 0.5;
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 200) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - dist / 200)})`;
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(5, 5, 10, 0.1)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
        this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

        this.draw3DGrid();
        this.drawNeuralTraces();

        this.particles.forEach(p => {
            p.y -= p.speed;
            if (p.y < -50) {
                p.y = this.height + 50;
                p.x = Math.random() * this.width;
            }

            const dx = this.mouse.x - p.x;
            const dy = this.mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            let forceX = 0, forceY = 0;
            if (dist < 150) {
                forceX = dx * 0.01;
                forceY = dy * 0.01;
            }

            this.ctx.fillStyle = `rgba(135, 206, 235, ${p.opacity})`;
            this.ctx.font = `${p.size}px monospace`;
            this.ctx.fillText(p.hex, p.x - forceX, p.y - forceY);
        });

        if (this.pulse.active) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${1 - this.pulse.radius / 500})`;
            this.ctx.arc(this.pulse.x, this.pulse.y, this.pulse.radius, 0, Math.PI * 2);
            this.ctx.stroke();
            this.pulse.radius += 5;
            if (this.pulse.radius > 500) this.pulse.active = false;
        }

        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new NeuralBackground();
});
