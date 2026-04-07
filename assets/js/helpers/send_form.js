import { emailContent } from './translations.js';

const formDOM = document.querySelector('#form');
const modal = document.querySelector('#confirmationModal');
const closeButton = document.querySelector('#closeModalBtn');

function openModal() {
  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.style.display = 'block';
  }
}

function closeModal() {
  modal.close();
  formDOM.reset();
}

// 1. Define la lógica de envío UNA SOLA VEZ fuera para poder removerla si es necesario
const handleSubmit = (e) => {
  e.preventDefault();

  const currentLang = document.documentElement.lang || 'es';
  const userName = document.getElementById('name').value;
  const userEmail = document.getElementById('email').value;

  const params = {
    name: userName,
    email: userEmail,
    // Estos son para el correo del CLIENTE (Auto-reply)
    dynamic_subject: emailContent[currentLang].subject,
    dynamic_message: emailContent[currentLang].message.replace('{{name}}', userName),
    dynamic_footer: emailContent[currentLang].fired,
    // Estos son para mí notificación personal (en caso de usarlos en mi template)
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  if (userName && userEmail) {
    const serviceID = 'service_tpmmesa';
    const templateForMe = 'template_nkcig3g';
    const templateForUser = 'template_aw79j5x';

    const submitBtn = formDOM.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    // PRIMERO: Llega a mi
    emailjs.send(serviceID, templateForMe, params)
      .then(() => {
        // SEGUNDO: Le llega al cliente (Auto-reply bilingüe)
        return emailjs.send(serviceID, templateForUser, params);
      })
      .then(() => {
        openModal();
        submitBtn.disabled = false;
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        submitBtn.disabled = false;
      });
  }
};

// 2. La función exportada solo gestiona el Event Listener de forma segura
function sendEmail() {
  // Quita cualquier intento previo para evitar duplicidad
  formDOM.removeEventListener('submit', handleSubmit);
  // Pone el listener limpio
  formDOM.addEventListener('submit', handleSubmit);
}

closeButton.addEventListener('click', closeModal);

export default sendEmail;