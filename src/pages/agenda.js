export function initAgenda(data) {
    // Render Cults
    const cultsContainer = document.getElementById('agenda-cults');
    if (cultsContainer) {
        cultsContainer.innerHTML = data.cults.map(cult => `
            <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                <span class="text-secondary font-label-md text-[10px] uppercase block mb-1">${cult.day}</span>
                <div class="flex justify-between items-center">
                    <h4 class="font-headline-md text-[18px] text-primary">${cult.name}</h4>
                    <span class="font-headline-md text-secondary">${cult.time}</span>
                </div>
            </div>
        `).join('');
    }

    // Render Events
    const eventsContainer = document.getElementById('agenda-events');
    if (eventsContainer) {
        if (!data.events || data.events.length === 0) {
            eventsContainer.innerHTML = `
                <div class="col-span-full py-12 flex flex-col items-center justify-center text-center bg-white rounded-xl border border-dashed border-outline-variant/30">
                    <span class="material-symbols-outlined text-outline text-5xl mb-4">calendar_today</span>
                    <p class="font-body-lg text-on-surface-variant">Ainda não há eventos agendados.</p>
                    <p class="text-sm opacity-60">Fique atento às nossas redes sociais para novidades.</p>
                </div>
            `;
        } else {
            eventsContainer.innerHTML = data.events.map(event => `
                <div class="bg-white p-gutter rounded-xl shadow-sm border border-outline-variant/10 flex gap-6 items-center hover:shadow-md transition-all group">
                    <div class="bg-primary text-on-primary p-4 rounded-lg flex flex-col items-center justify-center min-w-[80px] shadow-sm group-hover:scale-105 transition-transform">
                        <span class="font-bold text-[24px] leading-none">${event.date.split(' ')[0]}</span>
                        <span class="text-[12px] uppercase tracking-wider">${event.date.split(' ')[1]}</span>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-headline-md text-[20px] text-primary mb-2 group-hover:text-secondary transition-colors">${event.title}</h4>
                        <div class="flex flex-wrap gap-4 text-[13px] text-on-surface-variant">
                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[18px] text-secondary">schedule</span> ${event.time}</span>
                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[18px] text-secondary">location_on</span> ${event.location}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}
