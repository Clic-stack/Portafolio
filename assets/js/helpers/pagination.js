import { projects } from './projects.js';
import { openModal } from './modal.js';
import { getLanguage } from './language.js';

const itemsPerPage = 3;
let currentPage = 1;
let totalPages = 1;
let currentLanguage = "es";
let currentCategory = null;

const carousel = document.getElementById("projectsCarousel");
const pageIndicator = document.getElementById("pageIndicator");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const paginationControls = document.getElementById("paginationControls");
const carouselSection = document.querySelector(".projects-section");

export function hideCarousel() {
  carouselSection.classList.add("hidden");
  paginationControls.classList.add("hidden");
}

export function showCarousel() {
  carouselSection.classList.remove("hidden");
  paginationControls.classList.remove("hidden");
}

const translations = {
  es: { page: "Página", of: "de" },
  en: { page: "Page", of: "of" },
};

export function updatePagination(language) {
  const pageText = translations[language].page;
  const ofText = translations[language].of;
  pageIndicator.textContent = `${pageText} ${currentPage} ${ofText} ${totalPages}`;
}

export function renderPages(categoryOrProjects) {
  const currentLanguage = getLanguage();
  carousel.innerHTML = "";

  const filteredProjects = Array.isArray(categoryOrProjects)
    ? categoryOrProjects
    : projects.filter(p => p.category === categoryOrProjects);

  totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  currentPage = 1;

  for (let i = 0; i < totalPages; i++) {
    const pageDiv = document.createElement("div");
    pageDiv.className = "projects-page";

    const pageProjects = filteredProjects.slice(i * itemsPerPage, (i + 1) * itemsPerPage);
    pageProjects.forEach(project => {
      const card = document.createElement("div");
      const techChips = project.technologies.slice(0, 3).map(tech => `
        <span class="tech-chip">${tech}</span>
      `).join('');
      card.className = "project-card";
      if (project.featured) card.classList.add("featured");

      card.dataset.title = project.title[currentLanguage].toLowerCase();
      card.dataset.techs = project.technologies.join(',').toLowerCase();

      card.innerHTML = `
        <span class="project-label">${project.category}</span>
        <h3>${project.title[currentLanguage]}</h3>
        <p>${project.description[currentLanguage]}</p>
        <div class="tech-chips">${techChips}</div>
      `;
      card.addEventListener("click", () => openModal(project));
      pageDiv.appendChild(card);
    });

    carousel.appendChild(pageDiv);
  }

  updateCarousel();
}

export function renderFilteredProjects(filteredProjects) {
  const currentLanguage = getLanguage();

  // Limpia carrusel
  carousel.innerHTML = "";

  if (filteredProjects.length === 0) {
    // SOLO ocultamos el carrusel; el mensaje lo maneja el buscador
    hideCarousel();
    return;
  }

  // Hay resultados: mostramos carrusel
  showCarousel();

  // Reiniciar paginación
  totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  currentPage = 1;

  // Renderizar páginas
  for (let i = 0; i < totalPages; i++) {
    const pageDiv = document.createElement("div");
    pageDiv.className = "projects-page";

    const pageProjects = filteredProjects.slice(i * itemsPerPage, (i + 1) * itemsPerPage);
    pageProjects.forEach(project => {
      const card = document.createElement("div");
      const techChips = project.technologies.slice(0, 3).map(tech => `
        <span class="tech-chip">${tech}</span>
      `).join('');
      card.className = "project-card";
      if (project.featured) card.classList.add("featured");

      card.dataset.title = project.title[currentLanguage].toLowerCase();
      card.dataset.techs = project.technologies.join(',').toLowerCase();

      card.innerHTML = `
        <span class="project-label">${project.category}</span>
        <h3>${project.title[currentLanguage]}</h3>
        <p>${project.description[currentLanguage]}</p>
        <div class="tech-chips">${techChips}</div>
      `;
      card.addEventListener("click", () => openModal(project));
      pageDiv.appendChild(card);
    });

    carousel.appendChild(pageDiv);
  }

  updateCarousel();
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${(currentPage - 1) * 100}%)`;
  updatePagination(getLanguage());
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updateCarousel();
  }
});

export function toggleCategory(category) {
  if (currentCategory === category) {
    hideCarousel();
    currentCategory = null;
  } else {
    showCarousel();
    renderPages(category);
    currentCategory = category;
  }
}