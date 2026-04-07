import { getLanguage } from "./language.js";

let lastFocusedElement;
let lastFocusedImage;   // NUEVA: Específicamente para el Lightbox

export function openModal(project) {
  lastFocusedElement = document.activeElement;

  const lang = getLanguage();
  const title = project.title?.[lang] || "Sin título disponible.";
  const description = project.resume?.[lang] || "Sin descripción disponible.";

  const carouselWrapper = document.querySelector(".carousel-wrapper");
  carouselWrapper.innerHTML = ""; 

  if (project.images && project.images.length === 3) {
    const inputs = project.images.map((_, i) => `
      <input type="radio" name="modal-slider" id="modal-item-${i + 1}" ${i === 0 ? "checked" : ""}>
    `).join("");

    const cards = project.images.map((img, i) => `
      <label class="card" for="modal-item-${i + 1}" tabindex="0" role="button" aria-label="Ver imagen ${i + 1}">
        <img src="${img}" alt="Captura de pantalla ${i + 1} de ${title}" style="cursor: zoom-in;">
      </label>
    `).join("");

    carouselWrapper.innerHTML = `${inputs}<div class="cards">${cards}</div>`;
    
    // UNIFICADO: Manejo de teclado y clic en un solo lugar
    carouselWrapper.querySelectorAll('.card').forEach(label => {
        const inputId = label.getAttribute('for');
        const input = document.getElementById(inputId);
        const img = label.querySelector('img');

        // Lógica de Teclado
        label.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (!input.checked) {
                    input.checked = true; // Cambia la imagen si no es la activa
                } else {
                    // GUARDA LA CARD ANTES DE ABRIR LIGHTBOX
                    lastFocusedImage = label;
                    openLightbox(img.src, img.alt); // Agranda si ya es la activa
                }
            }
        });

        // Lógica de Mouse
        img.addEventListener('click', (e) => {
            if (input.checked) {
                e.stopPropagation();
                lastFocusedImage = label; // TAMBIÉN AL HACER CLICK
                openLightbox(img.src, img.alt);
            }
            // Si no está checked, el click "cae" al label automáticamente y cambia la foto
        });
    });
  }

  document.getElementById("modalCategory").textContent = project.category;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDescription").textContent = description;
  document.getElementById("modalTechList").innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join("");

  document.getElementById("modalDemo").href = project.demo?.startsWith("http") ? project.demo : "#";
  document.getElementById("modalCode").href = project.code?.startsWith("http") ? project.code : "#";

  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  modal.setAttribute('aria-hidden', 'false');

  setTimeout(() => {
    document.querySelector(".close").focus();
  }, 100);
}

export function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  modal.setAttribute('aria-hidden', 'true');
  if (lastFocusedElement) lastFocusedElement.focus();
}

function openLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("closeLightboxBtn");

  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.remove("hidden");
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = "hidden";

  // IMPORTANTE: Mover el foco a la X del Lightbox de inmediato
  setTimeout(() => {
    lightboxClose.focus();
  }, 100);
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.add("hidden");
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = "auto";

  // REGLA DE ORO: Regresar el foco a la imagen, no al portafolio
  if (lastFocusedImage) {
    lastFocusedImage.focus();
  }
}

// CONFIGURACIÓN DE EVENTOS (Se llama una sola vez al cargar la página)
export function setupModalEvents() {
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");
  const lightbox = document.getElementById("lightbox");
  const lightboxClose = document.getElementById("closeLightboxBtn");

  closeBtn.addEventListener("click", closeModal);

  //FUNCIÓN CORREGIDA
  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains('hidden')) {
      if (e.key === "Escape") {
        closeLightbox();
        return;
      }
      if (e.key === "Tab") {
        e.preventDefault(); 
        lightboxClose.focus();
      }
      return; 
    }

    if (modal.classList.contains('hidden')) return;
    if (e.key === "Escape") {
      closeModal();
      return;
    }

    if (e.key === "Tab") {
      const focusableElements = modal.querySelectorAll('button, [href], input[type="radio"], .card[tabindex="0"]');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
}
