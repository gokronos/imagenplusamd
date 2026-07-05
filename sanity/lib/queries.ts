import { defineQuery } from 'next-sanity';

const imageFields = `
  mainImage,
  gallery
`;

const publishingFields = `
  date,
  status,
  order
`;

const seoFields = `
  seo
`;

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
  _id,
  title,
  slug,
  description,
  logo,
  ${imageFields},
  ${publishingFields},
  email,
  phone,
  socialLinks,
  ${seoFields}
}`);

export const servicesQuery =
  defineQuery(`*[_type == "service" && status == "published"] | order(order asc, title asc) {
  _id,
  title,
  slug,
  excerpt,
  icon,
  ${imageFields},
  ${publishingFields},
  ${seoFields}
}`);

export const serviceBySlugQuery =
  defineQuery(`*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  icon,
  category,
  eyebrow,
  hero,
  details,
  deliverables,
  packagesTitle,
  packages,
  process,
  cta,
  body,
  ${imageFields},
  ${publishingFields},
  ${seoFields}
}`);

export const projectsQuery =
  defineQuery(`*[_type == "project" && status == "published"] | order(order asc, date desc) {
  _id,
  title,
  slug,
  client->{
    name,
    slug,
    logo
  },
  services[]->{
    title,
    slug
  },
  excerpt,
  ${imageFields},
  ${publishingFields},
  ${seoFields}
}`);

export const projectBySlugQuery =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  client->{
    name,
    slug,
    logo,
    website
  },
  services[]->{
    title,
    slug,
    icon
  },
  excerpt,
  body,
  ${imageFields},
  ${publishingFields},
  ${seoFields}
}`);

export const clientsQuery =
  defineQuery(`*[_type == "client" && status == "published"] | order(order asc, name asc) {
  _id,
  name,
  slug,
  industry,
  website,
  logo,
  featured,
  ${imageFields},
  ${publishingFields},
  ${seoFields}
}`);

export const testimonialsQuery =
  defineQuery(`*[_type == "testimonial" && status == "published"] | order(order asc, date desc) {
  _id,
  slug,
  quote,
  authorName,
  authorRole,
  company->{
    name,
    slug,
    logo
  },
  ${imageFields},
  ${publishingFields},
  ${seoFields}
}`);

export const teamMembersQuery =
  defineQuery(`*[_type == "teamMember" && status == "published"] | order(order asc, name asc) {
  _id,
  name,
  slug,
  role,
  bio,
  socialLinks,
  ${imageFields},
  ${publishingFields},
  ${seoFields}
}`);

export const categoriesQuery =
  defineQuery(`*[_type == "category" && status == "published"] | order(order asc, title asc) {
  _id,
  title,
  slug,
  description,
  ${imageFields},
  ${publishingFields},
  ${seoFields}
}`);

export const postsQuery =
  defineQuery(`*[_type == "post" && status == "published"] | order(order asc, date desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  categories[]->{
    title,
    "slug": slug.current
  },
  ${imageFields},
  ${publishingFields},
  ${seoFields}
}`);

export const postBySlugQuery =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  categories[]->{
    title,
    "slug": slug.current,
    description
  },
  ${imageFields},
  ${publishingFields},
  ${seoFields}
}`);

export const sitemapQuery = defineQuery(`*[
  _type in ["service", "project", "post", "category"] &&
  status == "published" &&
  defined(slug.current)
]{
  _type,
  "slug": slug.current,
  date
}`);
