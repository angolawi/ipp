let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthsMap = {
    'JAN': 0, 'FEV': 1, 'MAR': 2, 'ABR': 3, 'MAI': 4, 'JUN': 5,
    'JUL': 6, 'AGO': 7, 'SET': 8, 'OUT': 9, 'NOV': 10, 'DEZ': 11
};

const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export function initAgenda(data) {
    // Render Calendar
    renderCalendar(data);
    // Render Events List
    renderEventsList(data);

    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(data);
        renderEventsList(data);
    });

    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(data);
        renderEventsList(data);
    });
}


function renderEventsList(data) {
    const eventsContainer = document.getElementById('agenda-events');
    if (eventsContainer) {
        const filteredEvents = (data.events || []).filter(event => {
            const [_, monthStr] = event.date.split(' ');
            return monthsMap[monthStr] === currentMonth;
        });

        if (filteredEvents.length === 0) {
            eventsContainer.innerHTML = `
                <div class="col-span-full py-12 flex flex-col items-center justify-center text-center bg-white rounded-xl border border-dashed border-outline-variant/30">
                    <span class="material-symbols-outlined text-outline text-5xl mb-4">calendar_today</span>
                    <p class="font-body-lg text-on-surface-variant">Não há eventos agendados para ${monthNames[currentMonth]}.</p>
                </div>
            `;
        } else {
            // Group events by date
            const grouped = filteredEvents.reduce((acc, event) => {
                if (!acc[event.date]) acc[event.date] = [];
                acc[event.date].push(event);
                return acc;
            }, {});

            // Sort dates numerically
            const sortedDates = Object.keys(grouped).sort((a, b) => {
                return parseInt(a.split(' ')[0]) - parseInt(b.split(' ')[0]);
            });

            eventsContainer.innerHTML = sortedDates.map(date => {
                const dayEvents = grouped[date];
                return `
                    <div class="flex gap-4 md:gap-8 items-start mb-8 last:mb-0 group/day">
                        <!-- Date Side -->
                        <div class="flex flex-col items-center min-w-[64px] pt-1">
                            <span class="text-[28px] font-bold text-primary leading-none">${date.split(' ')[0]}</span>
                            <span class="text-[12px] uppercase text-secondary font-bold tracking-wider">${date.split(' ')[1]}</span>
                            <div class="w-[2px] self-center flex-1 bg-gradient-to-b from-outline-variant/50 to-transparent mt-4 rounded-full min-h-[40px] group-last/day:hidden"></div>
                        </div>
                        
                        <!-- Events List for this Day -->
                        <div class="flex-1 flex flex-col gap-3">
                            ${dayEvents.map(event => `
                                <div class="bg-white p-4 rounded-xl shadow-sm border border-outline-variant/10 flex justify-between items-center hover:shadow-md transition-all relative overflow-hidden ${!event.isRecurring ? 'border-l-4 border-l-secondary bg-secondary/5 ring-1 ring-secondary/10' : ''}">
                                    ${!event.isRecurring ? `
                                        <div class="absolute top-0 right-0 bg-secondary text-on-secondary px-2 py-0.5 text-[9px] font-bold uppercase rounded-bl-lg shadow-sm z-10">
                                            Destaque
                                        </div>
                                    ` : ''}
                                    <div class="flex-1">
                                        <h4 class="font-headline-md text-[16px] text-primary mb-1">${event.title}</h4>
                                        <div class="flex flex-wrap items-center gap-x-6 gap-y-1 text-[12px] text-on-surface-variant">
                                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-secondary">schedule</span> ${event.time}</span>
                                            <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-secondary">location_on</span> ${event.location}</span>
                                        </div>
                                    </div>
                                    <span class="material-symbols-outlined text-outline-variant/30 group-hover:text-primary transition-colors">chevron_right</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
}

function renderCalendar(data) {
    const calendarMonthYear = document.getElementById('calendar-month-year');
    const calendarDays = document.getElementById('calendar-days');
    
    calendarMonthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Clear previous days
    calendarDays.innerHTML = '';

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Empty cells for first day offset
    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += `<div class="p-4 border-b border-r border-outline-variant/5 bg-surface-container-lowest/30"></div>`;
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
        const hasEvent = data.events.some(e => {
            const [eDay, eMonthStr] = e.date.split(' ');
            return parseInt(eDay) === day && monthsMap[eMonthStr] === currentMonth;
        });

        calendarDays.innerHTML += `
            <div class="p-2 border-b border-r border-outline-variant/10 relative h-10 flex items-center justify-center ${hasEvent ? 'bg-secondary/10 font-bold text-primary' : 'text-on-surface-variant'}">
                <span class="z-10">${day}</span>
                ${hasEvent ? `<div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary"></div>` : ''}
            </div>
        `;
    }
}
