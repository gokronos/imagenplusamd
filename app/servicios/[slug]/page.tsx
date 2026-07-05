import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SanityServicePage } from '@/components/services/sanity-service-page';
import { buildMetadata } from '@/lib/metadata';
import { sanityClient } from '@/sanity/lib/client';
import { serviceBySlugQuery } from '@/sanity/lib/queries';

type ServiceMetadata = {
  title?: string;
  excerpt?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
};

type DynamicServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: DynamicServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await sanityClient.fetch<ServiceMetadata | null>(serviceBySlugQuery, {
    slug,
  });

  if (!service) {
    return {};
  }

  const title =
    service.seo?.metaTitle ?? `${service.title} en Cucuta, Bucaramanga y Colombia`;
  const description =
    service.seo?.metaDescription ??
    service.excerpt ??
    `Servicio de ${service.title} para empresas en Cucuta, Bucaramanga y Colombia con Imagen Plus.`;

  return buildMetadata({
    title,
    description,
    path: `/servicios/${slug}`,
    keywords: [
      `${service.title} en Cucuta`,
      `${service.title} en Bucaramanga`,
      `${service.title} en Colombia`,
    ],
  });
}

export default async function DynamicServicePage({ params }: DynamicServicePageProps) {
  const { slug } = await params;
  const exists = await sanityClient.fetch<boolean>(
    `defined(*[_type == "service" && slug.current == $slug && status == "published"][0]._id)`,
    { slug },
    { next: { revalidate: 60, tags: [`service:${slug}`] } },
  );

  if (!exists) {
    notFound();
  }

  return <SanityServicePage slug={slug} />;
}
