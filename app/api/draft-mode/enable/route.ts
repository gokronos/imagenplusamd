import { defineEnableDraftMode } from 'next-sanity/draft-mode';
import { sanityPreviewClient } from '@/sanity/lib/client';

export const { GET } = defineEnableDraftMode({
  client: sanityPreviewClient,
});
