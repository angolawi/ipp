import { churchData } from '../data/churchData.js';

export function renderHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const currentHash = window.location.hash || '#home';

    header.className = "bg-surface/95 backdrop-blur-md sticky top-0 z-50 shadow-sm shadow-primary/5 h-20";
    header.innerHTML = `
        <nav class="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-full">
            <div class="font-headline-md text-headline-md font-bold text-primary">${churchData.name}</div>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-stack-md">
                ${churchData.links.map(link => {
                    const isActive = currentHash === link.href;
                    return `
                        <a class="font-label-md text-label-md ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'} transition-colors" href="${link.href}">
                            ${link.label}
                        </a>
                    `;
                }).join('')}
            </div>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-toggle" class="md:hidden text-primary p-2">
                <span class="material-symbols-outlined text-[32px]">menu</span>
            </button>
        </nav>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="fixed inset-0 bg-surface z-50 flex flex-col items-center justify-center gap-stack-lg transition-all duration-300 translate-x-full md:hidden">
            <button id="mobile-menu-close" class="absolute top-6 right-margin-mobile text-primary">
                <span class="material-symbols-outlined text-[40px]">close</span>
            </button>
            ${churchData.links.map(link => {
                const isActive = currentHash === link.href;
                return `
                    <a class="font-headline-md text-headline-md ${isActive ? 'text-secondary font-bold underline underline-offset-8' : 'text-on-surface'} mobile-nav-link" href="${link.href}">
                        ${link.label}
                    </a>
                `;
            }).join('')}
        </div>
    `;

    // Event Listeners for Mobile Menu
    const toggle = document.getElementById('mobile-menu-toggle');
    const close = document.getElementById('mobile-menu-close');
    const menu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-nav-link');

    if (toggle && close && menu) {
        toggle.onclick = () => {
            menu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        };

        const closeMenu = () => {
            menu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        };

        close.onclick = closeMenu;
        navLinks.forEach(link => link.onclick = closeMenu);
    }
}

export function renderFooter() {
    const footer = document.getElementById('main-footer');
    if (!footer) return;

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
                        ${churchData.links.map(link => `<li><a href="${link.href}" class="hover:text-secondary-fixed transition-colors">${link.label}</a></li>`).join('')}
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
