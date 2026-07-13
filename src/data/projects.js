import OmHero from '../assets/projects/OmBookings/OmHero.png';
import mbHero from '../assets/projects/OmBookings/mbHero.png';
import dsHero from '../assets/projects/OmBookings/dsHero.jpg';
import mbArt from '../assets/projects/OmBookings/mbArt.png';
import mbArtBack from '../assets/projects/OmBookings/mbArtBack.png';
import mbForm from '../assets/projects/OmBookings/mbForm.png';
import dsArt from '../assets/projects/OmBookings/dsArt.png';
import dsArtBack from '../assets/projects/OmBookings/dsArtBack.png';
import dsForm from '../assets/projects/OmBookings/dsForm.png';

import loveHero from '../assets/projects/body/loveHero.png';
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

import magazineHero from '../assets/projects/body/magazineHero.jpg';
import interact from '../assets/projects/Sexthink/interact.png';
import KPI from '../assets/projects/Sexthink/KPI.png';
import main from '../assets/projects/Sexthink/main.png';
import moodboard from '../assets/projects/Sexthink/moodboard.png';
import research from '../assets/projects/Sexthink/research.png';
import wireframes from '../assets/projects/Sexthink/wireframes.png';
import protoPersonaM from '../assets/projects/Sexthink/protoPersonaM.png';
import protoPersonaF from '../assets/projects/Sexthink/protoPersonaF.png';
import userJourney from '../assets/projects/Sexthink/userJourney.png';

import appHome from '../assets/projects/body/appHome.png';
import addUser from '../assets/projects/Nomiya/addUser.png';
import dashboard from '../assets/projects/Nomiya/dashboard.png';
import dashMobile from '../assets/projects/Nomiya/dashMobile.png';
import editCompany from '../assets/projects/Nomiya/editCompany.png';
import editUser from '../assets/projects/Nomiya/editUser.png';
import homeFull from '../assets/projects/Nomiya/homeFull.png';
import login from '../assets/projects/Nomiya/login.png';
import components from '../assets/projects/Nomiya/components.png';

import iztHome from '../assets/projects/body/iztHome.jpeg';
import banner from '../assets/projects/Iztapalapa/banner.jpeg';
import mapas from '../assets/projects/Iztapalapa/mapas.png';
import textos from '../assets/projects/Iztapalapa/textos.png';
import userPersonaF from '../assets/projects/Iztapalapa/userPersonaF.png';
import userPersonaM from '../assets/projects/Iztapalapa/userPersonaM.png';
import wireframeSite from '../assets/projects/Iztapalapa/wireframeSite.png';

import taikoHome from '../assets/projects/body/homeTaiko.jpg';
import avatar from '../assets/projects/Taikonauta/avatar.png';
import bienvenida from '../assets/projects/Taikonauta/bienvenida.png';
import board from '../assets/projects/Taikonauta/board.png';
import grado from '../assets/projects/Taikonauta/grado.png';
import loginT from '../assets/projects/Taikonauta/loginT.png';
import materia from '../assets/projects/Taikonauta/materia.png';
import modalBienvenida from '../assets/projects/Taikonauta/modalBienvenida.png';
import registro from '../assets/projects/Taikonauta/registro.png';
import question from '../assets/projects/Taikonauta/question.png';

import Xochi from '../assets/projects/body/Xochi.png';
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
        tags: ['UX/UI', 'Responsive Design Strategy', 'Front-end implementation', 'Design QA'],
        heroImage: OmHero, // Usa la variable definida en el import
        overview: 'OMBookings is a B2B2C digital platform developed for a music booking agency to replace static PDF artist catalogs with an interactive online experience. The platform allows event organizers to explore artist profiles, career highlights, and social media in one centralized place, making artist discovery faster while providing the agency with a scalable and easier-to-maintain solution.',
        challenge: 'The agency managed its artist catalog through PDF portfolios shared via email and WhatsApp. Clients often received large files containing dozens of artists, even when they were interested in only one. This created unnecessary friction, slowed down inquiries, and made updating artist information inefficient.',
        solution: 'We transformed static PDF catalogs into a centralized digital platform where clients could quickly browse artists, explore their profiles, review their career highlights, and access social media without downloading multiple files. I also collaborated on front-end implementation and provided UX guidance to the agency graphic designer, ensuring the experience was responsive, scalable, and aligned with product design best practices.',
        impact: 'Replaced static PDF catalogs with a scalable digital platform, reducing friction during artist discovery and simplifying content management for the agency. The project also established a responsive design foundation that improved collaboration between design and development while making future updates significantly easier.',
        timeline: '3 Months',
        category: 'Music / SaaS',
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
        overview: 'Lovelace is an EdTech platform concept created during Hackathon 2022 to help reduce barriers for women entering the technology industry. Inspired by learning platforms like Platzi, the product combines personalized learning paths, mentorship, live events, and community features into a single ecosystem designed to support long-term career growth.',
        challenge: 'Women remain underrepresented in the technology industry, often facing limited access to mentorship, structured learning paths, and supportive communities. Our challenge was to design a platform capable of making technology education more accessible while creating a safe environment where women could learn directly from professionals already working in the field.',
        solution: 'We designed a flexible learning platform where users could follow curated learning paths or build personalized study journeys based on their goals. Through benchmarking with leading EdTech products such as Platzi, we integrated mentorship, live events, career roadmaps, and community-driven learning into a cohesive product experience that encouraged continuous growth and engagement.',
        impact: '🏆 Winner of Best Pitch at Hackathon 2022. The project successfully validated the product vision by demonstrating how mentorship, personalized learning, and community could work together to create a scalable educational experience focused on increasing women participation in technology.',
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
        tags: ['UX/UI Design', 'Content Strategy', 'Inclusive Design'],
        heroImage: magazineHero,
        overview: 'Sexthink is a digital educational platform concept focused on making sexual health and identity-related information more accessible, inclusive, and easier to understand. The project explored how content architecture, visual design, and user experience principles could transform complex and sensitive topics into a clear, approachable, and judgment-free learning experience.',
        challenge: 'Sexual education is often affected by social stigma, fragmented information, and a lack of accessible resources where people can explore sensitive topics comfortably. The challenge was to create a digital experience that organized reliable information while making users feel safe, represented, and confident while navigating personal questions.',
        solution: 'We designed a content-driven digital platform that combines articles, educational resources, and structured content categories into an intuitive experience. Through a friendly yet professional visual language, clear information hierarchy, and inclusive design principles, we created an environment where users could explore topics related to sexual health, identity, and relationships with clarity and confidence.',
        impact: 'Created a structured digital experience that transformed complex educational content into an accessible and engaging platform. The project demonstrated the importance of inclusive design, content organization, and thoughtful user experiences when addressing sensitive topics.',
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
        tags: [ 'FinTech', 'Product Design', 'UX/UI Design', 'Mobile First'],
        heroImage: appHome,
        overview: 'Nomiya is a FinTech product concept designed to provide employees with early access to their earned wages through a seamless digital experience. Developed as an internal product initiative, the project explored how payroll integrations, financial transparency, and user-centered design could simplify access to short-term liquidity while maintaining trust and security throughout the experience.',
        challenge: 'Many employees face unexpected financial situations between pay periods and often rely on high-interest alternatives due to limited access to flexible financial solutions. The challenge was to design a secure and transparent platform that allowed users to access their earned wages while creating confidence throughout every step of the financial journey.',
        solution: 'We designed an end-to-end Earned Wage Access experience focused on simplicity, trust, and usability. The solution included onboarding flows, authentication, transaction journeys, salary advance requests, payment information, and system states such as errors and confirmations. Through a mobile-first approach, the product was structured to make financial decisions easier and more transparent for employees.',
        impact: 'Designed a complete FinTech experience covering the full product journey, from authentication to financial transactions and edge cases. The project demonstrated the ability to design complex financial workflows while balancing usability, security, and user confidence.',
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
        tags: ['UX Research', 'Information Architecture', 'Content Strategy', 'UX/UI Design', 'Cultural Design'],
        heroImage: iztHome,
        overview: 'Carnavales Iztapalapa is a cultural digital experience created to showcase the history, traditions, and communities behind the different carnival celebrations of Iztapalapa. The project focused on transforming cultural research into an engaging storytelling experience, combining historical content, photography, maps, and community narratives to make local heritage more accessible to a wider audience.',
        challenge: 'Iztapalapa is often perceived primarily through negative external narratives, overlooking the cultural richness, traditions, and community efforts that shape its identity. The challenge was to create a digital experience capable of documenting and communicating the history of its carnivals while helping audiences discover the people, crafts, and traditions behind these celebrations.',
        solution: 'We designed an immersive digital platform based on cultural research and storytelling principles. The experience organized information about different communities, carnival origins, traditions, artisans, and local practices through structured content, visual storytelling, maps, and user-centered navigation. The goal was to transform historical information into an accessible and engaging experience that encouraged cultural discovery.',
        impact: 'Created a digital archive and storytelling experience that increased the visibility of Iztapalapa’s cultural heritage by organizing historical research into an accessible platform. The project demonstrated how UX design, information architecture, and visual storytelling can help preserve traditions and connect communities with broader audiences.',
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
        tags: ['EdTech', 'Gamification', 'UX/UI Design', 'Kid-Centered Design'],
        heroImage: taikoHome,
        overview: 'Taikonauta is an EdTech platform concept designed to make learning more engaging for primary school students during the challenges of remote education. The project explored how gamification, visual storytelling, and child-centered design principles could transform traditional learning experiences into interactive journeys that encourage curiosity and continuous exploration.',
        challenge: 'During the COVID-19 pandemic, many primary school students faced difficulties adapting to remote learning, including reduced engagement and limited interaction with traditional digital education tools. The challenge was to create an experience that balanced learning and entertainment, helping children stay motivated while continuing their educational development.',
        solution: 'We designed a gamified learning platform inspired by interactive learning experiences such as Duolingo, where students could progress through educational challenges, earn points, and advance through different levels. Through child-centered design principles, simplified navigation, playful interactions, and a space exploration theme, we created an experience that made learning feel more engaging and rewarding.',
        impact: 'Designed an educational product concept that explored how gamification and user-centered design could increase engagement in digital learning environments. The project demonstrated the potential of combining entertainment mechanics with educational goals to create more enjoyable and accessible learning experiences for children.',
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
        tags: ['UX/UI Design', 'Information Architecture', 'Content Strategy', 'WordPress', 'Community Design'],
        heroImage: Xochi,
        overview: 'Mundo Xochimilco is a digital platform created to highlight the cultural heritage, local businesses, traditions, and community initiatives of Xochimilco. The project focused on building a centralized online space where residents and visitors could discover historical information, local services, cultural content, and news related to the region.',
        challenge: 'Xochimilco has a rich cultural identity shaped by its traditions, local businesses, crafts, and community activities, but much of this information was fragmented across different sources. The challenge was to create a digital platform that organized and amplified these stories, making local knowledge and experiences easier to discover.',
        solution: 'We designed and developed a WordPress-based content platform that structured information into different categories, including local businesses, trajineras, cultural content, historical information, and community news. Through organized navigation, content tags, and a scalable publishing system, we created an accessible digital hub that allowed users to explore and learn more about Xochimilco.',
        impact: 'Conducted research with 40 residents of Xochimilco to understand local perspectives and information needs. The project transformed scattered cultural, historical, and community information into a structured digital platform, increasing visibility for local initiatives, traditions, and services while creating a foundation for continuous content growth.',
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
