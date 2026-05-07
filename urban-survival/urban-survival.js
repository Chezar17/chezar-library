/* ============================================================
   URBAN SURVIVAL SERIES — Main Script
   ============================================================ */


/* ── BOOK DATA ────────────────────────────────────────────── */

const books = [
  {
    id: 0,
    num: "Guidebook I",
    title: "Securing the Basics",
    subtitle: "Water, Air, Food & Shelter",
    desc: "The foundation of urban survival. This guide walks you through securing the four essentials — clean water, breathable air, sustainable food, and reliable shelter — when city infrastructure fails or becomes unsafe.",
    details: [
      "Digital PDF — instant download",
      "Covers short-term and long-term scenarios",
      "Apartment and city-dwelling focused",
    ],
    gumroadUrl: "https://chezar17.gumroad.com/l/urbansurvival-i",
    available: true,
  },
  {
    id: 1,
    num: "Guidebook II",
    title: "Communication, Navigation & Group Safety",
    subtitle: "Stay connected. Stay mobile. Stay safe.",
    desc: "When networks go down and streets become unreliable, how do you find your people, navigate the city, and keep your group together? This guide covers low-tech communication, urban navigation, and group safety protocols.",
    details: [
      "Digital PDF — instant download",
      "Covers offline communication methods",
      "Includes urban navigation and rally point planning",
    ],
    gumroadUrl: "https://chezar17.gumroad.com/l/urbansurvival-ii",
    available: true,
  },
  {
    id: 2,
    num: "Guidebook III",
    title: "Medical & First Aid",
    subtitle: "In development",
    desc: "Coming soon.",
    details: [],
    gumroadUrl: "#",
    available: false,
  },
  {
    id: 3,
    num: "Guidebook IV",
    title: "Security & Self-Defense",
    subtitle: "In development",
    desc: "Coming soon.",
    details: [],
    gumroadUrl: "#",
    available: false,
  },
  {
    id: 4,
    num: "Guidebook V",
    title: "Mental Resilience",
    subtitle: "In development",
    desc: "Coming soon.",
    details: [],
    gumroadUrl: "#",
    available: false,
  },
  {
    id: 5,
    num: "Guidebook VI",
    title: "Community Survival",
    subtitle: "In development",
    desc: "Coming soon.",
    details: [],
    gumroadUrl: "#",
    available: false,
  },
  {
    id: 6,
    num: "Guidebook VII",
    title: "Evacuation & Bug-Out Planning",
    subtitle: "In development",
    desc: "Coming soon.",
    details: [],
    gumroadUrl: "#",
    available: false,
  },
];


/* ── MODAL ELEMENTS ───────────────────────────────────────── */

const overlay    = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalImg      = document.getElementById('modalImg');
const modalNum      = document.getElementById('modalNum');
const modalTitle    = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalDesc     = document.getElementById('modalDesc');
const modalDetails  = document.getElementById('modalDetails');
const modalCta      = document.getElementById('modalCta');


/* ── OPEN / CLOSE ─────────────────────────────────────────── */

function openModal(id) {
  const book = books.find(b => b.id === id);
  if (!book || !book.available) return;

  const card  = document.querySelector(`.book-card[data-id="${id}"]`);
  const imgEl = card ? card.querySelector('.book-thumb img') : null;

  modalImg.src              = imgEl ? imgEl.src : '';
  modalImg.alt              = book.title;
  modalNum.textContent      = book.num;
  modalTitle.textContent    = book.title;
  modalSubtitle.textContent = book.subtitle;
  modalDesc.textContent     = book.desc;
  modalCta.href             = book.gumroadUrl;

  modalDetails.innerHTML = book.details
    .map(d => `<li>${d}</li>`)
    .join('');

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}


/* ── EVENT LISTENERS ──────────────────────────────────────── */

document.querySelectorAll('.book-card:not(.coming-soon)').forEach(card => {
  card.addEventListener('click', () => {
    const id = parseInt(card.getAttribute('data-id'), 10);
    openModal(id);
  });
});

modalClose.addEventListener('click', closeModal);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
