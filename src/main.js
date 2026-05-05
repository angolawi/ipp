import { churchData } from './data/churchData.js';
import { renderHeader, renderFooter } from './components/layout.js';

// Import page-specific initializers
import { initHome } from './pages/home.js';
import { initQuemSomos } from './pages/quem-somos.js';
import { initMinisterios } from './pages/ministerios.js';
import { initContato } from './pages/contato.js';
import { initAgenda } from './pages/agenda.js';

document.addEventListener('DOMContentLoaded', () => {
    // Shared Layout
    renderHeader();
    renderFooter();

    // Global Church Name Injection
    document.querySelectorAll('.church-name').forEach(el => {
        el.textContent = churchData.name;
    });

    // Page Specific Initialization
    const path = window.location.pathname;
    
    if (path === '/' || path === '/index.html') {
        initHome(churchData);
    } else if (path.includes('quem-somos.html')) {
        initQuemSomos(churchData);
    } else if (path.includes('ministerios.html')) {
        initMinisterios(churchData);
    } else if (path.includes('contato.html')) {
        initContato(churchData);
    } else if (path.includes('agenda.html')) {
        initAgenda(churchData);
    }
});
