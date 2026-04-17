// Theme: system preference by default, manual toggle overrides
(function () {
  var toggle = document.getElementById('themeToggle');
  var html = document.documentElement;

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
  }

  // On load: use saved preference if set, otherwise follow system
  var saved = localStorage.getItem('theme');
  applyTheme(saved || getSystemTheme());

  // Listen for system theme changes (only applies when no manual override)
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function () {
    if (!localStorage.getItem('theme')) {
      applyTheme(getSystemTheme());
    }
  });

  // Manual toggle: save preference to override system
  toggle.addEventListener('click', function () {
    var current = html.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
})();
