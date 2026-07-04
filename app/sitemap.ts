import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const serviceRoutes = [
    '/servicios/diseno-grafico',
    '/servicios/branding',
    '/servicios/identidad-corporativa',
    '/servicios/manual-de-marca',
    '/servicios/papeleria-empresarial',
    '/servicios/diseno-editorial',
    '/servicios/diseno-redes-sociales',
    '/servicios/publicidad-impresa',
    '/servicios/material-pop',
  ];

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...serviceRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
