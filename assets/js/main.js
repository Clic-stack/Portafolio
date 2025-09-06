// Importaciones: Componentes, helpers y efectos
import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import '../js/components/confettiEffect.js';

import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import updateCopyrightYear from './helpers/date_updater.js';

import './helpers/projects.js';
import { projects } from './helpers/projects.js';
import { toggleCategory, renderPages, renderFilteredProjects } from './helpers/pagination.js';
import { setupModalEvents } from './helpers/modal.js';
import { getLanguage, setLanguage } from './helpers/language.js';

// Configuración de idioma

let currentLanguage = "es"; // Idioma por defecto

const languageToggle = document.getElementById("language-toggle");

languageToggle.addEventListener("change", () => {
  const newLang = languageToggle.checked ? "es" : "en";
  setLanguage(newLang);

  // Re-renderiza según el estado actual
  if (currentCategory) {
    renderPages(currentCategory);
  } else {
    renderPages(projects);
  }
});

// Filtros por categoría

const webBtn = document.querySelector('[data-category="web"]');
const dataBtn = document.querySelector('[data-category="data"]');

webBtn.addEventListener('click', () => toggleCategory('web'));
dataBtn.addEventListener('click', () => toggleCategory('data'));

// Búsqueda de proyectos

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  const lang = getLanguage();

  if (query === "") return;

  const matchedProjects = projects.filter(project =>
    typeof project.title[lang] === "string" && project.title[lang].toLowerCase().includes(query) ||
    typeof project.description[lang] === "string" && project.description[lang].toLowerCase().includes(query) ||
    Array.isArray(project.technologies) && project.technologies.some(tech =>
      typeof tech === "string" && tech.toLowerCase().includes(query)
    )
  );

  if (matchedProjects.length > 0) {
    document.querySelector(".projects-section").classList.remove("hidden");
    document.getElementById("paginationControls").classList.remove("hidden");
    renderPages(matchedProjects);
  }
});

// Inicialización al cargar el DOM

document.addEventListener("DOMContentLoaded", () => {
  setupModalEvents();
});

// Ejecución de funciones globales

loader();
parallax();
activeMenu();
resetToHome();
updateCopyrightYear();
sendEmail();
