'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';
import { whatsappUrl } from '@/lib/contact';

const heroMessages = [
  'Estrategia digital',
  'Diseño de marca',
  'Web administrable',
  'Automatización con IA',
];

const heroImages = [
  {
    src: '/images/services/branding-modal.png',
    alt: 'Sistema visual de marca desarrollado por Imagen Plus',
  },
  {
    src: '/images/services/social-media-design-modal.png',
    alt: 'Piezas para redes sociales y campañas digitales',
  },
  {
    src: '/images/services/editorial-design-modal.png',
    alt: 'Diseño editorial y comunicación visual profesional',
  },
];

const proofPoints = [
  'Marketing digital',
  'Branding',
  'Páginas web',
  'SEO local',
  'Producción audiovisual',
  'IA para procesos',
];

export function HeroSlider() {
  const [activeMessage, setActiveMessage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveMessage((current) => (current + 1) % heroMessages.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen scroll-mt-20 overflow-hidden bg-black px-5 py-14 text-white md:px-10 lg:px-16 xl:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#000_0%,#060911_48%,#020202_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/12" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-px bg-white/10 xl:block" />

      <div className="grid min-h-[calc(100vh-7rem)] items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 border border-white/12 bg-white/[0.04] px-3 py-2 text-[10px] font-black tracking-[0.22em] text-blue-500 uppercase">
            <span className="size-1.5 bg-blue-600" />
            Agencia creativa en Cúcuta y Colombia
          </div>

          <h1 className="font-display mt-8 max-w-4xl text-[clamp(3.4rem,7vw,7.9rem)] leading-[0.88] font-black tracking-normal">
            Marcas que se ven <span className="text-blue-600">premium</span> y venden
            mejor.
          </h1>

          <div className="mt-7 flex min-h-10 flex-wrap items-center gap-4">
            <span className="text-sm font-black tracking-[0.22em] text-white/45 uppercase">
              Especialistas en
            </span>
            <span className="inline-flex min-h-10 items-center border border-blue-600/40 bg-blue-600 px-4 text-sm font-black tracking-[0.16em] text-white uppercase">
              {heroMessages[activeMessage]}
            </span>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/66">
            Creamos identidad, contenido, sitios web, campañas y automatizaciones para
            empresas que quieren dejar de improvisar y empezar a crecer con una presencia
            digital seria.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center gap-4 bg-blue-600 px-5 text-xs font-black tracking-[0.16em] text-white uppercase transition hover:bg-white hover:text-black"
            >
              Hablemos del proyecto
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#proyectos"
              className="inline-flex h-13 items-center gap-4 border border-white/16 px-5 text-xs font-black tracking-[0.16em] text-white uppercase transition hover:border-blue-600 hover:text-blue-500"
            >
              Ver trabajos
              <Play size={16} fill="currentColor" />
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
            {[
              ['10+', 'años creando marcas'],
              ['360', 'visión integral'],
              ['50+', 'soluciones tácticas'],
              ['CO', 'alcance nacional'],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#05070b] p-4">
                <span className="font-display text-4xl leading-none font-black text-blue-600">
                  {value}
                </span>
                <p className="mt-2 text-xs leading-5 font-bold text-white/58">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[620px] lg:min-h-[720px]">
          <div className="absolute top-0 right-0 left-12 h-[58%] overflow-hidden border border-white/10 bg-[#0b0f16] shadow-[0_34px_120px_rgba(37,99,235,0.2)]">
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.76))]" />
            <div className="absolute right-6 bottom-6 left-6">
              <p className="text-[10px] font-black tracking-[0.24em] text-blue-400 uppercase">
                Imagen Plus Studio
              </p>
              <p className="font-display mt-3 max-w-sm text-3xl leading-none font-black">
                Sistemas visuales listos para competir.
              </p>
            </div>
          </div>

          <div className="absolute top-[34%] left-0 h-[38%] w-[47%] overflow-hidden border border-white/10 bg-black">
            <Image
              src={heroImages[1].src}
              alt={heroImages[1].alt}
              fill
              sizes="(min-width: 1024px) 24vw, 80vw"
              className="object-cover"
            />
          </div>

          <div className="absolute right-8 bottom-8 h-[34%] w-[52%] overflow-hidden border border-white/10 bg-black">
            <Image
              src={heroImages[2].src}
              alt={heroImages[2].alt}
              fill
              sizes="(min-width: 1024px) 28vw, 80vw"
              className="object-cover"
            />
          </div>

          <div className="absolute right-0 bottom-[32%] grid max-w-[300px] gap-3 border border-blue-600/35 bg-black/88 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.36)] backdrop-blur">
            <p className="text-[10px] font-black tracking-[0.22em] text-blue-500 uppercase">
              En una sola agencia
            </p>
            <div className="grid grid-cols-2 gap-2">
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 text-xs leading-5 text-white/66"
                >
                  <CheckCircle2 size={13} className="shrink-0 text-blue-500" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-10 hidden border border-white/10 bg-[#05070b] p-5 md:block">
            <p className="text-[10px] font-black tracking-[0.22em] text-white/42 uppercase">
              Resultado esperado
            </p>
            <p className="font-display mt-3 max-w-52 text-3xl leading-none font-black">
              Más confianza. Más claridad. Más oportunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
