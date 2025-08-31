// Theme toggle with persistence

const themeToggle = document.getElementById('themeToggle');

const storedTheme = localStorage.getItem('theme');

if (storedTheme) document.body.setAttribute('data-theme', storedTheme);

themeToggle?.addEventListener('click', () => {

  const next = document.body.getAttribute('data-theme') === 'light' ? '' : 'light';

  if (next) document.body.setAttribute('data-theme', next);

  else document.body.removeAttribute('data-theme');

  localStorage.setItem('theme', next);

});

// Smooth scroll & active link highlight

const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

navLinks.forEach(link =>

  link.addEventListener('click', e => {

    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  })

);

// Footer year

const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

// Contact form demo

const form = document.getElementById('contactForm');

const statusEl = document.getElementById('formStatus');

form?.addEventListener('submit', e => {

  e.preventDefault();

  const data = new FormData(form);

  const name = data.get('name')?.toString().trim();

  const email = data.get('email')?.toString().trim();

  const message = data.get('message')?.toString().trim();

  if (!name || !email || !message) {

    setStatus('Please fill in all fields.');

    return;

  }

  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {

    setStatus('Enter a valid email.');

    return;

  }

  window.location.href = `mailto:hello@example.com?subject=Portfolio Contact from ${encodeURIComponent(

    name

  )}&body=${encodeURIComponent(message + '\\n\\n(' + email + ')')}`;

  setStatus('Thanks! Your email app should open.');

  form.reset();

});

function setStatus(msg) {

  if (statusEl) {

    statusEl.textContent = msg;

    setTimeout(() => (statusEl.textContent = ''), 4000);

  }

}