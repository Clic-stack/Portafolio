const formDOM = document.querySelector('#form');
const modal = document.querySelector('#confirmationModal');
const closeButton = document.querySelector('#closeModalBtn');

function openModal() {
  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.style.display = 'block'; // fallback
  }
}

function closeModal() {
  modal.close();
  formDOM.reset();
}

function sendEmail() {
  formDOM.addEventListener('submit', (e) => {
    e.preventDefault();

    const params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    if (params.name && params.email && params.subject && params.message) {
      emailjs
        .send('service_tpmmesa', 'template_nkcig3g', params)
        .then(() => openModal())
        .catch((error) => console.error("Error al enviar el correo / Error to send mail:", error));
    }
  });
}

closeButton.addEventListener('click', closeModal);
export default sendEmail;
