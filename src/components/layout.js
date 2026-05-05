import { churchData } from '../data/churchData.js';

export function renderHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const baseUrl = import.meta.env.BASE_URL;
    const currentPath = window.location.pathname;

    header.className = "bg-surface/95 backdrop-blur-md sticky top-0 z-50 shadow-sm shadow-primary/5 h-20";
    header.innerHTML = `
        <nav class="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-full">
            <div class="font-headline-md text-headline-md font-bold text-primary">${churchData.name}</div>
            <div class="hidden md:flex items-center gap-stack-md">
                ${churchData.links.map(link => {
                    const fullHref = (baseUrl + link.href).replace(/\/+/g, '/');
                    const isActive = currentPath === fullHref || (currentPath === baseUrl && link.href === '/');
                    return `
                        <a class="font-label-md text-label-md ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'} transition-colors" href="${fullHref}">
                            ${link.label}
                        </a>
                    `;
                }).join('')}
            </div>
        </nav>
    `;
}

export function renderFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;

    const baseUrl = import.meta.env.BASE_URL;

    footer.className = "bg-primary text-on-primary py-stack-lg border-t border-white/5";
    footer.innerHTML = `
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-stack-lg">
                <div class="md:col-span-1">
                    <div class="font-headline-md text-headline-md font-bold mb-4">${churchData.name}</div>
                    <p class="text-on-primary-container text-sm leading-relaxed opacity-80">
                        ${churchData.tagline}
                    </p>
                </div>
                <div>
                    <h4 class="font-label-md text-label-md text-secondary-fixed mb-4">Links Úteis</h4>
                    <ul class="space-y-2 opacity-80 text-sm">
                        ${churchData.links.map(link => {
                            const fullHref = (baseUrl + link.href).replace(/\/+/g, '/');
                            return `<li><a href="${fullHref}" class="hover:text-secondary-fixed transition-colors">${link.label}</a></li>`;
                        }).join('')}
                    </ul>
                </div>
                <div>
                    <h4 class="font-label-md text-label-md text-secondary-fixed mb-4">Contato</h4>
                    <ul class="space-y-2 opacity-80 text-sm">
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px]">call</span> ${churchData.contacts.phone}</li>
                        <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px]">mail</span> ${churchData.contacts.email}</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-label-md text-label-md text-secondary-fixed mb-4">Redes Sociais</h4>
                    <div class="flex gap-4">
                        ${churchData.social.instagram !== '#' ? `<a href="${churchData.social.instagram}" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all text-xl"><i class="fa-brands fa-instagram"></i></a>` : ''}
                        ${churchData.social.facebook !== '#' ? `<a href="${churchData.social.facebook}" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all text-xl"><i class="fa-brands fa-facebook-f"></i></a>` : ''}
                        ${churchData.social.youtube !== '#' ? `<a href="${churchData.social.youtube}" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all text-xl"><i class="fa-brands fa-youtube"></i></a>` : ''}
                    </div>
                </div>
            </div>
            <div class="pt-8 border-t border-white/10 text-center text-[12px] opacity-60">
                &copy; ${new Date().getFullYear()} ${churchData.fullName}. Todos os direitos reservados.
            </div>
        </div>
    `;
}
