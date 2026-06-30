// theme.js - shared across all pages
// Handles dark mode toggle + persistence via localStorage

(function () {
  const STORAGE_KEY = "yt-clone-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  // Apply saved theme immediately (before paint) to avoid flash
  const saved = localStorage.getItem(STORAGE_KEY) || "light";
  applyTheme(saved);

  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;

    // Set initial icon/state
    updateButton(toggleBtn, saved);

    toggleBtn.addEventListener("click", () => {
      const current = localStorage.getItem(STORAGE_KEY) || "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      updateButton(toggleBtn, next);
    });
  });

  function updateButton(btn, theme) {
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
})();
