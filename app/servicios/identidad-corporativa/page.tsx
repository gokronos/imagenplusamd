import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  FileText,
  Layers3,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '@/components/layout/site-footer';
import { identidadCorporativaPage } from '@/data/services/diseno';

export default function IdentidadCorporativaPage() {
  return (
    <main className="min-h-screen bg-[#f4f5f7] text-black">
      <section className="bg-black px-5 py-16 text-white md:px-10 xl:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-black tracking-[0.28em] text-blue-500 uppercase">
              Sistema de marca
            </p>
            <h1 className="font-display mt-6 text-[clamp(3rem,6vw,6rem)] leading-[0.92] font-black tracking-normal">
              Identidad corporativa para empresas que quieren verse coherentes.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/62">
              Ordenamos la presencia visual de tu empresa para que cada documento, pieza
              comercial, presentación y canal comunique con la misma personalidad.
            </p>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-px bg-white/10">
              <div className="bg-black p-5">
                <Building2 className="text-blue-500" size={24} />
                <p className="mt-4 text-sm font-black">Presencia institucional</p>
              </div>
              <div className="bg-black p-5">
                <Layers3 className="text-blue-500" size={24} />
                <p className="mt-4 text-sm font-black">Sistema consistente</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-zinc-950 shadow-[0_30px_90px_rgba(37,99,235,0.18)] lg:min-h-[560px]">
            <Image
              src={identidadCorporativaPage.visual}
              alt=""
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.78))]" />
            <div className="absolute right-6 bottom-6 left-6">
              <p className="text-[10px] font-black tracking-[0.28em] text-blue-400 uppercase">
                Marca aplicada
              </p>
              <p className="font-display mt-3 max-w-sm text-3xl leading-none font-black">
                Una identidad clara hace que la empresa se vea más sólida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 xl:px-20">
        <div className="mx-auto grid max-w-6xl gap-px bg-black/10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="bg-white p-6 md:p-10">
            <span className="inline-flex size-14 items-center justify-center bg-blue-600 text-white">
              <FileText size={28} />
            </span>
            <h2 className="font-display mt-8 text-4xl leading-none font-black">
              Qué hacemos
            </h2>
            <p className="mt-6 text-base leading-8 text-black/62">
              Definimos reglas visuales y aplicaciones corporativas para que la marca se
              use de forma uniforme. Esto ayuda a que cada pieza se sienta parte del mismo
              sistema, sin improvisación ni estilos mezclados.
            </p>
          </div>

          <div className="bg-white p-6 md:p-10">
            <p className="text-xs font-black tracking-[0.24em] text-blue-600 uppercase">
              Importancia
            </p>
            <h2 className="font-display mt-5 text-4xl leading-none font-black">
              La coherencia visual aumenta confianza.
            </h2>
            <p className="mt-6 text-base leading-8 text-black/62">
              Una identidad corporativa bien aplicada hace que la empresa se perciba más
              profesional, organizada y reconocible. También facilita el trabajo del
              equipo porque todos tienen una guía clara para comunicar.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-px grid max-w-6xl gap-px bg-black/10 md:grid-cols-2">
          {identidadCorporativaPage.deliverables.map((item) => (
            <div
              key={item}
              className="grid grid-cols-[36px_minmax(0,1fr)] gap-4 bg-white p-5"
            >
              <span className="inline-flex size-9 items-center justify-center bg-blue-600 text-white">
                <BadgeCheck size={18} />
              </span>
              <p className="text-sm leading-6 text-black/68">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 xl:px-20">
        <div className="mx-auto max-w-6xl border-t border-black/10 pt-14">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="text-xs font-black tracking-[0.24em] text-blue-600 uppercase">
                Paquetes orientativos
              </p>
              <h2 className="font-display mt-5 text-4xl leading-none font-black">
                La identidad se puede construir por etapas.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {identidadCorporativaPage.packages.map((item) => (
                <article
                  key={item.name}
                  className="group grid content-between bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
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
                    <p className="mt-5 text-sm leading-7 text-black/60">
                      {item.description}
                    </p>
                    <ul className="mt-6 grid gap-3">
                      {item.includes.map((include) => (
                        <li
                          key={include}
                          className="grid grid-cols-[24px_minmax(0,1fr)] gap-3 text-sm leading-6 text-black/68"
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
                    className="mt-8 inline-flex h-11 items-center justify-center gap-3 border border-black/15 px-4 text-xs font-black tracking-[0.16em] text-black uppercase transition hover:border-blue-600 hover:text-blue-600"
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
            {identidadCorporativaPage.process.map(([number, title, text]) => (
              <article key={title} className="border border-white/10 bg-white/[0.04] p-5">
                <span className="font-display text-4xl font-black text-blue-500">
                  {number}
                </span>
                <h3 className="mt-6 font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </article>
            ))}
          </div>

          <Link
            href="/#contacto"
            className="mt-10 inline-flex h-12 items-center gap-4 bg-blue-600 px-5 text-xs font-black tracking-[0.16em] text-white uppercase transition hover:bg-white hover:text-black"
          >
            Solicitar identidad corporativa
            <Sparkles size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
