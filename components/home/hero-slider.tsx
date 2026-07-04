'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

const slides = [
  {
    eyebrow: 'Estrategia · Diseño · Tecnología',
    title: 'Creamos el futuro digital de las marcas.',
    accent: 'marcas.',
    description:
      'Combinamos creatividad y tecnología para construir experiencias que conectan, comunican y generan resultados reales.',
    cta: 'Ver proyectos',
    href: '#proyectos',
    visual: 'portal',
  },
  {
    eyebrow: 'Branding · Identidad · Diseño',
    title: 'Diseñamos marcas que se reconocen al instante.',
    accent: 'instante.',
    description:
      'Convertimos ideas en sistemas visuales coherentes para que cada punto de contacto comunique con claridad.',
    cta: 'Ver diseño',
    href: '#diseno',
    visual: 'brand',
  },
  {
    eyebrow: 'Web · CMS · Performance',
    title: 'Construimos sitios listos para vender más.',
    accent: 'vender más.',
    description:
      'Creamos plataformas rápidas, administrables y optimizadas para que tu marca funcione bien desde el primer clic.',
    cta: 'Ver desarrollo',
    href: '#desarrollo-web',
    visual: 'web',
  },
  {
    eyebrow: 'IA · Automatización · Procesos',
    title: 'Automatizamos tareas para escalar resultados.',
    accent: 'resultados.',
    description:
      'Integramos inteligencia artificial, chatbots y flujos inteligentes para ahorrar tiempo y mejorar decisiones.',
    cta: 'Ver IA',
    href: '#inteligencia-artificial',
    visual: 'ai',
  },
];

function splitTitle(title: string, accent: string) {
  const [before] = title.split(accent);

  return { before, accent };
}

function SlideVisual({ type }: { type: string }) {
  return (
    <div className="relative h-[360px] overflow-hidden bg-[#070707] md:h-[500px] xl:h-[560px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.22),transparent_32%),linear-gradient(110deg,#030303_0%,#101010_54%,#000_100%)]" />

      {type === 'portal' ? (
        <>
          <div className="absolute bottom-0 left-[18%] h-[46%] w-[72%] bg-white shadow-[0_0_80px_rgba(255,255,255,0.18)]" />
          <div className="absolute bottom-[46%] left-[18%] h-[38%] w-[72%] origin-bottom skew-y-[-22deg] bg-zinc-300" />
          <div className="absolute right-[10%] bottom-[46%] h-[42%] w-[22%] bg-zinc-900" />
          <div className="absolute bottom-[18%] left-[58%] h-24 w-5 rounded-full bg-black" />
          <div className="absolute bottom-[36%] left-[58.4%] size-5 rounded-full bg-black" />
          <div className="absolute bottom-[18%] left-[56.5%] h-16 w-1 -rotate-12 bg-black" />
          <div className="absolute bottom-[18%] left-[60.5%] h-16 w-1 rotate-12 bg-black" />
        </>
      ) : null}

      {type === 'brand' ? (
        <>
          <div className="absolute top-[18%] left-[14%] size-44 border border-white/20 bg-blue-600 md:size-52" />
          <div className="absolute top-[30%] left-[32%] size-44 border border-white/30 bg-white md:size-52" />
          <div className="absolute right-[14%] bottom-[16%] h-32 w-48 bg-zinc-900 ring-1 ring-white/10 md:h-40 md:w-56" />
          <div className="absolute right-[20%] bottom-[26%] h-2 w-36 bg-blue-600 md:w-40" />
        </>
      ) : null}

      {type === 'web' ? (
        <>
          <div className="absolute top-[18%] left-[12%] h-[58%] w-[72%] border border-white/20 bg-zinc-950 shadow-[0_0_80px_rgba(37,99,235,0.2)]" />
          <div className="absolute top-[25%] left-[16%] h-4 w-28 bg-blue-600" />
          <div className="absolute top-[36%] left-[16%] h-3 w-[52%] bg-white/80" />
          <div className="absolute top-[44%] left-[16%] h-3 w-[42%] bg-white/35" />
          <div className="absolute right-[20%] bottom-[22%] size-20 bg-white md:size-24" />
        </>
      ) : null}

      {type === 'ai' ? (
        <>
          <div className="absolute top-[18%] left-[18%] grid grid-cols-4 gap-4 md:gap-5">
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className={`size-7 rounded-full md:size-8 ${
                  index % 3 === 0 ? 'bg-blue-600' : 'bg-white/18'
                }`}
              />
            ))}
          </div>
          <div className="absolute right-[16%] bottom-[18%] h-40 w-40 border border-blue-600/70 bg-black md:h-48 md:w-48" />
          <div className="absolute right-[23%] bottom-[27%] size-16 rounded-full bg-white md:size-20" />
        </>
      ) : null}
    </div>
  );
}

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];
  const title = splitTitle(slide.title, slide.accent);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="grid min-h-[760px] scroll-mt-20 items-center gap-12 px-5 py-14 md:px-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:px-16 xl:min-h-screen xl:px-20"
    >
      <div className="flex min-h-[520px] flex-col justify-center md:min-h-[560px]">
        <div className="h-5">
          <p className="text-xs font-black tracking-[0.34em] text-white/65 uppercase">
            {slide.eyebrow}
          </p>
        </div>

        <div className="mt-8 flex h-[250px] items-start md:h-[300px] xl:h-[320px]">
          <h1 className="font-display max-w-3xl text-[clamp(3.25rem,4.8vw,5.25rem)] leading-[0.94] font-black tracking-normal text-white">
            {title.before}
            <span className="text-blue-600">{title.accent}</span>
          </h1>
        </div>

        <p className="mt-6 h-24 max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
          {slide.description}
        </p>

        <div className="mt-8 flex h-14 flex-wrap items-center gap-8">
          <a href="#nosotros" className="group inline-flex items-center gap-4">
            <span className="inline-flex size-14 items-center justify-center rounded-full border border-blue-600 text-white transition group-hover:bg-blue-600">
              <Play size={18} fill="currentColor" />
            </span>
            <span>
              <span className="block text-xs font-black tracking-[0.18em] uppercase">
                Ver reel
              </span>
              <span className="text-xs text-white/45">2.15 min</span>
            </span>
          </a>

          <a
            href={slide.href}
            className="inline-flex items-center gap-6 text-xs font-black tracking-[0.18em] text-white uppercase transition hover:text-blue-500"
          >
            {slide.cta} <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_104px] xl:gap-16">
        <div className="relative">
          <SlideVisual type={slide.visual} />
        </div>

        <div className="flex min-h-12 justify-center gap-5 md:min-h-[500px] md:flex-col md:items-stretch md:justify-center md:gap-6 xl:min-h-[560px]">
          {slides.map((item, index) => {
            const isActive = index === activeSlide;

            return (
              <button
                key={item.title}
                type="button"
                aria-label={`Ver slide ${index + 1}`}
                aria-pressed={isActive}
                onClick={() => setActiveSlide(index)}
                className={`group flex h-10 w-12 items-center justify-center gap-4 text-xs transition md:w-24 md:justify-start ${
                  isActive ? 'text-blue-500' : 'text-white/45 hover:text-white'
                }`}
              >
                <span
                  className={`hidden h-px w-10 transition md:block ${
                    isActive ? 'bg-blue-600' : 'bg-white/15 group-hover:bg-white/50'
                  }`}
                />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
