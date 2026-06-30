// search.js - live client-side video filtering
// Include on youtube.html (homepage) where the video grid lives

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar");
  if (!searchInput) return;

  const videoCards = document.querySelectorAll(".video-preview");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();

    videoCards.forEach((card) => {
      const titleEl = card.querySelector(".video-title");
      const authorEl = card.querySelector(".video-author");

      const title = titleEl ? titleEl.textContent.toLowerCase() : "";
      const author = authorEl ? authorEl.textContent.toLowerCase() : "";

      const matches = title.includes(query) || author.includes(query);
      card.style.display = matches ? "" : "none";
    });
  });
});
