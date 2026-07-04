import 'server-only';

import { defineLive } from 'next-sanity/live';
import { readToken } from '@/sanity/env';
import { sanityClient } from '@/sanity/lib/client';

export const {
  sanityFetch: liveSanityFetch,
  SanityLive,
  SanityLiveStream,
} = defineLive({
  client: sanityClient,
  serverToken: readToken,
  browserToken: false,
  fetchOptions: {
    revalidate: 60,
  },
  stega: true,
});
