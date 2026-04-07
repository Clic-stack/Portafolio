// ==========================================
// 1. IMPORTACIONES (Componentes, Helpers y Efectos)
// =========================================
import activeMenu from './components/selected_menu.js';
import '../js/components/confettiEffect.js';

import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import updateCopyrightYear from './helpers/date_updater.js';

import './helpers/projects.js';
import { projects } from './helpers/projects.js';
import { toggleCategory, renderPages } from './helpers/pagination.js';
import { setupModalEvents } from './helpers/modal.js';
import { getLanguage, setLanguage } from './helpers/language.js';
import { handleResize } from './helpers/pagination.js';

// ==========================================
// 2. VARIABLES GLOBALES DE ANIMACIÓN (HOME)
// ==========================================
let lineIndex = 0;
let charIndex = 0;
const terminalContent = [
    "> initializing_clio_stack...",
    "> loading_data_science_modules...",
    "> fetching_business_insights.sql",
    "> status: system_ready_for_leadership"
];

// ==========================================
// 3. FUNCIONES DE ANIMACIÓN (TERMINAL Y NOMBRE)
// ==========================================

function typeLine() {
    const terminalContainer = document.getElementById("terminalCode");
    if (!terminalContainer) return;

    if (lineIndex < terminalContent.length) {
        if (charIndex === 0) {
            const newLine = document.createElement("p");
            newLine.className = "typing-text";
            newLine.innerHTML = "<span>></span> ";
            terminalContainer.appendChild(newLine);
        }

        const currentLine = terminalContent[lineIndex].replace("> ", "");
        const lastPara = terminalContainer.lastElementChild;
        
        lastPara.innerHTML += currentLine[charIndex];
        charIndex++;

        if (charIndex < currentLine.length) {
            setTimeout(typeLine, 40); 
        } else {
            charIndex = 0;
            lineIndex++;
            setTimeout(typeLine, 600); 
        }
    } else {
        // Al terminar la terminal, activa el nombre
        const nameTitle = document.querySelector(".home__title");
        if (nameTitle) {
            nameTitle.classList.add("start-typing");
            
            // Revelación del botón del CV tras 3 segundos (duración del typing)
            setTimeout(() => {
                const cvButton = document.querySelector(".home__buttons");
                if (cvButton) cvButton.classList.add("reveal");
            }, 3000); 
        }
    }
}

function resetHomeAnimations() {
    // 1. Limpiar terminal
    const terminalContainer = document.getElementById("terminalCode");
    if (terminalContainer) terminalContainer.innerHTML = "";

    // 2. Resetear contadores
    lineIndex = 0;
    charIndex = 0;

    // 3. Quitar clases de animación
    const nameTitle = document.querySelector(".home__title");
    const cvButton = document.querySelector(".home__buttons");
    
    if (nameTitle) nameTitle.classList.remove("start-typing");
    if (cvButton) cvButton.classList.remove("reveal");

    // 4. Reiniciar proceso
    setTimeout(typeLine, 300);
}

// ==========================================
// 4. CONFIGURACIÓN DE INTERRUPTORES (TOGGLES)
// ==========================================

// --- Función de Persistencia de Tema ---
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const darkmodeToggle = document.getElementById("darkmode-toggle");
    
    // Si el usuario tenía el modo oscuro guardado
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (darkmodeToggle) darkmodeToggle.checked = true;
    } else {
        document.body.classList.remove('dark-theme');
        if (darkmodeToggle) darkmodeToggle.checked = false;
    }
}

// --- Idioma ---
const languageToggle = document.getElementById("language-toggle");

// Al cargar, se sincroniza el toggle visual con el idioma actual
if (languageToggle) {
    languageToggle.checked = getLanguage() === "es";
}

languageToggle.addEventListener("change", () => {
    const newLang = languageToggle.checked ? "es" : "en";
    setLanguage(newLang);
    
    // IMPORTANTE: NO se recarga el tema, solo se reinicia la animación
    resetHomeAnimations();
    renderPages(projects); 
});

// --- Modo Oscuro (Darkmode) ---
const darkmodeToggle = document.getElementById("darkmode-toggle");

darkmodeToggle.addEventListener("change", () => {
    if (darkmodeToggle.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
    
    // Dispara el reset visual sin afectar el idioma
    resetHomeAnimations();
});

// ==========================================
// 5. ACCESIBILIDAD SOFT SKILLS
// ==========================================

// Selecciona todas las flip-cards
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  // Permitir voltear con la tecla Enter o Espacio
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const isExpanded = card.getAttribute('aria-expanded') === 'true';
      card.setAttribute('aria-expanded', !isExpanded);
      card.classList.toggle('is-flipped'); 
    }
  });

  // Actualizar ARIA al usar el mouse
  card.addEventListener('mouseenter', () => card.setAttribute('aria-expanded', 'true'));
  card.addEventListener('mouseleave', () => card.setAttribute('aria-expanded', 'false'));
});

// ==========================================
// 6. FILTROS Y BÚSQUEDA DE PROYECTOS (COREOGRAFIADO)
// =========================================

const webBtn = document.querySelector('[data-category="web"]');
const dataBtn = document.querySelector('[data-category="data"]');
const carousel3D = document.querySelector('.container'); // Referencia al carrusel giratorio

// Función auxiliar para manejar el intercambio de carruseles
function handleCarouselToggle(category) {
    toggleCategory(category);
    
    // Verifica si después de toggleCategory, la sección de proyectos quedó visible
    const projectSection = document.querySelector(".projects-section");
    const isProjectVisible = !projectSection.classList.contains("hidden");

    if (isProjectVisible) {
        // Si se ven los proyectos, se oculta el carrusel giratorio
        carousel3D.classList.add('hidden');
    } else {
        // Si se ocultan los proyectos, vuelvo a mostrar el carrusel giratorio
        carousel3D.classList.remove('hidden');
    }
}

if(webBtn) webBtn.addEventListener('click', () => handleCarouselToggle('web'));
if(dataBtn) dataBtn.addEventListener('click', () => handleCarouselToggle('data'));

const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        const lang = getLanguage();
        
        if (query === "") return;

        const matchedProjects = projects.filter(project =>
            project.title[lang].toLowerCase().includes(query) ||
            project.description[lang].toLowerCase().includes(query) ||
            project.technologies.some(tech => tech.toLowerCase().includes(query))
        );

        if (matchedProjects.length > 0) {
            // Al buscar y encontrar resultados, asegura que el 3D se oculte
            carousel3D.classList.add('hidden');
            document.querySelector(".projects-section").classList.remove("hidden");
            renderPages(matchedProjects);
        }
    });
}

// ==========================================
// 7. INICIALIZACIÓN GLOBAL
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Aplica el tema guardado ANTES que cualquier otra cosa
    applySavedTheme();

    // 2. Iniciar componentes
    setupModalEvents();
    loader();
    activeMenu();
    resetToHome();
    updateCopyrightYear();
    sendEmail();

    // Iniciar animación del Home
    setTimeout(typeLine, 1000);

    const redirectSection = sessionStorage.getItem("redirectSection");

    if (redirectSection) {
        // Espera un momento a que el navegador dibuje las secciones
        setTimeout(() => {
            const targetElement = document.querySelector(redirectSection);
            if (targetElement) {
                // "scrollIntoView" con block: "start" lo pone justo arriba
                targetElement.scrollIntoView({ behavior: "instant", block: "start" });
            }
            // Limpia la nota para que no scrollee solo en futuras recargas
            sessionStorage.removeItem("redirectSection");
        }, 300); // 300ms es el tiempo de seguridad para que carguen estilos y fotos
    }

    const inputs = document.querySelectorAll('.navbar__toggle--darkmode-input, .navbar__toggle--language-input');

    inputs.forEach(input => {
        input.addEventListener('keydown', (e) => {
            // Permite activar con 'Enter' o con la barra espaciadora
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Evita que la página salte al presionar espacio
                input.click(); // Esto dispara lógica actual de cambio de tema/idioma
            }
        });
    });

    window.addEventListener('resize', handleResize);

    // Ejecuta una vez al cargar para establecer el valor inicial
    handleResize();
});

// Ejecución de funciones globales

loader();
activeMenu();
resetToHome();
updateCopyrightYear();
sendEmail();
