import { html } from '../utils/security.js';

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
        hoursList.innerHTML = html`${data.officeHours.map(h => html`
            <li class="flex justify-between items-center">
                <span class="text-on-surface-variant">${h.days}</span>
                <span class="font-bold text-primary">${h.hours}</span>
            </li>
        `)}`;
    }

    renderContactForm(data);
}

function renderContactForm(data) {
    const container = document.getElementById('contact-form-container');
    if (!container) return;

    container.innerHTML = html`
        <div class="bg-surface-container-low p-stack-md md:p-stack-lg rounded-2xl border border-outline-variant/10 shadow-sm animate-in">
            <div class="max-w-2xl">
                <h2 class="font-headline-lg text-headline-lg text-primary mb-2">Fale Conosco</h2>
                <p class="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                    Tem alguma dúvida ou deseja agendar uma visita? Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>
                
                <form id="contact-form" class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-1">
                            <label for="name" class="font-label-md text-label-md text-primary ml-1">Seu Nome</label>
                            <input type="text" id="name" required placeholder="Ex: João Silva" 
                                class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                        </div>
                        <div class="space-y-1">
                            <label for="email" class="font-label-md text-label-md text-primary ml-1">E-mail para contato</label>
                            <input type="email" id="email" required placeholder="Ex: joao@email.com" 
                                class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                        </div>
                    </div>
                    
                    <div class="space-y-1">
                        <label for="subject" class="font-label-md text-label-md text-primary ml-1">Assunto</label>
                        <select id="subject" required class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                            <option value="" disabled selected>Selecione um assunto</option>
                            <option value="Informações">Informações Gerais</option>
                            <option value="Visita">Desejo uma Visita</option>
                            <option value="Oração">Pedido de Oração</option>
                            <option value="Outro">Outros Assuntos</option>
                        </select>
                    </div>

                    <div class="space-y-1">
                        <label for="message" class="font-label-md text-label-md text-primary ml-1">Sua Mensagem</label>
                        <textarea id="message" required rows="4" placeholder="Como podemos ajudar você?" 
                            class="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
                    </div>

                    <div class="pt-2 flex flex-col sm:flex-row gap-4">
                        <button type="submit" id="btn-whatsapp" class="flex-1 bg-secondary text-on-secondary px-6 py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-on-secondary-container transition-all shadow-sm">
                            <i class="fa-brands fa-whatsapp text-xl"></i>
                            Enviar via WhatsApp
                        </button>
                        <button type="button" id="btn-email" class="flex-1 bg-primary text-on-primary px-6 py-4 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-sm">
                            <span class="material-symbols-outlined">mail</span>
                            Enviar via E-mail
                        </button>
                    </div>
                    <p class="text-[12px] text-on-surface-variant text-center opacity-70 mt-4">
                        Ao clicar em enviar, você será redirecionado para o WhatsApp ou seu cliente de e-mail com a mensagem pré-preenchida.
                    </p>
                </form>
            </div>
        </div>
    `;

    const form = document.getElementById('contact-form');
    const btnEmail = document.getElementById('btn-email');

    if (!form) return;

    const handleSubmission = (type) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            return; // Form validation will handle this
        }

        const text = `Olá, meu nome é ${name} (${email}).\n\nAssunto: ${subject}\n\nMensagem: ${message}`;

        if (type === 'whatsapp') {
            const phone = data.contacts.whatsapp;
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        } else {
            const mailUrl = `mailto:${data.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
            window.location.href = mailUrl;
        }
    };

    form.onsubmit = (e) => {
        e.preventDefault();
        handleSubmission('whatsapp');
    };

    if (btnEmail) {
        btnEmail.onclick = () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                form.reportValidity();
                return;
            }
            handleSubmission('email');
        };
    }
}
