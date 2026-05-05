export function initQuemSomos(data) {
    // Render Reformed Identity
    const identitySection = document.getElementById('reformed-identity-section');
    if (identitySection) {
        identitySection.innerHTML = `
            <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
                <div class="flex flex-col md:flex-row gap-gutter items-center">
                    <div class="md:w-1/2">
                        <h2 class="font-headline-lg text-headline-lg mb-stack-md">${data.reformedIdentity.title}</h2>
                        <div class="w-16 h-1 bg-secondary mb-stack-md"></div>
                        <p class="font-body-lg text-body-lg mb-stack-md text-on-primary-container">
                            ${data.reformedIdentity.description}
                        </p>
                        <div class="bg-surface-container-highest/10 p-6 rounded-lg border border-white/10">
                            <p class="font-body-md text-body-md italic leading-relaxed">
                                "${data.reformedIdentity.quote}"
                                <br/>
                                <span class="block mt-2 font-bold not-italic text-secondary-fixed">— ${data.reformedIdentity.quoteAuthor}</span>
                            </p>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex flex-wrap justify-center gap-4">
                        ${data.reformedIdentity.solas.map(sola => `
                            <div class="bg-white/5 p-6 rounded border border-white/10 hover:bg-white/10 transition-all group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] min-w-[160px] text-center relative overflow-hidden h-48 flex flex-col justify-center items-center">
                                <div class="group-hover:opacity-0 group-hover:scale-95 transition-all duration-300">
                                    <div class="text-secondary-fixed opacity-50 mb-2">
                                        <span class="material-symbols-outlined text-[32px]">${sola.icon}</span>
                                    </div>
                                    <h4 class="font-headline-md text-[18px] text-secondary-fixed mb-1">${sola.name}</h4>
                                    <p class="font-label-md text-[12px] opacity-70">${sola.desc}</p>
                                </div>
                                <div class="absolute inset-0 p-4 flex flex-col justify-center items-center bg-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <p class="text-[13px] leading-relaxed text-on-secondary font-medium">${sola.summary}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // Render Faith Standards
    const standardsSection = document.getElementById('faith-standards-section');
    if (standardsSection) {
        standardsSection.innerHTML = `
            <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
                <div class="text-center mb-stack-lg">
                    <h2 class="font-headline-lg text-headline-lg text-primary mb-4">Símbolos de Fé e Governo</h2>
                    <p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                        Como Igreja Presbiteriana do Brasil, adotamos documentos que expressam nossa compreensão das Escrituras e organizam nossa vida comunitária.
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                    ${data.faithStandards.map(item => `
                        <div class="bg-white p-gutter rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow group">
                            <div class="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-on-primary transition-all">
                                <span class="material-symbols-outlined">${item.icon}</span>
                            </div>
                            <h3 class="font-headline-md text-[18px] text-primary mb-2">${item.title}</h3>
                            <p class="font-body-md text-[14px] text-on-surface-variant mb-4">${item.description}</p>
                            <a href="${item.link}" class="text-secondary font-label-md text-[12px] flex items-center gap-1 hover:underline">
                                Saiba Mais <span class="material-symbols-outlined text-[14px]">open_in_new</span>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Render Leadership
    const grid = document.getElementById('leaders-grid');
    if (grid) {
        grid.innerHTML = data.leaders.map(leader => `
            <div class="bg-surface-container-lowest p-gutter rounded-xl shadow-sm border border-outline-variant/10 text-center hover:shadow-md transition-shadow group">
                <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-stack-md ring-4 ring-primary/5 group-hover:ring-secondary/20 transition-all">
                    ${leader.image ? `<img src="${leader.image}" class="w-full h-full object-cover">` : `<div class="w-full h-full bg-surface-container-high flex items-center justify-center"><span class="material-symbols-outlined text-outline text-4xl">person</span></div>`}
                </div>
                <h3 class="font-headline-md text-headline-md text-primary">${leader.name}</h3>
                <p class="font-label-md text-label-md text-secondary font-bold mb-4">${leader.role}</p>
                <p class="font-body-md text-body-md text-on-surface-variant text-sm">${leader.bio}</p>
            </div>
        `).join('');
    }
}
