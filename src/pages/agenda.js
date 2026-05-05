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
    });

    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(data);
    });
}


function renderEventsList(data) {
    const eventsContainer = document.getElementById('agenda-events');
    if (eventsContainer) {
        if (!data.events || data.events.length === 0) {
            eventsContainer.innerHTML = `
                <div class="col-span-full py-12 flex flex-col items-center justify-center text-center bg-white rounded-xl border border-dashed border-outline-variant/30">
                    <span class="material-symbols-outlined text-outline text-5xl mb-4">calendar_today</span>
                    <p class="font-body-lg text-on-surface-variant">Ainda não há eventos agendados.</p>
                </div>
            `;
        } else {
            eventsContainer.innerHTML = data.events.map(event => `
                <div class="bg-white p-gutter rounded-xl shadow-sm border border-outline-variant/10 flex gap-4 items-center hover:shadow-md transition-all group">
                    <div class="bg-primary/5 text-primary p-3 rounded-lg flex flex-col items-center justify-center min-w-[70px] group-hover:bg-primary group-hover:text-on-primary transition-all">
                        <span class="font-bold text-[18px] leading-none">${event.date.split(' ')[0]}</span>
                        <span class="text-[10px] uppercase">${event.date.split(' ')[1]}</span>
                    </div>
                    <div>
                        <h4 class="font-headline-md text-[16px] text-primary mb-1">${event.title}</h4>
                        <div class="flex items-center gap-3 text-[12px] text-on-surface-variant">
                            <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">schedule</span> ${event.time}</span>
                            <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">location_on</span> ${event.location}</span>
                        </div>
                    </div>
                </div>
            `).join('');
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
