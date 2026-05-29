/* ══════════════════════════════════════════
   GRACIA OVERLAY CONTROLLER — script.js
   ══════════════════════════════════════════ */

/* ── MODAL: Open ── */
function openModal(id) {
  document.getElementById('modal-' + id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── MODAL: Close ── */
function closeModal(id) {
  document.getElementById('modal-' + id).classList.remove('open');
  document.body.style.overflow = '';
}

/* ── MODAL: Close on overlay background click ── */
document.querySelectorAll('.modal-overlay').forEach(function(el) {
  el.addEventListener('click', function(e) {
    if (e.target === el) {
      el.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

/* ── LIGHTBOX: Open ── */
function openLightbox(el) {
  var img = el.querySelector('img');
  if (!img || !img.src || img.style.display === 'none') return;
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').classList.add('open');
}

/* ── LIGHTBOX: Close ── */
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

/* ── ESC key: close any open modal or lightbox ── */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(function(el) {
      el.classList.remove('open');
      document.body.style.overflow = '';
    });
    closeLightbox();
  }
});
