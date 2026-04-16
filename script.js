// 1. Lógica del Formulario con FormSubmit
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue al enviar
    
    // Enviamos los datos usando Fetch
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('¡Gracias por tu mensaje! Me pondré en contacto con vos pronto.');
            form.reset(); // Limpia los campos del formulario
        } else {
            alert('Hubo un error al enviar. Por favor, intentá de nuevo.');
        }
    }).catch(error => {
        alert('Hubo un problema de conexión. Por favor, revisá tu internet.');
    });
});

// 2. Efecto visual de scroll para el header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        // Cuando bajas en la página, el menú se hace más finito
        header.style.padding = '0.5rem 5%';
    } else {
        // Cuando estás arriba de todo, el menú vuelve a su tamaño original
        header.style.padding = '1rem 5%';
    }
});
