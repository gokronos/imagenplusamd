import { siteConfig } from '@/lib/site';

const business = siteConfig.business;

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: business.legalName,
    url: siteConfig.url,
    email: business.email,
    telephone: business.phone,
    sameAs: [siteConfig.links.instagram, siteConfig.links.linkedin],
    areaServed: business.areaServed,
    knowsAbout: business.services,
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': business.type,
    '@id': `${siteConfig.url}/#local-business`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: business.email,
    telephone: business.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    areaServed: business.areaServed.map((name) => ({
      '@type': 'Place',
      name,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Imagen Plus',
      itemListElement: business.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
          provider: {
            '@id': `${siteConfig.url}/#local-business`,
          },
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    inLanguage: 'es-CO',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/blog?buscar={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
