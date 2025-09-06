let currentLanguage = localStorage.getItem('lang') || 'es';

export function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
}

export function getLanguage() {
  return currentLanguage;
}
