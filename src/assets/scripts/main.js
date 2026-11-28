/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap";

/**
 * Write any other JavaScript below
 */
/**
 * Marca automáticamente el enlace correspondiente
 * a la página actual dentro de la navegación principal.
 */

const navigationLinks = document.querySelectorAll(".site-navigation__link");

const currentPage = window.location.pathname.split("/").pop() || "index.html";

navigationLinks.forEach((link) => {
  const linkPage = new URL(link.href, window.location.href).pathname
    .split("/")
    .pop();

  if (linkPage === currentPage) {
    link.classList.add("site-navigation__link--active");

    link.setAttribute("aria-current", "page");
  }
});
