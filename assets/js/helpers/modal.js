import { getLanguage } from "./language.js";

export function openModal(project) {
  const lang = getLanguage(); // "es" o "en"

  // Accede a los textos en el idioma actual
  const title = project.title?.[lang] || "Sin título disponible.";
  const description = project.resume?.[lang] || "Sin descripción disponible.";//se cambia description por resume en modal

  const carouselWrapper = document.querySelector(".carousel-wrapper");
  carouselWrapper.innerHTML = ""; // Limpia carrusel anterior

  if (project.images && project.images.length === 3) {
  const inputs = project.images.map((_, i) => `
    <input type="radio" name="modal-slider" id="modal-item-${i + 1}" ${i === 0 ? "checked" : ""}>
  `).join("");

  const cards = project.images.map((img, i) => `
    <label class="card" for="modal-item-${i + 1}">
      <img src="${img}" alt="Imagen ${i + 1} del proyecto">
    </label>
  `).join("");

  carouselWrapper.innerHTML = `
    ${inputs}
    <div class="cards">
      ${cards}
    </div>
  `;
} else {
  carouselWrapper.innerHTML = `<p style="text-align:center; color:#ccc;">Este proyecto no tiene imágenes disponibles.</p>`;
}

  // Inserta en el DOM
  document.getElementById("modalCategory").textContent = project.category;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDescription").textContent = description;

  document.getElementById("modalTechList").innerHTML = project.technologies
    .map(tech => `<li>${tech}</li>`)
    .join("");

  document.getElementById("modalDemo").href = project.demo?.startsWith("http") ? project.demo : "#";
  document.getElementById("modalCode").href = project.code?.startsWith("http") ? project.code : "#";

  document.getElementById("modal").classList.remove("hidden");
}

// modal.js
export function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

export function setupModalEvents() {
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");

  closeBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

