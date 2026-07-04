export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2026-06-25';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'vur3h91g';
export const organizationId = 'o9S0oqRLk';
export const readToken = process.env.SANITY_API_READ_TOKEN;
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET;

export const hasSanityConfig = Boolean(projectId && dataset);
