/* ─────────────────────────────────────────
   CHEZAR RAMADHAN — Portfolio JS
   main.js
───────────────────────────────────────── */

// ── NAV: Scrolled state + mobile toggle ──
const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav__links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});


// ── REVEAL ON SCROLL ──
// Staggered delay for sibling reveals in the same parent
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;

      // Stagger siblings within the same grid/timeline
      const siblings = Array.from(el.parentElement.querySelectorAll('.reveal:not(.visible)'));
      const index = siblings.indexOf(el);
      el.style.transitionDelay = `${index * 80}ms`;

      el.classList.add('visible');
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ── ACTIVE NAV LINK HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));


// ── SMOOTH CURSOR GLOW (desktop only) ──
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  document.body.appendChild(glow);

  let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  let tx = cx, ty = cy;

  document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });

  (function animate() {
    cx += (tx - cx) * 0.1;
    cy += (ty - cy) * 0.1;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    requestAnimationFrame(animate);
  })();
}


// ── HERO NAME: letter split animation ──
// Runs once on page load for the hero heading
window.addEventListener('DOMContentLoaded', () => {
  // Trigger nav reveal
  setTimeout(() => nav.style.opacity = '1', 100);

  // Staggered hero reveals via CSS delay
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 120 + 100}ms`;
    // Trigger immediately for hero (above fold)
    setTimeout(() => el.classList.add('visible'), 50);
  });
});
