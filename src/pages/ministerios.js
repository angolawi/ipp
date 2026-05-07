import { html } from '../utils/security.js';

export function initMinisterios(data) {
    const grid = document.getElementById('ministries-grid');
    if (grid) {
        grid.innerHTML = html`${data.ministries.map(min => html`
            <div class="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 group">
                <div class="h-48 overflow-hidden">
                    <img src="${min.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-8">
                    <h3 class="font-headline-md text-headline-md text-primary mb-2">${min.name}</h3>
                    <p class="font-label-md text-label-md text-secondary mb-3">${min.fullName}</p>
                    <p class="font-body-md text-body-md text-on-surface-variant">${min.description}</p>
                </div>
            </div>
        `)}`;
    }
}
