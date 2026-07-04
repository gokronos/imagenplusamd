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
        background: '#f8fafc',
        color: '#111827',
        padding: 72,
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: 84,
          height: 10,
          background: '#ef4444',
          marginBottom: 40,
        }}
      />
      <div style={{ fontSize: 86, fontWeight: 800, letterSpacing: 0 }}>
        {siteConfig.name}
      </div>
      <div style={{ maxWidth: 780, marginTop: 28, fontSize: 34, color: '#475569' }}>
        {siteConfig.description}
      </div>
    </div>,
    size,
  );
}
