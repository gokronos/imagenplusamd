import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { sanityClient } from '@/sanity/lib/client';
import { sitemapQuery } from '@/sanity/lib/queries';

type SitemapDocument = {
  _type: string;
  slug?: string;
  date?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const cmsRoutes = await sanityClient.fetch<SitemapDocument[]>(sitemapQuery);
  const postRoutes = cmsRoutes
    .filter((item) => item._type === 'post' && item.slug)
    .map((item) => ({
      url: `${siteConfig.url}/blog/${item.slug}`,
      lastModified: item.date ? new Date(item.date) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

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
    '/servicios/estrategias-digitales',
    '/servicios/gestion-de-redes-sociales',
    '/servicios/community-management',
    '/servicios/campanas-publicitarias',
    '/servicios/facebook-ads',
    '/servicios/instagram-ads',
    '/servicios/google-ads',
    '/servicios/email-marketing',
    '/servicios/sitios-corporativos',
    '/servicios/landing-pages',
    '/servicios/tiendas-virtuales',
    '/servicios/blogs',
    '/servicios/portales-informativos',
    '/servicios/sistemas-administrables',
    '/servicios/integracion-cms',
    '/servicios/optimizacion-velocidad',
    '/servicios/fotografia',
    '/servicios/video-corporativo',
    '/servicios/comerciales',
    '/servicios/reels',
    '/servicios/videos-redes-sociales',
    '/servicios/documentales',
    '/servicios/cobertura-eventos',
    '/servicios/streaming',
    '/servicios/motion-graphics',
    '/servicios/automatizacion-empresarial',
    '/servicios/creacion-de-contenido',
    '/servicios/chatbots',
    '/servicios/agentes-inteligentes',
    '/servicios/automatizacion-marketing',
    '/servicios/optimizacion-procesos',
  ];

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...serviceRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...postRoutes,
  ];
}
