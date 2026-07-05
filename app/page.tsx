import {
  ArrowUpRight,
  Bot,
  Code2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  Palette,
  Phone,
  Play,
  Sparkles,
  Video,
} from 'lucide-react';
import { HeroSlider } from '@/components/home/hero-slider';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { ServiceItemGrid } from '@/components/services/service-item-grid';
import { audiovisualServiceItems } from '@/data/services/audiovisual';
import { disenoServiceItems } from '@/data/services/diseno';
import { desarrolloWebServiceItems } from '@/data/services/desarrollo-web';
import { inteligenciaArtificialServiceItems } from '@/data/services/inteligencia-artificial';
import { getServiceHref } from '@/data/services/links';
import { marketingServiceItems } from '@/data/services/marketing';
import { whatsappUrl } from '@/lib/contact';

const navigation = [
  { number: '01', label: 'Inicio', href: '#inicio' },
  { number: '02', label: 'Servicios', href: '#servicios' },
  { number: '03', label: 'Proyectos', href: '#proyectos' },
  { number: '04', label: 'Proceso', href: '#proceso' },
  { number: '05', label: 'Nosotros', href: '#nosotros' },
  { number: '06', label: 'Contacto', href: '#contacto' },
];

const serviceGroups = [
  {
    title: 'Diseño',
    slug: 'diseno',
    icon: Palette,
    description:
      'Sistema visual completo para marcas que necesitan verse claras, memorables y consistentes.',
    items: disenoServiceItems,
  },
  {
    title: 'Marketing Digital',
    slug: 'marketing-digital',
    icon: Megaphone,
    description:
      'Estrategias, campañas y gestión de canales para atraer, convertir y fidelizar audiencias.',
    items: marketingServiceItems,
  },
  {
    title: 'Desarrollo Web',
    slug: 'desarrollo-web',
    icon: Code2,
    description:
      'Plataformas rápidas, administrables y pensadas para convertir tráfico en oportunidades reales.',
    items: desarrolloWebServiceItems,
  },
  {
    title: 'Producción Audiovisual',
    slug: 'produccion-audiovisual',
    icon: Video,
    description:
      'Contenido visual y narrativo para comunicar con impacto en medios digitales y tradicionales.',
    items: audiovisualServiceItems,
  },
  {
    title: 'Inteligencia Artificial',
    slug: 'inteligencia-artificial',
    icon: Bot,
    description:
      'Automatización, asistentes y procesos inteligentes para escalar operación y marketing.',
    items: inteligenciaArtificialServiceItems,
  },
];

const paths = [
  {
    number: '01',
    title: 'Quiero vender mas',
    text: 'Campanas, pauta y contenido para atraer mejores oportunidades.',
    href: '#marketing-digital',
  },
  {
    number: '02',
    title: 'Quiero una pagina web',
    text: 'Sitios, landing pages y sistemas administrables para convertir visitas.',
    href: '#desarrollo-web',
  },
  {
    number: '03',
    title: 'Quiero automatizar procesos',
    text: 'IA, chatbots y flujos para reducir tareas repetitivas.',
    href: '#inteligencia-artificial',
  },
  {
    number: '04',
    title: 'Quiero construir mi marca',
    text: 'Identidad visual, branding y piezas para comunicar con coherencia.',
    href: '#diseno',
  },
];

const processSteps = [
  ['01', 'Entendemos', 'Escuchamos tu idea y entendemos tus objetivos.'],
  ['02', 'Estrategia', 'Definimos el camino y el plan de acción adecuado.'],
  ['03', 'Creamos', 'Desarrollamos las soluciones con creatividad y tecnología.'],
  ['04', 'Implementamos', 'Ejecutamos el plan con precisión y acompañamiento.'],
  ['05', 'Medimos', 'Analizamos resultados y optimizamos para crecer.'],
];

const aboutCards = [
  {
    title: 'Mision',
    text: 'Ayudar a empresas, instituciones y emprendedores a comunicar mejor, vender con mas claridad y construir marcas solidas a traves de estrategia, creatividad y tecnologia.',
  },
  {
    title: 'Vision',
    text: 'Ser una agencia referente en Colombia para marcas que buscan crecer con una presencia digital profesional, sistemas visuales consistentes y soluciones medibles.',
  },
  {
    title: 'Como trabajamos',
    text: 'Unimos diseno, marketing, desarrollo web, produccion audiovisual e inteligencia artificial para crear soluciones completas, no piezas aisladas.',
  },
];

const trustMarks = [
  'Gobernacion de Santander',
  'Alcaldia de Cucuta',
  'Universidad Simon Bolivar',
  'MG Natural',
  'Sonrisas de Esperanza',
  'Clinica San Jose',
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <aside className="custom-scrollbar fixed inset-y-0 left-0 z-40 hidden w-64 overflow-x-hidden overflow-y-auto border-r border-white/15 bg-black px-8 py-14 xl:flex xl:flex-col">
        <a
          href="#inicio"
          className="font-display text-3xl leading-none font-black tracking-normal"
        >
          IMAGEN<span className="text-blue-600">+</span>
          <span className="block pl-14 text-2xl">PLUS</span>
        </a>

        <p className="mt-16 max-w-36 text-sm leading-6 text-white/55">
          Estrategia, creatividad y tecnología para marcas que quieren más.
        </p>
        <div className="mt-10 h-px w-8 bg-blue-600" />

        <nav className="mt-10 flex flex-col gap-3 text-sm">
          <a
            href="#inicio"
            className="flex items-center gap-5 py-2 text-white/60 transition hover:text-blue-500"
          >
            <span className="w-6 text-blue-500">00</span>
            <span>Inicio</span>
          </a>

          <p className="mt-3 text-[10px] font-black tracking-[0.28em] text-blue-500 uppercase">
            Servicios
          </p>

          {serviceGroups.map((service, index) => (
            <details key={service.slug} className="group/service">
              <summary className="grid cursor-pointer list-none grid-cols-[28px_minmax(0,1fr)_14px] items-center gap-3 py-2 text-white/62 transition group-open/service:text-blue-500 hover:text-blue-500 [&::-webkit-details-marker]:hidden">
                <span className="text-blue-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 leading-5">{service.title}</span>
                <ArrowUpRight
                  size={13}
                  className="justify-self-end transition group-open/service:rotate-90"
                />
              </summary>
              <div className="ml-[40px] hidden border-l border-white/10 pl-4 group-open/service:block group-hover/service:block">
                <a
                  href={`#${service.slug}`}
                  className="mt-1 mb-3 block truncate text-[11px] font-black tracking-[0.18em] text-white/42 uppercase transition hover:text-blue-500"
                >
                  Ver sección
                </a>
                <ul className="custom-scrollbar max-h-64 space-y-2 overflow-y-auto pr-2 pb-3 text-[12px] leading-5 text-white/48">
                  {service.items.map((item) => (
                    <li key={item}>
                      <a
                        href={getServiceHref(item) ?? `#${service.slug}`}
                        title={item}
                        className="block truncate transition hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex h-12 items-center justify-center gap-3 border border-blue-600 px-4 text-xs font-bold tracking-[0.18em] text-blue-500 uppercase transition hover:bg-blue-600 hover:text-white"
        >
          Hablemos
          <ArrowUpRight size={16} />
        </a>

        <div className="mt-12 flex items-center gap-6 text-white">
          <Linkedin size={22} />
          <Instagram size={22} />
          <span className="text-lg font-black">Bē</span>
        </div>
      </aside>

      <div className="min-w-0 xl:pl-64">
        <MobileMenu />

        <HeroSlider />

        <section
          id="servicios"
          className="scroll-mt-10 bg-[#05070b] px-5 py-24 text-white md:px-10 xl:px-12 2xl:px-20"
        >
          <div className="mx-auto grid max-w-[1380px] min-w-0 gap-14 lg:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)] 2xl:grid-cols-[minmax(320px,0.5fr)_minmax(0,1.5fr)]">
            <div className="lg:sticky lg:top-10 lg:self-start">
              <p className="text-xs font-black tracking-[0.28em] text-blue-600 uppercase">
                Qué hacemos
              </p>
              <h2 className="font-display mt-6 max-w-md text-[clamp(2.35rem,3.35vw,4.35rem)] leading-[0.96] font-black tracking-normal">
                Soluciones integrales para marcas que quieren{' '}
                <span className="text-blue-600">más.</span>
              </h2>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-24 bg-blue-600" />
                <span className="size-2 rounded-full bg-blue-600" />
                <span className="h-px w-10 bg-white/15" />
              </div>
              <p className="mt-8 max-w-sm text-base leading-8 text-white/58">
                Imagen Plus ofrece soluciones integrales para construir marcas claras,
                visibles y preparadas para crecer.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden bg-white/10 text-sm">
                <div className="bg-[#0b0f16] p-5">
                  <span className="font-display text-4xl font-black text-blue-600">
                    06
                  </span>
                  <p className="mt-2 font-bold">líneas de servicio</p>
                </div>
                <div className="bg-[#0b0f16] p-5">
                  <span className="font-display text-4xl font-black text-blue-600">
                    50+
                  </span>
                  <p className="mt-2 font-bold">soluciones tácticas</p>
                </div>
              </div>
            </div>

            <div className="min-w-0 border-y border-white/10 bg-white/[0.03]">
              {serviceGroups.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    id={service.slug}
                    key={service.title}
                    className="group grid scroll-mt-10 gap-x-8 gap-y-7 border-b border-white/10 bg-[#05070b] px-5 py-10 transition last:border-b-0 hover:bg-[#0b0f16] md:grid-cols-[76px_minmax(0,1fr)] md:px-8 xl:px-9 2xl:grid-cols-[96px_minmax(240px,0.72fr)_minmax(0,1.28fr)] 2xl:px-10"
                  >
                    <div className="flex items-center justify-between gap-5 md:block">
                      <span className="font-display text-5xl leading-none font-black text-white/14 transition group-hover:text-blue-600">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="mt-0 inline-flex size-12 items-center justify-center border border-blue-600/25 bg-white/[0.04] text-blue-500 md:mt-9">
                        <Icon size={24} />
                      </span>
                    </div>

                    <div className="max-w-sm min-w-0">
                      <h3 className="font-display text-3xl leading-none font-black tracking-normal md:text-[2.35rem]">
                        {service.title}
                      </h3>
                      <p className="mt-5 text-sm leading-7 text-white/60">
                        {service.description}
                      </p>
                      <a
                        href="#contacto"
                        className="mt-7 inline-flex h-11 items-center gap-4 border border-blue-600/30 bg-white/[0.04] px-4 text-[11px] font-extrabold tracking-[0.14em] text-blue-500 uppercase transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        Solicitar servicio
                        <span className="inline-flex size-6 items-center justify-center border border-current">
                          <ArrowUpRight size={13} />
                        </span>
                      </a>
                    </div>

                    <ServiceItemGrid items={service.items} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-10 px-5 py-16 md:px-10 xl:px-20">
          <div className="grid gap-10 border-y border-white/10 py-12 lg:grid-cols-[0.5fr_1.5fr]">
            <div className="max-w-md">
              <p className="text-xs font-black tracking-[0.28em] text-blue-600 uppercase">
                Punto de partida
              </p>
              <h2 className="font-display mt-6 text-4xl leading-none font-black tracking-normal md:text-5xl">
                Entra por lo que tu marca necesita{' '}
                <span className="text-blue-600">resolver.</span>
              </h2>
              <p className="mt-7 text-sm leading-7 text-white/48">
                Si no sabes por donde empezar, estos caminos te llevan directo al area
                correcta.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
              {paths.map((path) => (
                <a
                  key={path.href}
                  href={path.href}
                  className="group grid min-h-48 content-between bg-[#05070b] p-6 transition hover:bg-blue-600 md:min-h-56"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-black text-blue-500 transition group-hover:text-white">
                        {path.number}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-white/70 transition group-hover:rotate-45 group-hover:text-white"
                      />
                    </div>
                    <h3 className="mt-8 text-xl leading-tight font-black">
                      {path.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-white/48 transition group-hover:text-white/78">
                      {path.text}
                    </p>
                  </div>
                  <span className="mt-8 text-[10px] font-black tracking-[0.18em] text-blue-500 uppercase transition group-hover:text-white">
                    Ver servicios
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="proceso"
          className="grid scroll-mt-10 gap-px bg-white/10 px-5 py-20 md:px-10 lg:grid-cols-2 xl:px-20"
        >
          <div className="bg-[#05070b] p-8 text-white md:p-14">
            <p className="text-xs font-black tracking-[0.28em] text-blue-600 uppercase">
              Nuestro proceso
            </p>
            <h2 className="font-display mt-6 max-w-md text-4xl leading-none font-black tracking-normal">
              Un método claro. Resultados <span className="text-blue-600">seguros.</span>
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-5">
              {processSteps.map(([number, title, text]) => (
                <div key={title}>
                  <div className="inline-flex size-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Sparkles size={18} />
                  </div>
                  <p className="mt-7 text-xs font-black">{number}</p>
                  <h3 className="mt-3 font-black">{title}</h3>
                  <p className="mt-3 text-xs leading-5 text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-zinc-950 p-8 md:p-14">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.35),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_28%)]" />
            <div className="relative max-w-md">
              <p className="text-xs font-black tracking-[0.28em] text-blue-500 uppercase">
                Detrás de cada proyecto
              </p>
              <h2 className="font-display mt-6 text-5xl leading-none font-black tracking-normal">
                Personas que aman lo que <span className="text-blue-600">hacen.</span>
              </h2>
              <p className="mt-8 text-sm leading-7 text-white/60">
                Somos creativos, estrategas, desarrolladores, productores y soñadores. Un
                equipo multidisciplinario enfocado en resultados extraordinarios.
              </p>
              <a
                href="#nosotros"
                className="mt-10 inline-flex items-center gap-4 text-xs font-black tracking-[0.2em] text-blue-500 uppercase"
              >
                Conoce nuestro equipo <ArrowUpRight size={16} />
              </a>
            </div>
            <button
              type="button"
              aria-label="Reproducir video del equipo"
              className="absolute right-10 bottom-10 inline-flex size-16 items-center justify-center rounded-full border border-blue-600 text-white"
            >
              <Play size={20} fill="currentColor" />
            </button>
          </div>
        </section>

        <section id="nosotros" className="scroll-mt-10 px-5 py-20 md:px-10 xl:px-20">
          <div className="grid gap-12 border-y border-white/10 py-14 lg:grid-cols-[0.74fr_1.26fr]">
            <div>
              <p className="text-xs font-black tracking-[0.28em] text-blue-600 uppercase">
                Que es Imagen Plus
              </p>
              <h2 className="font-display mt-6 max-w-xl text-5xl leading-none font-black tracking-normal md:text-6xl">
                Una agencia para marcas que quieren comunicar, vender y crecer con{' '}
                <span className="text-blue-600">claridad.</span>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/58">
                Imagen Plus es una agencia de marketing, diseno y tecnologia con mas de 10
                anos de experiencia acompanando marcas, empresas e instituciones en la
                construccion de su presencia visual y digital.
              </p>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-px bg-white/10">
                <div className="bg-[#05070b] p-5">
                  <span className="font-display text-5xl font-black text-blue-600">
                    10+
                  </span>
                  <p className="mt-2 text-sm font-bold text-white/70">
                    anos de experiencia
                  </p>
                </div>
                <div className="bg-[#05070b] p-5">
                  <span className="font-display text-5xl font-black text-blue-600">
                    360
                  </span>
                  <p className="mt-2 text-sm font-bold text-white/70">enfoque integral</p>
                </div>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {aboutCards.map((card) => (
                <article
                  key={card.title}
                  className="bg-[#0b0f16] p-6 transition hover:bg-blue-600"
                >
                  <p className="text-[10px] font-black tracking-[0.24em] text-blue-500 uppercase">
                    Imagen Plus
                  </p>
                  <h3 className="font-display mt-6 text-3xl leading-none font-black">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-white/62">{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="pt-12">
            <p className="text-center text-xs font-black tracking-[0.28em] text-blue-600 uppercase">
              Marcas e instituciones que confian en nosotros
            </p>
            <div className="mt-10 grid gap-8 text-center text-xl font-black text-white/65 md:grid-cols-3 xl:grid-cols-6">
              {trustMarks.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>
        </section>

        <footer
          id="contacto"
          className="scroll-mt-10 border-t border-white/10 px-5 py-16 md:px-10 xl:px-20"
        >
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.8fr_0.6fr]">
            <div>
              <h2 className="font-display max-w-xs text-4xl leading-none font-black tracking-normal">
                ¿Tienes un <span className="text-blue-600">proyecto</span> en mente?
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                Hablemos de tu idea y construyamos algo extraordinario juntos.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 items-center gap-4 border border-white/30 px-5 text-xs font-black tracking-[0.16em] text-white uppercase transition hover:border-blue-600 hover:text-blue-500"
              >
                Hablemos por WhatsApp <ArrowUpRight size={16} />
              </a>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-[0.24em] text-blue-600 uppercase">
                Contactanos
              </h3>
              <div className="mt-8 space-y-5 text-sm text-white/65">
                <p className="flex items-center gap-4">
                  <Phone size={18} /> +57 320 123 4567
                </p>
                <p className="flex items-center gap-4">
                  <Mail size={18} /> info@imagenplus.com.co
                </p>
                <p className="flex items-center gap-4">
                  <MapPin size={18} /> Cúcuta, Colombia
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-[0.24em] text-blue-600 uppercase">
                Navegación
              </h3>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-white/55">
                {navigation.map((item) => (
                  <a key={item.href} href={item.href} className="hover:text-blue-500">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-[0.24em] text-blue-600 uppercase">
                Síguenos
              </h3>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.linkedin.com/"
                  aria-label="LinkedIn"
                  className="inline-flex size-12 items-center justify-center border border-white/20"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  className="inline-flex size-12 items-center justify-center border border-white/20"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.behance.net/"
                  aria-label="Behance"
                  className="inline-flex size-12 items-center justify-center border border-white/20 text-lg font-black"
                >
                  Bē
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Imagen Plus. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#">Política de privacidad</a>
              <a href="#">Términos y condiciones</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
