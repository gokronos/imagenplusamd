export const inteligenciaArtificialServiceItems = [
  'Automatizacion empresarial',
  'Creacion de contenido',
  'Chatbots',
  'Agentes inteligentes',
  'Automatizacion de marketing',
  'Optimizacion de procesos',
] as const;

export const inteligenciaArtificialServiceDetails = {
  'automatizacion empresarial': {
    title: 'Automatizacion empresarial',
    eyebrow: 'Procesos inteligentes',
    summary:
      'Automatizamos tareas repetitivas y flujos internos para que el equipo ahorre tiempo, reduzca errores y trabaje con mayor claridad.',
    bullets: [
      'Mapeamos procesos manuales y detectamos oportunidades reales de automatizacion.',
      'Conectamos herramientas, formularios, hojas de calculo, CRM o canales internos.',
      'Creamos flujos medibles que ayudan a operar mejor sin aumentar carga manual.',
    ],
    href: '/servicios/automatizacion-empresarial',
    visual: '/images/services/corporate-identity-modal.png',
  },
  'creacion de contenido': {
    title: 'Creacion de contenido',
    eyebrow: 'IA creativa',
    summary:
      'Usamos IA para acelerar ideas, textos, guiones, piezas base y variantes de contenido sin perder la estrategia ni la voz de marca.',
    bullets: [
      'Definimos prompts, plantillas y lineamientos para crear contenido coherente.',
      'Generamos ideas, copys, guiones, textos comerciales y variaciones por canal.',
      'Integramos revision humana para mantener calidad, tono y criterio de marca.',
    ],
    href: '/servicios/creacion-de-contenido',
    visual: '/images/services/social-media-design-modal.png',
  },
  chatbots: {
    title: 'Chatbots',
    eyebrow: 'Atencion automatizada',
    summary:
      'Creamos chatbots para responder preguntas frecuentes, orientar clientes y capturar datos desde canales digitales.',
    bullets: [
      'Diseñamos flujos conversacionales claros segun dudas y objetivos comerciales.',
      'Conectamos respuestas, formularios, enlaces y derivaciones al equipo humano.',
      'Organizamos la base de conocimiento para que el bot responda con coherencia.',
    ],
    href: '/servicios/chatbots',
    visual: '/images/services/branding-modal.png',
  },
  'agentes inteligentes': {
    title: 'Agentes inteligentes',
    eyebrow: 'Asistentes con IA',
    summary:
      'Diseñamos agentes que pueden consultar informacion, ejecutar tareas y apoyar procesos concretos con mayor autonomia.',
    bullets: [
      'Definimos alcance, permisos, herramientas y limites del agente.',
      'Conectamos fuentes de informacion, instrucciones y acciones utiles para el negocio.',
      'Probamos respuestas y comportamiento para mantener control y utilidad real.',
    ],
    href: '/servicios/agentes-inteligentes',
    visual: '/images/services/graphic-design-modal.png',
  },
  'automatizacion de marketing': {
    title: 'Automatizacion de marketing',
    eyebrow: 'Crecimiento automatizado',
    summary:
      'Automatizamos tareas de marketing como seguimiento de leads, mensajes, segmentacion, reportes y acciones posteriores a formularios.',
    bullets: [
      'Creamos flujos para capturar, clasificar y dar seguimiento a prospectos.',
      'Conectamos formularios, email, CRM, hojas de calculo y plataformas de anuncios.',
      'Reducimos tareas repetitivas para que el equipo se enfoque en vender mejor.',
    ],
    href: '/servicios/automatizacion-marketing',
    visual: '/images/services/social-media-design-modal.png',
  },
  'optimizacion de procesos': {
    title: 'Optimizacion de procesos',
    eyebrow: 'Eficiencia operativa',
    summary:
      'Analizamos procesos de trabajo para simplificar pasos, ordenar informacion y aplicar tecnologia donde genere mejor resultado.',
    bullets: [
      'Diagnosticamos tareas, tiempos, responsables, herramientas y puntos de friccion.',
      'Proponemos mejoras con automatizacion, IA, plantillas o integraciones simples.',
      'Creamos una ruta de implementacion realista para mejorar operacion y seguimiento.',
    ],
    href: '/servicios/optimizacion-procesos',
    visual: '/images/services/editorial-design-modal.png',
  },
} as const;
