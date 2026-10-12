// Small interactions for the Crepe de Pilipinas website.

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

// Keep the copyright year current.
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

/*
  BEFORE PUBLISHING:
  Replace https://www.instagram.com/ in index.html with your actual Instagram
  profile URL. Search for id="instagram-link" in index.html.
*/
