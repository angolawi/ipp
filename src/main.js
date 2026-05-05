import { churchData } from './data/churchData.js';
import { renderHeader, renderFooter } from './components/layout.js';

// Import page-specific initializers
import { initHome } from './pages/home.js';
import { initQuemSomos } from './pages/quem-somos.js';
import { initMinisterios } from './pages/ministerios.js';
import { initContato } from './pages/contato.js';
import { initAgenda } from './pages/agenda.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Shared Layout
    renderHeader();
    renderFooter();

    // Global Church Name Injection
    document.querySelectorAll('.church-name').forEach(el => {
        el.textContent = churchData.name;
    });

    // Page Specific Initialization
    const path = window.location.pathname;
    const baseUrl = import.meta.env.BASE_URL;
    // Normalize path by removing base URL and ensuring it starts with /
    const normalizedPath = path.replace(baseUrl, '/').replace(/\/+/g, '/');
    
    if (normalizedPath === '/' || normalizedPath === '/index.html') {
        await initHome(churchData);
    } else if (normalizedPath.includes('quem-somos.html')) {
        initQuemSomos(churchData);
    } else if (normalizedPath.includes('ministerios.html')) {
        initMinisterios(churchData);
    } else if (normalizedPath.includes('contato.html')) {
        initContato(churchData);
    } else if (normalizedPath.includes('agenda.html')) {
        initAgenda(churchData);
    }
});
