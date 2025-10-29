document.addEventListener("DOMContentLoaded", () => {
  const pills = document.querySelectorAll(".pill");
  const cards = document.querySelectorAll(".card");
  const noResults = document.getElementById("noResults");
  const yearEl = document.getElementById("year");
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.querySelector(".nav-list");
  const searchInput = document.getElementById("search");

  // Current year
  yearEl.textContent = new Date().getFullYear();

  // Category filter
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const cat = pill.dataset.cat;
      let visible = 0;

      cards.forEach((card) => {
        if (cat === "all" || card.dataset.cat === cat) {
          card.style.display = "flex";
          visible++;
        } else {
          card.style.display = "none";
        }
      });

      noResults.hidden = visible > 0;
    });
  });

  // Live search
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      if (title.includes(query)) {
        card.style.display = "flex";
        visible++;
      } else {
        card.style.display = "none";
      }
    });
    noResults.hidden = visible > 0;
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    const isOpen = navList.style.display === "flex";
    navList.style.display = isOpen ? "none" : "flex";
  });

  // Close menu when link clicked
  document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 900) navList.style.display = "none";
    });
  });

  // Keyboard shortcut
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });
});
