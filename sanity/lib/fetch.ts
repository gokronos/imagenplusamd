import 'server-only';

import type { ClientPerspective, QueryParams } from 'next-sanity';
import { liveSanityFetch } from '@/sanity/lib/live';

type SanityFetchOptions<QueryString extends string> = {
  query: QueryString;
  params?: QueryParams | Promise<QueryParams>;
  tags?: string[];
  perspective?: Exclude<ClientPerspective, 'raw'>;
  stega?: boolean;
  requestTag?: string;
};

export async function sanityFetch<const QueryString extends string, Result = unknown>(
  options: SanityFetchOptions<QueryString>,
) {
  const { data } = await liveSanityFetch(options);

  return data as Result;
}

export async function sanityFetchWithMeta<const QueryString extends string>(
  options: SanityFetchOptions<QueryString>,
) {
  return liveSanityFetch(options);
}
