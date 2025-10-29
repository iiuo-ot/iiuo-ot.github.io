// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.querySelector("ul").classList.toggle("show");
});

// Auto year in footer
document.getElementById("year").textContent = new Date().getFullYear();
