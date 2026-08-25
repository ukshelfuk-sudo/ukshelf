// UK Shelf — smooth interactions
(function () {
  'use strict';

  // Year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Gentle reveal on scroll
  var revealables = document.querySelectorAll('h1, .lead, .section, .eyebrow');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealables.forEach(function (el) { el.classList.add('reveal'); observer.observe(el); });
  }

  // Drop-list form (demo: no backend yet — confirms and stores locally)
  var form = document.getElementById('drop-form');
  var note = document.getElementById('form-note');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('drop-email').value.trim();
      if (!email) return;
      try {
        var list = JSON.parse(localStorage.getItem('ukshelf-droplist') || '[]');
        if (list.indexOf(email) === -1) list.push(email);
        localStorage.setItem('ukshelf-droplist', JSON.stringify(list));
      } catch (_) { /* storage unavailable — still confirm */ }
      note.textContent = '✓ You\'re on the list — we\'ll email you when the first drop lands.';
      form.reset();
    });
  }
})();
