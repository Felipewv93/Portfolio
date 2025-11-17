// Módulo: Animações ao Rolar
export function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Função para aplicar animação aos elementos
    function applyScrollAnimation(selector, delayMultiplier = 0.1) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = `all 0.6s ease ${index * delayMultiplier}s`;
            observer.observe(element);
        });
    }

    // Seção About
    applyScrollAnimation('.about-image', 0.2);
    applyScrollAnimation('.about-text', 0.2);
    applyScrollAnimation('.info-item', 0.1);

    // Seção Education
    applyScrollAnimation('.category-title', 0.15);
    applyScrollAnimation('.education-card', 0.1);

    // Seção Projects
    applyScrollAnimation('.section-title', 0);
    applyScrollAnimation('.section-subtitle', 0);
    applyScrollAnimation('.project-card', 0.1);

    // Seção Skills
    applyScrollAnimation('.skill-category', 0.1);

    // Seção Contact
    applyScrollAnimation('.contact-info', 0.2);
    applyScrollAnimation('.contact-form', 0.2);
    applyScrollAnimation('.contact-item', 0.1);
}
