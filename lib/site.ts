export const siteConfig = {
  name: 'Imagen Plus',
  description:
    'Agencia de marketing digital, diseno, desarrollo web, produccion audiovisual e inteligencia artificial en Cucuta, Bucaramanga y Colombia.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://imagenplusamd.vercel.app',
  locale: 'es_CO',
  keywords: [
    'agencia de marketing digital en Cucuta',
    'agencia de publicidad en Cucuta',
    'diseno grafico en Cucuta',
    'desarrollo web en Cucuta',
    'SEO en Cucuta',
    'marketing digital en Bucaramanga',
    'agencia de marketing en Colombia',
    'produccion audiovisual en Cucuta',
    'inteligencia artificial para empresas',
    'Imagen Plus',
  ],
  business: {
    legalName: 'Imagen Plus',
    type: 'ProfessionalService',
    email: 'info@imagenplus.com.co',
    phone: '+57 320 123 4567',
    address: {
      locality: 'Cucuta',
      region: 'Norte de Santander',
      country: 'CO',
    },
    areaServed: ['Cucuta', 'Bucaramanga', 'Norte de Santander', 'Santander', 'Colombia'],
    services: [
      'Marketing digital',
      'Diseno grafico',
      'Identidad corporativa',
      'Desarrollo web',
      'SEO',
      'Produccion audiovisual',
      'Automatizacion con inteligencia artificial',
    ],
  },
  links: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
} as const;
