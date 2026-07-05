'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { audiovisualServiceItems } from '@/data/services/audiovisual';
import { disenoServiceItems } from '@/data/services/diseno';
import { desarrolloWebServiceItems } from '@/data/services/desarrollo-web';
import { inteligenciaArtificialServiceItems } from '@/data/services/inteligencia-artificial';
import { getServiceHref } from '@/data/services/links';
import { marketingServiceItems } from '@/data/services/marketing';
import { whatsappUrl } from '@/lib/contact';

const serviceGroups = [
  {
    title: 'Diseño',
    slug: 'diseno',
    items: disenoServiceItems,
  },
  {
    title: 'Marketing Digital',
    slug: 'marketing-digital',
    items: marketingServiceItems,
  },
  {
    title: 'Desarrollo Web',
    slug: 'desarrollo-web',
    items: desarrolloWebServiceItems,
  },
  {
    title: 'Producción Audiovisual',
    slug: 'produccion-audiovisual',
    items: audiovisualServiceItems,
  },
  {
    title: 'Inteligencia Artificial',
    slug: 'inteligencia-artificial',
    items: inteligenciaArtificialServiceItems,
  },
];

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Articulos', href: '#articulos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export function MobileMenu() {
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
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/88 px-5 py-4 backdrop-blur md:px-10 xl:hidden">
        <a href="#inicio" className="font-display text-xl leading-none font-black">
          IMAGEN<span className="text-blue-600">+</span> PLUS
        </a>

        <button
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center border border-white/15 bg-white/5 text-white transition hover:border-blue-600 hover:text-blue-500"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity xl:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`custom-scrollbar fixed inset-y-0 right-0 z-50 w-[min(88vw,420px)] overflow-y-auto border-l border-white/12 bg-black px-6 py-5 text-white shadow-2xl transition-transform duration-300 xl:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between gap-5">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="font-display text-2xl font-black"
          >
            IMAGEN<span className="text-blue-600">+</span> PLUS
          </a>
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
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-between border-b border-white/10 text-sm font-bold text-white/75 transition hover:text-blue-500"
            >
              <span>{item.label}</span>
              <span className="text-blue-500">{String(index).padStart(2, '0')}</span>
            </a>
          ))}
        </nav>

        <div className="mt-10">
          <p className="text-[10px] font-black tracking-[0.28em] text-blue-500 uppercase">
            Servicios
          </p>
          <div className="mt-4 grid gap-3">
            {serviceGroups.map((service, index) => (
              <details
                key={service.slug}
                className="group border border-white/10 bg-white/[0.03]"
              >
                <summary className="flex min-h-14 cursor-pointer list-none items-center gap-4 px-4 text-sm font-black">
                  <span className="text-blue-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{service.title}</span>
                  <ArrowUpRight
                    size={15}
                    className="ml-auto transition group-open:rotate-90"
                  />
                </summary>
                <div className="border-t border-white/10 px-4 py-4">
                  <a
                    href={`#${service.slug}`}
                    onClick={closeMenu}
                    className="mb-4 inline-flex items-center gap-3 text-xs font-black tracking-[0.16em] text-blue-500 uppercase"
                  >
                    Ver sección <ArrowUpRight size={14} />
                  </a>
                  <ul className="grid gap-2 text-sm text-white/55">
                    {service.items.map((item) => (
                      <li key={item}>
                        <a
                          href={getServiceHref(item) ?? `#${service.slug}`}
                          onClick={closeMenu}
                          className="block transition hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="mt-8 inline-flex h-12 w-full items-center justify-center gap-3 bg-blue-600 px-4 text-xs font-black tracking-[0.18em] text-white uppercase"
        >
          Hablemos
          <ArrowUpRight size={16} />
        </a>
      </aside>
    </>
  );
}
