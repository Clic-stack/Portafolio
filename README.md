## 🌐 Portafolio Web – Clio Salgado
Este portafolio fue desarrollado en primera instancia como parte del proyecto de acreaditación del módulo de Fundamentos en HTML, CSS y Javascript, pero con el paso del tiempo, este proyecto se ha convertido en parte de mi transición profesional hacia el sector tecnológico, con el objetivo de presentar de forma clara, visual y estratégica mi perfil, habilidades, formación y proyectos. El sitio web está construido con HTML, CSS y JavaScript, integrando animaciones, interactividad, diseño responsivo y una narrativa visual que refleja mi evolución como desarrolladora. Se prioriza la experiencia del usuario con navegación fluida, diseño responsivo, componentes reutilizables y una estética cuidada.

## 🚀Demo en línea  
**🔗[https://portfolio-clio-salgado.netlify.app]**

## 🎯 Objetivo del proyecto

Construir un portafolio web profesional, funcional y visualmente atractivo que permita:

- Presentar mi perfil, formación, habilidades técnicas y blandas.
- Mostrar mis proyectos desarrollados con distintas tecnologías.
- Facilitar el contacto directo y la descarga de mi CV.
- Integrar una narrativa visual que refleje mi estilo, evolución y enfoque estratégico.

Este proyecto refuerza prácticas clave como:

- Composición modular y reutilizable.
- Diseño responsivo para múltiples dispositivos.
- Integración de animaciones suaves y navegación fluida.
- Curación de habilidades blandas con frases de alto impacto.
- Organización clara de proyectos por tecnologías y funcionalidades.
- Manejo de errores, redes sociales activas y formulario de contacto.

## ⚛️Tecnologías usadas⚡

### Tecnologías principales

| Herramienta / Lenguaje | Uso principal |
|------------------------|---------------|
| **HTML**               | Estructura semántica del sitio. |
| **CSS**                | Estilos personalizados y responsivos. |
| **JavaScript (ES6+)**  | Interactividad, validaciones y animaciones. |
| **Google Fonts**       | Tipografía personalizada y estética. |
| **Boxicons**           | Íconos semánticos y visuales. |
| **EmailJS**            | Envío de mensajes desde el formulario de contacto. |
| **JS Confetti**        | Animación visual para interacción final. |
| **GitHub**             | Control de versiones y repositorio del proyecto. |
| **Netlify**            | Hosting y despliegue del sitio web. |

### Estructura lógica y narrativa

- **Secciones principales**: Inicio, Acerca de Mí, Habilidades, Portafolio, Contacto.
- **Narrativa visual**: Frases estratégicas que sintetizan habilidades blandas.
- **Organización de proyectos**: Filtros por categoría (Web / Data), búsqueda inteligente y visualización en modal.
- **Diseño modular**: Cada sección es autónoma y fácilmente escalable.
- **Responsive Design**: Adaptación fluida a dispositivos móviles y escritorio.
- **Descarga de CV**: Acceso directo al documento actualizado.
- **Formulario funcional**: Envío de mensajes con EmailJS y confirmación en modal.
- **Modo oscuro y selector de idioma**: Accesibilidad y personalización.
- **Animación de loader SVG y carrusel 3D**: Transiciones visuales y navegación interactiva.

## 🗂️Estructura del proyecto

```bash
📁 PROJECTS&PORTFOLIO_CLIO/
├── 📁 assets/
|    |___ 📁 css/
│    |    └── style.css
|    |___ 📁 html/
|    |___ 📁 img/
│    |    └── Currículo_Clio-Salgado.pdf
│    |    └── darkportfolio.png
│    |    └── espana.png
│    |    └── form_usercrud.png
│    |    └── fortune_cookie.png
│    |    └── fortune_cookie1.png
│    |    └── fortune_cookie2.png
│    |    └── loading_weather.png
│    |    └── location_card.png
│    |    └── logo.svg
│    |    └── me.jpg
│    |    └── me2.jpg
│    |    └── me3.jpg
│    |    └── picture1.png
│    |    └── poke.png
│    |    └── pokecard.png
│    |    └── pokedex_home.png
│    |    └── pokedex.png
│    |    └── portfolio.png
│    |    └── project_1.png
│    |    └── project_2.png
│    |    └── project_3.png
│    |    └── project_4.png
│    |    └── projects.png
│    |    └── reino-unido.png
│    |    └── residents_card.png
│    |    └── Resume_Clio-Salgado.pdf
│    |    └── rickandmorty_loading.png
│    |    └── skills.png
│    |    └── usercrud_home.png
│    |    └── usercrud_loading.png
│    |    └── weather.png
│    |    └── weather1.png
|    |___ 📁 js/
|    |    |___ 📁 components/
│    |    |    └── confettiEffect.js
│    |    |    └── parallax.js
│    |    |    └── selected_menu.js
|    |    |___ 📁 helpers/
│    |    |    └── date_updater.js
│    |    |    └── language.js
│    |    |    └── loader.js
│    |    |    └── modal.js
│    |    |    └── pagination.js
│    |    |    └── projects.js
│    |    |    └── reload_page.js
│    |    |    └── send_form.js
│    |    |    └── translations.js
|    |    |___ main.js
|    |___ 📁 lang/
|    |    |___ index.html (version español)
├── index.html (versión inglés)
```

## 🧠Funcionalidades principales

- Loader SVG animado al iniciar la app.
- Navbar responsiva con modo oscuro y selector de idioma.
- Sección de presentación con imagen, redes sociales y botón de descarga de CV.
- Sección “Acerca de Mí” con narrativa personal y galería de imágenes.
- Sección “Habilidades” con tarjetas desplegables para tecnologías y habilidades blandas con efecto flip.
- Sección “Proyectos” con filtros por categoría, búsqueda inteligente, carrusel visual y modales con detalles técnicos.
- Sección “Contacto” con información personal, redes sociales y formulario funcional con EmailJS.
- Footer con redes sociales y descripción final.
- Animación de confetti al llegar a la sección de contacto.
- Diseño responsivo y navegación fluida entre secciones.

## 🛠️Instalación local

1. Clona este repositorio:

```bash
git clone https://github.com/Clic-stack/Portafolio.git
```

2. Agrega la extensión **`vscode-pdf`** en **Visual Studio Code** solo si deseas ver los currículos desde la parte del código.

3. Abre el archivo **`index.html`** en tu navegador o usa una extensión como **`Live Server`** para visualizarlo localmente.

## 🎨Autor  
Desarrollado por Clio Salgado como parte de su transición profesional hacia el sector tecnológico, combinando habilidades analíticas, visuales y narrativas para construir una presencia digital estratégica.

---

🔽 **English version below** 🔽

## 🌐 Portfolio Website – Clio Salgado
This portfolio was initially developed as part of the accreditation project for the HTML, CSS, and JavaScript Fundamentals module. Over time, it has evolved into a key piece of my professional transition into the tech sector, designed to clearly, visually, and strategically present my profile, skills, education, and projects. The site is built with HTML, CSS, and JavaScript, integrating animations, interactivity, responsive design, and a visual narrative that reflects my growth as a developer. User experience is prioritized through smooth navigation, reusable components, and a refined aesthetic.

## 🚀Live Demo  
**🔗[https://portfolio-clio-salgado.netlify.app]**

## 🎯 Project Goals

Build a professional, functional, and visually engaging portfolio website that allows:

- Showcasing my profile, education, technical and soft skills.
- Displaying my projects developed with various technologies.
- Providing direct access to contact and resume download.
- Integrating a visual narrative that reflects my style, evolution, and strategic mindset.

This project reinforces key practices such as:

- Modular and reusable composition.
- Responsive design across devices.
- Smooth animations and intuitive navigation.
- Curated soft skills expressed through high-impact phrases.
- Clear organization of projects by technology and functionality.
- Error handling, active social links, and a functional contact form.
  
## ⚛️Technologies Used⚡

### Core Technologies

| Tool / Language        | Primary Use   |
|------------------------|---------------|
| **HTML**               | Semantic structure of the site. |
| **CSS**                | Custom and responsive styling. |
| **JavaScript (ES6+)**  | Interactivity, validation, and animations. |
| **Google Fonts**       | Custom typography and visual identity. |
| **Boxicons**           | Semantic and visual icons. |
| **EmailJS**            | Message delivery via contact form. |
| **JS Confetti**        | Visual animation for final interaction. |
| **GitHub**             | Version control and project repository. |
| **Netlify**            | Hosting and deployment of the website. |

### Logical Structure & Narrative

- **Main Sections**: Home, About Me, Skills, Portfolio, Contact.
- **Visual Narrative**: Strategic phrases that synthesize soft skills.
- **Project Organization**: Category filters (Web / Data), smart search, and modal display.
- **Modular Design**: Each section is autonomous and scalable.
- **Responsive Design**: Seamless adaptation to mobile and desktop devices.
- **Resume Download**: Direct access to updated PDF.
- **Functional Form**: EmailJS integration with confirmation modal.
- **Dark Mode & Language Toggle**: Accessibility and personalization.
- **SVG Loader & 3D Carousel**: Visual transitions and interactive navigation.

## 🗂️Project Structure

```bash
📁 PROJECTS&PORTFOLIO_CLIO/
├── 📁 assets/
|    |___ 📁 css/
│    |    └── style.css
|    |___ 📁 html/
|    |___ 📁 img/
│    |    └── Currículo_Clio-Salgado.pdf
│    |    └── darkportfolio.png
│    |    └── espana.png
│    |    └── form_usercrud.png
│    |    └── fortune_cookie.png
│    |    └── fortune_cookie1.png
│    |    └── fortune_cookie2.png
│    |    └── loading_weather.png
│    |    └── location_card.png
│    |    └── logo.svg
│    |    └── me.jpg
│    |    └── me2.jpg
│    |    └── me3.jpg
│    |    └── picture1.png
│    |    └── poke.png
│    |    └── pokecard.png
│    |    └── pokedex_home.png
│    |    └── pokedex.png
│    |    └── portfolio.png
│    |    └── project_1.png
│    |    └── project_2.png
│    |    └── project_3.png
│    |    └── project_4.png
│    |    └── projects.png
│    |    └── reino-unido.png
│    |    └── residents_card.png
│    |    └── Resume_Clio-Salgado.pdf
│    |    └── rickandmorty_loading.png
│    |    └── skills.png
│    |    └── usercrud_home.png
│    |    └── usercrud_loading.png
│    |    └── weather.png
│    |    └── weather1.png
|    |___ 📁 js/
|    |    |___ 📁 components/
│    |    |    └── confettiEffect.js
│    |    |    └── parallax.js
│    |    |    └── selected_menu.js
|    |    |___ 📁 helpers/
│    |    |    └── date_updater.js
│    |    |    └── language.js
│    |    |    └── loader.js
│    |    |    └── modal.js
│    |    |    └── pagination.js
│    |    |    └── projects.js
│    |    |    └── reload_page.js
│    |    |    └── send_form.js
│    |    |    └── translations.js
|    |    |___ main.js
|    |___ 📁 lang/
|    |    |___ index.html (version español)
├── index.html (versión inglés)
```

## 🧠Key Features

- Animated SVG loader on app launch.
- Responsive navbar with dark mode and language toggle.
- Home section with profile image, social links, and resume download.
- “About Me” section with personal narrative and image gallery.
- “Skills” section with expandable cards for technical skills and flip cards for soft skills.
- “Projects” section with category filters, smart search, carousel, and modal details.
- “Contact” section with personal info, social links, and functional form via EmailJS.
- Footer with social media and final description.
- Confetti animation upon reaching the contact section.
- Fully responsive design and smooth section transitions.

## 🛠️Local Installation

1. Clone this repository:

```bash
git clone https://github.com/Clic-stack/Portafolio.git
```

2. (Optional) Install the **`vscode-pdf`** extension in **Visual Studio Code** to preview resumes directly in the code.

3. Open the **`index.html`** file in your browser or use **`Live Server`** to view it locally.

## 🎨Author  
Created by Clio Salgado as part of her professional transition into the tech industry, combining analytical, visual, and narrative skills to build a strategic digital presence.
