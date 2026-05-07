import { html } from '../utils/security.js';

export function initMinisterios(data) {
    const grid = document.getElementById('ministries-grid');
    if (grid) {
        grid.innerHTML = html`${data.ministries.map(min => {
            const cardContent = html`
                <div class="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 group h-full flex flex-col hover:shadow-md transition-all duration-300 ${min.link ? 'cursor-pointer' : ''}">
                    <div class="h-48 overflow-hidden relative">
                        <img src="${min.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        ${min.link ? html`
                            <div class="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span class="bg-white text-primary px-4 py-2 rounded-full font-label-md text-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">Ver Área Kids</span>
                            </div>
                        ` : ''}
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <h3 class="font-headline-md text-headline-md text-primary mb-2">${min.name}</h3>
                        <p class="font-label-md text-label-md text-secondary mb-3">${min.fullName}</p>
                        <p class="font-body-md text-body-md text-on-surface-variant">${min.description}</p>
                        ${min.link ? html`
                            <div class="mt-auto pt-6 flex items-center gap-1 text-secondary font-bold text-sm">
                                Visitar Área Kids <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;

            if (min.link) {
                return html`<a href="${min.link}" class="block h-full animate-in">${cardContent}</a>`;
            }
            return html`<div class="block h-full animate-in">${cardContent}</div>`;
        })}`;
    }
}
