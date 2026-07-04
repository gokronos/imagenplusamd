'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { audiovisualServiceItems } from '@/data/services/audiovisual';
import { disenoServiceItems } from '@/data/services/diseno';
import { desarrolloWebServiceItems } from '@/data/services/desarrollo-web';
import { inteligenciaArtificialServiceItems } from '@/data/services/inteligencia-artificial';
import { marketingServiceItems } from '@/data/services/marketing';

type ServiceMenuGroup = {
  number: string;
  label: string;
  href: string;
  items: readonly string[];
  itemLinks?: Record<string, string>;
};

const links = [
  { number: '02', label: 'Proyectos', href: '/#proyectos' },
  { number: '03', label: 'Proceso', href: '/#proceso' },
  { number: '04', label: 'Contacto', href: '/#contacto' },
];

const services: ServiceMenuGroup[] = [
  {
    number: '01',
    label: 'Diseño',
    href: '/#diseno',
    items: disenoServiceItems,
    itemLinks: {
      'Diseño gráfico': '/servicios/diseno-grafico',
      Branding: '/servicios/branding',
      'Identidad corporativa': '/servicios/identidad-corporativa',
      'Manual de marca': '/servicios/manual-de-marca',
      'Papelería empresarial': '/servicios/papeleria-empresarial',
      'Diseño editorial': '/servicios/diseno-editorial',
      'Diseño para redes sociales': '/servicios/diseno-redes-sociales',
      'Publicidad impresa': '/servicios/publicidad-impresa',
      'Material POP': '/servicios/material-pop',
    },
  },
  {
    number: '02',
    label: 'Marketing Digital',
    href: '/#marketing-digital',
    items: marketingServiceItems,
    itemLinks: {
      'Estrategias digitales': '/servicios/estrategias-digitales',
      'Gestión de redes sociales': '/servicios/gestion-de-redes-sociales',
      'Community Management': '/servicios/community-management',
      'Campañas publicitarias': '/servicios/campanas-publicitarias',
      'Facebook Ads': '/servicios/facebook-ads',
      'Instagram Ads': '/servicios/instagram-ads',
      'Google Ads': '/servicios/google-ads',
      'Email Marketing': '/servicios/email-marketing',
    },
  },
  {
    number: '03',
    label: 'Desarrollo Web',
    href: '/#desarrollo-web',
    items: desarrolloWebServiceItems,
    itemLinks: {
      'Sitios corporativos': '/servicios/sitios-corporativos',
      'Landing Pages': '/servicios/landing-pages',
      'Tiendas virtuales': '/servicios/tiendas-virtuales',
      Blogs: '/servicios/blogs',
      'Portales informativos': '/servicios/portales-informativos',
      'Sistemas administrables': '/servicios/sistemas-administrables',
      'Integracion con CMS': '/servicios/integracion-cms',
      'Optimizacion de velocidad': '/servicios/optimizacion-velocidad',
    },
  },
  {
    number: '04',
    label: 'Producción Audiovisual',
    href: '/#produccion-audiovisual',
    items: audiovisualServiceItems,
    itemLinks: {
      Fotografia: '/servicios/fotografia',
      'Video corporativo': '/servicios/video-corporativo',
      Comerciales: '/servicios/comerciales',
      Reels: '/servicios/reels',
      'Videos para redes sociales': '/servicios/videos-redes-sociales',
      Documentales: '/servicios/documentales',
      'Cobertura de eventos': '/servicios/cobertura-eventos',
      Streaming: '/servicios/streaming',
      'Motion Graphics': '/servicios/motion-graphics',
    },
  },
  {
    number: '05',
    label: 'Inteligencia Artificial',
    href: '/#inteligencia-artificial',
    items: inteligenciaArtificialServiceItems,
    itemLinks: {
      'Automatizacion empresarial': '/servicios/automatizacion-empresarial',
      'Creacion de contenido': '/servicios/creacion-de-contenido',
      Chatbots: '/servicios/chatbots',
      'Agentes inteligentes': '/servicios/agentes-inteligentes',
      'Automatizacion de marketing': '/servicios/automatizacion-marketing',
      'Optimizacion de procesos': '/servicios/optimizacion-procesos',
    },
  },
];

export function InternalMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/92 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-10 xl:px-20">
          <Link href="/" className="font-display text-2xl leading-none font-black">
            IMAGEN<span className="text-blue-600">+</span>
            <span className="ml-1">PLUS</span>
          </Link>

          <nav className="hidden items-center gap-1 text-sm lg:flex">
            <Link
              href="/"
              className="grid h-11 grid-cols-[28px_minmax(0,1fr)] items-center gap-2 px-3 text-white/62 transition hover:text-blue-500"
            >
              <span className="text-blue-500">00</span>
              <span>Inicio</span>
            </Link>

            <div className="group relative">
              <Link
                href="/#servicios"
                className="grid h-11 grid-cols-[28px_minmax(0,1fr)_14px] items-center gap-2 px-3 text-white/62 transition hover:text-blue-500"
              >
                <span className="text-blue-500">01</span>
                <span>Servicios</span>
                <ArrowUpRight size={13} className="transition group-hover:rotate-90" />
              </Link>

              <div className="custom-scrollbar invisible absolute top-full left-0 max-h-[72vh] w-[520px] translate-y-2 overflow-y-auto border border-white/10 bg-black p-4 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mb-3 text-[10px] font-black tracking-[0.28em] text-blue-500 uppercase">
                  Servicios
                </p>
                <div className="grid gap-3">
                  {services.map((service) => (
                    <div
                      key={service.href}
                      className="border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                    >
                      <Link
                        href={service.href}
                        className="grid min-h-9 grid-cols-[28px_minmax(0,1fr)_14px] items-center gap-3 text-sm text-white/70 transition hover:text-blue-500"
                      >
                        <span className="text-blue-500">{service.number}</span>
                        <span className="min-w-0 leading-5">{service.label}</span>
                        <ArrowUpRight size={13} className="justify-self-end" />
                      </Link>
                      <div className="mt-2 grid grid-cols-2 gap-x-5 gap-y-1 pl-10">
                        {service.items.map((item) => (
                          <Link
                            key={item}
                            href={service.itemLinks?.[item] ?? service.href}
                            title={item}
                            className="truncate py-1 text-xs leading-5 text-white/42 transition hover:text-white"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="grid h-11 grid-cols-[28px_minmax(0,1fr)] items-center gap-2 px-3 text-white/62 transition hover:text-blue-500"
              >
                <span className="text-blue-500">{link.number}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <Link
            href="/#contacto"
            className="hidden h-11 items-center gap-3 border border-blue-600 px-4 text-xs font-black tracking-[0.18em] text-blue-500 uppercase transition hover:bg-blue-600 hover:text-white sm:inline-flex"
          >
            Cotizar
            <ArrowUpRight size={15} />
          </Link>

          <button
            type="button"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex size-11 items-center justify-center border border-white/15 bg-white/5 text-white transition hover:border-blue-600 hover:text-blue-500 lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`custom-scrollbar fixed inset-y-0 right-0 z-[80] w-[min(90vw,430px)] overflow-y-auto border-l border-white/12 bg-black px-6 py-5 text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between gap-5">
          <Link href="/" onClick={closeMenu} className="font-display text-2xl font-black">
            IMAGEN<span className="text-blue-600">+</span> PLUS
          </Link>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMenu}
            className="inline-flex size-10 items-center justify-center border border-white/15 bg-white/5 text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-9 grid gap-3">
          <Link
            href="/"
            onClick={closeMenu}
            className="grid min-h-12 grid-cols-[34px_minmax(0,1fr)] items-center gap-3 border-b border-white/10 text-sm font-bold text-white/75 transition hover:text-blue-500"
          >
            <span className="text-blue-500">00</span>
            <span>Inicio</span>
          </Link>

          <details className="group border-b border-white/10 pb-3">
            <summary className="grid min-h-12 cursor-pointer list-none grid-cols-[34px_minmax(0,1fr)_18px] items-center gap-3 text-sm font-bold text-white/75 transition group-open:text-blue-500 hover:text-blue-500 [&::-webkit-details-marker]:hidden">
              <span className="text-blue-500">01</span>
              <span>Servicios</span>
              <ArrowUpRight
                size={15}
                className="justify-self-end transition group-open:rotate-90"
              />
            </summary>
            <div className="mt-3 grid gap-4 border-l border-white/10 pl-4">
              {services.map((service) => (
                <div key={service.href}>
                  <Link
                    href={service.href}
                    onClick={closeMenu}
                    className="grid min-h-10 grid-cols-[30px_minmax(0,1fr)_14px] items-center gap-3 text-sm text-white/68 transition hover:text-blue-500"
                  >
                    <span className="text-blue-500">{service.number}</span>
                    <span>{service.label}</span>
                    <ArrowUpRight size={13} className="justify-self-end" />
                  </Link>
                  <div className="mt-1 grid gap-1 pl-[42px]">
                    {service.items.map((item) => (
                      <Link
                        key={item}
                        href={service.itemLinks?.[item] ?? service.href}
                        onClick={closeMenu}
                        className="py-1 text-xs leading-5 text-white/45 transition hover:text-white"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </details>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="grid min-h-12 grid-cols-[34px_minmax(0,1fr)] items-center gap-3 border-b border-white/10 text-sm font-bold text-white/75 transition hover:text-blue-500"
            >
              <span className="text-blue-500">{link.number}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <Link
          href="/#contacto"
          onClick={closeMenu}
          className="mt-8 inline-flex h-12 w-full items-center justify-center gap-3 bg-blue-600 px-4 text-xs font-black tracking-[0.18em] text-white uppercase"
        >
          Cotizar
          <ArrowUpRight size={16} />
        </Link>
      </aside>
    </>
  );
}
