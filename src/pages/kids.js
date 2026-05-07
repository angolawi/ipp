import { html } from '../utils/security.js';

export function initKids(data) {
    const kidsData = data.kidsArea;
    const container = document.getElementById('kids-page');
    if (!container) return;

    container.innerHTML = html`
        <!-- Hero Section -->
        <section class="relative w-full h-[60vh] flex items-center overflow-hidden">
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent z-10"></div>
                <img alt="Área Kids" class="w-full h-full object-cover" src="${kidsData.heroImage}"/>
            </div>
            <div class="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter text-on-primary text-center">
                <span class="inline-block px-4 py-1 bg-secondary text-on-secondary rounded-full text-[12px] font-bold mb-4 uppercase tracking-widest animate-in fade-in duration-700">Para a Próxima Geração</span>
                <h1 class="font-headline-xl text-headline-xl mb-stack-sm drop-shadow-lg">${kidsData.title}</h1>
                <p class="font-body-lg text-body-lg max-w-2xl mx-auto opacity-90 drop-shadow-md">${kidsData.description}</p>
            </div>
        </section>

        <!-- Main Content -->
        <section class="py-stack-lg bg-surface">
            <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                    ${kidsData.sections.map(section => {
                        const icon = section.id === 'ucp' ? 'child_care' : 'rocket_launch';
                        const bgColor = section.color === 'amber' ? 'bg-[#f59e0b]' : 'bg-[#6366f1]';
                        const textColor = section.color === 'amber' ? 'text-[#f59e0b]' : 'text-[#6366f1]';
                        
                        return html`
                            <div class="flex flex-col bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all duration-500 group">
                                <!-- Section Header -->
                                <div class="${bgColor} p-stack-md text-white relative overflow-hidden">
                                    <div class="absolute -right-8 -bottom-8 opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                                        <span class="material-symbols-outlined text-[160px]">${icon}</span>
                                    </div>
                                    <span class="font-label-md text-label-md uppercase tracking-widest opacity-80 block mb-1">${section.ageRange}</span>
                                    <h2 class="font-headline-xl text-[40px] leading-none mb-2">${section.name}</h2>
                                    <p class="font-body-md font-bold italic opacity-90">"${section.motto}"</p>
                                </div>
                                
                                <!-- Section Body -->
                                <div class="p-stack-md md:p-stack-lg flex-grow flex flex-col">
                                    <p class="font-body-lg text-on-surface-variant mb-stack-md leading-relaxed">
                                        ${section.description}
                                    </p>
                                    
                                    <div class="space-y-4">
                                        <h3 class="font-label-md text-label-md text-primary uppercase tracking-widest border-b border-outline-variant/20 pb-2">Atividades Principais</h3>
                                        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            ${section.activities.map(activity => html`
                                                <li class="flex items-center gap-2 text-on-surface-variant text-sm">
                                                    <span class="material-symbols-outlined ${textColor} text-[18px]">check_circle</span>
                                                    ${activity}
                                                </li>
                                            `)}
                                        </ul>
                                    </div>
                                </div>

                                <div class="p-stack-md bg-surface-container-low border-t border-outline-variant/5">
                                    <a href="#contato" class="w-full bg-primary text-on-primary py-3 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-all">
                                        Quero participar <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        `;
                    })}
                </div>
            </div>
        </section>

        <!-- Verses Section -->
        <section class="py-stack-lg bg-surface-container-low relative overflow-hidden">
            <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 text-center">
                <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">Palavra para o Coração</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    ${kidsData.verses.map((v, i) => html`
                        <div class="bg-white p-stack-md rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col justify-center items-center text-center animate-in" style="animation-delay: ${i * 150}ms">
                            <span class="material-symbols-outlined text-secondary mb-4 text-[40px]">auto_awesome</span>
                            <blockquote class="font-body-lg italic text-on-surface mb-4 leading-relaxed">"${v.text}"</blockquote>
                            <cite class="font-label-md text-label-md text-primary not-italic">— ${v.ref}</cite>
                        </div>
                    `)}
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-24 bg-primary text-on-primary text-center">
            <div class="max-w-3xl mx-auto px-margin-mobile">
                <h2 class="font-headline-lg text-headline-lg mb-4">Traga sua família para nos visitar!</h2>
                <p class="font-body-lg mb-8 opacity-80">Nossa igreja está de braços abertos para acolher seus filhos em um ambiente seguro e cheio de amor cristão.</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#agenda" class="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-on-secondary-container transition-all">Ver Agenda de Atividades</a>
                    <a href="#contato" class="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-label-md text-label-md transition-all border border-white/20">Fale Conosco</a>
                </div>
            </div>
        </section>
    `;
}
