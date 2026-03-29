import OmHero from '../assets/projects/OmBookings/OmHero.png';
import mbHero from '../assets/projects/OmBookings/mbHero.png';
import dsHero from '../assets/projects/OmBookings/dsHero.jpg';
import mbArt from '../assets/projects/OmBookings/mbArt.png';
import mbArtBack from '../assets/projects/OmBookings/mbArtBack.png';
import mbForm from '../assets/projects/OmBookings/mbForm.png';
import dsArt from '../assets/projects/OmBookings/dsArt.png';
import dsArtBack from '../assets/projects/OmBookings/dsArtBack.png';
import dsForm from '../assets/projects/OmBookings/dsForm.png';

import loveHero from '../assets/projects/Body/loveHero.png';
import bench from '../assets/projects/Lovelace/bench.png';
import dashEmpty from '../assets/projects/Lovelace/dashEmpty.png';
import dashFull from '../assets/projects/Lovelace/dashFull.png';
import insightFirst from '../assets/projects/Lovelace/insightFirst.png';
import insight from '../assets/projects/Lovelace/insight.png';
import mentorias from '../assets/projects/Lovelace/mentorias.png';
import mentoriasAdd from '../assets/projects/Lovelace/mentoriasAdd.png';
import route from '../assets/projects/Lovelace/route.png';
import routeDetail from '../assets/projects/Lovelace/routeDetail.png';
import test from '../assets/projects/Lovelace/test.png';

import magazineHero from '../assets/projects/Body/magazineHero.jpg';
import interact from '../assets/projects/Sexthink/interact.png';
import KPI from '../assets/projects/Sexthink/KPI.png';
import main from '../assets/projects/Sexthink/main.png';
import moodboard from '../assets/projects/Sexthink/moodboard.png';
import research from '../assets/projects/Sexthink/research.png';
import wireframes from '../assets/projects/Sexthink/wireframes.png';
import protoPersonaM from '../assets/projects/Sexthink/protoPersonaM.png';
import protoPersonaF from '../assets/projects/Sexthink/protoPersonaF.png';
import userJourney from '../assets/projects/Sexthink/userJourney.png';

import appHome from '../assets/projects/Body/appHome.png';
import addUser from '../assets/projects/Nomiya/addUser.png';
import dashboard from '../assets/projects/Nomiya/dashboard.png';
import dashMobile from '../assets/projects/Nomiya/dashMobile.png';
import editCompany from '../assets/projects/Nomiya/editCompany.png';
import editUser from '../assets/projects/Nomiya/editUser.png';
import homeFull from '../assets/projects/Nomiya/homeFull.png';
import login from '../assets/projects/Nomiya/login.png';
import components from '../assets/projects/Nomiya/components.png';

import iztHome from '../assets/projects/Body/iztHome.jpeg';
import banner from '../assets/projects/Iztapalapa/banner.jpeg';
import mapas from '../assets/projects/Iztapalapa/mapas.png';
import textos from '../assets/projects/Iztapalapa/textos.png';
import userPersonaF from '../assets/projects/Iztapalapa/userPersonaF.png';
import userPersonaM from '../assets/projects/Iztapalapa/userPersonaM.png';
import wireframeSite from '../assets/projects/Iztapalapa/wireframeSite.png';

import taikoHome from '../assets/projects/Body/homeTaiko.jpg';
import avatar from '../assets/projects/Taikonauta/avatar.png';
import bienvenida from '../assets/projects/Taikonauta/bienvenida.png';
import board from '../assets/projects/Taikonauta/board.png';
import grado from '../assets/projects/Taikonauta/grado.png';
import loginT from '../assets/projects/Taikonauta/loginT.png';
import materia from '../assets/projects/Taikonauta/materia.png';
import modalBienvenida from '../assets/projects/Taikonauta/modalBienvenida.png';
import registro from '../assets/projects/Taikonauta/registro.png';
import question from '../assets/projects/Taikonauta/question.png';

import Xochi from '../assets/projects/Body/Xochi.png';
import notaUno from '../assets/projects/Xochimilco/notaUno.png';
import notaDos from '../assets/projects/Xochimilco/notaDos.png';
import notaTres from '../assets/projects/Xochimilco/notaTres.png';
import encuestaCuatro from '../assets/projects/Xochimilco/encuestaCuatro.png';
import encuestaUno from '../assets/projects/Xochimilco/encuestaUno.png';
import encuestaDos from '../assets/projects/Xochimilco/encuestaDos.png';
import encuestaTres from '../assets/projects/Xochimilco/encuestaTres.png';
import homeXochi from '../assets/projects/Xochimilco/homeXochi.png';
// Puedes ir agregando tus otros imports aquí conforme los necesites:
// import img3 from '../assets/projects/OmBookings/img3.png';

export const projects = [
    {
        id: 'ombookings',
        title: 'OM Bookings',
        externalLink: 'https://ombookings.com/',
        prototypeLink: '',
        role: 'Product Designer',
        tags: ['UX/UI', 'Dashboards', 'Product'],
        heroImage: OmHero, // Usa la variable definida en el import
        challenge: 'The fitness and wellness industry faced a significant barrier: the lack of a centralized, real-time booking system that could handle dynamic schedules while maintaining a premium user experience.',
        solution: 'We developed an end-to-end ecosystem that synchronizes studio availability with user demand. By implementing a high-fidelity interface and real-time data processing, we eliminated booking conflicts and reduced user drop-off by 40%.',
        description: 'OmBookings is a specialized B2B2C platform designed to bridge the gap between wellness centers and their clients. The focus was on creating a seamless flow from class discovery to checkout, ensuring that the visual language reflects the balance and tranquility of the fitness world.',
        timeline: '3 Months',
        category: 'Fitness / SaaS',
        gallery: [
            { url: dsHero, type: 'desktop' }, 
            { url: mbHero, type: 'mobile' },
            { url: mbArt, type: 'mobile' },
            { url: mbArtBack, type: 'mobile' },
            { url: mbForm, type: 'mobile' },
            { url: dsArt, type: 'medium' },
            { url: dsArtBack, type: 'medium' },
            { url: dsForm, type: 'desktop' },
        ],
        gridSpan: 'span 7'
    },
    {
        id: 'lovelace',
        title: 'Lovelace Project',
        externalLink: 'https://lovelace-project.netlify.app/',
        prototypeLink: 'https://www.figma.com/proto/QkR0sPahXEw7UlblbHroKq/Hackaton--2022-?page-id=35%3A44&type=design&node-id=34-655&viewport=183%2C324%2C0.05&t=TOMHfHXEUCXz6MMC-1&scaling=scale-down&starting-point-node-id=34%3A655',
        role: 'Product Designer & Frontend',
        tags: ['Hackathon Winner', 'UX/UI Design'],
        heroImage: loveHero, // URL externa también funciona
        challenge: 'Educational platforms often struggle to provide personalized mentorship at scale, leaving students without clear career guidance and mentors overwhelmed by administrative tasks.',
        solution: 'We engineered a comprehensive mentorship dashboard and roadmap system. By centralizing progress tracking and communication, we facilitated more meaningful connections between mentors and students, improving program completion rates by 35%.',
        description: 'Lovelace is an EdTech solution focused on empowering the next generation of tech talent. The project involved designing complex data visualizations for student progress, a flexible scheduling system, and a dynamic career roadmap that adapts to each user’s learning pace.',
        timeline: 'Hackaton 2022',
        category: 'EdTech / Dashboard / Social Impact',
        gallery: [
            { url: bench, type: 'medium' }, 
            { url: dashEmpty, type: 'medium' },
            { url: dashFull, type: 'medium' },
            { url: insightFirst, type: 'medium' },
            { url: insight, type: 'medium' },
            { url: mentorias, type: 'medium' },
            { url: mentoriasAdd, type: 'medium' },
            { url: route, type: 'medium' },
            { url: routeDetail, type: 'medium' },
            { url: test, type: 'medium' },
        ],
        gridSpan: 'span 5'
    },
    {
        id: 'sexthink',
        title: 'Sexthink',
        externalLink: 'https://sexthink.netlify.app/',
        prototypeLink: '',
        category: 'Landing Page / Health / Education',
        role: 'UX/UI Designer',
        tags: ['UX Design','UI Design', 'Interaction'],
        heroImage: magazineHero,
        challenge: 'Comprehensive sexual education is often hindered by social taboos and fragmented information, leaving young audiences without a safe, inclusive, and reliable space to resolve their doubts.',
        solution: 'We designed a digital platform that prioritizes anonymity and accessibility. By using a friendly yet professional visual language and organized content pillars, we created an environment where users can explore sensitive topics with confidence and clarity.',
        description: 'Sexthink is an educational initiative focused on breaking barriers through design. The project involved creating a robust content architecture for articles, interactive guides, and a community-focused interface that ensures a seamless and non-judgmental learning experience.',
        timeline: '2 Months',
        gallery: [
            { url: protoPersonaF, type: 'medium' }, 
            { url: protoPersonaM, type: 'medium' },
            { url: research, type: 'medium' },
            { url: moodboard, type: 'medium' },
            { url: userJourney, type: 'full' },
            { url: wireframes, type: 'medium' },
            { url: main, type: 'medium' },
            { url: interact, type: 'medium' },
            { url: KPI, type: 'medium' },
            // { url: test, type: 'medium' },
        ],
        gridSpan: 'span 5'
    },
    {
        id: 'nomiya',
        title: 'Nomiya',
        externalLink: '',
        prototypeLink: 'https://www.figma.com/proto/8wD3u86mtHVHkZ4GHZggrk/NomiYa!-(Copy)?page-id=2%3A3&type=design&node-id=1055-2949&viewport=2413%2C1345%2C0.08&t=vKsWq19yyTaQt5Nk-1&scaling=scale-down&starting-point-node-id=1055%3A2949&mode=design',
        category: 'Fintech',
        role: 'Product Designer',
        tags: ['Interface', 'Mobile First'],
        heroImage: appHome,
        challenge: 'Many workers face financial gaps between paydays, leading them to high-interest predatory loans due to a lack of immediate access to their already earned wages.',
        solution: 'We designed a seamless Earned Wage Access (EWA) platform that allows employees to withdraw their salary in real-time. By focusing on a "mobile-first" approach and transparent fee structures, we reduced financial stress and improved employee retention for partner companies.',
        description: 'Nomiya is a Fintech solution built to empower the workforce with liquidity and financial freedom. The project involved complex integrations with payroll systems and the creation of an ultra-clean UI that communicates security, reliability, and ease of use in every transaction.',
        timeline: '4 Months',
        gallery: [
            { url: addUser, type: 'mobile' },
            { url: dashboard, type: 'mobile' }, 
            { url: dashMobile, type: 'mobile' },
            { url: editCompany, type: 'mobile' },
            { url: editUser, type: 'mobile' },
            { url: homeFull, type: 'mobile' },
            { url: login, type: 'mobile' },
            { url: components, type: 'mobile' },
            // { url: login, type: 'medium' },
            // { url: test, type: 'medium' },
        ],
        gridSpan: 'span 7'
    },
    {
        id: 'iztapalapa',
        title: 'Iztapalapa Digital',
        externalLink: 'https://www.facebook.com/tlacuacheurbano',
        prototypeLink: '',
        category: 'Cultural / Gov / Social Impact',
        role: 'Information Architect',
        tags: ['UX', 'Structure'],
        heroImage: iztHome,
        cchallenge: 'Iztapalapa is often unfairly stigmatized by external perceptions of insecurity, overshadowing its deep-rooted cultural heritage and the vibrant community effort behind its world-class carnivals.',
        solution: 'We built a digital immersive experience that showcases the meticulous preparation, tradition, and artistry of the events. By shifting the focus to human stories and cultural pride, we created a platform that redefines the districts identity for a global audience.',
        description: 'A cultural preservation project focused on visibility and social impact. The digital experience guides users through the history of the carnivals, using high-impact photography and storytelling to bridge the gap between tradition and modern perception, proving that culture is Iztapalapa’s strongest asset.',
        timeline: '3 Months',
        gallery: [
            { url: banner, type: 'full' },
            { url: mapas, type: 'medium' }, 
            { url: textos, type: 'medium' },
            { url: userPersonaF, type: 'medium' },
            { url: userPersonaM, type: 'medium' },
            { url: wireframeSite, type: 'full' },
        ],
        gridSpan: 'span 7'
    },
    {
        id: 'taikonauta',
        title: 'Taikonauta',
        externalLink: '',
        prototypeLink: 'https://www.figma.com/proto/1bWAs53ic8599NESpCG7uQ/Master-UX%2FUI?node-id=19-87&scaling=scale-down',
        category: 'Gamification / Edtech',
        role: 'Creative Developer',
        tags: ['Creative Coding', 'UI'],
        heroImage: taikoHome,
        challenge: 'During the global pandemic, primary school children faced a massive educational gap and social isolation, leading to disengagement from traditional learning methods due to a lack of interactive and fun digital tools.',
        solution: 'We developed a gamified learning platform that transforms education into a space adventure. By integrating play-based mechanics and a vibrant visual system, we kept children motivated and connected, ensuring they continued their academic progress while having fun.',
        description: 'Taikonauta is an EdTech initiative designed to bring joy back to learning during challenging times. The project focused on "Kid-Centered Design," featuring simplified navigation, high-contrast visual cues, and an immersive space-themed interface that encourages curiosity and exploration for young students.',
        timeline: '3 Months',
        gallery: [
            { url: bienvenida, type: 'mobile' },
            { url: loginT, type: 'mobile' }, 
            { url: registro, type: 'mobile' },
            { url: avatar, type: 'mobile' },
            { url: grado, type: 'mobile' },
            { url: materia, type: 'mobile' },
            { url: modalBienvenida, type: 'mobile' },
            { url: board, type: 'mobile' },
            { url: question, type: 'mobile' },
        ],
        gridSpan: 'span 5'
    },
    {
        id: 'xochimilco',
        title: 'Mundo Xochimilco',
        externalLink: 'https://www.facebook.com/mundoxochimilcoo',
        prototypeLink: '',
        category: 'Cultural / Tourism',
        role: 'Product Designer',
        tags: ['Geolocation', 'UI'],
        heroImage: Xochi,
        challenge: 'Xochimilco’s tourism often remains on the surface, missing the opportunity to showcase the deeper historical value and the local businesses that sustain the chinampas ecosystem.',
        solution: 'We designed a geolocation-based platform that acts as a digital guide, increasing the visibility of local landmarks and artisans. By integrating interactive storytelling with practical navigation, we successfully boosted tourist engagement and supported local economic growth.',
        description: 'Mundo Xochimilco is a destination-branding project focused on sustainable tourism. The challenge was to create a mobile-first experience that works seamlessly outdoors, providing visitors with real-time information about traditions, routes, and services, effectively turning the district into an open-air digital museum.',
        timeline: '4 Months',
        gallery: [
            { url: encuestaUno, type: 'medium' },
            { url: encuestaDos, type: 'medium' }, 
            { url: encuestaTres, type: 'medium' },
            { url: encuestaCuatro, type: 'medium' },
            { url: homeXochi, type: 'medium' },
            { url: notaDos, type: 'medium' },
            { url: notaUno, type: 'medium' },
            { url: notaTres, type: 'medium' },
        ],
        gridSpan: 'span 5'
    }
];