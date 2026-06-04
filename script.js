/**
 * script.js
 * 
 * Lógica principal para la interactividad de la web, incluyendo animaciones 
 * de scroll usando Intersection Observer y otros efectos menores.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Animaciones fluidas al hacer scroll (Intersection Observer)
    // ==========================================
    
    // Seleccionamos todos los elementos con la clase "animate-on-scroll"
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Configuramos el observador
    const observerOptions = {
        root: null,         // Usa el viewport del navegador como área de visión
        rootMargin: '0px',  // Sin margen extra
        threshold: 0.15     // La animación se dispara cuando el 15% del elemento es visible
    };

    // Creamos la instancia del Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento entra en el área visible...
            if (entry.isIntersecting) {
                // Añadimos la clase que acciona el CSS de aparición
                entry.target.classList.add('is-visible');
                
                // Descomenta la siguiente línea si quieres que la animación ocurra SOLO UNA VEZ.
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Activamos el observador en cada uno de nuestros elementos
    animatedElements.forEach(el => {
        observer.observe(el);
    });


    // ==========================================
    // 2. Efecto de sombreado en el Navbar al bajar
    // ==========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Cuando bajamos un poco, el menú se oscurece y adquiere sombra
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(255,255,255, 0.05)';
        } else {
            // Al volver arriba, recupera el estado semitransparente original
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.borderBottom = '1px solid rgba(255,255,255, 0.1)';
        }
    });

});
