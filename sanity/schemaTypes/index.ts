import { blockContent } from './objects/block-content';
import { seo } from './objects/seo';
import { category } from './documents/category';
import { client } from './documents/client';
import { post } from './documents/post';
import { project } from './documents/project';
import { service } from './documents/service';
import { siteSettings } from './documents/site-settings';
import { teamMember } from './documents/team-member';
import { testimonial } from './documents/testimonial';

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
