// 1. Tu función de disparo (usa el objeto 'confetti' de tsparticles)
function launchConfetti() {
    const duration = 15 * 250;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}

// 2. El Observador Inteligente (Reemplaza window.addEventListener("scroll", ...))
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6 // Solo explota cuando el 60% de la sección de contacto sea visible
};

const confettiObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            launchConfetti();
            // Esto es CLAVE: deja de observar para que no explote cada que suban y bajen
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// 3. Activación
const target = document.querySelector("#contact");
if (target) {
    confettiObserver.observe(target);
}

