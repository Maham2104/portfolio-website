
// Hamburger Menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link =>
  link.addEventListener('click', () => navMenu.classList.remove('active'))
);


// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});


// Typed Text Effect

const heroText = document.querySelector('.hero-text p');
const texts = [
  "A passionate Frontend Developer.",
  "Building interactive web experiences.",
  "Turning ideas into code."
];
let count = 0, index = 0;

(function type() {
  const currentText = texts[count % texts.length];
  heroText.textContent = currentText.slice(0, ++index);

  if (index === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 120);
  }
})();


// Skills Animation
const skillFills = document.querySelectorAll('.skill-fill');
let skillsAnimated = false;

window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  if (!skillsAnimated && window.scrollY + window.innerHeight > skillsSection.offsetTop + 100) {
    skillsAnimated = true;
    skillFills.forEach(fill => (fill.style.width = fill.dataset.width));
  }
});


// Project Filter

const filterButtons = document.querySelectorAll('.project-filters button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.project-filters .active').classList.remove('active');
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    projects.forEach(project => {
      project.style.display =
        filter === 'all' || project.classList.contains(filter)
          ? 'block'
          : 'none';
    });
  });
});


// Dark Mode

const toggle = document.querySelector('.dark-mode-toggle i');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.classList.toggle('fa-moon');
  toggle.classList.toggle('fa-sun');
});


// Contact Form

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert('✅ Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  } else {
    alert('⚠️ Please fill in all fields.');
  }
});


// Navbar Shadow on Scroll

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.style.boxShadow =
    window.scrollY > 100 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';
});


// Initialize AOS

AOS.init({
  duration: 1200,
  once: true // animate only once
});
