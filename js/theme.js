// Theme toggle with localStorage persistence
(function () {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Restore saved preference, or default to dark
  const saved = localStorage.getItem('theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
  }

  toggle.addEventListener('click', function () {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();
