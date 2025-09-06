import { renderFilteredProjects } from './pagination.js';
import { getLanguage } from './language.js';
import { translationsUI } from './translations.js';
import { hideCarousel, showCarousel } from './pagination.js';

export const projects = [
  {
    category: "web",
    title: {
      en: "Portfolio Web | Discover my works.",
      es: "Portafolio web | Descubre mi trabajo"
    },
    description: {
      en: "A web portfolio where you can explore a bit about my story, education, skills, training, and projects as an aspiring professional in the tech industry.",
      es: "Portafolio web donde puedes explorar un poco más sobre mi historia, educación, habilidades, entrenamiento y proyectos como una aspirante profesional al mundo de la tecnología."
    },
    resume: {
      en: "This portfolio began as the final project for the Fundamentals module in HTML, CSS, and JavaScript at Academlo, and has evolved through strategic iterations. Today, it stands as a key element in my professional transition, reflecting not only my technical growth but also my commitment to excellence, continuous improvement, and the design of digital solutions with intention, sensitivity, and scalability.",
      es: "Este portafolio nació como proyecto final del módulo de Fundamentos en HTML, CSS y JavaScript en Academlo y ha evolucionado mediante iteraciones estratégicas. Hoy es una pieza clave en mi transición profesional, reflejando no solo mi crecimiento técnico, sino también mi compromiso con la excelencia, la mejora continua y el diseño de soluciones digitales con intención, sensibilidad y escalabilidad."
    },
    images: [
      "/assets/img/skills.png",
      "/assets/img/darkportfolio.png",
      "/assets/img/projects.png"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Google Fonts", "Boxicons", "EmailJS", "JS Confetti", "GitHub", "Netlify"],
    demo: "https://portfolio-clio-salgado.netlify.app/#home",
    code: "https://github.com/Clic-stack/Portafolio",
    featured: true
  },
  {
    category: "web",
    title: {
      en: "Fortune Cookie | Know your fortune.",
      es: "Galleta de la Fortuna | Conoce tú fortuna"
    },
    description: {
      en: "An interactive web application that delivers random quotes, ranging from inspirational and humorous to deeply thought-provoking. Curious to see what your fortune cookie reveals today? Share the experience with your closest friends!",
      es: "Aplicación web interactiva capaz de dar frases aleatorias, pueden ser inspiradoras, divertidas o reflexivas. Así que dime, ¿Tienes curiosidad por conocer tu frase en la galleta de la fortuna?, Compártela con tus amigos a través de tu red social favorita."
    },
    resume: {
      en: "Interactive application developed with React and Vite that displays random phrases through a dynamic visual experience. It began as a technical exercise and evolved into a piece that blends modular logic, responsive design, and custom visual effects. It reflects my ability to transform core fundamentals into memorable digital experiences ready to go viral.",
      es: "Aplicación interactiva desarrollada con React y Vite que muestra frases aleatorias mediante una experiencia visual dinámica. Nació como ejercicio técnico y evolucionó hacia una pieza que combina lógica modular, diseño responsivo y efectos personalizados. Refleja mi capacidad para transformar fundamentos en experiencias digitales memorables, listas para viralizarse."
    },
    images: [
      "/assets/img/fortune_cookie.png",
      "/assets/img/fortune_cookie1.png",
      "/assets/img/fortune_cookie2.png"
    ],
    technologies: ["React", "Vite", "JSON", "React DOM", "React Icons", "@vitejs/plugin-react-swc", "ESLint", "eslint-plugin-react", "eslint-plugin-react-hooks", "eslint-plugin-react-refresh", "@eslint/js y globals", '"type":"module"', "GitHub", "Netlify", "HTML", "CSS", "JavaScript"],
    demo: "https://galleta-de-la-fortuna-random-phrases.netlify.app",
    code: "https://github.com/Clic-stack/Galleta-de-la-Fortuna_Random-Phrases-React",
    featured: false
  },
  {
    category: "web",
    title: {
      en: "Weather App | Weather in real-time.",
      es: "Aplicación del Clima | Clima en tiempo real"
    },
    description: {
      en: "A responsive web app that provides real-time weather data regardless of the user's location.",
      es: "Aplicación web responsiva que proporciona datos del clima en tiempo real independientemente de la geolocalización del usuario."
    },
    resume: {
      en: "Web application developed with React to display real-time weather data using asynchronous requests to the OpenWeatherMap API. It detects the user's location via geolocation or allows manual city searches, featuring responsive design, reusable components, and dynamic visual effects. It reflects my ability to integrate technical logic, accessibility, and strategic visual storytelling.",
      es: "Aplicación web desarrollada con React para mostrar el clima en tiempo real mediante peticiones asincrónicas a la API de OpenWeatherMap. Detecta ubicación por geolocalización o búsqueda manual, con diseño responsivo, componentes reutilizables y efectos visuales dinámicos. Refleja mi capacidad para integrar lógica técnica, accesibilidad y narrativa visual estratégica."
    },
    images: [
      "/assets/img/weather.png",
      "/assets/img/loading_weather.png",
      "/assets/img/weather1.png"
    ],
    technologies: ["React", "Axios", "Sass", "OpenWeatherMap API", "React DOM", "React Icons", "Vite", "@vitejs/plugin-react-swc", "@types/react", "@types/react-dom", "ESLint", "@eslint/js", "eslint-plugin-react", "eslint-plugin-react-hooks", "eslint-plugin-react-refresh", "Globals", "GitHub", "Netlify", "HTML", "JavaScript"],
    demo: "https://weatherapp-cs.netlify.app",
    code: "https://github.com/Clic-stack/weather-app",
    featured: true
  },
  {
    category: "web",
    title: {
      en: "Rick & Morty App | Discover the multiverse.",
      es: "Aplicación de Rick & Morty | Descubriendo el multiverso."
    },
    description: {
      en: "An interactive web app showcasing detailed information about locations and their resident characters, designed to deliver a reliable and visually captivating user experience.",
      es: "Aplicación web interactiva, responsiva y dinámica que muestra información detallada sobre ubicaciones y personajes que habitan el multiverso, diseñada para ofrecer una experiencia de usuario increíble."
    },
    resume: {
      en: "Web application developed with React and Vite to explore the Rick and Morty multiverse through a dynamic and immersive experience. It features smart search, detailed visualization, and custom hooks such as useFetchApi and usePagination. It stands out for its advanced logical architecture, responsive design, and strategic visual storytelling.",
      es: "Aplicación web desarrollada con React y Vite para explorar el multiverso de Rick and Morty mediante una experiencia dinámica y envolvente. Integra búsqueda inteligente, visualización detallada y hooks personalizados como useFetchApi y usePagination. Destaca por su arquitectura lógica avanzada, diseño responsivo y narrativa visual estratégica."
    },
    images: [
      "/assets/img/rickandmorty_loading.png",
      "/assets/img/location_card.png",
      "/assets/img/residents_card.png"
    ],
    technologies: ["React", "Axios", "Sass", "React DOM", "React Icons", "Vite", "@vitejs/plugin-react-swc", "@types/react", "@types/react-dom", "ESLint", "ESLint Plugins", "globals", "The Rick and Morty API", "GitHub", "Netlify", "HTML", "JavaScript"],
    demo: "https://rick-and-morty-rv.netlify.app/",
    code: "https://github.com/Clic-stack/rick-and-morty-app",
    featured: false
  },
  {
    category: "web",
    title: {
      en: "User CRUD | Create, Read, Update and Delete users with a Local Server.",
      es: "CRUD de Usuarios | Crea, Lee, Actualiza y Elimina usuarios con un servidor local"
    },
    description: {
      en: "A locally hosted application for managing user data via CRUD operations (Create, Read, Update, Delete), demonstrating core functionality without relying on external APIs.",
      es: "Aplicación alojada localmente para gestionar datos de usuarios mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar), demostrando funcionalidades esenciales sin depender de APIs externas."
    },
    resume: {
      en: "Application developed with React and Vite, connected to JSON Server to simulate full backend operations. It stands out for its scalable logical architecture, precise validations using react-hook-form and zod, and asynchronous requests managed with axios. It includes reusable components, inline editing, responsive design, and defensive logic that ensure consistency, accessibility, and a smooth user experience.",
      es: "Aplicación desarrollada con React y Vite, conectada a JSON Server para simular operaciones backend. Destaca por su arquitectura lógica escalable, validaciones con react-hook-form y zod, y peticiones asincrónicas con axios. Incluye componentes reutilizables, edición inline, diseño responsivo y lógica defensiva que garantizan consistencia, accesibilidad y experiencia fluida."
    },
    images: [
      "/assets/img/usercrud_loading.png",
      "/assets/img/usercrud_home.png",
      "/assets/img/form_usercrud.png"
    ],
    technologies: ["React Hook Form", "Zod", "JSON Server", "React", "React DOM", "React Icons", "Sass Embedded", "Axios", "@hookform/resolvers", "Vite", "@vitejs/plugin-react-swc", "ESLint + Plugins", "globals", "@types/react", "@types/react-dom", "HTML", "CSS", "JavaScript", "GitHub"],
    demo: "Only local server",
    code: "https://github.com/Clic-stack/UserCrud-with-Local-Server",
    featured: true
  },
  {
    category: "web",
    title: {
      en: "Pokédex | Step into the adventure and catch 'em all!.",
      es: "Pokédex | Adéntrate a la aventura y atrápalos todos"
    },
    description: {
      en: "Discover your favorite Pokémon with this TypeScript-powered web app! Search, filter, and dive into detailed profiles of every Pokémon. Ready to catch yours?",
      es: "Descubre tu Pokémon favorito con esta aplicación web desarrollada en TypeScript. Busca, filtra y sumérgete en perfiles detallados de cada criatura. ¿Listo para encontrar el tuyo?"
    },
    resume: {
      en: "Interactive application developed with React, Vite, and TypeScript to explore Pokémon species through a smooth visual experience. It integrates dynamic routing, defensive validations, and strict typing. It stands out for its robust logical architecture, responsive design, reusable components, and a strong focus on accessibility and scalability.",
      es: "Aplicación interactiva desarrollada con React, Vite y TypeScript para explorar especies Pokémon mediante una experiencia visual fluida. Integra rutas dinámicas, validaciones defensivas y tipado estricto. Destaca por su arquitectura lógica robusta, diseño responsivo, componentes reutilizables y enfoque en accesibilidad y escalabilidad."
    },
    images: [
      "/assets/img/pokedex.png",
      "/assets/img/poke.png",
      "/assets/img/pokecard.png"
    ],
    technologies: ["Typescript", "React Router", "PokéAPI", "React", "React DOM", "React Icons", "Axios", "Vite", "@vitejs/plugin-react-swc", "ESLint + Plugins", "globals", "typescript-eslint", "@types/react", "@types/react-dom", "CSS", "useReducer", "useContext", "GitHub", "Netlify"],
    demo: "https://pokedex-cs.netlify.app",
    code: "https://github.com/Clic-stack/Pokedex-",
    featured: true
  },
];

projects.forEach(project => {
  const techChips = project.technologies.slice(0, 3).map(tech => `
    <span class="tech-chip">${tech}</span>
  `).join('');
});

const grid = document.getElementById('projectGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.sections button');
const suggestionsList = document.getElementById("suggestionsList");

let activeCategory = null;
let currentQuery = "";
let selectedSuggestionIndex = -1;

/* --------------------------- FUNCIONES BASE ---------------------------- */

function getProjectsForActiveCategory() {
  if (!activeCategory) return [];
  const normalizedActive = activeCategory.toLowerCase().trim();
  return projects.filter(
    p => (p.category || "").toLowerCase().trim() === normalizedActive
  );
}

function renderNoProjectsMessage(category) {
  const lang = getLanguage();
  const baseMessage = translationsUI[lang].noProjectsMessage[category]
    .replace(/\\n|\/n/g, '<br>');

  grid.innerHTML = `<p class="no-projects">${baseMessage}</p>`;
}

function renderProjectsByCategory(category) {
  const filtered = getProjectsForActiveCategory();

  if (filtered.length === 0) {
    hideCarousel();
    renderNoProjectsMessage(category);
    return;
  }

  grid.innerHTML = '';
  showCarousel();
  renderFilteredProjects(filtered);
}

const filterProjectsByTechnologies = (techQueries) => {
  const baseProjects = getProjectsForActiveCategory();
  if (baseProjects.length === 0) return [];
  return baseProjects.filter(project => {
    const normalizedTechs = project.technologies.map(t => t.toLowerCase());
    return techQueries.every(query =>
      normalizedTechs.some(tech => tech.includes(query))
    );
  });
};

/* --------------------------- EVENTOS DE CATEGORÍAS ---------------------------- */

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedCategory = btn.dataset.category;
    const lang = getLanguage();

    if (activeCategory === selectedCategory) {
      btn.classList.remove('active');
      activeCategory = null;
      currentQuery = "";
      searchInput.value = "";
      searchInput.classList.add('hidden');
      suggestionsList.classList.add('hidden');
      grid.innerHTML = '';
      hideCarousel();
    } else {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = selectedCategory;
      currentQuery = "";
      searchInput.value = "";
      searchInput.classList.remove('hidden');
      grid.classList.remove('hidden');
      suggestionsList.classList.add('hidden');

      searchInput.placeholder = translationsUI[lang].searchPlaceholder[selectedCategory];
      grid.innerHTML = `<p class="no-projects">${translationsUI[lang].searchMessage}</p>`;

      renderProjectsByCategory(selectedCategory);
    }
  });
});

/* --------------------------- EVENTOS DE BÚSQUEDA ---------------------------- */

searchInput.addEventListener('input', e => {
  const rawQuery = e.target.value.toLowerCase().trim();

  if (rawQuery === "") {
    grid.innerHTML = "";
    suggestionsList.classList.add('hidden');
    if (activeCategory) {
      renderProjectsByCategory(activeCategory);
    } else {
      hideCarousel();
    }
    return;
  }

  let techQueries = rawQuery.split(/[,; ]+/).filter(Boolean).slice(0, 4);
  techQueries = [...new Set(techQueries)];
  currentQuery = rawQuery;
  selectedSuggestionIndex = -1;

  const allTechs = getProjectsForActiveCategory()
    .flatMap(p => p.technologies)
    .map(t => t.toLowerCase());

  const uniqueTechs = [...new Set(allTechs)];
  const inputParts = rawQuery.split(/[,; ]+/).filter(Boolean);
  const lastWord = inputParts[inputParts.length - 1] || "";

  const suggestions = uniqueTechs
    .filter(tech => tech.includes(lastWord))
    .slice(0, 6);

  const matchedProjects = filterProjectsByTechnologies(techQueries);

  if (matchedProjects.length === 0) {
    hideCarousel();

    if (lastWord.length > 0 && suggestions.length === 0) {
      renderNoProjectsMessage(activeCategory);
      grid.classList.remove('hidden');
    } else {
      grid.innerHTML = "";
    }

    if (suggestions.length === 0 || lastWord.length < 1) {
      suggestionsList.classList.add('hidden');
    } else {
      suggestionsList.classList.remove('hidden');
      suggestionsList.innerHTML = '';
      suggestions.forEach((suggestion, index) => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        if (index === selectedSuggestionIndex) li.classList.add('suggestion-active');
        li.addEventListener('click', () => replaceLastWordWithSuggestion(suggestion));
        suggestionsList.appendChild(li);
      });
    }
    return;
  }

  suggestionsList.innerHTML = '';
  grid.innerHTML = "";
  grid.classList.remove('hidden');
  showCarousel();
  renderFilteredProjects(matchedProjects);

  if (suggestions.length === 0 || lastWord.length < 1) {
    suggestionsList.classList.add('hidden');
  } else {
    suggestionsList.classList.remove('hidden');
    suggestionsList.innerHTML = '';
    suggestions.forEach((suggestion, index) => {
      const li = document.createElement('li');
      li.textContent = suggestion;
      if (index === selectedSuggestionIndex) li.classList.add('suggestion-active');
      li.addEventListener('click', () => replaceLastWordWithSuggestion(suggestion));
      suggestionsList.appendChild(li);
    });
  }
});

searchInput.addEventListener('keydown', e => {
  const items = suggestionsList.querySelectorAll('li');
  if (suggestionsList.classList.contains('hidden') || items.length === 0) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedSuggestionIndex = (selectedSuggestionIndex + 1) % items.length;
    updateSuggestionHighlight(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedSuggestionIndex = (selectedSuggestionIndex - 1 + items.length) % items.length;
    updateSuggestionHighlight(items);
  } else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) {
    e.preventDefault();
    const selectedText = items[selectedSuggestionIndex].textContent;
    replaceLastWordWithSuggestion(selectedText);
  } else if (e.key === 'Escape') {
    suggestionsList.classList.add('hidden');
    selectedSuggestionIndex = -1;
  }
});

function replaceLastWordWithSuggestion(suggestion) {
  const rawInput = searchInput.value.trim();
  const parts = rawInput.split(/[,;]+/).map(p => p.trim()).filter(Boolean);
  parts[parts.length - 1] = suggestion;
  searchInput.value = parts.join(', ') + ', ';
  searchInput.dispatchEvent(new Event('input'));
  suggestionsList.classList.add('hidden');
  selectedSuggestionIndex = -1;
}

function updateSuggestionHighlight(items) {
  items.forEach((item, index) => {
    item.classList.toggle('suggestion-active', index === selectedSuggestionIndex);
  });
}