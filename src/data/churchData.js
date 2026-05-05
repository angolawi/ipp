import safImage from '../assets/images/saf.jpeg';

export const churchData = {
    name: "IPB Paranoá",
    fullName: "Igreja Presbiteriana do Paranoá",
    tagline: "Uma Comunidade de Fé e Identidade Reformada no Paranoá",
    description: "Seja bem-vindo à nossa casa. Aqui buscamos a glória de Deus através da exposição bíblica, comunhão mútua e serviço ao próximo.",

    contacts: {
        address: "Q 20 Cj B Lote 06, Paranoá, Brasília - DF",
        phone: "(61) 3333-0000",
        email: "secretaria@ipparanoa.org",
        mapsLink: "https://maps.app.goo.gl/GUdWy79VoeiUNtgT8"
    },

    officeHours: [
        { days: "Segunda a Sexta", hours: "08:00 - 18:00" },
        { days: "Sábado", hours: "09:00 - 12:00" },
        { days: "Domingo", hours: "Fechado" }
    ],

    cults: [
        { day: "Domingo", name: "Escola Bíblica Dominical", time: "09:00" },
        { day: "Quarta", name: "Estudo Bíblico", time: "20:00" },
        { day: "Terça", name: "Reunião de Oração", time: "20:00" },
        { day: "Domingo", name: "Culto Público", time: "19:00" }
    ],

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
            image: "https://lh3.googleusercontent.com/aida/ADBb0ugMIzivrf4NRt8GstLX4BTS1BvhYqvHk2tOFlyb0oPnbHCcLAGwPZZHnAiPX81N53qAN4ExlTtTc_ZnaNIOwuxHmvqhCRlsf3bR7alFxY-m3cYO_DZZEzU-EEQH0eO2knDOEEiWSo3DfV3jRtzNQBf3mMcapfNbR7Ls5aG4xuJhq8PZKLE2IHTtamvtJ6Wazw5Ce818H2tUAi9ERa5IcKSPSsy5lJ4ZgWAHY6_WuslSET-thz-t1xZ7bXB4UnytWEcQqxivcIaf2bY"
        },
        {
            category: "EVENTO",
            title: "Reunião de Oração e Pequenos Grupos",
            description: "Quarta-feira às 20h. Venha interceder conosco pelas necessidades da igreja.",
            image: "https://lh3.googleusercontent.com/aida/ADBb0ugMIzivrf4NRt8GstLX4BTS1BvhYqvHk2tOFlyb0oPnbHCcLAGwPZZHnAiPX81N53qAN4ExlTtTc_ZnaNIOwuxHmvqhCRlsf3bR7alFxY-m3cYO_DZZEzU-EEQH0eO2knDOEEiWSo3DfV3jRtzNQBf3mMcapfNbR7Ls5aG4xuJhq8PZKLE2IHTtamvtJ6Wazw5Ce818H2tUAi9ERa5IcKSPSsy5lJ4ZgWAHY6_WuslSET-thz-t1xZ7bXB4UnytWEcQqxivcIaf2bY"
        }
    ],

    ministries: [
        { id: "SAF", name: "SAF", fullName: "Sociedade Auxiliadora Feminina", description: "Dedicada ao serviço, oração e comunhão entre as mulheres da igreja.", image: safImage },
        { id: "UPH", name: "UPH", fullName: "União Presbiteriana de Homens", description: "Focada no fortalecimento espiritual do homem presbiteriano.", image: "https://lh3.googleusercontent.com/aida/ADBb0ugMIzivrf4NRt8GstLX4BTS1BvhYqvHk2tOFlyb0oPnbHCcLAGwPZZHnAiPX81N53qAN4ExlTtTc_ZnaNIOwuxHmvqhCRlsf3bR7alFxY-m3cYO_DZZEzU-EEQH0eO2knDOEEiWSo3DfV3jRtzNQBf3mMcapfNbR7Ls5aG4xuJhq8PZKLE2IHTtamvtJ6Wazw5Ce818H2tUAi9ERa5IcKSPSsy5lJ4ZgWAHY6_WuslSET-thz-t1xZ7bXB4UnytWEcQqxivcIaf2bY" },
        { id: "UMP", name: "UMP", fullName: "União de Mocidade Presbiteriana", description: "Um espaço de crescimento e amizade para jovens.", image: "https://lh3.googleusercontent.com/aida/ADBb0ugMIzivrf4NRt8GstLX4BTS1BvhYqvHk2tOFlyb0oPnbHCcLAGwPZZHnAiPX81N53qAN4ExlTtTc_ZnaNIOwuxHmvqhCRlsf3bR7alFxY-m3cYO_DZZEzU-EEQH0eO2knDOEEiWSo3DfV3jRtzNQBf3mMcapfNbR7Ls5aG4xuJhq8PZKLE2IHTtamvtJ6Wazw5Ce818H2tUAi9ERa5IcKSPSsy5lJ4ZgWAHY6_WuslSET-thz-t1xZ7bXB4UnytWEcQqxivcIaf2bY" },
        { id: "UPA", name: "UPA", fullName: "União de Adolescentes Presbiterianos", description: "Acompanhando adolescentes em sua fase de descobertas.", image: "https://lh3.googleusercontent.com/aida/ADBb0ugMIzivrf4NRt8GstLX4BTS1BvhYqvHk2tOFlyb0oPnbHCcLAGwPZZHnAiPX81N53qAN4ExlTtTc_ZnaNIOwuxHmvqhCRlsf3bR7alFxY-m3cYO_DZZEzU-EEQH0eO2knDOEEiWSo3DfV3jRtzNQBf3mMcapfNbR7Ls5aG4xuJhq8PZKLE2IHTtamvtJ6Wazw5Ce818H2tUAi9ERa5IcKSPSsy5lJ4ZgWAHY6_WuslSET-thz-t1xZ7bXB4UnytWEcQqxivcIaf2bY" },
        { id: "UCP", name: "UCP", fullName: "União de Crianças Presbiterianas", description: "Evangelizando e discipulando nossas crianças desde cedo.", image: "https://lh3.googleusercontent.com/aida/ADBb0ugMIzivrf4NRt8GstLX4BTS1BvhYqvHk2tOFlyb0oPnbHCcLAGwPZZHnAiPX81N53qAN4ExlTtTc_ZnaNIOwuxHmvqhCRlsf3bR7alFxY-m3cYO_DZZEzU-EEQH0eO2knDOEEiWSo3DfV3jRtzNQBf3mMcapfNbR7Ls5aG4xuJhq8PZKLE2IHTtamvtJ6Wazw5Ce818H2tUAi9ERa5IcKSPSsy5lJ4ZgWAHY6_WuslSET-thz-t1xZ7bXB4UnytWEcQqxivcIaf2bY" }
    ],

    leaders: [
        { name: "Rev. Carlos Eduardo Melo Lima", role: "Pastor Titular", bio: "Bacharel em Teologia pelo Seminário Presbiteriano de Brasília.", image: "https://lh3.googleusercontent.com/aida/ADBb0ugMIzivrf4NRt8GstLX4BTS1BvhYqvHk2tOFlyb0oPnbHCcLAGwPZZHnAiPX81N53qAN4ExlTtTc_ZnaNIOwuxHmvqhCRlsf3bR7alFxY-m3cYO_DZZEzU-EEQH0eO2knDOEEiWSo3DfV3jRtzNQBf3mMcapfNbR7Ls5aG4xuJhq8PZKLE2IHTtamvtJ6Wazw5Ce818H2tUAi9ERa5IcKSPSsy5lJ4ZgWAHY6_WuslSET-thz-t1xZ7bXB4UnytWEcQqxivcIaf2bY" },
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
        {
            date: "13 JUN",
            title: "Encontro de Casais",
            time: "19:30",
            location: "Em definição"
        },
        {
            date: "18 JUN",
            title: "Batismo",
            time: "20:00",
            location: "Templo"
        },
        {
            date: "25 JUN",
            title: "Vigília de Oração",
            time: "22:00",
            location: "Templo"
        }
    ]
};
