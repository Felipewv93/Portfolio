// Arquivo principal - Importa e inicializa todos os módulos
import { initNavigation } from './navigation.js';
import { initScrollAnimations } from './animations.js';
import { initContactForm } from './contact.js';
import { initUtilities } from './utils.js';

// Inicializar todos os módulos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initContactForm();
    initUtilities();
});

// Inicializar animações após as seções serem carregadas
document.addEventListener('sectionsLoaded', () => {
    initScrollAnimations();
});
