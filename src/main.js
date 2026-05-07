import { churchData } from './data/churchData.js';
import { renderHeader, renderFooter } from './components/layout.js';

// Import page-specific initializers
import { initHome } from './pages/home.js';
import { initQuemSomos } from './pages/quem-somos.js';
import { initMinisterios } from './pages/ministerios.js';
import { initContato } from './pages/contato.js';
import { initAgenda } from './pages/agenda.js';
import { initKids } from './pages/kids.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Shared Layout
    renderFooter();

    // Global Church Name Injection
    document.querySelectorAll('.church-name').forEach(el => {
        el.textContent = churchData.name;
    });

    // Routing
    window.addEventListener('hashchange', handleRouting);
    
    // Initial Route
    handleRouting();
});

async function handleRouting() {
    // Normalize hash: default to #home if empty or just '#'
    let hash = window.location.hash;
    if (!hash || hash === '#') {
        hash = '#home';
    }

    const data = churchData;
    const pageBaseId = hash.replace('#', '');

    // Update Header
    renderHeader();

    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(el => el.classList.add('hidden'));

    // Show selected page or default to home if not found
    let pageEl = document.getElementById(`${pageBaseId}-page`);
    
    if (!pageEl) {
        pageEl = document.getElementById('home-page');
        // If we defaulted to home, update the hash without jumping
        if (window.location.hash !== '#home') {
            history.replaceState(null, null, '#home');
        }
    }
    
    if (pageEl) {
        pageEl.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    // Page Specific Initialization
    // We determine which init to run based on the ACTUAL visible page
    const activePageId = pageEl ? pageEl.id.replace('-page', '') : 'home';

    switch (activePageId) {
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
        case 'kids':
            initKids(data);
            break;
    }
}
