import { notFound } from 'next/navigation';
import { SanityServicePage } from '@/components/services/sanity-service-page';
import { sanityClient } from '@/sanity/lib/client';

type DynamicServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
