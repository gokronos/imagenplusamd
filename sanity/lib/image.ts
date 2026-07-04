import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import { dataset, projectId } from '@/sanity/env';

const builder = projectId ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source: SanityImageSource) {
  if (!builder) {
    throw new Error('Missing Sanity project id. Set NEXT_PUBLIC_SANITY_PROJECT_ID.');
  }

  return builder.image(source).auto('format').fit('max');
}
