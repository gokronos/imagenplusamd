import { blockContent } from '@/sanity/schemaTypes/objects/block-content';
import { seo } from '@/sanity/schemaTypes/objects/seo';
import { category } from '@/sanity/schemaTypes/documents/category';
import { client } from '@/sanity/schemaTypes/documents/client';
import { post } from '@/sanity/schemaTypes/documents/post';
import { project } from '@/sanity/schemaTypes/documents/project';
import { service } from '@/sanity/schemaTypes/documents/service';
import { siteSettings } from '@/sanity/schemaTypes/documents/site-settings';
import { teamMember } from '@/sanity/schemaTypes/documents/team-member';
import { testimonial } from '@/sanity/schemaTypes/documents/testimonial';

export const schemaTypes = [
  blockContent,
  seo,
  category,
  client,
  post,
  project,
  service,
  siteSettings,
  teamMember,
  testimonial,
];
