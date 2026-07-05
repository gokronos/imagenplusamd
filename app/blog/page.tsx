import { ArrowUpRight, Newspaper } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '@/components/layout/site-footer';
import { sanityFetch } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';
import { postsQuery } from '@/sanity/lib/queries';
import type { SanityImage } from '@/types/sanity';

type PostCard = {
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

export const metadata: Metadata = {
  title: 'Blog | Imagen Plus',
  description:
    'Noticias, articulos y consejos de marketing, diseno, desarrollo web e inteligencia artificial para empresas.',
};

function postImage(post: PostCard) {
  if (post.mainImage?.asset?._ref) {
    return urlForImage(post.mainImage).width(900).height(620).url();
  }

  return '/images/services/social-media-design-modal.png';
}

export default async function BlogPage() {
  const posts = await sanityFetch<typeof postsQuery, PostCard[]>({
    query: postsQuery,
    tags: ['post'],
  });

  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <section className="bg-black px-5 py-16 md:px-10 xl:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black tracking-[0.28em] text-blue-500 uppercase">
            Blog Imagen Plus
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-[clamp(3rem,6vw,6rem)] leading-[0.92] font-black tracking-normal">
            Noticias, articulos y consejos para marcas que quieren crecer.
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 xl:px-20">
        <div className="mx-auto grid max-w-6xl gap-px bg-white/10 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={post.slug ? `/blog/${post.slug}` : '/blog'}
              className="group bg-[#0b0f16] p-5 transition hover:bg-black md:p-6"
            >
              <div className="relative min-h-64 overflow-hidden bg-black">
                <Image
                  src={postImage(post)}
                  alt={post.title ?? ''}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-88 transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-center gap-3 text-[10px] font-black tracking-[0.18em] text-blue-500 uppercase">
                <Newspaper size={14} />
                {post.categories?.[0]?.title ?? 'Articulo'}
              </div>
              <h2 className="font-display mt-4 text-3xl leading-none font-black">
                {post.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/58">{post.excerpt}</p>
              <span className="mt-7 inline-flex items-center gap-3 text-xs font-black tracking-[0.16em] text-blue-500 uppercase">
                Leer articulo <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
