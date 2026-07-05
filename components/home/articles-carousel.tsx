'use client';

import { useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type CarouselArticle = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  image: string;
  meta: string;
};

type ArticlesCarouselProps = {
  articles: CarouselArticle[];
};

export function ArticlesCarousel({ articles }: ArticlesCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'prev' | 'next') => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const firstCard = scroller.querySelector<HTMLElement>('[data-article-card]');
    const cardWidth = firstCard?.offsetWidth ?? scroller.clientWidth;
    const gap = 16;

    scroller.scrollBy({
      left: direction === 'next' ? cardWidth + gap : -(cardWidth + gap),
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-w-0">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-xs font-black tracking-[0.24em] text-white/42 uppercase">
          Ultimas publicaciones
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Ver articulos anteriores"
            onClick={() => scroll('prev')}
            className="inline-flex size-11 items-center justify-center border border-white/15 bg-white/[0.04] text-white transition hover:border-blue-600 hover:text-blue-500"
          >
            <ChevronLeft size={19} />
          </button>
          <button
            type="button"
            aria-label="Ver mas articulos"
            onClick={() => scroll('next')}
            className="inline-flex size-11 items-center justify-center border border-blue-600 bg-blue-600 text-white transition hover:bg-white hover:text-black"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="custom-scrollbar -mx-5 grid snap-x snap-mandatory auto-cols-[84%] grid-flow-col gap-4 overflow-x-auto scroll-smooth px-5 pb-4 sm:auto-cols-[58%] lg:mx-0 lg:auto-cols-[calc((100%_-_2rem)/3)] lg:px-0"
      >
        {articles.map((article) => (
          <Link
            key={article._id}
            data-article-card
            href={article.slug ? `/blog/${article.slug}` : '/blog'}
            className="group grid min-h-[430px] snap-start content-between overflow-hidden border border-white/10 bg-[#0b0f16] transition hover:-translate-y-1 hover:border-blue-600/45 hover:bg-black"
          >
            <div>
              <div className="relative h-56 overflow-hidden bg-black">
                <Image
                  src={article.image}
                  alt={article.title ?? ''}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 58vw, 84vw"
                  className="object-cover opacity-88 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.72))]" />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center gap-3 text-[10px] font-black tracking-[0.17em] text-blue-500 uppercase">
                  <Newspaper size={14} />
                  {article.meta}
                </span>
                <h3 className="font-display mt-5 text-3xl leading-none font-black tracking-normal">
                  {article.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-7 text-white/55">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <span className="mx-5 mb-5 inline-flex w-fit items-center gap-3 text-xs font-black tracking-[0.16em] text-blue-500 uppercase">
              Leer articulo <ArrowUpRight size={15} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
