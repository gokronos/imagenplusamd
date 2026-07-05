'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const aboutSlides = [
  {
    number: '01',
    title: 'Que es Imagen Plus',
    text: 'Somos una agencia de marketing digital y comunicacion estrategica que impulsa el crecimiento de empresas, instituciones y emprendimientos con soluciones creativas, tecnologicas y comerciales.',
    stat: '10+',
    statLabel: 'anos de experiencia',
  },
  {
    number: '02',
    title: 'Mision',
    text: 'Ayudar a empresas, instituciones y emprendedores a crecer con estrategias de comunicacion, marketing digital y tecnologia que fortalezcan su imagen y generen resultados reales.',
    stat: '360',
    statLabel: 'enfoque integral',
  },
  {
    number: '03',
    title: 'Vision',
    text: 'Ser una agencia reconocida a nivel regional y nacional por desarrollar soluciones innovadoras en marketing, comunicacion y transformacion digital.',
    stat: 'CO',
    statLabel: 'marcas en Colombia',
  },
  {
    number: '04',
    title: 'Como trabajamos',
    text: 'Cada cliente es unico. Por eso trabajamos con estrategias personalizadas basadas en sus necesidades, objetivos y publico.',
    steps: [
      'Escuchamos y entendemos retos.',
      'Planeamos una estrategia integral.',
      'Creamos y ejecutamos con calidad.',
      'Medimos, ajustamos y optimizamos.',
    ],
    stat: '4',
    statLabel: 'etapas de trabajo',
  },
] as const;

export function AboutCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = aboutSlides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? aboutSlides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === aboutSlides.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="nosotros" className="scroll-mt-10 px-5 py-16 md:px-10 xl:px-20">
      <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="bg-[#05070b] p-6 md:p-10 xl:p-12">
          <p className="text-xs font-black tracking-[0.28em] text-blue-600 uppercase">
            Imagen Plus
          </p>
          <h2 className="font-display mt-6 max-w-xl text-4xl leading-none font-black tracking-normal md:text-5xl">
            Marketing, comunicacion y tecnologia para marcas que quieren{' '}
            <span className="text-blue-600">crecer.</span>
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/55">
            Mas que ofrecer servicios, nos convertimos en aliados estrategicos:
            acompanamos cada proyecto desde la planeacion hasta la ejecucion con
            innovacion, compromiso y calidad.
          </p>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-px bg-white/10">
            <div className="bg-[#0b0f16] p-5">
              <span className="font-display text-5xl font-black text-blue-600">10+</span>
              <p className="mt-2 text-sm font-bold text-white/68">anos de experiencia</p>
            </div>
            <div className="bg-[#0b0f16] p-5">
              <span className="font-display text-5xl font-black text-blue-600">360</span>
              <p className="mt-2 text-sm font-bold text-white/68">vision integral</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0b0f16] p-4 md:p-6 xl:p-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-black tracking-[0.28em] text-blue-500 uppercase">
              Desliza el enfoque
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Anterior"
                onClick={goToPrevious}
                className="inline-flex size-10 items-center justify-center border border-white/12 bg-black/40 text-white transition hover:border-blue-600 hover:text-blue-500"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Siguiente"
                onClick={goToNext}
                className="inline-flex size-10 items-center justify-center border border-white/12 bg-black/40 text-white transition hover:border-blue-600 hover:text-blue-500"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <article className="mt-6 grid min-h-[330px] content-between border border-white/10 bg-black p-6 transition md:p-8">
            <div>
              <div className="flex items-start justify-between gap-8">
                <span className="text-sm font-black text-blue-500">
                  {activeSlide.number}
                </span>
                <ArrowUpRight size={24} className="text-white/50" />
              </div>
              <h3 className="font-display mt-12 max-w-md text-4xl leading-none font-black tracking-normal md:text-5xl">
                {activeSlide.title}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
                {activeSlide.text}
              </p>
              {'steps' in activeSlide ? (
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {activeSlide.steps.map((step, index) => (
                    <div
                      key={step}
                      className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 border border-white/10 bg-white/[0.04] p-3 text-sm leading-6 text-white/68"
                    >
                      <span className="font-black text-blue-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="mt-10 flex items-end justify-between gap-5 border-t border-white/10 pt-6">
              <div>
                <span className="font-display text-5xl leading-none font-black text-blue-600">
                  {activeSlide.stat}
                </span>
                <p className="mt-2 text-xs font-black tracking-[0.16em] text-white/45 uppercase">
                  {activeSlide.statLabel}
                </p>
              </div>
              <div className="flex gap-2">
                {aboutSlides.map((slide, index) => (
                  <button
                    key={slide.number}
                    type="button"
                    aria-label={`Ver ${slide.title}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 transition ${
                      activeIndex === index ? 'w-10 bg-blue-600' : 'w-4 bg-white/18'
                    }`}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
