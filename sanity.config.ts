import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { structure } from './sanity/desk-structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'vur3h91g';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export default defineConfig({
  name: 'imagenplus',
  title: 'Imagen Plus',
  projectId,
  dataset,
  organizationId: 'o9S0oqRLk',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
