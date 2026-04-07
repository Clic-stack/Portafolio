import { projects } from './projects.js';
import { openModal } from './modal.js';
import { getLanguage } from './language.js';

let itemsPerPage = 3; 
let isTransitioning = false; // Bloqueo de seguridad para clics rápidos

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

function calculateItemsPerPage() {
    const width = window.innerWidth;
    if (width >= 652 && width <= 961) return 4;
    return 3;
}

export function handleResize() {
    const newItems = calculateItemsPerPage();
    if (newItems !== itemsPerPage) {
        itemsPerPage = newItems;
        if (currentCategory) renderPages(currentCategory);
    }
}

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

// Función interna para configurar accesibilidad y eventos de tarjetas
function setupCardAccessibility(card, project) {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); 
            openModal(project);
        }
    });
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
        pageDiv.setAttribute('aria-hidden', i !== 0);

        const pageProjects = filteredProjects.slice(i * itemsPerPage, (i + 1) * itemsPerPage);
        pageProjects.forEach(project => {
            const card = document.createElement("div");
            const techChips = project.technologies.slice(0, 3).map(tech => `
                <span class="tech-chip">${tech}</span>
            `).join('');
            card.className = "project-card";
            setupCardAccessibility(card, project);
            if (project.featured) card.classList.add("featured");

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

// Reutilizamos la lógica de renderizado para búsquedas filtradas
export function renderFilteredProjects(filteredProjects) {
    renderPages(filteredProjects);
}

function updateCarousel() {
    // Garantiza que los controles sean visibles si hay más de una página
    if (totalPages > 1) {
        showCarousel();
    }

    carousel.style.transform = `translateX(-${(currentPage - 1) * 100}%)`;
    updatePagination(getLanguage());
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    const allPages = carousel.querySelectorAll('.projects-page');
    allPages.forEach((page, index) => {
        const isVisible = index === (currentPage - 1);
        page.setAttribute('aria-hidden', !isVisible);
        const cardsInPage = page.querySelectorAll('.project-card');
        cardsInPage.forEach(card => card.setAttribute('tabindex', isVisible ? '0' : '-1'));
    });
}

// EVENTOS DE NAVEGACIÓN CON DEBOUNCE Y PREVENT SCROLL
prevBtn.addEventListener("click", () => {
    if (currentPage > 1 && !isTransitioning) {
        isTransitioning = true;
        currentPage--;
        updateCarousel();
        
        setTimeout(() => {
            const page = carousel.querySelectorAll('.projects-page')[currentPage - 1];
            const firstCard = page?.querySelector('.project-card');
            if (firstCard) firstCard.focus({ preventScroll: true });
            isTransitioning = false;
        }, 400); // Ajustado al tiempo de la transición CSS
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages && !isTransitioning) {
        isTransitioning = true;
        currentPage++;
        updateCarousel();
        
        setTimeout(() => {
            const page = carousel.querySelectorAll('.projects-page')[currentPage - 1];
            const firstCard = page?.querySelector('.project-card');
            if (firstCard) firstCard.focus({ preventScroll: true });
            isTransitioning = false;
        }, 400);
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