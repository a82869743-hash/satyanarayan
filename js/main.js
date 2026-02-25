// =====================================================
// main.js — Navigation, Loader, Dark Mode, Scroll FX
// =====================================================

// ── Loader ──────────────────────────────────────────
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 2200);
  }
});

// ── Dark Mode Toggle ──────────────────────────────────
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') body.classList.add('dark');

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });
}

// ── Navbar Scroll Behaviour ──────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  // AOS trigger
  revealAOS();
});

// ── Active Nav Link ───────────────────────────────────
function setActiveNav() {
  const links = document.querySelectorAll('.nav-links a, .mobile-nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    link.classList.toggle('active', href === current || (current === '' && href === 'index.html'));
  });
}
setActiveNav();

// ── Hamburger / Mobile Nav ────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

// ── Simple AOS (Animate On Scroll) ───────────────────
function revealAOS() {
  const els = document.querySelectorAll('[data-aos]');
  const viewH = window.innerHeight;
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    const delay = parseInt(el.getAttribute('data-aos-delay') || 0);
    if (rect.top < viewH - 80) {
      setTimeout(() => el.classList.add('aos-animate'), delay);
    }
  });
}
window.addEventListener('DOMContentLoaded', revealAOS);
window.revealAOS = revealAOS;

// ── Toast Notification ────────────────────────────────
function showToast(msg, duration = 2800) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}
window.showToast = showToast;

// ── Smooth scroll for anchor links ───────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
