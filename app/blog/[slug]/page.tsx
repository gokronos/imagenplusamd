import { ArrowUpRight, CalendarDays } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextBlock } from 'next-sanity';
import { SiteFooter } from '@/components/layout/site-footer';
import { siteConfig } from '@/lib/site';
import { sanityClient } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';
import { postBySlugQuery } from '@/sanity/lib/queries';
import type { SanityImage } from '@/types/sanity';

type BlogPost = {
  title?: string;
  slug?: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  mainImage?: SanityImage;
  date?: string;
  categories?: Array<{
    title?: string;
    slug?: string;
  }>;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
};

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function postImage(post: BlogPost) {
  if (post.mainImage?.asset?._ref) {
    return urlForImage(post.mainImage).width(1400).height(820).url();
  }

  return '/images/services/social-media-design-modal.png';
}

function formatDate(date?: string) {
  if (!date) return 'Imagen Plus';

  return new Intl.DateTimeFormat('es-CO', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityClient.fetch<BlogPost | null>(postBySlugQuery, { slug });

  if (!post) {
    return {};
  }

  const title = post.seo?.metaTitle ?? `${post.title} | Imagen Plus`;
  const description = post.seo?.metaDescription ?? post.excerpt ?? siteConfig.description;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${siteConfig.url}/blog/${slug}`,
      images: post.mainImage?.asset?._ref ? [postImage(post)] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await sanityFetch<typeof postBySlugQuery, BlogPost | null>({
    query: postBySlugQuery,
    params: { slug },
    tags: [`post:${slug}`],
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <article>
        <section className="bg-black px-5 py-16 md:px-10 xl:px-20">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 text-xs font-black tracking-[0.16em] text-blue-500 uppercase"
            >
              Articulos <ArrowUpRight size={14} />
            </Link>
            <p className="mt-10 text-xs font-black tracking-[0.28em] text-blue-500 uppercase">
              {post.categories?.[0]?.title ?? 'Consejos Imagen Plus'}
            </p>
            <h1 className="font-display mt-6 max-w-4xl text-[clamp(3rem,6vw,6rem)] leading-[0.92] font-black tracking-normal">
              {post.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/55">
              <span className="inline-flex items-center gap-3">
                <CalendarDays size={16} className="text-blue-500" />
                {formatDate(post.date)}
              </span>
              <span className="h-px w-10 bg-white/15" />
              <span>Imagen Plus</span>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-10 xl:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative min-h-[340px] overflow-hidden bg-black md:min-h-[560px]">
              <Image
                src={postImage(post)}
                alt={post.title ?? ''}
                fill
                priority
                sizes="(min-width: 1024px) 1152px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.68))]" />
            </div>

            <div className="mx-auto mt-12 max-w-3xl text-white/72">
              <p className="border-l-2 border-blue-600 pl-6 text-lg leading-8 text-white/70">
                {post.excerpt}
              </p>
              <div className="mt-12 space-y-7 text-base leading-8">
                <PortableText
                  value={post.body ?? []}
                  components={{
                    block: {
                      h2: ({ children }) => (
                        <h2 className="font-display pt-5 text-4xl leading-none font-black text-white">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="pt-4 text-2xl leading-tight font-black text-white">
                          {children}
                        </h3>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-2 border-blue-600 pl-5 text-xl leading-8 text-white">
                          {children}
                        </blockquote>
                      ),
                      normal: ({ children }) => <p>{children}</p>,
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="grid gap-3 pl-5 marker:text-blue-500">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="grid list-decimal gap-3 pl-5 marker:text-blue-500">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => <li>{children}</li>,
                      number: ({ children }) => <li>{children}</li>,
                    },
                    marks: {
                      link: ({ children, value }) => (
                        <a
                          href={value?.href}
                          className="text-blue-500 underline decoration-blue-500/35 underline-offset-4"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
