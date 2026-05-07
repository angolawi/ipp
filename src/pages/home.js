import { html } from '../utils/security.js';

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
        cultList.innerHTML = html`${data.cults.map((cult, index) => html`
            <div class="flex justify-between items-center py-2 ${index < data.cults.length - 1 ? 'border-b border-outline-variant/10' : ''}">
                <div>
                    <span class="font-label-md text-[10px] text-secondary uppercase block leading-none mb-1">${cult.day}</span>
                    <span class="font-label-md text-label-md">${cult.name}</span>
                </div>
                <span class="font-headline-md text-headline-md text-secondary">${cult.time}</span>
            </div>
        `)}`;
    }

    // Render News (Bento Grid)
    const newsGrid = document.getElementById('news-grid');
    if (newsGrid) {
        newsGrid.innerHTML = html`${data.news.map((item, index) => {
            if (index === 0) { // Featured Card
                return html`
                    <div class="news-card md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 group cursor-pointer hover:shadow-md transition-all" data-index="${index}">
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
                return html`
                    <div class="news-card flex bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow cursor-pointer" data-index="${index}">
                        <div class="w-1/3 h-full min-h-[120px] bg-cover bg-center" style="background-image: url('${item.image}')"></div>
                        <div class="w-2/3 p-stack-sm flex flex-col justify-center">
                            <span class="text-secondary font-label-md text-[12px] mb-1">${item.category}</span>
                            <h4 class="font-headline-md text-[16px] text-primary mb-1 line-clamp-1">${item.title}</h4>
                            <p class="font-body-md text-[13px] text-on-surface-variant line-clamp-2">${item.description}</p>
                        </div>
                    </div>
                `;
            }
        })}`;

        // Modal Logic
        const modal = document.getElementById('news-modal');
        const modalImage = document.getElementById('news-modal-image');
        const modalCategory = document.getElementById('news-modal-category');
        const modalTitle = document.getElementById('news-modal-title');
        const modalDescription = document.getElementById('news-modal-description');
        const closeBtn = document.getElementById('close-news-modal');
        const overlay = document.getElementById('news-modal-overlay');

        const openNewsModal = (item) => {
            modalImage.src = item.image;
            modalCategory.textContent = item.category;
            modalTitle.textContent = item.title;
            modalDescription.textContent = item.description;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };

        const closeNewsModal = () => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        };

        document.querySelectorAll('.news-card').forEach(card => {
            card.onclick = () => {
                const idx = card.getAttribute('data-index');
                openNewsModal(data.news[idx]);
            };
        });

        if (closeBtn) closeBtn.onclick = closeNewsModal;
        if (overlay) overlay.onclick = closeNewsModal;
    }

    // Render Events (Next 2 weeks)
    const eventsList = document.getElementById('events-list');
    if (eventsList) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const twoWeeksFromNow = new Date();
        twoWeeksFromNow.setDate(today.getDate() + 14);
        twoWeeksFromNow.setHours(23, 59, 59, 999);

        const upcomingEvents = (data.events || []).filter(event => {
            return event.timestamp >= today.getTime() && event.timestamp <= twoWeeksFromNow.getTime();
        });

        if (upcomingEvents.length === 0) {
            eventsList.innerHTML = html`
                <div class="col-span-full py-12 flex flex-col items-center justify-center text-center bg-surface-container-low rounded-xl border border-dashed border-outline-variant/30">
                    <span class="material-symbols-outlined text-outline text-4xl mb-2">event_busy</span>
                    <p class="font-body-md text-on-surface-variant">Não há eventos especiais ou cultos extras nas próximas 2 semanas.</p>
                    <a href="#agenda" class="text-primary font-bold text-sm mt-2 hover:underline">Ver agenda completa</a>
                </div>
            `;
        } else {
            eventsList.innerHTML = html`${upcomingEvents.map(event => {
                const isToday = new Date(event.timestamp).toDateString() === new Date().toDateString();
                
                return html`
                    <div class="bg-surface-container-lowest p-gutter rounded-xl shadow-sm border ${isToday ? 'border-primary ring-1 ring-primary/20' : 'border-outline-variant/10'} flex gap-gutter items-center hover:shadow-md transition-shadow group relative overflow-hidden ${!event.isRecurring ? 'border-l-4 border-l-secondary bg-secondary/5' : ''}">
                        ${isToday ? html`
                            <div class="absolute top-0 left-0 bg-primary text-on-primary px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg shadow-sm z-10 flex items-center gap-1">
                                <span class="relative flex h-2 w-2">
                                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                  <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                Hoje
                            </div>
                        ` : ''}
                        ${!event.isRecurring ? html`
                            <div class="absolute top-0 right-0 bg-secondary text-on-secondary px-2 py-0.5 text-[10px] font-bold uppercase rounded-bl-lg shadow-sm z-10">
                                Destaque
                            </div>
                        ` : ''}
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
                `;
            })}`;
        }
    }
}
