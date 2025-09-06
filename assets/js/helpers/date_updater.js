function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer__copy');

    // Verifica si el elemento existe
    if (!copyrightElement) return;

    // Detecta el idioma desde el atributo lang del <html>
    const htmlLang = document.documentElement.lang || 'en'; // fallback a inglés

    // Traducciones disponibles
    const translations = {
        es: 'Todos los derechos reservados',
        en: 'All rights reserved'
    };

    // Usa el idioma principal (ej. "es" de "es-MX")
    const langCode = htmlLang.split('-')[0];
    const rightsText = translations[langCode] || translations.en;

    // Actualiza el texto
    copyrightElement.textContent = `© ${currentYear}, ${rightsText}`;
}

export default updateCopyrightYear;
