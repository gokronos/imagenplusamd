import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#030509',
        color: '#ffffff',
        padding: 72,
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: 84,
          height: 10,
          background: '#2563eb',
          marginBottom: 40,
        }}
      />
      <div style={{ fontSize: 84, fontWeight: 900, letterSpacing: 0, lineHeight: 0.92 }}>
        Agencia de Marketing Digital
      </div>
      <div
        style={{
          maxWidth: 900,
          marginTop: 28,
          fontSize: 34,
          color: '#cbd5e1',
          lineHeight: 1.25,
        }}
      >
        Diseño, web, SEO, producción audiovisual e IA para marcas en Cúcuta, Bucaramanga y
        Colombia.
      </div>
      <div style={{ marginTop: 58, fontSize: 28, fontWeight: 800, color: '#2563eb' }}>
        {siteConfig.name}
      </div>
    </div>,
    size,
  );
}
