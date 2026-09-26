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

export const personal = {
  name: 'Pedro Gallino',
  role: 'Ingeniero en Informática',
  location: 'Buenos Aires, Argentina',
  email: 'ing.pgallino@gmail.com',
  intro:
    'Ingeniero graduado de la UBA con experiencia práctica en productos web, sistemas distribuidos y arquitecturas escalables.',
  portrait: '/images/pedro-gallino-profile.webp',
  cv: {
    localPath: '/cv/pedro-gallino-cv.pdf',
    externalUrl: '',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/pgallino' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedro-gallino-b31475236' },
    { label: 'Email', href: 'mailto:ing.pgallino@gmail.com' },
  ] satisfies SocialLink[],
}

export const cvUrl = personal.cv.externalUrl || personal.cv.localPath

export const projects: Project[] = [
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
]

export const timeline: TimelineItem[] = [
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
]

export const skills = [
  'Python', 'Go', 'Rust', 'Ruby', 'C++', 'C', 'Java', 'TypeScript', 'SQL',
  'React', 'FastAPI', 'Fastify', 'Spring Boot', 'PostgreSQL', 'MongoDB',
  'Docker', 'Kubernetes', 'AWS', 'GCP', 'GitHub Actions',
]

export const postMorfi = {
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
    },
  },
  screenshots: [
    {
      src: '/images/postmorfi/screens/catalog.webp',
      alt: 'Catálogo de restaurantes de PostMorfi',
    },
    {
      src: '/images/postmorfi/screens/map.webp',
      alt: 'Mapa de restaurantes de PostMorfi',
    },
    {
      src: '/images/postmorfi/screens/profile.webp',
      alt: 'Perfil personal y reseñas en PostMorfi',
    },
    {
      src: '/images/postmorfi/screens/friends.webp',
      alt: 'Ranking de amigos en PostMorfi',
    },
    {
      src: '/images/postmorfi/screens/users.webp',
      alt: 'Usuarios y métricas de la comunidad de PostMorfi',
    },
  ] satisfies PhoneScreenshot[],
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
  gallery: [
    { src: '/images/postmorfi/hero-cafe-facade.webp', alt: 'Fachada de café utilizada en la experiencia de PostMorfi' },
    { src: '/images/postmorfi/review-pasta-table.webp', alt: 'Plato de pasta fotografiado para una reseña de PostMorfi' },
    { src: '/images/postmorfi/review-rigatoni.webp', alt: 'Rigatoni fotografiados para una reseña de PostMorfi' },
  ],
}
