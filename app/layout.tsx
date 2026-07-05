import type { Metadata, Viewport } from 'next';
import { draftMode } from 'next/headers';
import { Inter, Manrope } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/metadata';
import { SiteShell } from '@/components/layout/site-shell';
import { SkipLink } from '@/components/ui/skip-link';
import { WhatsAppFloatingButton } from '@/components/layout/whatsapp-floating-button';
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
  title: siteConfig.name,
  description: siteConfig.description,
  path: '/',
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
        <SkipLink />
        <SiteShell>{children}</SiteShell>
        <WhatsAppFloatingButton />
        {isDraftMode ? <VisualEditing /> : null}
        <SanityLive />
      </body>
    </html>
  );
}
