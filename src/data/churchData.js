import safImage from '../assets/images/saf.jpeg';
import bannerImage from '../assets/images/banner.png';
import pastorImage from '../assets/images/pastor.jpg';
import kidsHeroImage from '../assets/images/kids-hero.png';

const getFirstSundays = (year) => {
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
    const dates = [];
    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 1);
        while (date.getDay() !== 0) { // 0 is Sunday
            date.setDate(date.getDate() + 1);
        }
        dates.push({
            date: `${date.getDate().toString().padStart(2, '0')} ${months[month]}`,
            title: "Ceia do Senhor",
            time: "19:00",
            location: "Templo",
            isRecurring: true,
            // Adicionando um timestamp para facilitar a ordenação se necessário
            timestamp: date.getTime()
        });
    }
    return dates;
};

const getWeeklyEvents = (year, cults) => {
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
    const dayMap = {
        "Domingo": 0,
        "Segunda": 1,
        "Terça": 2,
        "Quarta": 3,
        "Quinta": 4,
        "Sexta": 5,
        "Sábado": 6
    };
    const events = [];

    cults.forEach(cult => {
        let date = new Date(year, 0, 1);
        const targetDay = dayMap[cult.day];
        
        // Find first occurrence
        while (date.getDay() !== targetDay) {
            date.setDate(date.getDate() + 1);
        }
        
        // Generate for the whole year
        while (date.getFullYear() === year) {
            events.push({
                date: `${date.getDate().toString().padStart(2, '0')} ${months[date.getMonth()]}`,
                title: cult.name,
                time: cult.time,
                location: "Templo",
                isRecurring: true,
                timestamp: date.getTime()
            });
            date.setDate(date.getDate() + 7);
        }
    });
    
    return events;
};

const churchCults = [
    { day: "Domingo", name: "Escola Bíblica Dominical", time: "09:00" },
    { day: "Domingo", name: "Culto Público", time: "19:00" },
    { day: "Terça", name: "Reunião de Oração", time: "20:00" },
    { day: "Quarta", name: "Estudo Bíblico", time: "20:00" }
];

const currentYear = new Date().getFullYear();
const recurringEvents = [
    ...getFirstSundays(currentYear),
    ...getWeeklyEvents(currentYear, churchCults)
];

export const churchData = {
    name: "IPB Paranoá",
    fullName: "Igreja Presbiteriana do Paranoá",
    tagline: "Uma Comunidade de Fé e Identidade Reformada no Paranoá",
    description: "Seja bem-vindo à nossa casa. Aqui buscamos a glória de Deus através da exposição bíblica, comunhão mútua e serviço ao próximo.",

    contacts: {
        address: "Q 20 Cj B Lote 06, Paranoá, Brasília - DF",
        phone: "(61) XXXX-XXXX",
        whatsapp: "5561999999999",
        email: "contato@ipparanoa.org",
        mapsLink: "https://maps.app.goo.gl/GUdWy79VoeiUNtgT8"
    },

    officeHours: [
        { days: "Segunda a Sexta", hours: "08:00 - 18:00" },
        { days: "Sábado", hours: "09:00 - 12:00" },
        { days: "Domingo", hours: "Fechado" }
    ],

    cults: churchCults,

    verseOfTheDay: {
        text: "Portanto, quer comais, quer bebais ou façais outra qualquer coisa, fazei tudo para a glória de Deus.",
        reference: "1 Coríntios 10:31"
    },

    social: {
        youtube: "#",
        instagram: "https://www.instagram.com/ipbparanoa/",
        facebook: "https://www.facebook.com/congpresbparanoa/"
    },

    links: [
        { label: "Início", href: "#home" },
        { label: "Quem Somos", href: "#quem-somos" },
        { label: "Ministérios", href: "#ministerios" },
        { label: "Agenda", href: "#agenda" },
        { label: "Contato", href: "#contato" }
    ],

    news: [

        {
            category: "ENSINO",
            title: "Novo Ciclo de Exposições: Livro de Ageu",
            description: "Neste novo ciclo de exposições, estudaremos a mensagem de Deus ao povo que retornou do exílio, desafiando-os a priorizar a Casa de Deus.",
            image: bannerImage
        },
        {
            category: "EVENTO",
            title: "Reunião de Oração e Pequenos Grupos",
            description: "Quarta-feira às 20h. Venha interceder conosco pelas necessidades da igreja.",
            image: bannerImage
        }
    ],

    ministries: [
        { id: "SAF", name: "SAF", fullName: "Sociedade Auxiliadora Feminina", description: "Dedicada ao serviço, oração e comunhão entre as mulheres da igreja.", image: safImage },
        { id: "UPH", name: "UPH", fullName: "União Presbiteriana de Homens", description: "Focada no fortalecimento espiritual do homem presbiteriano.", image: bannerImage },
        { id: "UMP", name: "UMP", fullName: "União de Mocidade Presbiteriana", description: "Um espaço de crescimento e amizade para jovens.", image: bannerImage },
        { id: "UPA", name: "UPA", fullName: "UPA", link: "#kids", fullName: "União de Adolescentes Presbiterianos", description: "Acompanhando adolescentes em sua fase de descobertas.", image: bannerImage },
        { id: "UCP", name: "UCP", fullName: "UCP", link: "#kids", fullName: "União de Crianças Presbiterianas", description: "Evangelizando e discipulando nossas crianças desde cedo.", image: bannerImage }
    ],

    leaders: [
        { name: "Rev. Carlos Eduardo Melo Lima", role: "Pastor Titular", bio: "Em Cristo.", image: pastorImage },
        { name: "...", role: "Conselho de Presbíteros", bio: "Responsável pelo ministério de Ensino e Escola Dominical." },
        { name: "Presb. ", role: "Conselho de Presbíteros", bio: "Coordena as juntas de Diaconia e Obras Sociais." },
        { name: "Presb.", role: "Conselho de Presbíteros", bio: "Tesouraria e Administração Geral da Igreja." }
    ],

    reformedIdentity: {
        title: "Identidade Reformada e Confessionalidade",
        description: "Como herdeiros da Reforma Protestante do século XVI, subscrevemos os símbolos de fé de Westminster. Cremos que a Bíblia é a nossa única regra de fé e prática, e que a salvação é inteiramente pela graça de Deus.",
        quote: "O fim principal do homem é glorificar a Deus, e gozá-lo para sempre.",
        quoteAuthor: "Breve Catecismo de Westminster, Pergunta 1",
        solas: [
            { name: "Sola Scriptura", desc: "Somente a Escritura", icon: "menu_book", summary: "A Bíblia é a única autoridade infalível para a fé e a vida cristã, sendo a regra final de toda doutrina." },
            { name: "Sola Fide", desc: "Somente a Fé", icon: "verified", summary: "A justificação do pecador diante de Deus dá-se unicamente pela fé in Cristo, sem o mérito de nossas obras." },
            { name: "Sola Gratia", desc: "Somente a Graça", icon: "redeem", summary: "A salvação é um dom gratuito de Deus, concedido soberanamente sem qualquer contribuição humana." },
            { name: "Solus Christus", desc: "Somente Cristo", icon: "workspace_premium", summary: "Cristo é o único mediador entre Deus e os homens; não há salvação in nenhum outro nome." },
            { name: "Soli Deo Gloria", desc: "Somente a Deus a Glória", icon: "auto_awesome", summary: "Tudo o que existe e tudo o que fazemos deve ter como fim último a exaltação da glória de Deus." }
        ]
    },

    faithStandards: [
        {
            title: "Confissão de Fé de Westminster",
            description: "A principal norma doutrinária da nossa igreja, apresentando uma exposição sistemática da fé cristã reformada.",
            icon: "menu_book",
            link: `${import.meta.env.BASE_URL}docs/confissao_de_westminster.pdf`.replace(/\/+/g, '/')
        },
        {
            title: "Breve Catecismo de Westminster",
            description: "Um resumo conciso da doutrina bíblica in forma de perguntas e respostas, ideal para o ensino de crianças e novos membros.",
            icon: "school",
            link: `${import.meta.env.BASE_URL}docs/Breve_Catecismo_de_Westminster.pdf`.replace(/\/+/g, '/')
        },
        {
            title: "Catecismo Maior de Westminster",
            description: "Uma exposição mais detalhada e profunda das doutrinas cristãs, focada no crescimento espiritual e teológico maduro.",
            icon: "history_edu",
            link: `${import.meta.env.BASE_URL}docs/Catecismo_Maior_de_Westminster.pdf`.replace(/\/+/g, '/')
        },
        {
            title: "Manual Presbiteriano",
            description: "Contém a Constituição da IPB, o Código de Disciplina e os Princípios de Liturgia que regem nossa organização.",
            icon: "gavel",
            link: `${import.meta.env.BASE_URL}docs/manual_presbiteriano_2024.pdf`.replace(/\/+/g, '/')
        }
    ],

    events: [
        ...recurringEvents,
        {
            date: "13 JUN",
            title: "Encontro de Casais",
            time: "19:30",
            location: "Em definição"
        },
    ].map(event => {
        if (event.timestamp) return event;
        const monthsNames = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
        const [day, monthStr] = event.date.split(' ');
        const monthIdx = monthsNames.indexOf(monthStr);
        return {
            ...event,
            timestamp: new Date(currentYear, monthIdx, parseInt(day)).getTime()
        };
    }).sort((a, b) => a.timestamp - b.timestamp)
    .filter(event => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return event.timestamp >= today.getTime();
    }),

    kidsArea: {
        title: "Geração Futuro",
        description: "Um espaço dedicado ao crescimento espiritual, amizade e aprendizado para nossas crianças e adolescentes.",
        heroImage: kidsHeroImage,
        sections: [
            {
                id: "ucp",
                name: "UCP",
                fullName: "União de Crianças Presbiterianas",
                ageRange: "4 a 11 anos",
                motto: "Alegres na Esperança, Fortes na Fé, Dedicados no Amor",
                description: "Na UCP, as crianças aprendem as verdades bíblicas de forma lúdica e cativante. Nosso objetivo é plantar a semente do Evangelho em cada coração desde cedo.",
                activities: [
                    "Escola Bíblica Dominical",
                    "Culto Infantil",
                    "Acampamentos e Passeios",
                    "Gincanas Bíblicas"
                ],
                color: "amber"
            },
            {
                id: "upa",
                name: "UPA",
                fullName: "União de Adolescentes Presbiterianos",
                ageRange: "12 a 18 anos",
                motto: "Ao mestre sejamos fiéis",
                description: "A UPA é o lugar onde os adolescentes encontram identidade em Cristo, constroem amizades sólidas e são desafiados a viver sua fé de forma relevante no mundo atual.",
                activities: [
                    "Estudos Temáticos",
                    "Noites de Jogos e Comunhão",
                    "Retiros e Congressos",
                    "Ações de Serviço Social"
                ],
                color: "indigo"
            }
        ],
        verses: [
            { text: "Deixai vir a mim os pequeninos e não os impeçais, porque dos tais é o reino de Deus.", ref: "Marcos 10:14" },
            { text: "Lembra-te do teu Criador nos dias da tua mocidade...", ref: "Eclesiastes 12:1" },
            { text: "Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis...", ref: "1 Timóteo 4:12" }
        ]
    }
};
