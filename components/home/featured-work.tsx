import { ArrowUpRight, BarChart3, Layers3, Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'Identidad visual para marcas memorables',
    category: 'Branding / Diseño',
    image: '/images/services/branding-modal.png',
    result: 'Sistema visual coherente para comunicar con más confianza.',
    href: '/servicios/branding',
  },
  {
    title: 'Contenido digital que eleva la percepción',
    category: 'Marketing / Redes',
    image: '/images/services/social-media-design-modal.png',
    result: 'Piezas listas para campañas, redes y lanzamientos comerciales.',
    href: '/servicios/diseno-redes-sociales',
  },
  {
    title: 'Comunicación editorial con alto impacto',
    category: 'Editorial / Impreso',
    image: '/images/services/editorial-design-modal.png',
    result: 'Diseños claros, elegantes y preparados para presentación profesional.',
    href: '/servicios/diseno-editorial',
  },
];

const pathways = [
  {
    icon: Rocket,
    title: 'Quiero vender más',
    text: 'Campañas, pauta y contenido para atraer mejores oportunidades.',
    href: '#marketing-digital',
  },
  {
    icon: Layers3,
    title: 'Quiero construir mi marca',
    text: 'Identidad visual, branding y piezas para comunicar con coherencia.',
    href: '#diseno',
  },
  {
    icon: BarChart3,
    title: 'Quiero ordenar mi presencia digital',
    text: 'Web, SEO y automatización para convertir interés en contactos reales.',
    href: '#desarrollo-web',
  },
];

export function FeaturedWork() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-10 bg-black px-5 py-20 text-white md:px-10 xl:px-20"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-10 border-y border-white/10 py-12 lg:grid-cols-[0.44fr_1.56fr]">
          <div className="max-w-md lg:sticky lg:top-10 lg:self-start">
            <p className="text-xs font-black tracking-[0.28em] text-blue-600 uppercase">
              Trabajo con intención
            </p>
            <h2 className="font-display mt-6 text-[clamp(2.6rem,4.5vw,5.4rem)] leading-[0.9] font-black tracking-normal">
              Diseño que se nota. Estrategia que{' '}
              <span className="text-blue-600">mueve.</span>
            </h2>
            <p className="mt-7 text-sm leading-7 text-white/55">
              Cada proyecto debe verse bien, pero sobre todo debe ayudar a vender,
              posicionar y construir confianza.
            </p>
            <Link
              href="/#contacto"
              className="mt-9 inline-flex h-12 items-center gap-4 border border-blue-600/35 px-5 text-xs font-black tracking-[0.16em] text-blue-500 uppercase transition hover:bg-blue-600 hover:text-white"
            >
              Cotizar proyecto
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid gap-px bg-white/10">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className="group grid min-h-[360px] bg-[#05070b] transition hover:bg-[#0b0f16] lg:grid-cols-[0.88fr_1.12fr]"
              >
                <div className="relative min-h-[300px] overflow-hidden bg-black lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_35%,rgba(0,0,0,0.5))]" />
                </div>

                <div className="grid content-between p-6 md:p-9">
                  <div>
                    <div className="flex items-center justify-between gap-5">
                      <span className="text-sm font-black text-blue-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <ArrowUpRight
                        size={24}
                        className="text-white/50 transition group-hover:rotate-45 group-hover:text-blue-500"
                      />
                    </div>
                    <p className="mt-10 text-[10px] font-black tracking-[0.22em] text-blue-500 uppercase">
                      {project.category}
                    </p>
                    <h3 className="font-display mt-4 max-w-xl text-4xl leading-none font-black tracking-normal md:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-6 max-w-lg text-sm leading-7 text-white/58">
                      {project.result}
                    </p>
                  </div>

                  <span className="mt-10 inline-flex w-fit items-center gap-3 text-xs font-black tracking-[0.16em] text-white/55 uppercase transition group-hover:text-blue-500">
                    Ver servicio <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {pathways.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group grid min-h-52 content-between bg-[#0b0f16] p-6 transition hover:bg-blue-600"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="inline-flex size-11 items-center justify-center border border-blue-600/30 text-blue-500 transition group-hover:border-white/30 group-hover:text-white">
                    <Icon size={21} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/55 transition group-hover:rotate-45 group-hover:text-white"
                  />
                </div>
                <div>
                  <h3 className="text-xl leading-tight font-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/52 transition group-hover:text-white/82">
                    {item.text}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
