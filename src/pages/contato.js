export function initContato(data) {
    document.getElementById('contact-address').textContent = data.contacts.address;
    document.getElementById('contact-phone').textContent = data.contacts.phone;
    document.getElementById('contact-email').textContent = data.contacts.email;

    // Set dynamic Google Maps embed URL
    const mapIframe = document.getElementById('map-iframe');
    if (mapIframe) {
        const query = encodeURIComponent(data.contacts.address);
        mapIframe.src = `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    }

    const hoursList = document.getElementById('office-hours-list');
    if (hoursList) {
        hoursList.innerHTML = data.officeHours.map(h => `
            <li class="flex justify-between items-center">
                <span class="text-on-surface-variant">${h.days}</span>
                <span class="font-bold text-primary">${h.hours}</span>
            </li>
        `).join('');
    }
}
