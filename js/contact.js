// Módulo: Formulário de Contato com Formspree
export function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = contactForm?.querySelector('button[type="submit"]');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
            const message = contactForm.querySelector('textarea').value;
            
            // Validação simples
            if (!name || !email || !subject || !message) {
                showNotification('Por favor, preencha todos os campos.', 'error');
                return;
            }

            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Por favor, insira um email válido.', 'error');
                return;
            }

            // Desabilitar botão durante o envio
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            }

            try {
                // Criar FormData com os dados do formulário
                const formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('subject', subject);
                formData.append('message', message);

                // Enviar para Formspree
                // Substitua 'YOUR_FORM_ID' pelo seu Form ID do Formspree
                const response = await fetch('https://formspree.io/f/mdkyrygk', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Erro ao enviar mensagem');
                }
            } catch (error) {
                console.error('Erro ao enviar mensagem:', error);
                showNotification('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email.', 'error');
            } finally {
                // Reabilitar botão
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensagem';
                }
            }
        });
    }
}

// Função para exibir notificações
function showNotification(message, type = 'info') {
    // Remover notificação existente se houver
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Adicionar ao body
    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => notification.classList.add('show'), 100);

    // Remover após 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}
