import { churchData } from './data/churchData.js';
import { renderHeader, renderFooter } from './components/layout.js';

// Import page-specific initializers
import { initHome } from './pages/home.js';
import { initQuemSomos } from './pages/quem-somos.js';
import { initMinisterios } from './pages/ministerios.js';
import { initContato } from './pages/contato.js';
import { initAgenda } from './pages/agenda.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Shared Layout (Footer only needs to render once)
    renderFooter();

    // Global Church Name Injection
    document.querySelectorAll('.church-name').forEach(el => {
        el.textContent = churchData.name;
    });

    // Routing
    window.addEventListener('hashchange', handleRouting);
    
    // Initial Route
    if (!window.location.hash) {
        window.location.hash = '#home';
    } else {
        handleRouting();
    }
});

async function handleRouting() {
    const hash = window.location.hash || '#home';
    const data = churchData;

    // Update Header (to refresh active link state)
    renderHeader();

    // Hide all pages
    document.querySelectorAll('.page-content').forEach(el => {
        el.classList.add('hidden');
    });

    // Show selected page
    const pageBaseId = hash.replace('#', '');
    const pageEl = document.getElementById(`${pageBaseId}-page`);
    
    if (pageEl) {
        pageEl.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    // Page Specific Initialization
    // Note: We check the base ID to decide which init to run
    switch (pageBaseId) {
        case 'home':
            await initHome(data);
            break;
        case 'quem-somos':
            initQuemSomos(data);
            break;
        case 'ministerios':
            initMinisterios(data);
            break;
        case 'contato':
            initContato(data);
            break;
        case 'agenda':
            initAgenda(data);
            break;
    }
}
