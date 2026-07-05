import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import {
  ArticlesCarousel,
  type CarouselArticle,
} from '@/components/home/articles-carousel';
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
  const articles: CarouselArticle[] = (posts.length ? posts : fallbackArticles)
    .slice(0, 8)
    .map((article) => ({
      _id: article._id,
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      image: articleImage(article),
      meta: article.categories?.[0]?.title ?? formatDate(article.date),
    }));

  return (
    <section
      id="articulos"
      className="scroll-mt-10 bg-[#05070b] px-5 py-20 text-white md:px-10 xl:px-20"
    >
      <div className="mx-auto max-w-[1380px] border-y border-white/10 py-12">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1.58fr]">
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

          <ArticlesCarousel articles={articles} />
        </div>
      </div>
    </section>
  );
}
