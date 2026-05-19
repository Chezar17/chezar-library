// =========================================
// CHEZAR FIELD PREP MANIFEST — script.js
// =========================================

// ---------- LIVE DATE ----------
(function setDate() {
  const el = document.getElementById('live-date');
  if (!el) return;
  const now  = new Date();
  const opts = { year: 'numeric', month: '2-digit', day: '2-digit' };
  el.textContent = 'DATE: ' + now.toLocaleDateString('en-GB', opts).replace(/\//g, '-');
})();

// ---------- COUNTER ANIMATION ----------
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target  = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1600;
    const step     = 16;
    const increment = target / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current);
    }, step);
  });
}

// ---------- SCROLL REVEAL FOR SECTIONS ----------
(function initScrollReveal() {
  const sections = document.querySelectorAll('.gear-section');
  if (!sections.length) return;

  // Set initial stagger delays
  sections.forEach((s, i) => {
    s.style.transitionDelay = `${i * 0.05}s`;
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  sections.forEach(s => observer.observe(s));
})();

// ---------- HERO COUNTER TRIGGER ----------
(function initHeroCounter() {
  const hero = document.querySelector('.hero-stats');
  if (!hero) return;
  let fired = false;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !fired) {
      fired = true;
      animateCounters();
      obs.disconnect();
    }
  }, { threshold: 0.3 });
  obs.observe(hero);
})();

// ---------- OPEN AMAZON LINK ----------
function openLink(url) {
  if (!url || url.includes('YOUR-')) return; // placeholder guard
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ---------- CARD HOVER SOUND EFFECT (subtle) ----------
// Uncomment and replace with a real tiny audio file if desired
/*
const hoverSound = new Audio('/sounds/blip.mp3');
hoverSound.volume = 0.08;
document.querySelectorAll('.gear-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});
  });
});
*/

// =========================================
// CMS LOGIN MODAL
// =========================================

const TERMINAL_LINES = [
  'Initializing secure channel...',
  'Awaiting operator authentication...',
  'CZR-CMS v2.1 — Restricted access active.',
  'All sessions are logged and monitored.',
];

let loginAttempts = 0;
let lockoutUntil  = 0;
let typingTimer   = null;

const ERRORS = [
  // wrong password / general
  [
    '⚠ ACCESS DENIED — Credentials do not match any authorized operator.',
    '⚠ Invalid access code. Verify and try again.',
    '⚠ Authentication failure. Password mismatch detected.',
    '⚠ Wrong password. This attempt has been logged.',
    '⚠ Credential mismatch. Ensure CAPS LOCK is off.',
  ],
  // after 3 attempts
  [
    '⚠ Multiple failed attempts detected. Account flagged for review.',
    '⚠ Repeated failures. Unauthorized access attempts are recorded.',
    '⚠ Security alert: excessive failed logins. Cooling down.',
  ],
  // lockout
  [
    '⛔ Too many failed attempts. Access temporarily locked.',
    '⛔ Brute-force protection activated. Try again later.',
  ],
];

function openLoginModal() {
  const modal = document.getElementById('loginModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  startTerminalTyping();
  setTimeout(() => document.getElementById('cms-user').focus(), 300);
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  clearTimeout(typingTimer);
  // Reset form
  document.getElementById('cms-user').value = '';
  document.getElementById('cms-pass').value = '';
  clearAllErrors();
}

function handleBackdropClick(e) {
  if (e.target === document.getElementById('loginModal')) closeLoginModal();
}

// Terminal typing effect
function startTerminalTyping() {
  const el = document.getElementById('terminal-typing');
  if (!el) return;
  el.textContent = '';
  clearTimeout(typingTimer);
  const line = TERMINAL_LINES[Math.floor(Math.random() * TERMINAL_LINES.length)];
  let i = 0;
  function type() {
    if (i < line.length) {
      el.textContent += line[i++];
      typingTimer = setTimeout(type, 28 + Math.random() * 18);
    }
  }
  type();
}

function clearFieldError(id) {
  const input = document.getElementById(id);
  const errId = id === 'cms-user' ? 'err-user' : 'err-pass';
  if (input) input.classList.remove('input-error');
  const errEl = document.getElementById(errId);
  if (errEl) errEl.textContent = '';
}

function clearAllErrors() {
  clearFieldError('cms-user');
  clearFieldError('cms-pass');
  const box = document.getElementById('login-error-box');
  if (box) box.classList.remove('show');
}

function showGlobalError(msg) {
  const box = document.getElementById('login-error-box');
  const msgEl = document.getElementById('login-error-msg');
  if (!box || !msgEl) return;
  msgEl.textContent = msg;
  box.classList.remove('show');
  void box.offsetWidth; // force reflow for re-animation
  box.classList.add('show');
}

function setAttemptCounter(text) {
  const el = document.getElementById('attempt-counter');
  if (el) el.textContent = text;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function handlePassKey(e) {
  if (e.key === 'Enter') attemptLogin();
}

function togglePassword() {
  const input = document.getElementById('cms-pass');
  const btn   = document.getElementById('toggle-pass-btn');
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '◎';
    btn.style.color = 'var(--green)';
  } else {
    input.type = 'password';
    btn.textContent = '◉';
    btn.style.color = '';
  }
}

function attemptLogin() {
  const now = Date.now();

  // Lockout check
  if (lockoutUntil > now) {
    const secs = Math.ceil((lockoutUntil - now) / 1000);
    showGlobalError(`⛔ Account locked. Try again in ${secs} second${secs !== 1 ? 's' : ''}.`);
    return;
  }

  const user = document.getElementById('cms-user').value.trim();
  const pass = document.getElementById('cms-pass').value;

  let hasError = false;

  // Blank username
  if (!user) {
    document.getElementById('cms-user').classList.add('input-error');
    document.getElementById('err-user').textContent = '↑ Operator ID is required.';
    hasError = true;
  }

  // Blank password
  if (!pass) {
    document.getElementById('cms-pass').classList.add('input-error');
    document.getElementById('err-pass').textContent = '↑ Access code is required.';
    hasError = true;
  }

  if (hasError) return;

  // Simulate loading
  const btn = document.getElementById('login-submit-btn');
  const label = document.getElementById('btn-label');
  btn.disabled = true;
  label.textContent = 'VERIFYING...';

  setTimeout(() => {
    btn.disabled = false;
    label.textContent = 'AUTHENTICATE';
    loginAttempts++;

    // Mark fields as errored
    document.getElementById('cms-user').classList.add('input-error');
    document.getElementById('cms-pass').classList.add('input-error');

    // Pick error message based on attempt count
    let errorMsg;
    if (loginAttempts >= 5) {
      lockoutUntil = Date.now() + 30000; // 30s lockout
      errorMsg = pickRandom(ERRORS[2]);
      setAttemptCounter(`⛔ LOCKED — 30 second cooldown active.`);
      setTimeout(() => {
        lockoutUntil = 0;
        setAttemptCounter('Lockout expired. You may try again.');
      }, 30000);
    } else if (loginAttempts >= 3) {
      errorMsg = pickRandom(ERRORS[1]);
      setAttemptCounter(`⚠ Failed attempts: ${loginAttempts} / 5 — Further failures will trigger lockout.`);
    } else {
      errorMsg = pickRandom(ERRORS[0]);
      setAttemptCounter(`Failed attempts: ${loginAttempts}`);
    }

    showGlobalError(errorMsg);

    // Re-type terminal with warning
    const termEl = document.getElementById('terminal-typing');
    if (termEl) {
      termEl.textContent = '';
      const warningLines = [
        'AUTH FAILED — access denied.',
        `Login attempt ${loginAttempts} recorded.`,
        'Verifying credentials... FAILED.',
        'Access code rejected. Try again.',
      ];
      const line = pickRandom(warningLines);
      let i = 0;
      function type() {
        if (i < line.length) {
          termEl.textContent += line[i++];
          setTimeout(type, 30);
        }
      }
      type();
    }
  }, 900 + Math.random() * 500); // random delay feels more real
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('loginModal');
    if (modal && modal.classList.contains('active')) closeLoginModal();
  }
});

// ---------- ACTIVE NAV HIGHLIGHT ON SCROLL ----------
(function initNavHighlight() {
  const navLinks = document.querySelectorAll('.cat-btn');
  const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href')));

  const updateActive = () => {
    let current = null;
    sections.forEach((sec, i) => {
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120) current = i;
    });
    navLinks.forEach((a, i) => {
      a.style.color        = i === current ? 'var(--green)' : '';
      a.style.borderColor  = i === current ? 'var(--green)' : '';
      a.style.background   = i === current ? 'var(--green-glow)' : '';
    });
  };

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();

// ---------- PAGE LOAD INTRO GLITCH ----------
(function pageLoadGlitch() {
  const headline = document.querySelector('.glitch');
  if (!headline) return;
  let runs = 0;
  const interval = setInterval(() => {
    headline.style.opacity = runs % 2 === 0 ? '0.5' : '1';
    runs++;
    if (runs >= 6) {
      headline.style.opacity = '1';
      clearInterval(interval);
    }
  }, 80);
})();
