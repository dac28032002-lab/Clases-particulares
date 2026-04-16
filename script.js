document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí podrías integrar un servicio como Formspree para recibir los mails
    alert('¡Gracias por tu mensaje! Me pondré en contacto con vos pronto.');
    this.reset();
});

// Efecto simple de scroll para el header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 5%';
    } else {
        header.style.padding = '1rem 5%';
    }
});
