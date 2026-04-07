import { getLanguage } from './language.js';

const loaderContainer = document.querySelector('.loader-wrapper');
const loaderText = document.querySelector('.loader-text');

// Mensajes dinámicos
const messages = {
    es: { step1: "Analizando datos...", step2: "Construyendo interfaz...", step3: "Desplegando portafolio web 🥳" },
    en: { step1: "Analyzing data...", step2: "Building interface...", step3: "Deploying portfolio web 🥳" }
};

function loader() {
    if (!loaderContainer) return;

    const lang = getLanguage();
    loaderText.textContent = messages[lang].step1;

    window.addEventListener('load', function () {
        // Fase 1: Simular que termina el análisis de datos
        setTimeout(() => {
            loaderText.textContent = messages[lang].step2;
            loaderText.style.color = "#e94959"; // Cambio de color para notar el progreso
            
            setTimeout(() => {
                loaderText.textContent = messages[lang].step3;
                loaderText.style.color = "#790b5d"; // Cambio de color para notar el progreso
                
                // Fase 2: Ocultar el loader con elegancia
                setTimeout(() => {
                    loaderContainer.classList.add('loader--hidden');
                    
                    // Limpieza total del DOM después de la animación
                    setTimeout(() => {
                        loaderContainer.style.display = 'none';
                    }, 600);
                }, 900);
            }, 1200); 
        }, 1500); 
    });
}

export default loader;
