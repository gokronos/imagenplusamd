import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'vur3h91g';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: {
    appId: 'hr52yh2jdxib716zihihyi83',
  },
});
