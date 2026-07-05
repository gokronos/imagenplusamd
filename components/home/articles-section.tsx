import { ArrowUpRight, Newspaper } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';
import { postsQuery } from '@/sanity/lib/queries';
import type { SanityImage } from '@/types/sanity';

type Article = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  mainImage?: SanityImage;
  date?: string;
  categories?: Array<{
    title?: string;
    slug?: string;
  }>;
};

const fallbackArticles: Article[] = [
  {
    _id: 'fallback-1',
    title: 'Como mejorar la presencia digital de tu empresa en Cucuta',
    slug: 'como-mejorar-la-presencia-digital-de-tu-empresa-en-cucuta',
    excerpt:
      'Ideas practicas para que tu marca se vea mas clara, confiable y lista para vender en canales digitales.',
  },
  {
    _id: 'fallback-2',
    title: 'Por que tu marca necesita una identidad visual solida',
    slug: 'por-que-tu-marca-necesita-una-identidad-visual-solida',
    excerpt:
      'La identidad visual ordena la comunicacion y ayuda a que tus clientes recuerden mejor lo que haces.',
  },
  {
    _id: 'fallback-3',
    title: 'Errores comunes al crear una pagina web empresarial',
    slug: 'errores-comunes-al-crear-una-pagina-web-empresarial',
    excerpt:
      'Una web debe cargar rapido, explicar bien la oferta y convertir visitas en contactos reales.',
  },
  {
    _id: 'fallback-4',
    title: 'Como la inteligencia artificial ayuda a automatizar tu negocio',
    slug: 'como-la-inteligencia-artificial-ayuda-a-automatizar-tu-negocio',
    excerpt:
      'La automatizacion bien aplicada ahorra tiempo y mejora el seguimiento comercial sin perder cercania.',
  },
];

function articleImage(article: Article) {
  if (article.mainImage?.asset?._ref) {
    return urlForImage(article.mainImage).width(900).height(620).url();
  }

  return '/images/services/social-media-design-modal.png';
}

function formatDate(date?: string) {
  if (!date) return 'Consejos Imagen Plus';

  return new Intl.DateTimeFormat('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

export async function ArticlesSection() {
  const posts = await sanityFetch<typeof postsQuery, Article[]>({
    query: postsQuery,
    tags: ['post'],
  });
  const articles = (posts.length ? posts : fallbackArticles).slice(0, 4);
  const [featured, ...secondary] = articles;

  return (
    <section
      id="articulos"
      className="scroll-mt-10 bg-[#05070b] px-5 py-20 text-white md:px-10 xl:px-20"
    >
      <div className="mx-auto max-w-[1380px] border-y border-white/10 py-12">
        <div className="grid gap-10 lg:grid-cols-[0.52fr_1.48fr]">
          <div className="max-w-md">
            <p className="text-xs font-black tracking-[0.28em] text-blue-600 uppercase">
              Noticias y consejos
            </p>
            <h2 className="font-display mt-6 text-[clamp(2.35rem,4vw,5rem)] leading-[0.94] font-black tracking-normal">
              Ideas para que tu marca crezca con{' '}
              <span className="text-blue-600">criterio.</span>
            </h2>
            <p className="mt-7 text-sm leading-7 text-white/55">
              Articulos editables desde Sanity sobre marketing, diseno, web, IA y
              comunicacion para empresas.
            </p>
            <Link
              href="/blog"
              className="mt-9 inline-flex h-12 items-center gap-4 border border-blue-600/35 px-5 text-xs font-black tracking-[0.16em] text-blue-500 uppercase transition hover:bg-blue-600 hover:text-white"
            >
              Ver articulos
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {featured ? (
            <div className="grid min-w-0 gap-px bg-white/10 lg:grid-cols-[1.05fr_0.95fr]">
              <Link
                href={featured.slug ? `/blog/${featured.slug}` : '/blog'}
                className="group grid min-h-[460px] content-end overflow-hidden bg-black p-6 md:p-8"
              >
                <div className="absolute" />
                <div className="relative -m-6 mb-8 h-64 overflow-hidden md:-m-8 md:mb-10 md:h-80">
                  <Image
                    src={articleImage(featured)}
                    alt={featured.title ?? ''}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.76))]" />
                </div>
                <span className="inline-flex w-fit items-center gap-3 bg-blue-600 px-3 py-2 text-[10px] font-black tracking-[0.16em] uppercase">
                  <Newspaper size={14} />
                  {formatDate(featured.date)}
                </span>
                <h3 className="font-display mt-6 max-w-xl text-4xl leading-none font-black tracking-normal">
                  {featured.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/58">
                  {featured.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-3 text-xs font-black tracking-[0.16em] text-blue-500 uppercase">
                  Leer articulo <ArrowUpRight size={15} />
                </span>
              </Link>

              <div className="grid gap-px bg-white/10">
                {secondary.map((article) => (
                  <Link
                    key={article._id}
                    href={article.slug ? `/blog/${article.slug}` : '/blog'}
                    className="group grid grid-cols-[112px_minmax(0,1fr)] gap-5 bg-[#0b0f16] p-5 transition hover:bg-black sm:grid-cols-[150px_minmax(0,1fr)]"
                  >
                    <div className="relative min-h-32 overflow-hidden bg-black">
                      <Image
                        src={articleImage(article)}
                        alt={article.title ?? ''}
                        fill
                        sizes="150px"
                        className="object-cover opacity-86 transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black tracking-[0.18em] text-blue-500 uppercase">
                        {article.categories?.[0]?.title ?? formatDate(article.date)}
                      </p>
                      <h3 className="mt-4 text-xl leading-tight font-black">
                        {article.title}
                      </h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/52">
                        {article.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.16em] text-white/55 uppercase transition group-hover:text-blue-500">
                        Leer mas <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
