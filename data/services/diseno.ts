export const disenoServiceItems = [
  'Diseño gráfico',
  'Branding',
  'Identidad corporativa',
  'Manual de marca',
  'Papelería empresarial',
  'Diseño editorial',
  'Diseño para redes sociales',
  'Publicidad impresa',
  'Material POP',
];

export const disenoServiceDetails = {
  'diseno grafico': {
    title: 'Diseño gráfico',
    eyebrow: 'Comunicación visual',
    summary:
      'Creamos piezas visuales claras, atractivas y alineadas con tu marca para que cada publicación, anuncio o material impreso comunique con intención.',
    bullets: [
      'Diseñamos piezas para redes, campañas, presentaciones, impresos y comunicación comercial.',
      'Cuidamos composición, jerarquía, color, tipografía y adaptación por formato.',
      'Entregamos archivos listos para publicar, imprimir o usar en tu operación diaria.',
    ],
    href: '/servicios/diseno-grafico',
    visual: '/images/services/graphic-design-modal.png',
  },
  branding: {
    title: 'Branding',
    eyebrow: 'Construcción de marca',
    summary:
      'Creamos la base estratégica y visual de una marca para que tenga una personalidad clara, una presencia memorable y una forma coherente de comunicarse.',
    bullets: [
      'Definimos dirección de marca, tono visual, atributos, estilo y aplicaciones principales.',
      'Creamos recursos visuales que ayudan a que la marca sea reconocible y consistente.',
      'Entregamos un sistema preparado para aplicarse en piezas digitales, impresas y comerciales.',
    ],
    href: '/servicios/branding',
    visual: '/images/services/branding-modal.png',
  },
  'identidad corporativa': {
    title: 'Identidad corporativa',
    eyebrow: 'Sistema de marca',
    summary:
      'Construimos un sistema visual coherente para que tu empresa se reconozca igual en cada punto de contacto: documentos, redes, presentaciones, piezas comerciales y materiales internos.',
    bullets: [
      'Definimos lineamientos visuales para ordenar colores, tipografías, uso de marca y estilo gráfico.',
      'Diseñamos aplicaciones corporativas como papelería, presentaciones, firmas y piezas institucionales.',
      'Entregamos recursos organizados para que la marca se use con consistencia en el día a día.',
    ],
    href: '/servicios/identidad-corporativa',
    visual: '/images/services/corporate-identity-modal.png',
  },
  'papeleria empresarial': {
    title: 'Papelería empresarial',
    eyebrow: 'Material corporativo',
    summary:
      'Diseñamos piezas corporativas impresas y digitales para que tu marca se vea organizada, profesional y consistente en documentos, presentaciones y comunicación diaria.',
    bullets: [
      'Creamos tarjetas, hojas membretadas, sobres, carpetas, facturas, firmas y plantillas corporativas.',
      'Adaptamos la identidad visual a formatos útiles para ventas, administración y atención al cliente.',
      'Entregamos archivos listos para imprimir, compartir o usar dentro de la operación de la empresa.',
    ],
    href: '/servicios/papeleria-empresarial',
    visual: '/images/services/business-stationery-modal.png',
  },
  'diseno editorial': {
    title: 'Diseño editorial',
    eyebrow: 'Publicaciones y contenido',
    summary:
      'Diseñamos publicaciones, catálogos, revistas, informes y documentos extensos con estructura visual clara para que el contenido sea fácil de leer, entender y recordar.',
    bullets: [
      'Organizamos información en páginas, secciones, jerarquías, retículas y estilos de lectura.',
      'Diseñamos catálogos, revistas, brochures, informes, ebooks, portafolios y documentos comerciales.',
      'Entregamos archivos preparados para impresión, PDF interactivo o distribución digital.',
    ],
    href: '/servicios/diseno-editorial',
    visual: '/images/services/editorial-design-modal.png',
  },
  'diseno para redes sociales': {
    title: 'Diseño para redes sociales',
    eyebrow: 'Contenido visual digital',
    summary:
      'Diseñamos piezas para redes sociales que ayudan a comunicar promociones, servicios, campañas y mensajes de marca con una imagen profesional y consistente.',
    bullets: [
      'Creamos posts, historias, carruseles, portadas, anuncios y piezas de campaña para canales digitales.',
      'Adaptamos formatos según el canal, objetivo y estilo visual de la marca.',
      'Entregamos piezas listas para publicar y mantener una presencia visual ordenada.',
    ],
    href: '/servicios/diseno-redes-sociales',
    visual: '/images/services/social-media-design-modal.png',
  },
  'material pop': {
    title: 'Material POP',
    eyebrow: 'Punto de venta',
    summary:
      'Diseñamos material para punto de venta que ayuda a destacar productos, promociones y mensajes comerciales en espacios físicos con piezas claras, atractivas y funcionales.',
    bullets: [
      'Creamos habladores, rompetráficos, pendones, displays, etiquetas, tarjetas promocionales y señalización comercial.',
      'Adaptamos el diseño al espacio, al producto, al objetivo de venta y al tipo de impresión o producción.',
      'Entregamos artes finales listos para impresión, corte o fabricación.',
    ],
    href: '/servicios/material-pop',
    visual: '/images/services/pop-material-modal.png',
  },
} as const;

export const disenoGraficoPage = {
  visual: '/images/services/graphic-design-modal.png',
  deliverables: [
    'Piezas gráficas para redes sociales, campañas, anuncios y comunicación comercial.',
    'Diseños para impresión como volantes, pendones, tarjetas, catálogos o material POP.',
    'Adaptaciones por formato para que la marca se vea consistente en cada canal.',
    'Archivos finales organizados y listos para publicar, presentar o imprimir.',
  ],
  packages: [
    {
      name: 'Pieza puntual',
      description:
        'Para una necesidad específica como un flyer, post, anuncio, portada, tarjeta o pieza impresa.',
      includes: [
        '1 pieza principal',
        'Adaptación básica de formato',
        'Entrega lista para publicar',
      ],
    },
    {
      name: 'Pack mensual',
      description:
        'Para marcas que necesitan mantener una presencia visual constante durante el mes.',
      includes: [
        'Calendario de piezas',
        'Diseños para redes o campañas',
        'Línea visual consistente',
      ],
    },
    {
      name: 'Campaña visual',
      description:
        'Para lanzamientos, promociones o comunicaciones que requieren varias piezas conectadas.',
      includes: [
        'Concepto visual',
        'Sistema de piezas',
        'Adaptaciones digitales o impresas',
      ],
    },
  ],
  process: [
    ['01', 'Entendemos la necesidad', 'Revisamos objetivo, público, mensaje y canal.'],
    [
      '02',
      'Definimos dirección visual',
      'Alineamos colores, estilo, composición y tono de marca.',
    ],
    [
      '03',
      'Diseñamos las piezas',
      'Creamos propuestas claras, profesionales y adaptadas al formato.',
    ],
    [
      '04',
      'Ajustamos y entregamos',
      'Aplicamos cambios finales y dejamos los archivos listos para uso.',
    ],
  ],
} as const;

export const brandingPage = {
  visual: '/images/services/branding-modal.png',
  deliverables: [
    'Dirección visual de marca, atributos, estilo gráfico y tono de comunicación.',
    'Moodboards, paleta de color, referencias tipográficas y lineamientos visuales.',
    'Aplicaciones iniciales para validar cómo la marca se ve en contextos reales.',
    'Recursos organizados para construir una presencia coherente en canales digitales e impresos.',
  ],
  packages: [
    {
      name: 'Branding inicial',
      description:
        'Para negocios que necesitan ordenar su imagen y construir una base visual más clara.',
      includes: ['Dirección visual', 'Paleta y estilo', 'Aplicaciones iniciales'],
    },
    {
      name: 'Marca estratégica',
      description:
        'Para empresas que quieren definir personalidad, tono y sistema visual con mayor profundidad.',
      includes: ['Concepto de marca', 'Sistema visual', 'Guía de aplicaciones'],
    },
    {
      name: 'Branding integral',
      description:
        'Para marcas que necesitan una construcción completa antes de lanzar o reposicionarse.',
      includes: ['Estrategia visual', 'Kit de marca', 'Acompañamiento de implementación'],
    },
  ],
  process: [
    [
      '01',
      'Entendemos la marca',
      'Revisamos objetivo, público, oferta y personalidad deseada.',
    ],
    [
      '02',
      'Definimos dirección',
      'Creamos un camino visual y conceptual para orientar la marca.',
    ],
    [
      '03',
      'Construimos sistema',
      'Diseñamos recursos, estilo gráfico y aplicaciones principales.',
    ],
    [
      '04',
      'Entregamos base',
      'Organizamos archivos y lineamientos para aplicar la marca.',
    ],
  ],
} as const;

export const identidadCorporativaPage = {
  visual: '/images/services/corporate-identity-modal.png',
  deliverables: [
    'Lineamientos visuales para el uso consistente de la marca.',
    'Aplicaciones corporativas como tarjetas, membretes, firmas, presentaciones y documentos.',
    'Sistema de color, tipografía, estilo gráfico y composición para piezas institucionales.',
    'Archivos organizados para que el equipo pueda aplicar la identidad con claridad.',
  ],
  packages: [
    {
      name: 'Base corporativa',
      description:
        'Para empresas que necesitan ordenar su presencia visual y comenzar a comunicar con coherencia.',
      includes: [
        'Lineamientos básicos',
        'Papelería principal',
        'Archivos editables y finales',
      ],
    },
    {
      name: 'Sistema institucional',
      description:
        'Para marcas que requieren una identidad aplicada a diferentes documentos y puntos de contacto.',
      includes: [
        'Aplicaciones corporativas',
        'Plantillas de presentación',
        'Guía de uso visual',
      ],
    },
    {
      name: 'Identidad integral',
      description:
        'Para empresas que quieren consolidar una presencia completa, profesional y escalable.',
      includes: [
        'Sistema visual completo',
        'Kit de recursos de marca',
        'Acompañamiento de implementación',
      ],
    },
  ],
  process: [
    [
      '01',
      'Auditamos la marca',
      'Revisamos cómo se ve actualmente y qué necesita ordenar.',
    ],
    [
      '02',
      'Definimos el sistema',
      'Alineamos colores, tipografías, estilo y reglas visuales.',
    ],
    [
      '03',
      'Aplicamos la identidad',
      'Diseñamos piezas corporativas útiles para la operación real.',
    ],
    [
      '04',
      'Entregamos recursos',
      'Organizamos archivos y recomendaciones para uso consistente.',
    ],
  ],
} as const;

export const papeleriaEmpresarialPage = {
  visual: '/images/services/business-stationery-modal.png',
  deliverables: [
    'Tarjetas de presentación, hojas membretadas, sobres, carpetas y documentos corporativos.',
    'Plantillas para cotizaciones, propuestas, facturas, presentaciones o comunicación comercial.',
    'Adaptaciones impresas y digitales alineadas con la identidad visual de la empresa.',
    'Archivos finales organizados para impresión, envío digital o uso interno.',
  ],
  packages: [
    {
      name: 'Kit básico',
      description:
        'Para empresas que necesitan las piezas esenciales de presentación y comunicación formal.',
      includes: [
        'Tarjeta de presentación',
        'Hoja membretada',
        'Firma o plantilla básica',
      ],
    },
    {
      name: 'Kit corporativo',
      description:
        'Para marcas que quieren ordenar sus documentos y materiales de contacto principales.',
      includes: ['Papelería principal', 'Carpeta o sobre', 'Plantillas comerciales'],
    },
    {
      name: 'Kit institucional',
      description:
        'Para empresas que requieren un sistema completo de piezas para operación y ventas.',
      includes: [
        'Sistema de documentos',
        'Aplicaciones impresas',
        'Archivos listos para uso',
      ],
    },
  ],
  process: [
    [
      '01',
      'Revisamos la identidad',
      'Partimos de la marca existente y sus necesidades reales.',
    ],
    [
      '02',
      'Definimos formatos',
      'Elegimos las piezas que más usa la empresa en su operación.',
    ],
    [
      '03',
      'Diseñamos el sistema',
      'Aplicamos la línea visual a documentos y materiales corporativos.',
    ],
    [
      '04',
      'Preparamos entrega',
      'Organizamos archivos finales para impresión y uso digital.',
    ],
  ],
} as const;

export const disenoEditorialPage = {
  visual: '/images/services/editorial-design-modal.png',
  deliverables: [
    'Catálogos, revistas, brochures, informes, ebooks, portafolios y documentos comerciales.',
    'Diagramación con retículas, jerarquías, estilos de título, tablas, imágenes y llamados visuales.',
    'Versiones preparadas para impresión, PDF digital o presentación comercial.',
    'Archivos finales organizados para revisión, publicación o producción.',
  ],
  packages: [
    {
      name: 'Documento breve',
      description:
        'Para propuestas, brochures, portafolios o piezas editoriales de pocas páginas.',
      includes: [
        'Diseño base',
        'Diagramación de contenido',
        'PDF final listo para compartir',
      ],
    },
    {
      name: 'Catálogo editorial',
      description:
        'Para empresas que necesitan organizar productos, servicios o información comercial.',
      includes: [
        'Sistema de páginas',
        'Retícula editorial',
        'Preparación para impresión o digital',
      ],
    },
    {
      name: 'Publicación completa',
      description:
        'Para informes, revistas, ebooks o documentos extensos que requieren dirección editorial.',
      includes: [
        'Dirección visual',
        'Diagramación completa',
        'Versiones finales organizadas',
      ],
    },
  ],
  process: [
    [
      '01',
      'Ordenamos contenido',
      'Revisamos textos, imágenes, secciones y objetivo del documento.',
    ],
    [
      '02',
      'Definimos retícula',
      'Creamos estructura visual, jerarquías y estilos de lectura.',
    ],
    [
      '03',
      'Diagramamos',
      'Diseñamos las páginas cuidando ritmo, claridad y consistencia.',
    ],
    [
      '04',
      'Preparamos salida',
      'Entregamos archivos finales para impresión o distribución digital.',
    ],
  ],
} as const;

export const disenoRedesSocialesPage = {
  visual: '/images/services/social-media-design-modal.png',
  deliverables: [
    'Posts, historias, carruseles, portadas, banners y piezas para campañas digitales.',
    'Adaptaciones por formato para Instagram, Facebook, LinkedIn u otros canales.',
    'Diseños alineados con la identidad visual, tono de marca y objetivo de comunicación.',
    'Archivos listos para publicar, programar o entregar al equipo de marketing.',
  ],
  packages: [
    {
      name: 'Pack inicial',
      description:
        'Para marcas que necesitan piezas puntuales o empezar a ordenar su presencia visual.',
      includes: [
        'Piezas individuales',
        'Adaptaciones básicas',
        'Entrega lista para publicar',
      ],
    },
    {
      name: 'Pack mensual',
      description:
        'Para empresas que publican con frecuencia y necesitan mantener una línea visual constante.',
      includes: [
        'Diseños para calendario',
        'Formatos de feed e historias',
        'Coherencia visual mensual',
      ],
    },
    {
      name: 'Campaña digital',
      description:
        'Para lanzamientos, promociones o comunicaciones que requieren varias piezas conectadas.',
      includes: [
        'Concepto visual',
        'Carruseles y anuncios',
        'Sistema de piezas para campaña',
      ],
    },
  ],
  process: [
    [
      '01',
      'Definimos objetivo',
      'Aclaramos qué se quiere comunicar y en qué canales se publicará.',
    ],
    [
      '02',
      'Creamos línea visual',
      'Ajustamos estilo, formatos, jerarquías y recursos de marca.',
    ],
    [
      '03',
      'Diseñamos piezas',
      'Producimos los posts, historias, carruseles o anuncios necesarios.',
    ],
    [
      '04',
      'Entregamos formatos',
      'Exportamos archivos listos para publicar o programar.',
    ],
  ],
} as const;

export const materialPopPage = {
  visual: '/images/services/pop-material-modal.png',
  deliverables: [
    'Habladores, rompetráficos, stoppers, displays, pendones, etiquetas y piezas promocionales.',
    'Diseños adaptados al punto de venta, producto, campaña y formato de producción.',
    'Artes finales preparados para impresión, corte, montaje o fabricación.',
    'Sistema visual para promociones, lanzamientos o presencia comercial en espacios físicos.',
  ],
  packages: [
    {
      name: 'Pieza POP',
      description:
        'Para necesidades puntuales de promoción, exhibición o comunicación en punto de venta.',
      includes: [
        'Diseño de pieza individual',
        'Adaptación a formato',
        'Arte final para producción',
      ],
    },
    {
      name: 'Kit promocional',
      description:
        'Para campañas o productos que necesitan varias piezas conectadas dentro del punto de venta.',
      includes: [
        'Sistema de piezas POP',
        'Adaptaciones por formato',
        'Preparación para impresión',
      ],
    },
    {
      name: 'Lanzamiento comercial',
      description:
        'Para marcas que quieren una presencia más completa en vitrinas, estanterías o activaciones.',
      includes: [
        'Concepto visual',
        'Material de exhibición',
        'Artes finales organizados',
      ],
    },
  ],
  process: [
    [
      '01',
      'Entendemos el punto de venta',
      'Revisamos producto, espacio, objetivo y formato.',
    ],
    [
      '02',
      'Definimos piezas',
      'Elegimos materiales y tamaños según la necesidad comercial.',
    ],
    [
      '03',
      'Diseñamos la campaña',
      'Creamos piezas atractivas, claras y listas para producción.',
    ],
    [
      '04',
      'Entregamos artes finales',
      'Preparamos archivos para impresión, corte o fabricación.',
    ],
  ],
} as const;
