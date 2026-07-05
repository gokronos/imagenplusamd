import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BotMessageSquare,
  BookOpen,
  BrainCircuit,
  Brush,
  Building2,
  Camera,
  Film,
  FileText,
  Instagram,
  Mail,
  Megaphone,
  MousePointerClick,
  Newspaper,
  Package,
  Share2,
  Sparkles,
  Target,
  Users,
  WandSparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '@/components/layout/site-footer';
import { serviceBySlugQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';
import type { SanityImage } from '@/types/sanity';

type CmsService = {
  title?: string;
  excerpt?: string;
  icon?: string;
  eyebrow?: string;
  mainImage?: SanityImage;
  hero?: {
    title?: string;
    intro?: string;
    featureOne?: string;
    featureTwo?: string;
    imageEyebrow?: string;
    imageText?: string;
  };
  details?: {
    whatTitle?: string;
    whatText?: string;
    importanceTitle?: string;
    importanceText?: string;
  };
  deliverables?: string[];
  packagesTitle?: string;
  packages?: Array<{
    name?: string;
    description?: string;
    includes?: string[];
  }>;
  process?: Array<{
    number?: string;
    title?: string;
    text?: string;
  }>;
  cta?: string;
};

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  BookOpen,
  BotMessageSquare,
  BrainCircuit,
  Brush,
  Building2,
  Camera,
  Film,
  FileText,
  Instagram,
  Mail,
  Megaphone,
  MousePointerClick,
  Newspaper,
  Package,
  Share2,
  Sparkles,
  Target,
  Users,
  WandSparkles,
  Workflow,
};

function serviceImage(service: CmsService) {
  if (service.mainImage?.asset?._ref) {
    return urlForImage(service.mainImage).width(1200).height(1400).url();
  }

  return '/images/services/graphic-design-modal.png';
}

export async function SanityServicePage({ slug }: { slug: string }) {
  const service = await sanityFetch<typeof serviceBySlugQuery, CmsService | null>({
    query: serviceBySlugQuery,
    params: { slug },
    tags: [`service:${slug}`],
  });

  const title = service?.title ?? 'Servicio';
  const Icon = iconMap[service?.icon ?? ''] ?? Brush;
  const deliverables = service?.deliverables?.filter(Boolean) ?? [];
  const packages =
    service?.packages?.filter((item) => item.name && item.description) ?? [];
  const process =
    service?.process?.filter((step) => step.number && step.title && step.text) ?? [];

  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <section className="bg-black px-5 py-16 text-white md:px-10 xl:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-black tracking-[0.28em] text-blue-500 uppercase">
              {service?.eyebrow ?? 'Servicio especializado'}
            </p>
            <h1 className="font-display mt-6 text-[clamp(3rem,6vw,6rem)] leading-[0.92] font-black tracking-normal">
              {service?.hero?.title ?? title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/62">
              {service?.hero?.intro ?? service?.excerpt}
            </p>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-px bg-white/10">
              <div className="bg-black p-5">
                <Icon className="text-blue-500" size={24} />
                <p className="mt-4 text-sm font-black">
                  {service?.hero?.featureOne ?? 'Estrategia clara'}
                </p>
              </div>
              <div className="bg-black p-5">
                <BarChart3 className="text-blue-500" size={24} />
                <p className="mt-4 text-sm font-black">
                  {service?.hero?.featureTwo ?? 'Resultado medible'}
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-zinc-950 shadow-[0_30px_90px_rgba(37,99,235,0.18)] lg:min-h-[560px]">
            <Image
              src={serviceImage(service ?? {})}
              alt=""
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.78))]" />
            <div className="absolute right-6 bottom-6 left-6">
              <p className="text-[10px] font-black tracking-[0.28em] text-blue-400 uppercase">
                {service?.hero?.imageEyebrow ?? title}
              </p>
              <p className="font-display mt-3 max-w-sm text-3xl leading-none font-black">
                {service?.hero?.imageText ?? service?.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 xl:px-20">
        <div className="mx-auto grid max-w-6xl gap-px bg-white/10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="bg-[#0b0f16] p-6 md:p-10">
            <span className="inline-flex size-14 items-center justify-center bg-blue-600 text-white">
              <Icon size={28} />
            </span>
            <h2 className="font-display mt-8 text-4xl leading-none font-black">
              {service?.details?.whatTitle ?? 'Qué hacemos'}
            </h2>
            <p className="mt-6 text-base leading-8 text-white/62">
              {service?.details?.whatText ?? service?.excerpt}
            </p>
          </div>

          <div className="bg-[#0b0f16] p-6 md:p-10">
            <p className="text-xs font-black tracking-[0.24em] text-blue-600 uppercase">
              Importancia
            </p>
            <h2 className="font-display mt-5 text-4xl leading-none font-black">
              {service?.details?.importanceTitle ?? 'Un buen servicio ordena la marca.'}
            </h2>
            <p className="mt-6 text-base leading-8 text-white/62">
              {service?.details?.importanceText ?? service?.excerpt}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-px grid max-w-6xl gap-px bg-white/10 md:grid-cols-2">
          {deliverables.map((item) => (
            <div
              key={item}
              className="grid grid-cols-[36px_minmax(0,1fr)] gap-4 bg-[#0b0f16] p-5"
            >
              <span className="inline-flex size-9 items-center justify-center bg-blue-600 text-white">
                <BadgeCheck size={18} />
              </span>
              <p className="text-sm leading-6 text-white/68">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 xl:px-20">
        <div className="mx-auto max-w-6xl border-t border-white/10 pt-14">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-blue-600 uppercase">
                Paquetes orientativos
              </p>
              <h2 className="font-display mt-5 text-4xl leading-none font-black">
                {service?.packagesTitle ?? 'El alcance se ajusta a la necesidad.'}
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {packages.map((item) => (
                <article
                  key={item.name}
                  className="group grid content-between border border-white/10 bg-[#0b0f16] p-6 transition hover:-translate-y-1 hover:border-blue-600/35 hover:shadow-[0_24px_70px_rgba(37,99,235,0.1)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="font-display text-3xl leading-none font-black">
                        {item.name}
                      </h3>
                      <ArrowUpRight
                        size={22}
                        className="text-blue-600 transition group-hover:rotate-45"
                      />
                    </div>
                    <p className="mt-5 text-sm leading-7 text-white/60">
                      {item.description}
                    </p>
                    <ul className="mt-6 grid gap-3">
                      {item.includes?.map((include) => (
                        <li
                          key={include}
                          className="grid grid-cols-[24px_minmax(0,1fr)] gap-3 text-sm leading-6 text-white/68"
                        >
                          <span className="mt-1 inline-flex size-5 items-center justify-center bg-blue-600 text-white">
                            <BadgeCheck size={12} />
                          </span>
                          <span>{include}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/#contacto"
                    className="mt-8 inline-flex h-11 items-center justify-center gap-3 border border-white/15 px-4 text-xs font-black tracking-[0.16em] text-white uppercase transition hover:border-blue-600 hover:text-blue-500"
                  >
                    Consultar
                    <ArrowUpRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 text-white md:px-10 xl:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black tracking-[0.24em] text-blue-500 uppercase">
            Proceso de trabajo
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.title}
                className="border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="font-display text-4xl font-black text-blue-500">
                  {step.number}
                </span>
                <h3 className="mt-6 font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{step.text}</p>
              </article>
            ))}
          </div>

          <Link
            href="/#contacto"
            className="mt-10 inline-flex h-12 items-center gap-4 bg-blue-600 px-5 text-xs font-black tracking-[0.16em] text-white uppercase transition hover:bg-white hover:text-black"
          >
            {service?.cta ?? `Solicitar ${title}`}
            <Sparkles size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
