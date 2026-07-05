import type { Metadata, Viewport } from 'next';
import { draftMode } from 'next/headers';
import { Inter, Manrope } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/metadata';
import { SiteShell } from '@/components/layout/site-shell';
import { SkipLink } from '@/components/ui/skip-link';
import { WhatsAppFloatingButton } from '@/components/layout/whatsapp-floating-button';
import { JsonLd } from '@/components/seo/json-ld';
import {
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from '@/lib/structured-data';
import { SanityLive } from '@/sanity/lib/live';
import { VisualEditing } from 'next-sanity/visual-editing';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = buildMetadata({
  title: 'Agencia de Marketing Digital en Cucuta y Colombia',
  description: siteConfig.description,
  path: '/',
  keywords: [
    'agencia de marketing digital en Cucuta',
    'diseno web en Cucuta',
    'publicidad digital en Bucaramanga',
  ],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111827',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <JsonLd data={[organizationJsonLd(), localBusinessJsonLd(), websiteJsonLd()]} />
        <SkipLink />
        <SiteShell>{children}</SiteShell>
        <WhatsAppFloatingButton />
        {isDraftMode ? <VisualEditing /> : null}
        <SanityLive />
      </body>
    </html>
  );
}
