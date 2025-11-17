// Módulo: Formulário de Contato
export function initContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
            const message = contactForm.querySelector('textarea').value;
            
            // Validação simples
            if (name && email && subject && message) {
                // Aqui você pode adicionar a integração com EmailJS, Formspree, etc.
                alert('Mensagem enviada com sucesso! (Adicione sua integração de email aqui)');
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }
}
