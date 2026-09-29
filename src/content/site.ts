import type { Language } from '../i18n/LanguageContext'

export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  title: string
  eyebrow: string
  description: string
  impact: string
  stack: string[]
  repository?: string
  liveUrl?: string
  detailPath?: string
  featured?: boolean
  videoId?: string
  screenshot?: string
  screenshotAlt?: string
  size?: 'large'
}

export type TimelineItem = {
  period: string
  title: string
  place: string
  description: string
  type: 'experiencia' | 'educacion'
}

export type PhoneScreenshot = {
  src: string
  alt: string
}

const cvByLanguage: Record<Language, { localPath: string; externalUrl: string }> = {
  es: { localPath: '/cv/pedro-gallino-cv.pdf', externalUrl: '' },
  en: { localPath: '/cv/pedro-gallino-cv-en.pdf', externalUrl: '' },
}

export function getCvUrl(language: Language): string {
  const cv = cvByLanguage[language]
  return cv.externalUrl || cv.localPath
}

type SiteContent = {
  personal: {
    name: string
    role: string
    location: string
    email: string
    intro: string
    portrait: string
    avatar: string
    cv: { localPath: string; externalUrl: string }
    socials: SocialLink[]
  }
  projects: Project[]
  timeline: TimelineItem[]
  skills: string[]
  postMorfi: {
    title: string
    liveUrl: string
    logo: string
    stores: {
      ios: { href: string; status: string; label: string; badge: string }
      android: { href: string; status: string; label: string; badge: string; waitlistAccessKey: string }
    }
    screenshots: PhoneScreenshot[]
    summary: string
    role: string
    launchNote: string
    metrics: { value: string; label: string }[]
    features: { number: string; title: string; text: string }[]
    areas: string[]
  }
}

const es: SiteContent = {
  personal: {
    name: 'Pedro Gallino',
    role: 'Ingeniero en Informática',
    location: 'Buenos Aires, Argentina',
    email: 'ing.pgallino@gmail.com',
    intro:
      'Ingeniero graduado de la UBA con experiencia práctica en productos web, sistemas distribuidos y arquitecturas escalables.',
    portrait: '/images/pedro-gallino-profile.webp',
    avatar: '/images/pedro-gallino-avatar.webp',
    cv: cvByLanguage.es,
    socials: [
      { label: 'GitHub', href: 'https://github.com/pgallino' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedro-gallino-b31475236' },
      { label: 'Email', href: 'mailto:ing.pgallino@gmail.com' },
    ],
  },
  projects: [
    {
      slug: 'postmorfi',
      title: 'PostMorfi',
      eyebrow: 'Producto propio · 2026',
      description:
        'Una plataforma para descubrir restaurantes, registrar cada salida y convertir experiencias gastronómicas en un historial compartido.',
      impact: 'Hoy lo usan más de 630 personas, con casi 1.600 reseñas cargadas.',
      stack: ['Producto full-stack', 'APIs de terceros', 'Infraestructura web', 'Desarrollo asistido por IA'],
      liveUrl: 'https://postmorfi.com/',
      detailPath: '/projects/postmorfi',
      featured: true,
    },
    {
      slug: 'left4dead-2d',
      title: 'L4D2D',
      eyebrow: 'Taller de Programación I · 2023',
      description:
        'Videojuego cooperativo 2D inspirado en Left 4 Dead, con arquitectura cliente-servidor multijugador sobre sockets.',
      impact: 'Desarrollado en equipo de dos personas y sin asistencia de IA: lógica de juego en tiempo real, menú gráfico con Qt y tests automatizados.',
      stack: ['C++', 'SDL2', 'Qt', 'Sockets TCP', 'CMake', 'Sin asistencia de IA'],
      repository: 'https://github.com/pgallino/Taller1-TP-Left4Dead',
      videoId: 'bAsRP4NCzlE',
      size: 'large',
    },
    {
      slug: 'gedunet',
      title: 'GEduNet',
      eyebrow: 'Trabajo final de carrera · 2024—2025',
      description:
        'Simulador gráfico educativo para visualizar redes, flujo de paquetes y protocolos desde el navegador.',
      impact: 'Simula capas de aplicación, transporte, red y enlace, incluyendo ICMP, ARP, TCP y HTTP.',
      stack: ['TypeScript', 'Aplicación client-side', 'Redes'],
      repository: 'https://github.com/MegaRedHand/network-simulator',
      liveUrl: 'https://megaredhand.github.io/network-simulator/',
      screenshot: '/images/gedunet/gedunet-screenshot.png',
      screenshotAlt: 'Simulador de redes de GEduNet mostrando una topología con hosts, switches y routers conectados',
      size: 'large',
    },
    {
      slug: 'steamyanalytics',
      title: 'SteamyAnalytics',
      eyebrow: 'Sistemas distribuidos',
      description:
        'Pipeline distribuido para procesar y analizar datasets de Steam mediante nodos especializados.',
      impact: 'Tolerancia a fallos, réplicas, monitoreo automático y escalabilidad horizontal.',
      stack: ['RabbitMQ', 'Docker Compose', 'Sistemas distribuidos'],
      repository: 'https://github.com/pgallino/Distribuidos-TP-Grupal',
    },
    {
      slug: 'heladeria-robotizada',
      title: 'Heladeria robotizada',
      eyebrow: 'Programación concurrente',
      description:
        'Sistema distribuido que coordina múltiples robots para procesar pedidos en paralelo.',
      impact: 'Elección de líder con algoritmo Bully, distribución de carga y tolerancia a fallos.',
      stack: ['Rust', 'Concurrencia', 'Sistemas distribuidos'],
      repository: 'https://github.com/pgallino/Programacion-Concurrente',
    },
    {
      slug: 'turnero-medico',
      title: 'Turnero Médico',
      eyebrow: 'Trabajo práctico grupal',
      description:
        'Sistema de gestión de turnos médicos: reserva y cancelación por especialidad o médico, con un bot de Telegram como cliente.',
      impact: 'Controla superposición de turnos, feriados, penalización de pacientes ausentes y autenticación, con test automatizados en Cucumber y RSpec.',
      stack: ['Ruby', 'Sinatra', 'PostgreSQL', 'Cucumber', 'RSpec'],
      repository: 'https://github.com/pgallino/turnero-api',
    },
    {
      slug: 'sisop',
      title: 'SISOP',
      eyebrow: 'Sistemas Operativos · 2023',
      description:
        'Tres trabajos grupales de sistemas operativos: una shell tipo bash, un scheduler sobre el kernel educativo JOS y un sistema de archivos propio con FUSE.',
      impact: 'Implementación de cambio de contexto y planificación de procesos sobre un kernel real, además de un filesystem accesible con las syscalls estándar de Linux.',
      stack: ['C', 'FUSE', 'Kernel JOS', 'Sistemas operativos'],
      repository: 'https://github.com/pgallino/SISOP',
    },
  ],
  timeline: [
    {
      period: 'Jul. 2026 — Actualidad',
      title: 'Founder & Software Engineer',
      place: 'PostMorfi',
      description:
        'Desarrollo end-to-end del producto, decisiones de producto, integraciones, contenido y difusión.',
      type: 'experiencia',
    },
    {
      period: 'Dic. 2025 — Ene. 2026',
      title: 'Desarrollador de Software Freelance',
      place: 'Upwork',
      description:
        'Automatización y scraping con Python, FastAPI, pytest e integraciones vía webhooks.',
      type: 'experiencia',
    },
    {
      period: 'Sept. 2025 — Dic. 2025',
      title: 'Analista de Ciberseguridad Trainee',
      place: 'BTR Consulting',
      description:
        'Formación en VAPT, monitoreo SOC, análisis de incidentes, riesgos y continuidad de negocio.',
      type: 'experiencia',
    },
    {
      period: 'Mar. 2021 — Jul. 2025',
      title: 'Ingeniería en Informática',
      place: 'Universidad de Buenos Aires · FIUBA',
      description: 'Formación universitaria completa en ingeniería de software y sistemas.',
      type: 'educacion',
    },
    {
      period: 'Mar. 2015 — Dic. 2020',
      title: 'Bachillerato en Ciencias Exactas, Naturales e Ingeniería',
      place: 'Colegio Nacional de Buenos Aires',
      description: 'Formación secundaria con orientación científica y técnica.',
      type: 'educacion',
    },
  ],
  skills: [
    'Python', 'Go', 'Rust', 'Ruby', 'C++', 'C', 'Java', 'TypeScript', 'SQL',
    'React', 'FastAPI', 'Fastify', 'Spring Boot', 'PostgreSQL', 'MongoDB',
    'Docker', 'Kubernetes', 'AWS', 'GCP', 'GitHub Actions',
  ],
  postMorfi: {
    title: 'PostMorfi',
    liveUrl: 'https://postmorfi.com/',
    logo: '/images/postmorfi/logo-official.png',
    stores: {
      ios: {
        href: 'https://apps.apple.com/ar/app/postmorfi/id6807645088',
        status: 'Disponible en',
        label: 'App Store',
        badge: '/images/store-badges/app-store.svg',
      },
      android: {
        href: '',
        status: 'Acceso anticipado',
        label: 'Android',
        badge: '/images/store-badges/google-play-trimmed.png',
        waitlistAccessKey: 'db2acda6-87cd-46ef-ba60-8e5d93e456e3',
      },
    },
    screenshots: [
      { src: '/images/postmorfi/screens/catalog.webp', alt: 'Catálogo de restaurantes de PostMorfi' },
      { src: '/images/postmorfi/screens/map.webp', alt: 'Mapa de restaurantes de PostMorfi' },
      { src: '/images/postmorfi/screens/profile.webp', alt: 'Perfil personal y reseñas en PostMorfi' },
      { src: '/images/postmorfi/screens/friends.webp', alt: 'Ranking de amigos en PostMorfi' },
      { src: '/images/postmorfi/screens/users.webp', alt: 'Usuarios y métricas de la comunidad de PostMorfi' },
    ],
    summary:
      'PostMorfi ordena la vida gastronómica de cada persona: lugares por probar, reseñas, listas y rankings con amigos, todo en un mismo producto.',
    role:
      'Como founder y software engineer, definí el producto y construí la experiencia de punta a punta: frontend, backend, infraestructura e integraciones con servicios de terceros.',
    launchNote: 'Métricas de la comunidad de PostMorfi.',
    metrics: [
      { value: '631', label: 'usuarios' },
      { value: '1.579', label: 'reseñas' },
      { value: '1.060', label: 'restaurantes registrados' },
      { value: '1.278', label: 'fotos subidas' },
    ],
    features: [
      { number: '01', title: 'Explorar', text: 'Descubrir restaurantes y opiniones públicas de la comunidad.' },
      { number: '02', title: 'Guardar', text: 'Crear listas manuales o basadas en filtros para cada plan.' },
      { number: '03', title: 'Registrar', text: 'Puntuar platos y servicio, sumar fotos y escribir reseñas.' },
      { number: '04', title: 'Compartir', text: 'Comparar paladares y crear rankings con amigos.' },
    ],
    areas: ['Frontend', 'Backend', 'Infraestructura', 'Integraciones con APIs', 'Producto', 'Contenido y difusión'],
  },
}

const en: SiteContent = {
  personal: {
    name: 'Pedro Gallino',
    role: 'Software Engineer',
    location: 'Buenos Aires, Argentina',
    email: 'ing.pgallino@gmail.com',
    intro:
      'Engineer graduated from UBA with hands-on experience in web products, distributed systems, and scalable architectures.',
    portrait: '/images/pedro-gallino-profile.webp',
    avatar: '/images/pedro-gallino-avatar.webp',
    cv: cvByLanguage.en,
    socials: [
      { label: 'GitHub', href: 'https://github.com/pgallino' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedro-gallino-b31475236' },
      { label: 'Email', href: 'mailto:ing.pgallino@gmail.com' },
    ],
  },
  projects: [
    {
      slug: 'postmorfi',
      title: 'PostMorfi',
      eyebrow: 'Personal product · 2026',
      description:
        'A platform to discover restaurants, log every outing, and turn dining experiences into a shared history.',
      impact: "Today it's used by more than 630 people, with nearly 1,600 reviews logged.",
      stack: ['Full-stack product', 'Third-party APIs', 'Web infrastructure', 'AI-assisted development'],
      liveUrl: 'https://postmorfi.com/',
      detailPath: '/projects/postmorfi',
      featured: true,
    },
    {
      slug: 'left4dead-2d',
      title: 'L4D2D',
      eyebrow: 'Programming Workshop I · 2023',
      description:
        '2D cooperative video game inspired by Left 4 Dead, with a multiplayer client-server architecture over sockets.',
      impact: 'Built by a two-person team without AI assistance: real-time game logic, a graphical menu with Qt, and automated tests.',
      stack: ['C++', 'SDL2', 'Qt', 'TCP Sockets', 'CMake', 'No AI assistance'],
      repository: 'https://github.com/pgallino/Taller1-TP-Left4Dead',
      videoId: 'bAsRP4NCzlE',
      size: 'large',
    },
    {
      slug: 'gedunet',
      title: 'GEduNet',
      eyebrow: 'Capstone project · 2024—2025',
      description:
        'Educational graphical simulator to visualize networks, packet flow, and protocols from the browser.',
      impact: 'Simulates application, transport, network, and link layers, including ICMP, ARP, TCP, and HTTP.',
      stack: ['TypeScript', 'Client-side application', 'Networking'],
      repository: 'https://github.com/MegaRedHand/network-simulator',
      liveUrl: 'https://megaredhand.github.io/network-simulator/',
      screenshot: '/images/gedunet/gedunet-screenshot.png',
      screenshotAlt: 'GEduNet network simulator showing a topology with connected hosts, switches, and routers',
      size: 'large',
    },
    {
      slug: 'steamyanalytics',
      title: 'SteamyAnalytics',
      eyebrow: 'Distributed systems',
      description:
        'Distributed pipeline to process and analyze Steam datasets using specialized nodes.',
      impact: 'Fault tolerance, replicas, automatic monitoring, and horizontal scalability.',
      stack: ['RabbitMQ', 'Docker Compose', 'Distributed systems'],
      repository: 'https://github.com/pgallino/Distribuidos-TP-Grupal',
    },
    {
      slug: 'heladeria-robotizada',
      title: 'Robotic Ice Cream Shop',
      eyebrow: 'Concurrent programming',
      description:
        'Distributed system that coordinates multiple robots to process orders in parallel.',
      impact: 'Leader election with the Bully algorithm, load distribution, and fault tolerance.',
      stack: ['Rust', 'Concurrency', 'Distributed systems'],
      repository: 'https://github.com/pgallino/Programacion-Concurrente',
    },
    {
      slug: 'turnero-medico',
      title: 'Medical Appointment System',
      eyebrow: 'Group coursework project',
      description:
        'Medical appointment management system: booking and cancellation by specialty or doctor, with a Telegram bot as the client.',
      impact: 'Handles appointment overlap, holidays, no-show patient penalties, and authentication, with automated tests in Cucumber and RSpec.',
      stack: ['Ruby', 'Sinatra', 'PostgreSQL', 'Cucumber', 'RSpec'],
      repository: 'https://github.com/pgallino/turnero-api',
    },
    {
      slug: 'sisop',
      title: 'SISOP',
      eyebrow: 'Operating Systems · 2023',
      description:
        'Three group assignments in operating systems: a bash-like shell, a scheduler built on the JOS educational kernel, and a custom filesystem with FUSE.',
      impact: 'Implemented context switching and process scheduling on a real kernel, plus a filesystem accessible through standard Linux syscalls.',
      stack: ['C', 'FUSE', 'JOS kernel', 'Operating systems'],
      repository: 'https://github.com/pgallino/SISOP',
    },
  ],
  timeline: [
    {
      period: 'Jul. 2026 — Present',
      title: 'Founder & Software Engineer',
      place: 'PostMorfi',
      description:
        'End-to-end product development, product decisions, integrations, content, and outreach.',
      type: 'experiencia',
    },
    {
      period: 'Dec. 2025 — Jan. 2026',
      title: 'Freelance Software Developer',
      place: 'Upwork',
      description:
        'Automation and scraping with Python, FastAPI, pytest, and webhook integrations.',
      type: 'experiencia',
    },
    {
      period: 'Sep. 2025 — Dec. 2025',
      title: 'Cybersecurity Analyst Trainee',
      place: 'BTR Consulting',
      description:
        'Training in VAPT, SOC monitoring, incident analysis, risk, and business continuity.',
      type: 'experiencia',
    },
    {
      period: 'Mar. 2021 — Jul. 2025',
      title: 'Computer Engineering',
      place: 'University of Buenos Aires · FIUBA',
      description: 'Full university degree in software and systems engineering.',
      type: 'educacion',
    },
    {
      period: 'Mar. 2015 — Dec. 2020',
      title: 'High School Diploma in Exact and Natural Sciences and Engineering',
      place: 'Colegio Nacional de Buenos Aires',
      description: 'Secondary education with a scientific and technical focus.',
      type: 'educacion',
    },
  ],
  skills: [
    'Python', 'Go', 'Rust', 'Ruby', 'C++', 'C', 'Java', 'TypeScript', 'SQL',
    'React', 'FastAPI', 'Fastify', 'Spring Boot', 'PostgreSQL', 'MongoDB',
    'Docker', 'Kubernetes', 'AWS', 'GCP', 'GitHub Actions',
  ],
  postMorfi: {
    title: 'PostMorfi',
    liveUrl: 'https://postmorfi.com/',
    logo: '/images/postmorfi/logo-official.png',
    stores: {
      ios: {
        href: 'https://apps.apple.com/ar/app/postmorfi/id6807645088',
        status: 'Available on',
        label: 'App Store',
        badge: '/images/store-badges/app-store.svg',
      },
      android: {
        href: '',
        status: 'Early access',
        label: 'Android',
        badge: '/images/store-badges/google-play-trimmed.png',
        waitlistAccessKey: 'db2acda6-87cd-46ef-ba60-8e5d93e456e3',
      },
    },
    screenshots: [
      { src: '/images/postmorfi/screens/catalog.webp', alt: 'PostMorfi restaurant catalog' },
      { src: '/images/postmorfi/screens/map.webp', alt: 'PostMorfi restaurant map' },
      { src: '/images/postmorfi/screens/profile.webp', alt: 'Personal profile and reviews in PostMorfi' },
      { src: '/images/postmorfi/screens/friends.webp', alt: 'Friends ranking in PostMorfi' },
      { src: '/images/postmorfi/screens/users.webp', alt: 'PostMorfi community users and metrics' },
    ],
    summary:
      "PostMorfi organizes everyone's food life: places to try, reviews, lists, and rankings with friends, all in one product.",
    role:
      'As founder and software engineer, I defined the product and built the experience end to end: frontend, backend, infrastructure, and third-party integrations.',
    launchNote: 'PostMorfi community metrics.',
    metrics: [
      { value: '631', label: 'users' },
      { value: '1,579', label: 'reviews' },
      { value: '1,060', label: 'restaurants registered' },
      { value: '1,278', label: 'photos uploaded' },
    ],
    features: [
      { number: '01', title: 'Explore', text: 'Discover restaurants and public reviews from the community.' },
      { number: '02', title: 'Save', text: 'Create manual or filter-based lists for every plan.' },
      { number: '03', title: 'Log', text: 'Rate dishes and service, add photos, and write reviews.' },
      { number: '04', title: 'Share', text: 'Compare tastes and create rankings with friends.' },
    ],
    areas: ['Frontend', 'Backend', 'Infrastructure', 'API integrations', 'Product', 'Content and outreach'],
  },
}

export const content: Record<Language, SiteContent> = { es, en }
