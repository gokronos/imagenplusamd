export const audiovisualServiceItems = [
  'Fotografia',
  'Video corporativo',
  'Comerciales',
  'Reels',
  'Videos para redes sociales',
  'Documentales',
  'Cobertura de eventos',
  'Streaming',
  'Motion Graphics',
] as const;

export const audiovisualServiceDetails = {
  fotografia: {
    title: 'Fotografia',
    eyebrow: 'Imagen profesional',
    summary:
      'Realizamos fotografia para marcas, productos, personas y eventos, cuidando composicion, iluminacion y uso comercial de cada imagen.',
    bullets: [
      'Planeamos la sesion segun objetivo, estilo visual y canales de publicacion.',
      'Producimos imagenes claras para redes, web, catalogos, pauta o comunicacion interna.',
      'Entregamos material seleccionado y optimizado para diferentes formatos.',
    ],
    href: '/servicios/fotografia',
    visual: '/images/services/social-media-design-modal.png',
  },
  'video corporativo': {
    title: 'Video corporativo',
    eyebrow: 'Comunicacion empresarial',
    summary:
      'Creamos videos para presentar empresas, servicios, procesos, equipos o mensajes institucionales con una narrativa clara y profesional.',
    bullets: [
      'Definimos guion, estructura, tono y objetivos antes de producir.',
      'Grabamos recursos visuales, entrevistas o escenas segun la necesidad del proyecto.',
      'Editamos una pieza final lista para web, redes, eventos o presentaciones.',
    ],
    href: '/servicios/video-corporativo',
    visual: '/images/services/corporate-identity-modal.png',
  },
  comerciales: {
    title: 'Comerciales',
    eyebrow: 'Mensaje publicitario',
    summary:
      'Producimos comerciales para promocionar productos, servicios, ofertas o campanas con un mensaje directo y memorable.',
    bullets: [
      'Convertimos el objetivo comercial en un concepto audiovisual concreto.',
      'Creamos piezas pensadas para pauta digital, redes, pantallas o medios tradicionales.',
      'Cuidamos ritmo, llamado a la accion y recordacion de marca.',
    ],
    href: '/servicios/comerciales',
    visual: '/images/services/branding-modal.png',
  },
  reels: {
    title: 'Reels',
    eyebrow: 'Contenido corto',
    summary:
      'Creamos reels dinamicos para captar atencion rapidamente, comunicar valor y mantener activa la presencia de la marca.',
    bullets: [
      'Planeamos ideas, tomas, textos y ritmo segun el objetivo del contenido.',
      'Editamos piezas verticales con cortes, musica, subtitulos y elementos visuales.',
      'Adaptamos el contenido para Instagram, Facebook, TikTok o YouTube Shorts.',
    ],
    href: '/servicios/reels',
    visual: '/images/services/social-media-design-modal.png',
  },
  'videos para redes sociales': {
    title: 'Videos para redes sociales',
    eyebrow: 'Contenido digital',
    summary:
      'Producimos videos para alimentar canales sociales con piezas utiles, comerciales, educativas o de posicionamiento.',
    bullets: [
      'Definimos formatos segun canal, audiencia, frecuencia y objetivo.',
      'Creamos videos cortos, explicativos, testimoniales o promocionales.',
      'Entregamos versiones adaptadas para feed, historias, reels o anuncios.',
    ],
    href: '/servicios/videos-redes-sociales',
    visual: '/images/services/social-media-design-modal.png',
  },
  documentales: {
    title: 'Documentales',
    eyebrow: 'Historias con profundidad',
    summary:
      'Desarrollamos piezas documentales para contar historias de marca, procesos, comunidades, impacto social o trayectorias institucionales.',
    bullets: [
      'Investigamos el tema y definimos una linea narrativa clara.',
      'Registramos testimonios, escenas de contexto y momentos clave.',
      'Construimos una pieza con ritmo, emocion y estructura profesional.',
    ],
    href: '/servicios/documentales',
    visual: '/images/services/editorial-design-modal.png',
  },
  'cobertura de eventos': {
    title: 'Cobertura de eventos',
    eyebrow: 'Registro profesional',
    summary:
      'Cubrimos eventos corporativos, sociales, institucionales o comerciales con fotografia y video para documentar y comunicar lo vivido.',
    bullets: [
      'Planeamos momentos clave, agenda, espacios y necesidades de entrega.',
      'Capturamos ambiente, asistentes, intervenciones, detalles y protagonistas.',
      'Entregamos material para memorias, redes, prensa o comunicacion interna.',
    ],
    href: '/servicios/cobertura-eventos',
    visual: '/images/services/business-stationery-modal.png',
  },
  streaming: {
    title: 'Streaming',
    eyebrow: 'Transmision en vivo',
    summary:
      'Acompanamos transmisiones en vivo para eventos, conferencias, lanzamientos, clases o actividades institucionales.',
    bullets: [
      'Definimos flujo tecnico, plataformas, senal, audio y necesidades del evento.',
      'Preparamos la transmision con recursos visuales y soporte durante la emision.',
      'Cuidamos estabilidad, claridad de imagen y experiencia para la audiencia.',
    ],
    href: '/servicios/streaming',
    visual: '/images/services/graphic-design-modal.png',
  },
  'motion graphics': {
    title: 'Motion Graphics',
    eyebrow: 'Animacion visual',
    summary:
      'Creamos animaciones, piezas graficas en movimiento y recursos visuales para explicar ideas, reforzar marca o enriquecer videos.',
    bullets: [
      'Animamos textos, iconos, datos, logos y elementos graficos de marca.',
      'Desarrollamos intros, cierres, lower thirds, transiciones o videos explicativos.',
      'Entregamos piezas listas para videos, redes, presentaciones o pantallas.',
    ],
    href: '/servicios/motion-graphics',
    visual: '/images/services/pop-material-modal.png',
  },
} as const;
