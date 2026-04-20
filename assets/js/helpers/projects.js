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
      "/assets/img/portfolio.png",
      "/assets/img/projects.png",
      "/assets/img/skills.png"
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
    featured: false
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
      en: "Full-Stack User CRUD | From Prototype to REST API",
      es: "CRUD de Usuarios Full Stack | De Prototipo a API REST"
    },
    description: {
      en: "Evolution of a CRUD system migrated from a local environment to a professional infrastructure. I developed a REST API using Node.js, Express, and Sequelize, integrated with a React frontend featuring robust Zod validations and real PostgreSQL persistence.",
      es: "Evolución de un sistema CRUD migrado de un entorno local a una infraestructura profesional. Desarrollé una API REST con Node.js, Express y Sequelize, integrada a un frontend en React con validaciones robustas mediante Zod y persistencia real en PostgreSQL."
    },
    resume: {
      en: `Professional user management system representing the technical evolution from a local development environment (JSON Server) to a decoupled architecture with real persistence in PostgreSQL. This project features a robust and scalable backend built with Node.js, Express, and Sequelize ORM, alongside a dynamic React (Vite) frontend with strict validation via Zod and React Hook Form, modular components, and custom pagination. Key highlights include its Monorepo architecture, environment variable management, 100% responsive design with SCSS, and automated deployment on Render and Netlify.`,
      es: `Sistema profesional de gestión de usuarios que representa la evolución de un entorno de desarrollo local (JSON Server) hacia una arquitectura desacoplada con persistencia real en PostgreSQL. Este proyecto cuenta con un backend robusto y escalable construído con Node.js, Express y Sequelize ORM, un frontend dinámico con React (Vite) con validación estricta mediante Zod y React Hook Form, así como con componentes modulares y paginación personalizada. Desatacando por su arquitectura Monorepo, manejo de variables de entorno, diseño 100% responsivo con SCSS y despliegue automatizado en Render y Netlify.`
    },
    images: [
      "/assets/img/usercrud_loading.png",
      "/assets/img/usercrud_home.png",
      "/assets/img/form_usercrud.png"
    ],
    technologies: ["React + Vite", "Node.js & Express", "PostgreSQL & Sequelize (ORM)", "Zod", "Axios", "React Hook Form", "Postman", "Dotenv", "SCSS / CSS Modules", "React Icons", "Render", "Netlify", "Git & GitHub"],
    demo: "https://usercrud-fullstack.netlify.app",
    code: "https://github.com/Clic-stack/UserCrud-with-Local-Server",
    featured: false
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
  {
    category: "web",
    title: {
      en: "GalleryMovies | Full-Stack QA & Management Suite",
      es: "GalleryMovies | Full-Stack QA & Management Suite"
    },
    description: {
      en: "Cinematic management ecosystem designed under SecOps standards. It implements 4 automated CI/CD pipelines with over 19 integrated tests to guarantee 100% stable, secure, and scalable code.",
      es: "Ecosistema de gestión cinematográfica diseñado bajo estándares de SecOps. Implementa 4 pipelines automatizados de CI/CD con más de 19 tests integrados para garantizar un código 100% estable, seguro y escalable."
    },
    resume: {
      en: 'Robust production ecosystem designed under SecOps and QA Automation standards. It represents the technical evolution from integration testing logic into a comprehensive cinematic platform, featuring 4 automated pipelines (CI, API Contract, CodeQL, and DAST) that execute over 19 tests per deployment. The scalable backend is built with Node.js, Express, and Sequelize, managing complex many-to-many (M:M) relationships and advanced security with Helmet, deployed on Render. The dynamic streaming-style frontend is built with React 18 and Redux Toolkit for efficient global state management, deployed on Netlify with automated GitHub Actions workflows, guaranteeing 100% stable and vulnerability-free code. Full documentation is available on Postman.',
      es: 'Ecosistema de producción robusto diseñado bajo estándares de SecOps y QA Automation. Representa la evolución de una lógica de pruebas de integración hacia una plataforma cinematográfica completa implementando 4 pipelines automatizados (CI, API Contract, CodeQL y DAST) que ejecutan más de 19 tests en cada despliegue. Un backend escalable con Node.js, Express y Sequelize, manejando relaciones complejas (M:M) y seguridad avanzada con Helmet y desplegado en Render. Frontend dinámico tipo streaming construida en React 18 y Redux Toolkit para una gestión de estado global eficiente, desplegado en Netlify y despliegue automatizado con GitHub Actions, garantizando un código 100% estable y libre de vulnerabilidades. Documentación disponible en Postman.'
    },
    images: [
      "/assets/img/gallery_movies.png",
      "/assets/img/gallery_movies_pipelines.png",
      "/assets/img/testing_2.png"
    ],
    technologies: ["PostgreSQL + Sequelize (ORM)", "Express & Node.js", "QA Automation: Jest + Supertest", "React 18 + Redux Toolkit", "REST API", "React Router", "Vite", "Bootstrap + Bootswatch", "Git/GitHub/GitHub Actions", "Netlify", "Render", "Neon Serverless Postgres", "NeonDB", "Postman / Newman", "Componentes Reutilizables", "Diseño Responsivo (Mobile First)", "Gestión de Estados", "Gestión de Dependencias (npm)", "Helmet", "CodeQL", "DAST (Dynamic Analysis)" ],
    demo: "https://gallerymovies.netlify.app",
    code: "https://github.com/Clic-stack/MoviesApp-FullStack-Project",
    featured: true
  },
  {
    category: "web",
    title: {
      en: "Auth-Mailer | API & User Management Hub",
      es: "Auth-Mailer | Hub de Autenticación y Mensajería para Usuarios"
    },
    description: {
      en: "Professional authentication and identity verification system featuring secure password recovery workflows. It stands out for its security-oriented architecture, implementing Rate Limiting, CodeQL (SAST) analysis, and DAST dynamic scanning to guarantee banking-grade protection.",
      es: "Sistema profesional de autenticación y verificación de identidad con flujos de recuperación de contraseña. Destaca por su arquitectura orientada a la seguridad, implementando Rate Limiting, análisis CodeQL (SAST) y escaneos dinámicos DAST para garantizar una protección de nivel bancario."
    },
    resume: {
      en: 'Full-stack solution designed to manage critical user workflows (Registration, Login, Email Verification) with a "Security-First" approach. The project resolves complex network and cloud deployment challenges, ensuring a 100% email delivery rate. It features advanced security by implementing OWASP ZAP (DAST) and CodeQL to detect vulnerabilities in real-time, alongside Rate Limiting to mitigate brute-force attacks. Cloud optimization is achieved through an advanced mail transport configuration (IPv4 forcing and Connection Pooling) to ensure service availability in PaaS environments like Render. Furthermore, it implements a comprehensive QA & Pipeline lifecycle with over 9 integration tests in Jest and API contract validation with Newman, all automated via GitHub Actions.',
      es: 'Solución Fullstack diseñada para gestionar flujos críticos de usuario (Registro, Login, Verificación por Email) con un enfoque de "Security-First". El proyecto resuelve desafíos complejos de red y despliegue en la nube, garantizando una entrega de correos del 100%. Este proyecto cuenta con seguridad avanzada al implementar OWASP ZAP (DAST) y CodeQL para detectar vulnerabilidades en tiempo real, junto con Rate Limiting para mitigar ataques de fuerza bruta. Optimización en la nube al tener una configuración avanzada de transporte de correo (IPv4 forcing y Connection Pooling) para asegurar la disponibilidad del servicio en entornos PaaS como Render. Sin mencionar que implementa QA & Pipelines mostrando un ciclo de vida completo con 9+ tests de integración en Jest y validación de contratos de API con Newman, automatizado mediante GitHub Actions.'
    },
    images: [
      "/assets/img/auth-mailer-api_signup.png",
      "/assets/img/auth-mailer-api_security.png",
      "/assets/img/auth-mailer-api_user_created.png"
    ],
    technologies: ["JWT", "Express & Node.js", "SecOps: GitHub Actions & CodeQL(SAST)", "Nodemailer", "Bcrypt", "PostgreSQL & Sequelize (ORM)", "React + Vite", "REST API", "Netlify", "Render", "Neon Serverless Postgres", "Rutas Protegidas (Protected Routes)", "OWASP ZAP (DAST)", "Rate Limiting", "Redux Toolkit", "Bootstrap & Bootswatch", "Jest & Supertest", "Newman/Postman"],
    demo: "https://auth-mailer-api.netlify.app",
    code: "https://github.com/Clic-stack/Auth-Mailer-API",
    featured: true
  },
  {
    category: "web",
    title: {
      en: "BookingApp | Scalable Reservation API",
      es: "BookingApp | API de Reservas Escalable"
    },
    description: {
      en: "Robust Backend ecosystem for hotel management with 25 integrated endpoints. Includes JWT authentication, multimedia management via Cloudinary, and a comprehensive Jest test suite. Validated under CodeQL standards and DAST dynamic scans. It stands out for its SecOps security architecture, automated integration testing, and an intelligent search and review system for over 150 hotels.",
      es: "Robusto ecosistema Backend para gestión hotelera con 25 endpoints integrados. Incluye autenticación JWT, gestión multimedia con Cloudinary y una suite de pruebas con Jest. Validada bajo estándares de CodeQL y escaneos dinámicos DAST. Destaca por su arquitectura de seguridad SecOps, pruebas automatizadas de integración y un sistema inteligente de búsqueda y reseñas para más de 150 hoteles."
    },
    resume: {
      en: `High-performance Backend Infrastructure for Hotel Management.
      A scalable enterprise system powered by PostgreSQL and Sequelize, engineered for massive data integrity. It features production-grade security (JWT, Bcrypt, Helmet) and a robust SecOps ecosystem including static (CodeQL) and dynamic (DAST) analysis. Includes advanced real-time rating logic, intelligent search, and 100% test coverage with Jest, ensuring a flawless CI/CD pipeline.

      💡 Data Highlight: Managed and aggregated +1,000 related records with real-time customer satisfaction (ratings) calculation.`,
      es: `Infraestructura Backend de alto rendimiento para gestión hotelera.
      Sistema empresarial escalable con PostgreSQL y Sequelize, diseñado para la integridad de datos masivos. Destaca por su seguridad de grado producción (JWT, Bcrypt, Helmet) y un robusto ecosistema de SecOps con análisis estático (CodeQL) y dinámico (DAST). Incluye lógica avanzada de ratings en tiempo real, búsqueda inteligente y cobertura de tests del 100% con Jest, garantizando un despliegue CI/CD impecable.

      💡 Data Highlight: Gestión y agregación de +1,000 registros con cálculo de satisfacción en tiempo real.`
    },
    images: [
      "/assets/img/booking.png",
      "/assets/img/pipelines_bookingapp.png",
      "/assets/img/booking-app_erd-db.png"
    ],
    technologies: ["Rate Limiting & Helmet", "GitHub Actions & CodeQL", "Jest & Supertest", "PostgreSQL/Sequelize", "JWT & Bcrypt", "Node.js & Express", "JavaScript", "Cloudinary", "Git/GitHub", "Render", "Neon Serverless Postgres", "Postman"],
    demo: "https://documenter.getpostman.com/view/48309056/2sBXVZnDx7",
    code: "https://github.com/Clic-stack/Booking-App",
    featured: true
  },
  {
    category: "data",
    title: {
      en: "Blog Database System (PostgreSQL)",
      es: "Sistema de Base de Datos para un Blog con PostgreSQL"
    },
    description: {
      en: "Design and implementation of a robust relational database for content management. This project demonstrates mastery of complex data architectures, referential integrity, and interaction analysis through advanced SQL queries.",
      es: "Diseño e implementación de una base de datos relacional robusta para la gestión de contenidos. Este proyecto demuestra el dominio de arquitecturas de datos complejas, integridad referencial y análisis de interacción mediante consultas SQL avanzadas."
    },
    resume: {
      en: `I developed a relational database ecosystem (blog_db) optimized for digital content platforms. The project covers the full lifecycle, from logical modeling in dbdiagram.io to technical implementation in PostgreSQL, effectively resolving 1:N relationships (authors to posts) and N:M relationships (user-to-post interactions) through junction tables.

      As a core part of the data lifecycle, I implemented automation scripts for schema creation and record loading. Additionally, I designed business intelligence queries to track engagement metrics and ensure authorship traceability. This project reflects a solid foundation in SQL (DDL/DML) and the design of scalable data systems.`,
      es: `Desarrollé un ecosistema de base de datos relacional (blog_db) optimizado para plataformas de contenido digital. El proyecto abarca desde el modelado lógico en dbdiagram.io hasta la implementación técnica en PostgreSQL, resolviendo relaciones de 1:N (autores a posts) y N:M (usuarios a interacciones de likes) mediante tablas pivote.

      Como parte fundamental del ciclo de vida de los datos, implementé scripts de automatización para la creación de esquemas y carga de registros, además de diseñar consultas de inteligencia de negocio que permiten rastrear el engagement y la trazabilidad de autoría. Este proyecto refleja una base sólida en SQL (DDL/DML) y diseño de sistemas escalables.`
    },
    images: [
      "/assets/img/blog_db.png",
      "/assets/img/02.join_posts-users-like.png",
      "/assets/img/blog_db-1.png"
    ],
    technologies: ["PostgreSQL (v18)", "SQL (Complex Queries / JOINs)", "Relational Database Design (ERD)", "pgAdmin 4", "dbdiagram.io", "Git & GitHub", "VS Code", "Markdown", "Data Integrity (PK/FK)"],
    demo: "https://dbdiagram.io/d/68f58d0b2e68d21b413a138a",
    code: "https://github.com/Clic-stack/BLOG_DATABASE",
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