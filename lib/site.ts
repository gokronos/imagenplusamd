export const siteConfig = {
  name: 'Imagen Plus',
  description:
    'Agencia de marketing enfocada en estrategia, creatividad y crecimiento digital.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'es_CO',
  links: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
} as const;
