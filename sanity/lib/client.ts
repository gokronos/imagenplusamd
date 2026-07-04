import 'server-only';

import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, readToken } from '@/sanity/env';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
});

export const sanityPreviewClient = sanityClient.withConfig({
  useCdn: false,
  token: readToken,
  perspective: 'drafts',
});
