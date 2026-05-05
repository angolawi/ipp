export async function initHome(data) {
    // Update Hero section
    document.getElementById('hero-title').textContent = data.fullName;
    document.getElementById('hero-desc').textContent = data.tagline;

    // Render Daily Verse (with External API)
    const verseTextEl = document.getElementById('daily-verse');
    const verseRefEl = document.getElementById('daily-verse-ref');

    try {
        // Usando a API "A Bíblia Digital" (Exemplo de versículo aleatório para o dia)
        // Nota: Para uma API real de VOTD, algumas exigem chave. Esta é uma forma estável e gratuita:
        const response = await fetch('https://bible-api.com/?random=verse&translation=almeida');
        const verseData = await response.json();
        
        verseTextEl.textContent = `"${verseData.text.trim()}"`;
        verseRefEl.textContent = `— ${verseData.reference}`;
    } catch (error) {
        console.error("Erro ao buscar versículo da API:", error);
        // Fallback para o dado local se a API falhar
        verseTextEl.textContent = `"${data.verseOfTheDay.text}"`;
        verseRefEl.textContent = `— ${data.verseOfTheDay.reference}`;
    }

    document.getElementById('maps-link').href = data.contacts.mapsLink;

    // Render Cult Hours
    const cultList = document.getElementById('cult-hours-list');
    if (cultList) {
        cultList.innerHTML = data.cults.map((cult, index) => `
            <div class="flex justify-between items-center py-2 ${index < data.cults.length - 1 ? 'border-b border-outline-variant/10' : ''}">
                <div>
                    <span class="font-label-md text-[10px] text-secondary uppercase block leading-none mb-1">${cult.day}</span>
                    <span class="font-label-md text-label-md">${cult.name}</span>
                </div>
                <span class="font-headline-md text-headline-md text-secondary">${cult.time}</span>
            </div>
        `).join('');
    }

    // Render News (Bento Grid)
    const newsGrid = document.getElementById('news-grid');
    if (newsGrid) {
        newsGrid.innerHTML = data.news.map((item, index) => {
            if (index === 0) { // Featured Card
                return `
                    <div class="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 group cursor-pointer hover:shadow-md transition-all">
                        <div class="h-64 overflow-hidden">
                            <div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style="background-image: url('${item.image}')"></div>
                        </div>
                        <div class="p-stack-md">
                            <span class="inline-block px-2 py-1 bg-secondary-container text-on-secondary-fixed rounded-lg text-[12px] font-bold mb-2">${item.category}</span>
                            <h3 class="font-headline-md text-headline-md text-primary mb-2">${item.title}</h3>
                            <p class="font-body-md text-body-md text-on-surface-variant line-clamp-2">${item.description}</p>
                        </div>
                    </div>
                `;
            } else { // Secondary Cards
                return `
                    <div class="flex bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow cursor-pointer">
                        <div class="w-1/3 h-full min-h-[120px] bg-cover bg-center" style="background-image: url('${item.image}')"></div>
                        <div class="w-2/3 p-stack-sm flex flex-col justify-center">
                            <span class="text-secondary font-label-md text-[12px] mb-1">${item.category}</span>
                            <h4 class="font-headline-md text-[16px] text-primary mb-1 line-clamp-1">${item.title}</h4>
                            <p class="font-body-md text-[13px] text-on-surface-variant line-clamp-2">${item.description}</p>
                        </div>
                    </div>
                `;
            }
        }).join('');
    }

    // Render Events
    const eventsList = document.getElementById('events-list');
    if (eventsList) {
        eventsList.innerHTML = data.events.map(event => `
            <div class="bg-surface-container-lowest p-gutter rounded-xl shadow-sm border border-outline-variant/10 flex gap-gutter items-center hover:shadow-md transition-shadow group">
                <div class="bg-primary/5 text-primary p-4 rounded-lg flex flex-col items-center justify-center min-w-[80px] group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <span class="font-headline-md text-[24px] font-bold leading-none">${event.date.split(' ')[0]}</span>
                    <span class="font-label-md text-[12px] uppercase">${event.date.split(' ')[1]}</span>
                </div>
                <div>
                    <h4 class="font-headline-md text-[18px] text-primary mb-1">${event.title}</h4>
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center gap-1 text-on-surface-variant text-[12px]">
                            <span class="material-symbols-outlined text-[16px]">schedule</span>
                            ${event.time}
                        </div>
                        <div class="flex items-center gap-1 text-on-surface-variant text-[12px]">
                            <span class="material-symbols-outlined text-[16px]">location_on</span>
                            ${event.location}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}
