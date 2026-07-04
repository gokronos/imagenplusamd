'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BotMessageSquare,
  BrainCircuit,
  Brush,
  Building2,
  Camera,
  Clapperboard,
  FileText,
  Film,
  Gauge,
  Globe,
  Instagram,
  KeyRound,
  LayoutTemplate,
  Mail,
  MapPin,
  Megaphone,
  MousePointerClick,
  Newspaper,
  Package,
  Share2,
  ShoppingCart,
  Target,
  Users,
  WandSparkles,
  Workflow,
  X,
  type LucideIcon,
} from 'lucide-react';
import { audiovisualServiceDetails } from '@/data/services/audiovisual';
import { disenoServiceDetails } from '@/data/services/diseno';
import { desarrolloWebServiceDetails } from '@/data/services/desarrollo-web';
import { inteligenciaArtificialServiceDetails } from '@/data/services/inteligencia-artificial';
import { marketingServiceDetails } from '@/data/services/marketing';

type ServiceItemGridProps = {
  items: readonly string[];
};

type ServiceModalContent = {
  title: string;
  eyebrow: string;
  summary: string;
  bullets: readonly string[];
  href?: string;
  visual?: string;
};

const serviceDetails: Record<string, ServiceModalContent> = {
  ...disenoServiceDetails,
  ...marketingServiceDetails,
  ...desarrolloWebServiceDetails,
  ...audiovisualServiceDetails,
  ...inteligenciaArtificialServiceDetails,
};

function normalizeLabel(label: string) {
  return label
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getServiceItemIcon(item: string): LucideIcon {
  const label = normalizeLabel(item);

  if (label.includes('diseno grafico')) return Brush;
  if (label.includes('branding')) return BadgeCheck;
  if (label.includes('identidad')) return Building2;
  if (label.includes('manual')) return BookOpen;
  if (label.includes('papeler')) return FileText;
  if (label.includes('editorial')) return Newspaper;
  if (label.includes('redes sociales')) return Share2;
  if (label.includes('impresa')) return FileText;
  if (label.includes('material pop')) return Package;
  if (label.includes('estrategias')) return Target;
  if (label.includes('gestion')) return Share2;
  if (label.includes('community')) return Users;
  if (label.includes('campana')) return MousePointerClick;
  if (label.includes('facebook')) return Megaphone;
  if (label.includes('instagram')) return Instagram;
  if (label.includes('google ads')) return MousePointerClick;
  if (label.includes('email')) return Mail;
  if (label.includes('corporativos')) return Building2;
  if (label.includes('landing')) return LayoutTemplate;
  if (label.includes('tiendas')) return ShoppingCart;
  if (label.includes('blogs')) return Newspaper;
  if (label.includes('portales')) return Globe;
  if (label.includes('administrables')) return KeyRound;
  if (label.includes('cms')) return Workflow;
  if (label.includes('velocidad')) return Gauge;
  if (label.includes('auditor')) return BarChart3;
  if (label.includes('local')) return MapPin;
  if (label.includes('arquitectura')) return LayoutTemplate;
  if (label.includes('contenido')) return FileText;
  if (label.includes('analytics')) return BarChart3;
  if (label.includes('fotograf')) return Camera;
  if (label.includes('video')) return Film;
  if (label.includes('comerciales')) return Clapperboard;
  if (label.includes('reels')) return Film;
  if (label.includes('documentales')) return Film;
  if (label.includes('eventos')) return Camera;
  if (label.includes('streaming')) return Share2;
  if (label.includes('motion')) return WandSparkles;
  if (label.includes('automatiz')) return Workflow;
  if (label.includes('chatbots')) return BotMessageSquare;
  if (label.includes('agentes')) return BrainCircuit;
  if (label.includes('procesos')) return Workflow;

  return Brush;
}

function getModalContent(item: string): ServiceModalContent {
  const key = normalizeLabel(item);

  return (
    serviceDetails[key] ?? {
      title: item,
      eyebrow: 'Servicio especializado',
      summary:
        'Este servicio se adapta al objetivo de tu marca, el canal donde se va a publicar y el resultado que necesitas lograr.',
      bullets: [
        'Revisamos la necesidad y definimos el alcance antes de diseñar o producir.',
        'Preparamos piezas claras, coherentes y listas para uso real.',
        'Ajustamos formatos para que funcionen en los canales principales de la marca.',
      ],
    }
  );
}

export function ServiceItemGrid({ items }: ServiceItemGridProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const activeContent = useMemo(
    () => (activeItem ? getModalContent(activeItem) : null),
    [activeItem],
  );

  useEffect(() => {
    document.body.style.overflow = activeItem ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeItem]);

  return (
    <>
      <ul className="grid min-w-0 content-start gap-2 sm:grid-cols-2 md:col-start-2 2xl:col-start-auto">
        {items.map((item) => {
          const ItemIcon = getServiceItemIcon(item);

          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="grid min-h-11 w-full min-w-0 grid-cols-[32px_minmax(0,1fr)_14px] items-center gap-3 overflow-hidden border border-black/10 bg-white/72 px-3 text-[11px] leading-tight font-bold text-black/70 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition group-hover:border-black/15 hover:-translate-y-0.5 hover:border-blue-600/35 hover:bg-white hover:text-blue-700 hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)] xl:px-4 xl:text-[11px]"
              >
                <span className="inline-flex size-8 items-center justify-center border border-blue-600/12 bg-blue-600/[0.06] text-blue-600">
                  <ItemIcon size={15} strokeWidth={2.1} />
                </span>
                <span className="min-w-0 text-left text-wrap">{item}</span>
                <ArrowUpRight size={13} className="text-blue-600/70" />
              </button>
            </li>
          );
        })}
      </ul>

      {activeContent ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/72 px-4 py-6 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Cerrar ventana"
            className="absolute inset-0 cursor-default"
            onClick={() => setActiveItem(null)}
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="custom-scrollbar relative grid max-h-[88vh] w-full max-w-5xl overflow-y-auto border border-white/12 bg-white text-black shadow-2xl lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="relative min-h-[260px] overflow-hidden bg-black lg:min-h-[620px]">
              {activeContent.visual ? (
                <Image
                  src={activeContent.visual}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#050505,#111827_52%,#2563eb)]" />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.7))]" />
              <div className="absolute right-5 bottom-5 left-5">
                <p className="text-[10px] font-black tracking-[0.28em] text-blue-400 uppercase">
                  Imagen Plus
                </p>
                <p className="font-display mt-3 max-w-xs text-3xl leading-none font-black text-white">
                  Diseño con intención, no solo decoración.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[11px] font-black tracking-[0.24em] text-blue-600 uppercase">
                    {activeContent.eyebrow}
                  </p>
                  <h3
                    id="service-modal-title"
                    className="font-display mt-4 text-4xl leading-none font-black tracking-normal md:text-5xl"
                  >
                    {activeContent.title}
                  </h3>
                </div>
                <button
                  type="button"
                  aria-label="Cerrar ventana"
                  onClick={() => setActiveItem(null)}
                  className="inline-flex size-10 shrink-0 items-center justify-center border border-black/10 bg-black text-white transition hover:bg-blue-600"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-6 max-w-xl text-base leading-8 text-black/62">
                {activeContent.summary}
              </p>

              <div className="mt-7 grid gap-3">
                {activeContent.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="grid grid-cols-[36px_minmax(0,1fr)] gap-4 border border-black/8 bg-[#f4f5f7] p-4 text-sm leading-6 text-black/70 transition hover:border-blue-600/20 hover:bg-white"
                  >
                    <span className="mt-0.5 inline-flex size-9 items-center justify-center bg-blue-600 text-white">
                      <BadgeCheck size={16} />
                    </span>
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {activeContent.href ? (
                  <Link
                    href={activeContent.href}
                    className="inline-flex h-12 items-center gap-4 bg-blue-600 px-5 text-xs font-black tracking-[0.16em] text-white uppercase transition hover:bg-black"
                  >
                    Más información
                    <ArrowUpRight size={16} />
                  </Link>
                ) : null}
                <a
                  href="#contacto"
                  onClick={() => setActiveItem(null)}
                  className="inline-flex h-12 items-center gap-4 border border-black/15 px-5 text-xs font-black tracking-[0.16em] text-black uppercase transition hover:border-blue-600 hover:text-blue-600"
                >
                  Solicitar servicio
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
