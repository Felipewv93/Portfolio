// Módulo: Utilitários
export function initUtilities() {
    // Prevenção de comportamento padrão para links vazios
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    // Log de boas-vindas no console
    console.log('%c👋 Olá! Bem-vindo ao meu portfólio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%cSe você está curioso sobre o código, sinta-se à vontade para explorar! 🚀', 'color: #22d3ee; font-size: 14px;');
}

// Função auxiliar: Efeito de digitação (opcional)
export function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Função auxiliar: Contador animado (opcional)
export function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
